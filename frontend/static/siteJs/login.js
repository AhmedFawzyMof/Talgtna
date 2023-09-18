const LoginForm = document.getElementById("login");

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
    CreateToast({
      type: "success",
      message: "تم تسجيل الدخول بنجاح",
      time: 7000,
    });
    const Home = document.getElementById("HomePage");
    Home.click();
  }
});
