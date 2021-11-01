'use strict';

import './js-includes/include.js';

var cLog = function(n) {
	return console.log(n);
};//console.log

$(document).ready(function() {

	function prevdef() {
		$('.prevdef').click(function(event) {
			event.preventDefault();
		});
	}// prevdef;
	prevdef();

	let signUp = document.querySelector('.header__sign-up');
	signUp.onclick = function() {
		cLog('sign up');
	}

});//doc.ready

cLog('common file is working');