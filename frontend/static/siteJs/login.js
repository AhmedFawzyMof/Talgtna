const LoginForm = document.getElementById("login");
const RegisterForm = document.getElementById("register");

if (location.href.includes("login")) {
  LoginForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const urlencoded = new URLSearchParams();

    for (const pair of formData) {
      urlencoded.append(pair[0], pair[1]);
    }

    const response = await fetch("http://localhost:5500/user", {
      method: "post",
      body: urlencoded,
    });

    const data = await response.json();
    if (data.err) {
      CreateToast({
        type: "error",
        message: "لا يمكن تسجيل الدخول ببيانات المقدمة",
        time: 7000,
      });
    } else {
      localStorage.setItem("AuthToken", data.userInfo);
      localStorage.setItem("coupons", data.coupons);
      localStorage.setItem("favlist", data.fav);
      CreateToast({
        type: "success",
        message: "تم تسجيل الدخول بنجاح",
        time: 7000,
      });
      getFav();
      getCoupon();
      const Home = document.getElementById("HomePage");
      Home.click();
      setTimeout(() => {
        location.reload();
      }, 7000);
    }
  });
}

if (location.href.includes("register")) {
  RegisterForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const urlencoded = new URLSearchParams();

    for (const pair of formData) {
      urlencoded.append(pair[0], pair[1]);
    }

    const response = await fetch("http://localhost:5500/user/register", {
      method: "post",
      body: urlencoded,
    });

    const data = await response.json();
    if (data.err) {
      CreateToast({
        type: "error",
        message: data.msg,
        time: 7000,
      });
    } else {
      localStorage.setItem("AuthToken", data.userInfo);
      localStorage.setItem("coupons", data.coupons);
      localStorage.setItem("favlist", data.fav);
      CreateToast({
        type: "success",
        message: "تم إنشاء الحساب بنجاح",
        time: 7000,
      });
      CreateToast({
        type: "success",
        message: "تم تسجيل الدخول بنجاح",
        time: 7000,
      });
      getFav();
      getCoupon();
      const Home = document.getElementById("HomePage");
      Home.click();
      setTimeout(() => {
        location.reload();
      }, 7000);
    }
  });
}
