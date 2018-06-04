'use strict';
// $(document).ready(function() {

// 	//Таймер обратного отсчета
// 	//Документация: http://keith-wood.name/countdown.html
// 	//<div class="countdown" date-time="2015-01-07"></div>
// 	var austDay = new Date($(".countdown").attr("date-time"));
// 	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

// 	//Попап менеджер FancyBox
// 	//Документация: http://fancybox.net/howto
// 	//<a class="fancybox"><img src="image.jpg" /></a>
// 	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
// 	$(".fancybox").fancybox();

// 	//Навигация по Landing Page
// 	//$(".top_mnu") - это верхняя панель со ссылками.
// 	//Ссылки вида <a href="#contacts">Контакты</a>
// 	$(".top_mnu").navigation();

// 	//Добавляет классы дочерним блокам .block для анимации
// 	//Документация: http://imakewebthings.com/jquery-waypoints/
// 	$(".block").waypoint(function(direction) {
// 		if (direction === "down") {
// 			$(".class").addClass("active");
// 		} else if (direction === "up") {
// 			$(".class").removeClass("deactive");
// 		};
// 	}, {offset: 100});

// 	//Плавный скролл до блока .div по клику на .scroll
// 	//Документация: https://github.com/flesler/jquery.scrollTo
// 	$("a.scroll").click(function() {
// 		$.scrollTo($(".div"), 800, {
// 			offset: -90
// 		});
// 	});

// 	Каруселька
// 	Документация: http://owlgraphic.com/owlcarousel/
// 	var owl = $(".carousel");
// 	owl.owlCarousel({
// 		items : 1,
// 		autoPlay: 5000,
// 		pagination: false,
// 		transitionStyle: 'fade',
// 		itemsDesktop: [1199,1],
// 		itemsDesktopSmall: [979,1],
// 		itemsTablet: [768,0],
// 		itemsMobile: [479,0]
// 	});
// 	owl.on("mousewheel", ".owl-wrapper", function (e) {
// 		if (e.deltaY > 0) {
// 			owl.trigger("owl.prev");
// 		} else {
// 			owl.trigger("owl.next");
// 		}
// 		e.preventDefault();
// 	});
// 	$(".next_button").click(function(){
// 		owl.trigger("owl.next");
// 	});
// 	$(".prev_button").click(function(){
// 		owl.trigger("owl.prev");
// 	});

// 	//Кнопка "Наверх"
// 	//Документация:
// 	//http://api.jquery.com/scrolltop/
// 	//http://api.jquery.com/animate/
// 	$("#top").click(function () {
// 		$("body, html").animate({
// 			scrollTop: 0
// 		}, 800);
// 		return false;
// 	});
	
// 	//Аякс отправка форм
// 	//Документация: http://api.jquery.com/jquery.ajax/
// 	$("form").submit(function() {
// 		$.ajax({
// 			type: "GET",
// 			url: "mail.php",
// 			data: $("form").serialize()
// 		}).done(function() {
// 			alert("Спасибо за заявку!");
// 			setTimeout(function() {
// 				$.fancybox.close();
// 			}, 1000);
// 		});
// 		return false;
// 	});

// });

// // Аккордеон
// $(document).ready(function() {
  
//  $('.service2>.wrapper>.block-2>article').not(':first-of-type').hide();
 
  
//   $('.service2>.wrapper>.block-2>.headline').click(function() {
    
//     var findArticle = $(this).next();
//     var findWrapper = $(this).closest('.block-2');
    
//     if (findArticle.is(':visible')) {
//       findArticle.slideUp(50);
//     }
//     else {
//       findWrapper.find('>article').slideUp(50);
//       findArticle.slideDown(50);
//     }
//   });

// });

document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000);
}

$(document).ready(function() {

	// Prevent default
	$('.prevdef').click(function(event) {
		event.preventDefault();
	});
	$('.submit').click(function(event) {
		event.preventDefault();
	});

	// Menu
	$('.menu-icon').on('click', function() {
		$('.menu-icon').toggleClass('menu-active');
		$('header .main-menu').slideToggle(500);
	});

	$(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('header .main-menu').removeAttr('style');
		 }
	});//end resize

	//Кнопка "Наверх"
	var top = $('.footer .wrapper .logo a')
	$(top).click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// Slider
	var owl = $(".information .wrapper .slider");
	owl.owlCarousel({
		items : 2,
		autoPlay: 2000,
		pagination: true,
		// transitionStyle: 'fade',
		itemsDesktop: [1199,2],
		itemsDesktopSmall: [979,2],
		itemsTablet: [768,2],
		itemsMobile: [479,1]
	});

	// Reviews slider
	var reviewsSlider = $(".reviews .wrapper .slider");
	reviewsSlider.owlCarousel({
		items : 1,
		autoPlay: 7000,
		pagination: false,
		// navigation: true,
		// transitionStyle: 'fade',
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile: [479,1]
	});

	$(".reviews .wrapper .next_button").click(function(){
		reviewsSlider.trigger("owl.next");
	});
	$(".reviews .wrapper .prev_button").click(function(){
		reviewsSlider.trigger("owl.prev");
	});

	// Map	
	ymaps.ready(init);

	var placemarks = [
		{
			latitude: 59.94,
			longitude: 30.31,
			// hintContent: '<div class="map__hint">Дворцовая пл., 2, Санкт-Петербург, 190000</div>',
			// balloonContent: [
			// 	'<div class="map__balloon">',
			// 	'<img class="map__burger" src="img/contacts-map-marker.png" alt"Бургер"/>',
			// 	'Самые вкусные бургеры у нас! Приходите по адресу: Дворцовая пл., 2, Санкт-Петербург, 190000',
			// 	'</div>'
			// ]
		},
		{
			latitude: 59.95,
			longitude: 30.31,
			// hintContent: '<div class="map__hint">Дворцовая пл., 2, Санкт-Петербург, 190000</div>',
			// balloonContent: [
			// 	'<div class="map__balloon">',
			// 	'<img class="map__burger" src="img/contacts-map-marker.png" alt"Бургер"/>',
			// 	'Самые вкусные бургеры у нас! Приходите по адресу: Дворцовая пл., 2, Санкт-Петербург, 190000',
			// 	'</div>'
			// ]
		}
	],
		geoObjects = [];//var placemarks end

	function init() {
		var map = new ymaps.Map('map', {
			center: [59.94, 30.32],
			zoom: 13,
			controls: ['zoomControl'],
			behaviors: ['drag']
		});// var map end

		for (var i = 0; i < placemarks.length; i++) {
			geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
				// hintContent: placemarks[i].hintContent,
				// balloonContent: placemarks[i].balloonContent.join('')
			}, 
			{
				iconLayout: 'default#image',
				iconImageHref: 'img/contacts-map-marker.png',
				iconImageSize: [36, 35],//размер изображения
				iconImageOffset: [0, -33]//смещение изображения относительно его размеров
			});
		}//for end

		//Кластеризация
		var clusterer = new ymaps.Clusterer({

		});

		map.geoObjects.add(clusterer);
		clusterer.add(geoObjects);

		//на мобильных устройствах... (проверяем по userAgent браузера)
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		    //... отключаем перетаскивание карты
		    map.behaviors.disable('drag');
		}

	}//init end //Map end




	//Like
	$('.photography-main-section .panorama-container .like svg').on('click', function() {
		$(this).children().toggleClass('like-active');
	});
	$('.photography-main-section .photos-container .photo-container .like svg').on('click', function() {
		$(this).children().toggleClass('like-active');
	});





	//Submiting
	var submit = $('#submit');
	var surname = $('#surname');
	var name = $('#name');
	var patronymic = $('#patronymic');
	var tel = $('#tel');
	var email = $('#email');
	var review = $('#review');

	var overlay = $('.modal-overlay');
	var modalError = $('.modal-error');
	var modalSuccess = $('.modal-success');

	var buttonOk = $('.modal-error .container .button-ok');
	var buttonClose = $('.modal-success .container .row2 .button-close');

	$(submit).on('click', function() {
		if (!review.val() || !email.val() || !tel.val() || !patronymic.val() || !name.val() || !surname.val()) {
			$(review).addClass('form-error');
			$(email).addClass('form-error');
			$(tel).addClass('form-error');
			$(patronymic).addClass('form-error');
			$(name).addClass('form-error');
			$(surname).addClass('form-error');

			$(modalError).addClass('bounce');
			$(overlay).addClass('show');
		} else if (review.val() && email.val() && tel.val() && patronymic.val() && name.val() && surname.val()) {
			$(review).removeClass('form-error');
			$(email).removeClass('form-error');
			$(tel).removeClass('form-error');
			$(patronymic).removeClass('form-error');
			$(name).removeClass('form-error');
			$(surname).removeClass('form-error');

			$(modalSuccess).addClass('bounce');
			$(overlay).addClass('show');
		} else {
			console.log('error');
		};
	});

	$(buttonOk).on('click', function() {
		$(modalError).removeClass('bounce');
		$(overlay).removeClass('show');
	});
	$(buttonClose).on('click', function() {
		$(modalSuccess).removeClass('bounce');
		$(overlay).removeClass('show');
	});

});//document.ready end

