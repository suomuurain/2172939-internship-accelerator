import Swiper from 'swiper/bundle';

// init Swiper:
const initHeroSwiper = () => {

  const swiperHero = new Swiper('.hero__swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },

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
      el: '.swiper-slide-active .hero__swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        swiperHero.pagination.init();
        swiperHero.pagination.render();
        swiperHero.pagination.update();
      }
    }
  });

  return swiperHero;

};

export {initHeroSwiper};
