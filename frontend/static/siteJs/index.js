var num = 0;

function Scroll() {
  const images = document.querySelectorAll("#carousel");
  let width = -379.25;
  const carousel = document.querySelector(".carousel");
  num++;
  const dot = document.getElementById("d" + num);

  if (dot !== null) {
    dot.classList.add("active");
  }
  if (num === 1) {
    carousel.scrollTo(width, 0);
    setTimeout(() => {
      Scroll();
    }, 2000);
  } else if (num <= images.length) {
    carousel.scroll(width * num, 0);
    setTimeout(() => {
      Scroll();
    }, 2000);
  } else if (num >= images.length + 1) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    carousel.scrollTo(0, 0);
    num = 0;
    setTimeout(() => {
      Scroll();
    }, 2000);
  } else {
    return;
  }
}

setTimeout(() => {
  Scroll();
}, 2000);
