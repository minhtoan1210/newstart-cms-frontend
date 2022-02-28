$(document).ready(function () {
    let slidershow = 4;
    let auto = false;
    let header = $(".headerr").height();
    let news= $(".section-content").width();
    let listnew=news ;
    let sectioncontenttext = $(".section-content__text").height();
    let mobile = listnew + sectioncontenttext;
    let height = header -1 ;
    let slider = $(".slider");
    let sliderwidth = slider.width();
    if(sliderwidth<=987 && sliderwidth >= 764)
    {
      slidershow = 3;
      auto=true;
    }
    else if(sliderwidth<=763 )
    {
      slidershow = 1;
      auto=true;
    }
  //   let slidershow = slider[0].className;
  //   let tablet = slidershow.search("tablet");
  //  if(tablet !== -1 )
  //  {
  //   a = 3;
  //  }
    $(".page_story").css('marginTop',`${height}px`);
    $('.header__menu>ul>li.dots').click(function (e) { 
      e.preventDefault();
      $(this).toggleClass("active");
     $(".header-sub-menu").toggleClass("show");
    });
});