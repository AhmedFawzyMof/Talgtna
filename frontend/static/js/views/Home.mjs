import AbstractViews from "./AbstractViews.mjs";

export default class extends AbstractViews {
  constructor(params) {
    super(params);
    this.setTitle("Talgtna");
    this.setStyle("/static/css/index.css");
  }

  async getHtml() {
    const response = await fetch("http://localhost:5500/");
    const data = await response.json();

    const Componies = data.companies;
    // const Categories = data.categories;
    const Offers = data.offers;

    const mappedOfferImage = Offers.map((offer, index) => {
      function isProduct() {
        if (offer.product !== null) {
          return "/product/" + offer.product;
        } else {
          return "/compony/" + offer.company;
        }
      }
      return `
          <a data-link href='${isProduct()}' key='${index}'>
            <img id='carousel' src="/static${offer.image}" />
          </a>
      `;
    }).join("");
    const mappedOfferDot = Offers.map((offer, index) => {
      return `
      <div class='dot' id='d${index + 1}'></div>
      `;
    }).join("");

    const mappedComponies = Componies.map((company, index) => {
      function isSoon() {
        if (company.soon == 1) {
          return "company soon";
        } else {
          return "company";
        }
      }
      return `
      <div class="${isSoon()}" key='${index}'>
        <a data-link href="/compony/${company.name}">
          <img src="/static${company.image}" alt="${company.name}">
          <p>${company.name}</p>
        </a>
      </div>
      `;
    }).join("");

    const page = `
       <div class="wrapper">
    <div class="carousel">
    ${mappedOfferImage}
    </div>
    <div class='dots'>
    ${mappedOfferDot}
    </div>
    </div>
    <div class='container'>
    ${mappedComponies}
    </div>`;
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
    fetch("/static/siteJs/index.js")
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

    return page;
  }
}
