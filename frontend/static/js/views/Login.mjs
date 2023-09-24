import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("Login");
    this.setStyle("/static/css/login.css");
  }
  async getHtml() {
    loading(true);
    if (localStorage.getItem("AuthToken")) {
      location.replace("/");
    } else {
      fetch("/static/siteJs/login.js")
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
      loading(false);
      return `
      <div class='logIn'>
        <div class="logo">            
          <img src="/static/img/logo.png"/>
        </div>
        <form id="login">
            <div class='input'>
                <label>بريد إلكتروني</label>
                <input type='email' name="email" placeholder="بريد إلكتروني" />
            </div>
            <div class='input'>
                <label>كلمة المرور</label>
                <input type="password" name="password" placeholder="كلمة المرور">            </div>
            <a href="/forget" data-link>هل نسيت كلمة المرور الخاصة بك؟</a>
            <div class="input">
                <button type="submit">تسجيل الدخول</button>
            </div>
        </form>
        <div class="media">
            <p>أو قم بتسجيل الدخول باستخدام</p>
            <div class="mediaBtns"> 
                <button><i class='bx bxl-facebook'></i></button>
                <button><i class='bx bxl-twitter'></i></button>
                <button><i class='bx bxl-google'></i></button>
            </div>
        </div>
        <div class="signup">
            <a href="/register" data-link>أو قم بتسجيل حساب</a>
        </div>
      </div>
      `;
    }
  }
}
