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

// 	//Каруселька
// 	//Документация: http://owlgraphic.com/owlcarousel/
// 	var owl = $(".carousel");
// 	owl.owlCarousel({
// 		items : 4
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

// var w = $(window).width() / 2 - box.outerWidth() / 2;

$(document).ready(function() {

	var owl = $("#main__slider");
	owl.owlCarousel({
		items : 1,
		autoPlay: 5000,
		pagination: false,
		transitionStyle: 'fade',
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,0],
		itemsMobile: [479,0]
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});



	// Menu
	$('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize

	// Option
	var option1 = $('.popular>.popular-container>.block1>.info>.buttons>.option');
	var option2 = $('.popular>.popular-container>.block2>.info>.buttons>.option');
	var option3 = $('.popular>.popular-container>.block3>.info>.buttons>.option');
	var options = $('.popular>.popular-container>.block>.info>.buttons>.options');
	var buy = $('.popular>.popular-container>.block>.info>.buttons>.buy');

	option1.on('click', function() {
		$(this).next().fadeToggle(200);
		option2.next().hide();
		option3.next().hide();
	});
	option2.on('click', function() {
		$(this).next().fadeToggle(200);
		option1.next().hide();
		option3.next().hide();
	});
	option3.on('click', function() {
		$(this).next().fadeToggle(200);
		option1.next().hide();
		option2.next().hide();
	});
	buy.on('click', function() {
		$(this).prev().hide();
	});

	// Navigation
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	var categories = $('#main>header>.content-top>.main-menu>nav>ul>li>.second-link');
	var popular = $('#main>header>.content-top>.main-menu>nav>ul>li>.third-link');
	var contact = $('#main>header>.content-top>.main-menu>nav>ul>li>.fourth-link');
	var shopBikes = $('#main>header>.content-mid>.shop-bikes');

	$(categories).click(function () {
		$("body, html").animate({
			scrollTop: '800px'
		}, 800);
		return false;
	});
	$(shopBikes).click(function () {
		$("body, html").animate({
			scrollTop: '800px'
		}, 800);
		return false;
	});
	$(popular).click(function () {
		$("body, html").animate({
			scrollTop: '1400px'
		}, 800);
		return false;
	});
	$(contact).click(function () {
		$("body, html").animate({
			scrollTop: '2200px'
		}, 800);
		return false;
	});

})