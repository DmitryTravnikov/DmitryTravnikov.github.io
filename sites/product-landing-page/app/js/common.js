'use strict';

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

});//doc.ready