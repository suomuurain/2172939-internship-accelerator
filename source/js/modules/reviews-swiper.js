import Swiper from 'swiper/bundle';

// init Swiper:
const initReviewsSwiper = () => {

  const swiperReviews = new Swiper('.reviews__swiper', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
        scrollbar: false,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
        allowTouchMove: true,

        scrollbar: {
          el: '.swiper-scrollbar',
        },
      },
      1440: {
        slidesPerView: 1,
        spaceBetween: 32,
        allowTouchMove: false,

        scrollbar: {
          el: '.swiper-scrollbar',
        },
      },
    },

    navigation: {
      nextEl: '.reviews__swiper-button--next',
      prevEl: '.reviews__swiper-button--prev',
      disabledClass: 'reviews__swiper-button--disabled',
    },
  });

  return swiperReviews;

};

export {initReviewsSwiper};
