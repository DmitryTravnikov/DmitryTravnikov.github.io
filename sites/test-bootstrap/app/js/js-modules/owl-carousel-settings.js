$(document).ready(function() {
	var owl = $(".slider");
	owl.owlCarousel({
		items : 1,
		autoPlay: 2000,
		pagination: true,
		transitionStyle: 'fade',
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile: [479,1]
	});
});