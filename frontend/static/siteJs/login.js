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
  localStorage.setItem("AuthToken", data.userInfo);
  location.replace("/");
});
