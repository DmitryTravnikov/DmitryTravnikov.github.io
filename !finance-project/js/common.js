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

// var random = Math.floor(Math.random() * 100 + 1);

$(document).ready(function() {

	//Prevent default
	$('.prevdef').click(function(event) {
		event.preventDefault();
	});
	$('.submit').click(function(event) {
		event.preventDefault();
	});

	//Header slider
	var owl = $("header .slider");

	owl.owlCarousel({
		items: 1,
		autoPlay: 4000,
		pagination: true,
		transitionStyle: 'fadeUp',
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile: [479,0]
	});

	//Soft scroll to id and top-button
	$('header .header-top .main-menu li a').mPageScroll2id({
	  offset: 50,
	  scrollSpeed: 400
	});
	$('.bottom-menu .container ul li a').mPageScroll2id({
	  offset: 0,
	  scrollSpeed: 400
	});
	$('.to-top-bottom a').mPageScroll2id({
	  offset: 0,
	  scrollSpeed: 800
	});

	//Modal contact
	var contactUs = $('.banner .container .row3 .contact-us');
	var modalContact = $('.modal-contact');
	var modalOverlay = $('.modal-overlay');
	var contactClose =$('.modal-contact .modal-content-close');
	var contactName = $('.modal-contact form .name');
	var contactSurname = $('.modal-contact form .surname');
	var contactEmail = $('.modal-contact form .email')
	var contactSend = $('.modal-contact form .btn');

	var modalSuccess = $('.modal-success');
	var modalSuccessClose = $('.modal-success .modal-content-close');
	var modalSuccessOk = $('.modal-success .btn');

	$(contactUs).on('click', function() {
		$(modalContact).addClass('show bounceInTop');
		$(modalOverlay).addClass('show');
	});

	$(contactClose).on('click', function() {
		$(modalContact).removeClass('show');
		$(modalOverlay).removeClass('show');
	});
	$(modalSuccessClose).on('click', function() {
		$(modalSuccess).removeClass('show');
		$(modalOverlay).removeClass('show');
	});
	$(modalSuccessOk).on('click', function() {
		$(modalSuccess).removeClass('show');
		$(modalOverlay).removeClass('show');
	});

	$(contactSend).on('click', function() {
		if (!contactName.val() || !contactSurname.val() || !contactEmail.val()) {
			$(contactName).addClass('red');
			$(contactSurname).addClass('red');
			$(contactEmail).addClass('red');
			$(modalContact).addClass('shake');
		} else if (contactName.val() || contactSurname.val() || contactEmail.val()) {
			$(contactName).removeClass('red');
			$(contactSurname).removeClass('red');
			$(contactEmail).removeClass('red');
			$(modalContact).removeClass('shake');
			$(modalContact).removeClass('show');
			$(modalSuccess).addClass('show bounceInTop');
		} else {
			console.log('error');
		}
	});

	//Modal Subscribe
	var subscribeButton = $('footer .container .block3 .row2 form .btn');
	var subscribeEmail = $('footer .container .block3 .row2 form .email');
	var subscribeError = $('.modal-subscribe-error');
	var subscribeErrorClose = $('.modal-subscribe-error .modal-content-close');
	var subscribeErrorOk = $('.modal-subscribe-error .btn');

	$(subscribeButton).on('click', function() {
		if (!subscribeEmail.val()) {
			$(subscribeError).addClass('show bounceInTop');
			$(modalOverlay).addClass('show');
		} else if (subscribeEmail.val()) {
			$(modalSuccess).addClass('show bounceInTop');
			$(modalOverlay).addClass('show');
		} else {
			console.log('error');
		}
	});

	$(subscribeErrorClose).on('click', function() {
		$(subscribeError).removeClass('show');
		$(modalOverlay).removeClass('show');
	});
	$(subscribeErrorOk).on('click', function() {
		$(subscribeError).removeClass('show');
		$(modalOverlay).removeClass('show');
	});

});