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

	var firstLink = $('header>nav>ul>.first');
	var secondLink = $('header>nav>ul>.second');
	var thirdLink = $('header>nav>ul>.third');
	var firstBlock = $('header>.header__content>.header__block1');
	var secondBlock = $('header>.header__content>.header__block2');
	var thirdBlock = $('header>.header__content>.header__block3');

	$(firstLink).css({
		'borderBottom': '1px solid white'
	});

	$(firstLink).on('click', function() {
		$(secondBlock).hide();
		$(thirdBlock).hide();
		$(firstBlock).show(100);
		$(this).css({
			'borderBottom': '0.1rem solid white'
		});
		$(secondLink).css({
			'borderBottom': 'none'
		});
		$(thirdLink).css({
			'borderBottom': 'none'
		});
	});

	$(secondLink).on('click', function() {
		$(firstBlock).hide();
		$(thirdBlock).hide();
		$(secondBlock).show(100);
		$(this).css({
			'borderBottom': '0.1rem solid white'
		});
		$(firstLink).css({
			'borderBottom': 'none'
		});
		$(thirdLink).css({
			'borderBottom': 'none'
		});
	});


	$(thirdLink).on('click', function() {
		$(firstBlock).hide();
		$(secondBlock).hide();
		$(thirdBlock).show(100);
		$(this).css({
			'borderBottom': '0.1rem solid white'
		});
		$(firstLink).css({
			'borderBottom': 'none'
		});
		$(secondLink).css({
			'borderBottom': 'none'
		});
	});

})