const programsScrollbar = document.querySelector('.programs__scrollbar');
const reviewsScrollbar = document.querySelector('.reviews__scrollbar');

const deleteAllScrollbars = () => {
  const mobile = window.matchMedia('(max-width: 767px)');

  const breakpointChecker = () => {
    if (!mobile.matches) {
      addScrollbar();
    } else if (mobile.matches) {
      delateScrollbar();
    }
  };

  const addScrollbar = () => {
    programsScrollbar.style.display = 'block';
    reviewsScrollbar.style.display = 'block';
  }

  const delateScrollbar = () => {
    programsScrollbar.style.display = 'none';
    reviewsScrollbar.style.display = 'none';
  }

  mobile.addListener(breakpointChecker);
  breakpointChecker();
}

export {deleteAllScrollbars};
