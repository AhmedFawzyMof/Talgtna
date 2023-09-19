const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const resultSearch = document.querySelector(".resFS");
const body = document.body;
const PCnav = document.getElementById("PC");
const MOnav = document.getElementById("MO");
const Cart = JSON.parse(localStorage.getItem("cart"));
let width = screen.width;

function changeNav() {
  if (width >= 551) {
    body.removeChild(MOnav);
  }

  if (width <= 550) {
    body.removeChild(PCnav);
  }
}

changeNav();

menuBtn.addEventListener("click", () => {
  let width = screen.width;

  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menu.style.right = "5px";
  } else {
    if (width <= 450) {
      menu.style.right = "-100%";
    } else {
      menu.style.right = "-320px";
    }
  }
});

const cartA = document.querySelector(".cart");
const quantityInCart = document.createElement("span");
quantityInCart.setAttribute("id", "count");

function cartLength() {
  const Thecart = JSON.parse(localStorage.getItem("cart"));
  let length = 0;
  if (Thecart.length > 0) {
    length = Thecart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
  }
  if (length !== 0) {
    quantityInCart.innerHTML = length;
    cartA.appendChild(quantityInCart);
  } else {
    cartA.innerHTML = '<i class="bx bx-cart-alt"></i>';
  }

  return length;
}

cartLength();
let toastBox = document.getElementById("toastBox");

function CreateToast(options) {
  let toast = document.createElement("div");
  let toastaf = document.createElement("div");
  toast.classList.add("toast");
  toastaf.classList.add("toastafter");
  if (options.type == "success") {
    toast.classList.add("success");
    toast.innerHTML = options.message;
    toastBox.appendChild(toast);
  } else if (options.type == "invalid") {
    toast.classList.add("invalid");
    toast.innerHTML = options.message;
    toastBox.appendChild(toast);
  } else {
    toast.classList.add("error");
    toast.innerHTML = options.message;
    toastBox.appendChild(toast);
  }
  toast.appendChild(toastaf);

  const sec = options.time / 1000;
  toastaf.style.animation = "anim " + sec + "s linear forwards";
  setTimeout(() => {
    toast.remove();
  }, options.time);
}
