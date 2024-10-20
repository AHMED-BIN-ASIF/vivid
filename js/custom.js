// Header scroll js here 
$(document).ready(function () {
    var s = $(".header-nav");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if ((windowpos >= pos.top) & (windowpos >= 30)) {
            $(".header-nav").addClass("top");
        } else {
            $(".header-nav").removeClass("top");
        }
    });
});
// Header toggle btn js here 
function myFunction() {
    let navElement = document.querySelector("nav");
    navElement.classList.toggle("nav-show");
    let toggleBtnElement = document.querySelector(".toggle-btn");
    toggleBtnElement.classList.toggle("toggle-open");
  }
  document.querySelector(".toggle-btn").addEventListener("click", myFunction);
  