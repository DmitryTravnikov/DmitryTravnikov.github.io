import {headerHamburger, headerMenu} from './header-variables.js';

headerHamburger.addEventListener('click', headerMenuShow);

function headerMenuShow() {
	this.classList.toggle('active');
	headerMenu.classList.toggle('active');
}
