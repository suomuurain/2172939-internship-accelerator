import Swiper from 'swiper/bundle';

// init Swiper:
const initHeroSwiper = () => {

  const swiperHero = new Swiper('.hero__swiper', {
    loop: true,

    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
      },
      1440: {
        allowTouchMove: false,
      },
    },

    autoHeight: true,

    pagination: {
      el: '.swiper-pagination',
    },
  });

  return swiperHero;

};

export {initHeroSwiper};
