'use strict';
// $(document).ready(function() {

//  //Таймер обратного отсчета
//  //Документация: http://keith-wood.name/countdown.html
//  //<div class="countdown" date-time="2015-01-07"></div>
//  var austDay = new Date($(".countdown").attr("date-time"));
//  $(".countdown").countdown({until: austDay, format: 'yowdHMS'});//таймер end

//  //Попап менеджер FancyBox
//  //Документация: http://fancybox.net/howto
//  //<a class="fancybox"><img src="image.jpg" /></a>
//  //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
//  $(".fancybox").fancybox();//fancybox end

//  //Навигация по Landing Page
//  //$(".top_mnu") - это верхняя панель со ссылками.
//  //Ссылки вида <a href="#contacts">Контакты</a>
//  $(".top_mnu").navigation();//навигация end

//  //Добавляет классы дочерним блокам .block для анимации
//  //Документация: http://imakewebthings.com/jquery-waypoints/
//  $(".block").waypoint(function(direction) {
// 	 if (direction === "down") {
// 		 $(".class").addClass("active");
// 	 } else if (direction === "up") {
// 		 $(".class").removeClass("deactive");
// 	 };
//  }, {offset: 100});//end

//  //Плавный скролл до блока .div по клику на .scroll
//  //Документация: https://github.com/flesler/jquery.scrollTo
//  $("a.scroll").click(function() {
// 	 $.scrollTo($(".div"), 800, {
// 		 offset: -90
// 	 });
//  });//плавный скролл end

//  //Каруселька
//  //Документация: http://owlgraphic.com/owlcarousel/
//  var owl = $(".carousel");
//  owl.owlCarousel({
// 	 items : 1,
// 	 autoPlay: 5000,
// 	 pagination: false,
// 	 transitionStyle: 'fade',
// 	 itemsDesktop: [1199,1],
// 	 itemsDesktopSmall: [979,1],
// 	 itemsTablet: [768,0],
// 	 itemsMobile: [479,0]
//  });
//  owl.on("mousewheel", ".owl-wrapper", function (e) {
// 	 if (e.deltaY > 0) {
// 		 owl.trigger("owl.prev");
// 	 } else {
// 		 owl.trigger("owl.next");
// 	 }
// 	 e.preventDefault();
//  });
//  $(".next_button").click(function(){
// 	 owl.trigger("owl.next");
//  });
//  $(".prev_button").click(function(){
// 	 owl.trigger("owl.prev");
//  });//карусель end

//  //Кнопка "Наверх"
//  //Документация:
//  //http://api.jquery.com/scrolltop/
//  //http://api.jquery.com/animate/
//  $("#top").click(function () {
// 	 $("body, html").animate({
// 		 scrollTop: 0
// 	 }, 800);
// 	 return false;
//  });//кнопка "наверх" end
	
//  //Аякс отправка форм
//  //Документация: http://api.jquery.com/jquery.ajax/
//  $("form").submit(function() {
// 	 $.ajax({
// 		 type: "GET",
// 		 url: "mail.php",
// 		 data: $("form").serialize()
// 	 }).done(function() {
// 		 alert("Спасибо за заявку!");
// 		 setTimeout(function() {
// 			 $.fancybox.close();
// 		 }, 1000);
// 	 });
// 	 return false;
//  });//ajax формы end

// 	//AJAX вкладки (анимацию делать на keyframes)
// 	$('.link').click(function() {

// 		var info = $(this).attr('href') + ' #content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
// 		$('#content').hide(0, loadContent());//скрываем содержимое блока #content той страницы, на которой находимся//задать анимацию для содержимого
// 		$('#loader').fadeIn('slow');//анимация лоадера

// 		function loadContent() {//основная функция для загрузки контента
// 			$('#content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
// 				$('#content').show(0, hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
// 			});
// 		}

// 		function hideLoader() {//функция для скрытия лоадера
// 			$('#loader').fadeOut('normal');
// 		}

// 		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

// 	});//ajax вкладки end

// 	// Аккордеон
// 	$(document).ready(function() {
		
// 	 $('.service2>.wrapper>.block-2>article').not(':first-of-type').hide();
	 
		
// 		$('.service2>.wrapper>.block-2>.headline').click(function() {
			
// 			var findArticle = $(this).next();
// 			var findWrapper = $(this).closest('.block-2');
			
// 			if (findArticle.is(':visible')) {
// 				findArticle.slideUp(50);
// 			}
// 			else {
// 				findWrapper.find('>article').slideUp(50);
// 				findArticle.slideDown(50);
// 			}
// 		});

// 	});//аккордеон end

// });//doc ready end

$(document).ready(function() {

	//prevent default
	function prevdef() {
		$('.prevdef').click(function(event) {
			event.preventDefault();
		});
	}// prevdef();
	prevdef();

	var headerSearchButton = document.querySelector('.header__search-button');
	var headerSearchInput = document.querySelector('.header__search-input');
	headerSearchButton.addEventListener('click', showSearchInput);

	function showSearchInput() {
		headerSearchInput.style.right = '0rem';
		this.removeEventListener('click', showSearchInput);
	}

	var modalOverlay = document.querySelector('.modal__overlay');
	var modalWindows = document.querySelectorAll('.modal__window');
	var modalErrorContainer = document.querySelector('.modal__error-container');
	var modalSuccessContainer = document.querySelector('.modal__success-container');

	var footerNameInput = document.querySelector('.footer__name-input');
	var footerEmailInput = document.querySelector('.footer__email-input');
	var footerSubscribeButton = document.querySelector('.footer__subscribe-button');
	var validationArr1 = [footerNameInput, footerEmailInput];
	var blogSubscribeNameInput = document.querySelector('.blog__subscribe-name-input');
	var blogSubscribeEmailInput = document.querySelector('.blog__subscribe-email-input');
	var blogSubscribeSubmitButton = document.querySelector('.blog__subscribe-submit-button');
	var validationArr2 = [blogSubscribeNameInput, blogSubscribeEmailInput];

	footerSubscribeButton.addEventListener('click', validationCheck1);
	blogSubscribeSubmitButton.addEventListener('click', validationCheck2);
	modalOverlay.addEventListener('click', modalsHide);
	for (var i = 0; i < modalWindows.length; i++) {
		modalWindows[i].addEventListener('click', modalsHide);
	}

	function validationCheck1() {
		for (var i = 0; i < validationArr1.length; i++) {
			if (!validationArr1[i].value) {
				validationArr1[i].style.borderColor = '#4A90E2';
				modalErrorShow();
			} else {
				validationArr1[i].style.borderColor = '';
			}
		}

		if (footerNameInput.value && footerEmailInput.value) {
			modalSuccessShow();
		}
	}

	function validationCheck2() {
		for (var i = 0; i < validationArr2.length; i++) {
			if (!validationArr2[i].value) {
				validationArr2[i].style.borderColor = '#4A90E2';
				modalErrorShow();
			} else {
				validationArr2[i].style.borderColor = '';
			}
		}

		if (blogSubscribeNameInput.value && blogSubscribeEmailInput.value) {
			modalSuccessShow();
		}
	}

	function modalErrorShow() {
		modalOverlay.style.display = 'block';
		modalErrorContainer.style.opacity = '1';
		modalErrorContainer.style.zIndex = '999';
	}

	function modalSuccessShow() {
		modalOverlay.style.display = 'block';
		modalSuccessContainer.style.opacity = '1';
		modalSuccessContainer.style.zIndex = '999';

		for (var i = 0; i < validationArr1.length; i++) {
			validationArr1[i].value = '';
			validationArr1[i].style.borderColor = '';
			validationArr2[i].value = '';
			validationArr2[i].style.borderColor = '';
		}
	}

	function modalsHide() {
		modalOverlay.style.display = '';
		modalErrorContainer.style.opacity = '';
		modalErrorContainer.style.zIndex = '';
		modalSuccessContainer.style.opacity = '';
		modalSuccessContainer.style.zIndex = '';
	}

	//smooth scroll
	$('.to-top-link').mPageScroll2id({
		offset: 0,
		scrollSpeed: 1000
	});

	window.onscroll = function() {
		var ypos = window.pageYOffset;
		var toTopLink = document.querySelector('.to-top-link');
		if (ypos > 500) {
			toTopLink.style.opacity = '1';
			toTopLink.style.zIndex = '5';
		} else {
			toTopLink.style.opacity = '';
			toTopLink.style.zIndex = '';
		}
	}

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log