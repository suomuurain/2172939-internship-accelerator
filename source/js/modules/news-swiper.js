import Swiper from 'swiper/bundle';

// init Swiper:
const initNewsSwiper = () => {

  const swiperNews = new Swiper('.news__swiper', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },

    navigation: {
      nextEl: '.news__swiper-button--next',
      prevEl: '.news__swiper-button--prev',
      disabledClass: 'news__swiper-button--disabled',
    },
  });

  return swiperNews;

};

export {initNewsSwiper};
