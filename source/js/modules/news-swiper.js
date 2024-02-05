import Swiper from 'swiper/bundle';

// init Swiper:
const initNewsSwiper = () => {

  const swiperNews = new Swiper('.news__swiper', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
        allowTouchMove: true,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 32,
        allowTouchMove: true,
        grid: {
          rows: 1,
        },
      },
    },

    navigation: {
      nextEl: '.news__swiper-button--next',
      prevEl: '.news__swiper-button--prev',
      disabledClass: 'news__swiper-button--disabled',
    },

    pagination: {
      el: '.news__swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className}">${(index + 1)}</button>`;
      },
    },
  });

  return swiperNews;

};

export {initNewsSwiper};
