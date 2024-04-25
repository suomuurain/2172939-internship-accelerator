import Swiper from 'swiper/bundle';

// init Swiper:
const initProgramsSwiper = () => {

  const swiperPrograms = new Swiper('.programs__swiper', {
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: true,
        scrollbar: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,

        scrollbar: {
          el: '.programs__scrollbar',
        },
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,

        scrollbar: {
          el: '.programs__scrollbar',
        },
      },
    },

    navigation: {
      nextEl: '.programs__swiper-button--next',
      prevEl: '.programs__swiper-button--prev',
      disabledClass: 'programs__swiper-button--disabled',
    },
  });

  return swiperPrograms;

};

export {initProgramsSwiper};
