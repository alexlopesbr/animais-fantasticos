import outsideclick from './outsideclick.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu = "button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click'];

  function openMenu() {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');

    outsideclick(menuList, eventos, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }

  eventos.forEach((evento) => {
    menuButton.addEventListener(evento, openMenu);
  });
}
