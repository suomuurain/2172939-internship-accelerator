const initMenuToggel = () => {
  const header = document.querySelector('.header');
  const burgerButton = header.querySelector('.header__burger');
  const navigation = header.querySelector('.header__navigation');
  const isOpened = 'is-open';


  const openMenu = () => {
    header.classList.add(isOpened);

    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('keydown', onDocumentClick);
    navigation.addEventListener('click', onLinkClick);

    window.scrollLock.disableScrolling();
    window.focusLock.lock('[data-header]');
  };

  const closeMenu = () => {
    header.classList.remove(isOpened);

    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('keydown', onDocumentClick);
    navigation.removeEventListener('click', onLinkClick);

    window.scrollLock.enableScrolling();
    window.focusLock.unlock('[data-header]');
  };

  burgerButton.addEventListener('click', () => header.classList.contains(isOpened) ? closeMenu() : openMenu());

  function onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeMenu();
    }
  }

  function onDocumentClick(evt) {
    if (evt.target.hasAttribute('data-close-menu')) {
      closeMenu();
    }
  }

  function onLinkClick(evt) {
    if (evt.target.matches('[data-link]')) {
      closeMenu();
    }
  }
};

export {initMenuToggel};
