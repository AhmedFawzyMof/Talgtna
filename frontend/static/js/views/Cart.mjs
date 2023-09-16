import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params, auth) {
    super(params, auth);
    this.setTitle("My Cart");
    this.setStyle("/static/css/cart.css");
  }
  async getHtml() {
    if (Cart.length > 0) {
      function Total() {
        const productTotal = Cart.reduce((acc, curr) => {
          return acc + curr.quantity * curr.price;
        }, 0);

        if (length !== 0) {
          quantityInCart.innerHTML = length;
          cartA.appendChild(quantityInCart);
        }
        return productTotal;
      }
      function productsIncart() {
        let Products = "";
        Cart.forEach((product) => {
          function IsLong() {
            if (product.name.length > 40) {
              return `<h3>${
                product.name.substr(0, product.name.length / 2) + "..."
              }</h3> `;
            } else {
              return `<h3>${product.name}</h3> `;
            }
          }
          return (Products += `
        <div id='${product.id}' class='productB'>
            <img src="/static${product.image}"/>
            <a data-link href="/product/${product.id}">
            ${IsLong()}
            </a>
            <div class='quantityDiv'>
                <div id="productFunc">
                    <button id='inc' onclick='inc(${product.id})'>
                        <i class='bx bx-plus'></i>
                    </button>
                        <p id='quan'>${product.quantity}</p>
                    <button id='dec' onclick='dec(${product.id})'>
                        <i class='bx bx-minus'></i>
                    </button>
                </div>
                <div id="productTotal">
                    <p id='PT'>${product.price * product.quantity} ج<p>
                    <button onclick="removeProduct(${
                      product.id
                    })"><i class='bx bxs-trash'></i></button>
                </div>
            </div>
        </div>
        `);
        });
        return Products;
      }
      const cartDiv = `
    <div class='Thecart'>
        <div class='head'>
            <p>سلة التسوق</p>
            <button onclick='removeAll()'><i class='bx bxs-trash'></i> إزالة جميع المنتجات</button>
        </div>
        <div class='body'>
            ${productsIncart()}
        </div>
        <div class='bottomT'>
            <div class='total'>
                <div>
                    <h3>الإجمالي</h3>
                    <p id='TotalPro'>منتجات ${cartLength()}</p>
                </div>
                <h2 id='TP'>${Total()} ج</h2>
            </div>
            <a>الدفع</a>
        </div>
    </div>
    `;
      fetch("/static/siteJs/cart.js")
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
          sc.setAttribute("data-script", "");
          sc.setAttribute("type", "text/javascript");
          document.head.appendChild(sc);
        });
      return cartDiv;
    } else {
      return `
      <div id='emptyCart'>
        <p>عربة التسوق فارغة</p>
        <span>0</span>
        <img src='/static/img/cart.png' />
        <a data-link href="/">اذهب للتسوق</a>
      </div>
      `;
    }
  }
}
