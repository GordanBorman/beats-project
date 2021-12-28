const myslider = $('.slider__list').bxSlider({
  pager: false,
  controls: false,
  maxSlides: 1,
  slideMargin: 30
});

$('.slider___left-arrow').click(e => {
  e.preventDefault();

  myslider.goToPrevSlide();
})

$('.slider___right-arrow').click(e => {
  e.preventDefault();

  myslider.goToNextSlide();
})