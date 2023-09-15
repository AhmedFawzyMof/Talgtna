import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params) {
    super(params);
    const productId = decodeURI(params.id);
    this.productId = productId;
    this.setTitle("Product: " + this.productId);
    this.setStyle("/static/css/product.css");
  }
  async getHtml() {
    const response = await fetch(
      "http://localhost:5500/product/" + this.productId
    );
    const data = await response.json();
    const product = data.product;
    let opts = "";

    for (let i = 0; i < parseInt(product.inStock); i++) {
      opts += `<option value="${i + 1}">${i + 1}</option>`;
    }
    function productIsAvailable(product) {
      if (product.available == 1 && product.inStock > 0) {
        return `
        <div class='addToCart'>
            <input id='productId' type='hidden' value='${JSON.stringify(
              product
            )}' />
            <select id='quantity'>
              ${opts}
            </select>
            <button id='addTo'>أضف إلى السلة</button>
        </div>
        `;
      } else {
        return `
        <div class='unAvailable'>
         <h2>غير متاح</h2>
        </div>`;
      }
    }
    function IsOffer(product) {
      let percent =
        product.price - product.price + (product.offer / product.price) * 100;
      if (product.offer > 0) {
        return `
        <h2 class='price'>${product.price} ج</h2>
        <p class='offer'>${product.price + product.offer} ج</p>
        <p class='percent'>${Math.trunc(percent)}%</p>
        `;
      } else {
        return `
        <h2 class='price'>${product.price} ج</h2>
        `;
      }
    }

    const theProduct = `
    <div class='image'>
      <img src='/static${product.image}' />
    </div>
    <div class='details'>
      <div class='box1'>
        <p class='compony'>تريد رؤية منتجات أخرى : <a href='/compony/${
          product.compony
        }' data-link class='seemore'>${product.compony}</a></p>
        <div class='prices'>
          ${IsOffer(product)}
        </div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
      </div>
      <div class='box2'>
          ${productIsAvailable(product)}
      </div>
    </div>
    `;
    fetch("/static/siteJs/product.js")
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
    return theProduct;
  }
}
