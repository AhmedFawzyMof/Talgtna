import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("my Coupons");
    this.setStyle("/static/css/coupon.css");
  }
  async getHtml() {
    if (this.auth) {
      if (localStorage.getItem("AuthToken")) {
        const headers = new Headers();
        headers.append("AuthToken", localStorage.getItem("AuthToken"));
        const response = await fetch("http://localhost:5500/user/coupon", {
          method: "get",
          headers: headers,
        });

        const data = await response.json();
        if (data.err) {
          localStorage.removeItem("AuthToken");
          localStorage.removeItem("coupons");
          localStorage.removeItem("favlist");
          window.location = "/";
          CreateToast({
            type: "success",
            msg: "حدث خطأ ما، يرجى تسجيل الدخول والمحاولة مرة أخرى",
            time: 5000,
          });
        }
        const coupons = data.coupons;

        const mappedCoupons = coupons
          .map((coupon, index) => {
            return `
        <div class='coupon' key="${index}">
          <h1 class='code'>
          ${coupon.code}
          </h1>
          <div class='value'>
            <h2>
              ${coupon.code}
            </h2>
           <h1>${coupon.value} ج</h1>
          </div>
          <button class='useIt' onclick='useCoupon(${JSON.stringify(
            coupon
          )})'>استخدامه</button>
        </div>`;
          })
          .join("");

        fetch("/static/siteJs/coupons.js")
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
        <div class='cotainer'>
          <a href="/compony/عروض التوفير" data-link class='offer'><p>اضغط لرؤية العروض</p></a>
          ${mappedCoupons}
        </div>`;
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
