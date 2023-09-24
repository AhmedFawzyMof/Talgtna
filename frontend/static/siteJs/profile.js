function logout() {
  localStorage.removeItem("favlist");
  localStorage.removeItem("AuthToken");
  localStorage.removeItem("coupons");
  const Home = document.getElementById("HomePage");
  Home.click();
  console.log(getCoupon());
  console.log(getFav());
}
