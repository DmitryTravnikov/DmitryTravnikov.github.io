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

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var headerSlider = $(".header__slider");
	headerSlider.owlCarousel({
	 items : 1,
	 autoPlay: 3000,
	 pagination: true,
	 itemsDesktop: [1199,1],
	 itemsDesktopSmall: [979,1],
	 itemsTablet: [768,1],
	 itemsMobile: [479,1]
	});

	var headerHamburger = document.querySelector('.header__hamburger');
	headerHamburger.onclick = function() {
		for (var i = 0; i < this.children.length; i++) {
			this.children[i].classList.toggle('active');
		}
		this.classList.toggle('active');
	}

	var aboutVideoOverlay = document.querySelector('.about__video-overlay');
	var aboutVideoPlayButton = document.querySelector('.about__video-play-button');
	var aboutVideo = document.querySelector('.about__video');
	aboutVideoPlayButton.onclick = function() {
		aboutVideo.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		window.timerId = window.setInterval(function() {
			aboutVideoOverlay.style.opacity = '0';
			window.timerId = window.setInterval(function() {
				aboutVideo.style.zIndex = '3';
			}, 1500);
		}, 1000);
	}

	 //Каруселька
	 //Документация: http://owlgraphic.com/owlcarousel/
	 var peopleSaySlider = $(".people-say__slider");
	 peopleSaySlider.owlCarousel({
		 items : 1,
		 autoPlay: 3000,
		 pagination: true,
		 itemsDesktop: [1199,1],
		 itemsDesktopSmall: [979,1],
		 itemsTablet: [768,1],
		 itemsMobile: [479,1]
	 });
	 $(".people-say__next-button").click(function(){
		 peopleSaySlider.trigger("owl.next");
	 });
	 $(".people-say__previous-button").click(function(){
		 peopleSaySlider.trigger("owl.prev");
	 });//карусель end

	 //modals
	 var modalOverlay = document.querySelector('.modal__overlay');
	 var modalFeedbackError = document.querySelector('.modal__feedback-error');
	 var modalFeedbackSuccess = document.querySelector('.modal__feedback-success');
	 var modalSubscribeError = document.querySelector('.modal__subscribe-error');
	 var modalSubscribeSuccess = document.querySelector('.modal__subscribe-success');
	 var modalsArr = [modalOverlay, modalFeedbackError, modalFeedbackError, modalSubscribeError, modalSubscribeSuccess];
	 for (var i = 0; i < modalsArr.length; i++) {
	 	modalsArr[i].addEventListener('click', modalHide);
	 }
	 function modalHide() {
	 	modalOverlay.style.display = '';
	 	modalFeedbackError.style.top = '';
	 	modalFeedbackSuccess.style.top = '';
	 	modalSubscribeError.style.top = '';
	 	modalSubscribeSuccess.style.top = '';
	 }

	 //feedback
	 var feedbackUserName = document.querySelector('.feedback__user-name');
	 var feedbackUserEmail = document.querySelector('.feedback__user-email');
	 var feedbackUserSubject = document.querySelector('.feedback__user-subject');
	 var feedbackUserMessage = document.querySelector('.feedback__user-message');
	 var feedbackSubmitButton = document.querySelector('.feedback__submit-button');
	 var feedbackValidationArr = [feedbackUserName, feedbackUserEmail, feedbackUserSubject, feedbackUserMessage]

	 feedbackSubmitButton.addEventListener('click', feedbackModalShow);
	 function feedbackModalShow() {
	 	for (var i = 0; i < feedbackValidationArr.length; i++) {
	 		if (!feedbackValidationArr[i].value) {
	 			modalOverlay.style.display = 'block';
	 			modalFeedbackError.style.top = '50%';
	 		}
	 	}

	 	if (feedbackUserName.value && feedbackUserEmail.value && feedbackUserSubject.value && feedbackUserMessage.value) {
	 			modalOverlay.style.display = 'block';
	 			modalFeedbackSuccess.style.top = '50%';
	 	}
	 }

	 //subscribe
	 var subscribeEmail = document.querySelector('.footer__email');
	 var subscribeSubmitButton = document.querySelector('.footer__subscribe-button');
	 subscribeSubmitButton.addEventListener('click', subscribeModalShow);
	 function subscribeModalShow() {
	 	if (!subscribeEmail.value) {
	 		modalOverlay.style.display = 'block';
	 		modalSubscribeError.style.top = '50%';
	 	} else {
	 		modalOverlay.style.display = 'block';
	 		modalSubscribeSuccess.style.top = '50%';
	 	}
	 }

	$('.header__menu-link, .footer__to-top').mPageScroll2id({
	  offset: 50,
	  scrollSpeed: 200
	});

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log