function addTo() {
  const product = JSON.parse(document.getElementById("productId").value);
  const quantity = JSON.parse(document.getElementById("quantity").value);
  const item = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    inStock: product.inStock,
    quantity: quantity,
  };
  if (!Cart.length > 0) {
    Cart.push(item);
  } else {
    var CartItem = Cart.find(function (element, index) {
      Object.assign(element, { index: index });
      return element.id == item.id;
    });
    if (CartItem === undefined) {
      Cart.push(item);
    } else {
      Cart.splice(CartItem.index, 1);
      Cart.push(item);
    }
  }
  localStorage.setItem("cart", JSON.stringify(Cart));
  cartLength();
}
