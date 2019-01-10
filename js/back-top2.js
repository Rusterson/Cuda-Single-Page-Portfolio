const Top = document.getElementsByClassName('top')[0];

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 350) {
    Top.className = "top top__js--show js_top";
  } else {
    Top.className = "top top__js--hide";
  }
};

window.addEventListener("scroll", myScrollFunc);