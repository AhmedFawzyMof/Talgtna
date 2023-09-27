import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.auth = auth;
    this.setTitle("my Profile");
    this.setStyle("/static/css/editprofile.css");
  }
  async getHtml() {
    if (this.auth) {
      loading(true);

      if (localStorage.getItem("AuthToken")) {
        fetch("/static/siteJs/editprofile.js")
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
          <div class="EditProfile">
            <form id="EditName" class='editform'>
            <h2>تعديل اسم المستخدم</h2>
            <div class="input">
                <label>اسم مستخدم جديد</label>
                <input type="text" name="username" />
            </div>
            <div class="input">
                <label>كلمة السر الحالية</label>
                <input type="password" name="password" />
            </div>
            <div class="input">
                <button type="submit">تعديل</button>
            </div>
            </form>
            <form id="EditEmail" class='editform'>
            <h2>تعديل البريد الإلكتروني</h2>
            <div class="input">
                <label>بريد إلكتروني جديد</label>
                <input type="email" name="email" />
            </div>
            <div class="input">
                <label>كلمة السر الحالية</label>
                <input type="password" name="password" />
            </div>
            <div class="input">
                <button type="submit">تعديل</button>
            </div>
            </form>
            <form id="EditPassword" class='editform'>
            <h2>تعديل كلمة المرور</h2>
            <div class="input">
                <label>كلمة السر الحالية</label>
                <input type="password" name="password" />
            </div>
            <div class="input">
                <label>كلمة المرور الجديدة</label>
                <input type="password" name="password2" />
            </div>
            <div class="input">
                <button type="submit">تعديل</button>
            </div>
            </form>
        </div>        
        `;
      } else {
        loading(false);
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
