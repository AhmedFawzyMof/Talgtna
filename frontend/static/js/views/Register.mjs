import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("Register");
    this.setStyle("/static/css/login.css");
  }
  async getHtml() {
    if (this.auth) {
      location.replace("/");
    } else {
      loading(true);
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
        <form id="register">
            <div class='input'>
                <label>اسم المستخدم</label>
                <input type='text' name="username" placeholder="اسم المستخدم" />
            </div>
            <div class='input'>
                <label>بريد إلكتروني</label>
                <input type='email' name="email" placeholder="بريد إلكتروني" />
            </div>
            <div class='input'>
                <label>كلمة المرور</label>
                <input type="password" name="password" placeholder="كلمة المرور" />
            </div>
            <div class='input'>
                <label>تأكيد كلمة المرور</label>
                <input type="password" name="password2" placeholder="تأكيد كلمة المرور" />
            </div>
            <div class='terms'>
                <a href='/terms' data-link>هل تقبل الشروط والأحكام</a>
                <input type="checkbox" name="terms" value="yes" placeholder="تأكيد كلمة المرور" />
            </div>
            <div class="input">
                <button type="submit">تسجيل حساب</button>
            </div>
        </form>
      </div>
      `;
    }
  }
}
