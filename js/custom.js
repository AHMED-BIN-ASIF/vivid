// Header TRop Slider  
$('.number-items').slick({
    dots: false,
    arrows: false, // Corrected from `arrow` to `arrows`
    infinite: true,
    speed: 4000, // Speed of the sliding animation in milliseconds
    autoplay: true,
    autoplaySpeed: 0, // Continuous sliding without delay
    cssEase: 'linear', // Smooth, linear sliding effect
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    ],
  });
  
// Header scroll js here 
$(document).ready(function () {
    var s = $(".header-nav");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if ((windowpos >= pos.top) & (windowpos >=2)) {
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
  