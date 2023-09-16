import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("my Profile");
    this.setStyle("");
  }
  async getHtml() {
    if (this.auth) {
      if (localStorage.getItem("AuthToken")) {
        return "";
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
