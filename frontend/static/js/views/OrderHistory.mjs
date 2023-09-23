import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("my Orders");
    this.setStyle("");
  }
  async getHtml() {
    if (this.auth) {
      if (localStorage.getItem("AuthToken")) {
        const headers = new Headers();
        headers.append("AuthToken", localStorage.getItem("AuthToken"));
        const response = await fetch(
          "http://localhost:5500/user/orderhistory",
          {
            method: "get",
            headers: headers,
          }
        );

        const data = await response.json();
        const mappedOrder = data.map((order, index) => {
          function isDilvered() {
            if (order.delivered == 1) {
              return "نعم";
            } else {
              return "لا";
            }
          }
          function isPaid() {
            if (order.paid == 1) {
              return "نعم";
            } else {
              return "لا";
            }
          }
          const mappedItems = JSON.parse(order.cart).map((product, index) => {
            return `
          <div class="orderitem" key="${index}">
            <img src="${product.image}" alt="${product.name}">
            <div class="itemInfo">
              <p>${product.name}</p>
              <p>الكمية: ${product.quantity}</p>
              <p>السعر: ${product.price} ج</p>
              <p>السعر الإجمالي للطلب: ${product.price * product.quantity} ج</p>
            </div>
          </div>
        `;
          });
          return `
          <div class="orderRec" key="${index}">
        <p>معرف الطلب: ${order.id}</p>
        <div>
          تاريخ الطلب:
          <h4 dir="ltr" style="color: #b3b2b2">
            ${order.date}
          </h4>
        </div>
        <p>شارع: ${order.addrSt}</p>
        <p>عماره: ${order.addrB}</p>
        <p>طابق: ${order.addrF}</p>
        <p>تسيلم في: ${order.where}</p>
        <p>المستخدم: ${order.username}</p>
        <p>رقم الهاتف: ${order.phone}</p>
        <p>هاتف احتياطي: ${order.spare_phone}</p>
        <p>المجموع: ${order.total} ج</p>
        ${mappedItems}
        <div class="Delivered">
          تسليم الطلب:  ${isDilvered()}
        </div>
        <div class="Paid">
          تم الدفع:  ${isPaid()} 
        </div>
      </div>
          `;
        });
        console.log(data);
        fetch("/static/siteJs/orderHistory.js")
          .then(function (response) {
            if (!response.ok) {
              return false;
            }
            return response.blob();
          })
          .then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            const oldScripts = document.querySelectorAll("[data-script]");
            oldScripts.forEach((script) => {
              if (script.src !== objectURL) {
                document.head.removeChild(script);
              }
            });
            var sc = document.createElement("script");
            sc.setAttribute("src", objectURL);
            sc.setAttribute("defer", "");
            sc.setAttribute("data-script", "");
            sc.setAttribute("type", "text/javascript");
            document.head.appendChild(sc);
          });
        if (data.length > 0) {
          return mappedOrder;
        } else {
          return "";
        }
      } else {
        return `
        <div class='notLoginPop'>
          <a href="/" data-link class="backToHome"><i class='bx bxs-x-circle'></i></a>
          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>
          <a href='/login' data-link class="log">تسجيل الدخول</a>
          <a href='/register' data-link class="log">تسجيل حساب</a>
        </div>
        `;
      }
    }
  }
}
