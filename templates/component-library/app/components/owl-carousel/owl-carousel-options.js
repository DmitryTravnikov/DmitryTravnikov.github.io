$(document).ready(function() {
	var owl = $(".owl-carousel__slider");
	owl.owlCarousel({
		items : 1,
		autoPlay: 3000,
		pagination: true,
		transitionStyle: 'fade',
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile: [479,1]
	});

	owl.on("mousewheel DOMMouseScroll", '.owl-wrapper', function (e) {
		if(e.originalEvent.wheelDelta > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});

	$(".owl-carousel__next-button").click(function(){
		owl.trigger("owl.next");
	});
	$(".owl-carousel__prev-button").click(function(){
		owl.trigger("owl.prev");
	});
});