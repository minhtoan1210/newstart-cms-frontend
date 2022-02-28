$(document).ready(function () {
  let slidershow = 4;
  let auto = false;
  let header = $(".headerr").height();
  let height = header + header / 3;
  let slider = $(".slider");
  let sliderwidth = slider.width();
  if (sliderwidth <= 987 && sliderwidth >= 764) {
    slidershow = 3;
    auto = true;
  } else if (sliderwidth <= 763) {
    slidershow = 1;
    auto = true;
  }
  //   let slidershow = slider[0].className;
  //   let tablet = slidershow.search("tablet");
  //  if(tablet !== -1 )
  //  {
  //   a = 3;
  //  }
  




  $(".slider-content").slick({
    slidesToShow: slidershow,
    slidesToScroll: 1,
    autoplay: auto,
    centerMode: true,
    autoplaySpeed: 2000,
    infinite: true,
  });
  $(".header__menu>ul>li.dots").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".header-sub-menu").toggleClass("show");
  });
  $(".dropdown__selected").click(function (e) { 
    e.preventDefault();
    $("ul.dropdown__list").toggleClass("activemultimedia");
  });
});
new fullpage('#fullpage', {
  autoScrolling:false,
   scrollingSpeed:1000,
   normalScrollElements: '.footera',
});
let menu = document.querySelector(".detailstory-header");
let vitri = 0;
window.onscroll = function(){
      windowscroll = window.pageYOffset;
      if(windowscroll > vitri)
      {
          menu.classList.add("activemenu");
          vitri=windowscroll;
      }
      else if(windowscroll < vitri)
      {
          menu.classList.remove("activemenu");
          vitri=windowscroll;
      }
}
