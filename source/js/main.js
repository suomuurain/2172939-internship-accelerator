// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './vendor/form-validate/form';

import {Burger} from './vendor/header/burger';
import {StickyHeader} from './vendor/header/sticky-header';

import {initHeroSwiper} from './modules/hero-swiper';
import {initReviewsSwiper} from './modules/reviews-swiper';
import {initProgramsSwiper} from './modules/programs-swiper';
import {initNewsSwiper} from './modules/news-swiper';
import {initAccordions} from './vendor/accordions/init-accordions';
import {CustomSelect} from './vendor/custom-select/custom-select';
import {initModals} from './vendor/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initHeroSwiper();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();
    const stickyHeader = new StickyHeader();
    stickyHeader.init();

    const form = new Form();
    window.form = form;
    form.init();

    initModals();
    initAccordions();
    initProgramsSwiper();
    initNewsSwiper();
    initReviewsSwiper();

    const select = new CustomSelect();
    select.init();
  });
});
