import Swiper from 'swiper/bundle';

// init Swiper:
const initReviewsSwiper = () => {

  const swiperReviews = new Swiper('.reviews__swiper', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        scrollbar: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,

        scrollbar: {
          el: '.reviews__scrollbar',
        },
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: true,

        scrollbar: {
          el: '.reviews__scrollbar',
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
