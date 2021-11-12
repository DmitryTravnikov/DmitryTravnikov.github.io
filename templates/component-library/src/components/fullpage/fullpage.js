import { ready, readyException } from 'jquery';
import '../../libs/fullpage.js/dist/jquery.fullpage.min.css';
import '../../libs/fullpage.js/dist/jquery.fullpage.min.js';
// import '../../libs/fullpage.js/dist/jquery.fullpage.extensions.min.js';


jQuery(document).ready(function($) {
	if ($(window).width() > 992) {
		$('.fullpage').attr('id', 'fullPage');
		$('#fullPage').fullpage({
			css3: true,
			navigation: true,
			// responsiveWidth: 992,
			// anchors: ['home', 'about-us', 'contact'],
			// parallax: true
		})
	}
});
