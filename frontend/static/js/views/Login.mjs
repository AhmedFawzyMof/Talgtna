import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("Login");
    this.setStyle("/static/css/login.css");
  }
  async getHtml() {
    if (localStorage.getItem("AuthToken")) {
      location.replace("/");
    } else {
      return `
      <div class='logIn'>
        <div class="logo">
            <h2>Talgtna</h2>
            <img src="/static/img/icon.png"/>
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
            <a href="/register" data-link></a>
        </div>
      </div>
      `;
    }
  }
}
