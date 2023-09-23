function logout() {
  localStorage.removeItem("favlist");
  localStorage.removeItem("AuthToken");
  localStorage.removeItem("coupons");
  const Home = document.getElementById("HomePage");
  Home.click();
  location.reload();
}
