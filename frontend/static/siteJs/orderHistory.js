async function OrderHistory() {
  const headers = new Headers();
  headers.append("AuthToken", localStorage.getItem("AuthToken"));
  const response = await fetch("http://localhost:5500/user/orderhistory", {
    method: "get",
    headers: headers,
  });

  const data = await response.json();
  console.log(data);
}

OrderHistory();
