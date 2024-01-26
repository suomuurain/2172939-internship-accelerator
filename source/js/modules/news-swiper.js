import Swiper from 'swiper/bundle';

// init Swiper:
const initNewsSwiper = () => {

  const swiperNews = new Swiper('.news__swiper', {
    breakpoints: {
      320: {
        slidesPerView: 2,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        allowTouchMove: false,
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
