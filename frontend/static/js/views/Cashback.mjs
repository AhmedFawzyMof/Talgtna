import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("my CashBack balance");
    this.setStyle("/static/css/cashback.css");
  }
  async getHtml() {
    if (this.auth) {
      if (localStorage.getItem("AuthToken")) {
        const headers = new Headers();
        headers.append("AuthToken", localStorage.getItem("AuthToken"));
        const response = await fetch("http://localhost:5500/user/cashback", {
          method: "get",
          headers: headers,
        });

        const data = await response.json();

        fetch("/static/siteJs/cashBack.js")
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
        return `
        <div class="Cashback">
          <p>رصيد كاش باك</p>
          <p>${data.cashback} ج</p>
        </div>
        <div class="Orders">
          <p>عدد الطلبات</p>
          <p>${data.orders}</p>
        </div>
        `;
      } else {
        return `
        <div class='notLoginPop'>
          <a href="/" data-link class="backToHome"><i class='bx bxs-x-circle'></i></a>
          <p>للأسف تحتاج إلى تسجيل الدخول للوصول إلى هذه الصفحة</p>
          <a href='/login' data-link class="log">تسجيل الدخول</a>
          <a href='/login' data-link class="log">تسجيل حساب</a>
        </div>
        `;
      }
    }
  }
}
