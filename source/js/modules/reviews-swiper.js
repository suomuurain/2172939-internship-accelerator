import Swiper from 'swiper/bundle';

// init Swiper:
const initReviewsSwiper = () => {

  const swiperReviews = new Swiper('.reviews__swiper', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 1,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },

    autoHeight: true,

    navigation: {
      nextEl: '.reviews__swiper-button--next',
      prevEl: '.reviews__swiper-button--prev',
      disabledClass: 'reviews__swiper-button--disabled',
    },
  });

  return swiperReviews;

};

export {initReviewsSwiper};
