// Documentation https://github.com/digitalBush/jquery.maskedinput
import '../../libs/masked-input/jquery.maskedinput.min.js';

$(function($){
	$(".masked-input__phone").mask("99/99/9999");
	$(".masked-input__date").mask("(999) 999-9999");
	$(".masked-input__tin").mask("99-9999999");
	$(".masked-input__ssn").mask("999-99-9999");
});