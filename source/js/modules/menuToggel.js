const initMenuToggel = () => {
  const header = document.querySelector('.header');
  const burgerButton = header.querySelector('.header__burger');
  const navigation = header.querySelector('.header__navigation');
  const isOpened = 'is-open';

  const onDocumentKeydown = (evt) => {
    return evt.key === "Escape" ? closeMenu() : null;
  };

  const onDocumentClick = (evt) => {
    return evt.target.hasAttribute('data-close-menu') ? closeMenu() : null;
  };

  const onLinkClick = (evt) => {
    return evt.target.matches('[data-link]') ? closeMenu() : null;
  };

  const openMenu = () => {
    header.classList.add(isOpened);

    document.addEventListener("keydown", onDocumentKeydown);
    document.addEventListener("keydown", onDocumentClick);
    navigation.addEventListener("click", onLinkClick);

    window.scrollLock.disableScrolling();
    window.focusLock.lock('[data-header]');
  }

  const closeMenu = () => {
    header.classList.remove(isOpened);

    document.removeEventListener("keydown", onDocumentKeydown);
    document.removeEventListener("keydown", onDocumentClick);
    navigation.removeEventListener("click", onLinkClick);

    window.scrollLock.enableScrolling();
    window.focusLock.unlock('[data-header]');
  }

  burgerButton.addEventListener("click", () => {
    return header.classList.contains(isOpened) ? closeMenu() : openMenu();
  });
}

export {initMenuToggel};
