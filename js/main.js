function choiseBtn() {
  const topBtn = document.getElementsByClassName("backTo-top");
  let btn;
  window.innerWidth < 645 ? (btn = topBtn[1]) : (btn = topBtn[0]);

  function showOn() {
    let alt = window.scrollY;
    alt > 400 ? btn.classList.add("show") : btn.classList.remove("show");
    btn === topBtn[1]
      ? topBtn[0].classList.remove("show")
      : topBtn[1].classList.remove("show");
  }

  function backToTop(e) {
    e.preventDefault();
    window.scrollTo({
      top: "offsetTop",
      behavior: "smooth"
    });
  }
  window.addEventListener("scroll", showOn);
  btn.addEventListener("click", backToTop);
}

choiseBtn();
window.addEventListener("resize", choiseBtn);
