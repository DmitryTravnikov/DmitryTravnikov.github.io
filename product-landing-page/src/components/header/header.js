let headerHamburger = document.querySelector('.header__hamburger');
let headerMenu = document.querySelector('.header__menu');

headerHamburger.addEventListener('click', function () {
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].classList.toggle('active');
  }
  headerMenu.classList.toggle('active');
});
