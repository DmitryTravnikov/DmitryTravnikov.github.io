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

	//menu links
	var topPanelMenuLinks = document.querySelectorAll('.top-panel__menu-link');
	for (var i = 0; i < topPanelMenuLinks.length; i++) {
		topPanelMenuLinks[i].onclick = function() {
			for (var i = 0; i < topPanelMenuLinks.length; i++) {
				topPanelMenuLinks[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	}

	//input animation
	var topPanelSearchIcon = document.querySelector('.top-panel__search-icon');
	var topPanelSearchInput = document.querySelector('.top-panel__search-input');
	topPanelSearchIcon.onclick = function() {
		topPanelSearchInput.classList.toggle('active');
	}
	topPanelSearchInput.onblur = function() {
		this.classList.remove('active');
	}
	topPanelSearchInput.onkeypress = function(event) {
		if (event.which === 13) {
			this.classList.remove('active');
		}
	}

 //Каруселька
 //Документация: http://owlgraphic.com/owlcarousel/
 var homeSlider = $(".home__slider");
 homeSlider.owlCarousel({
	 items : 1,
	 autoPlay: 3000,
	 pagination: true,
	 itemsDesktop: [1199,1],
	 itemsDesktopSmall: [979,1],
	 itemsTablet: [768,1],
	 itemsMobile: [479,1]
 });
 $(".home__next-button").click(function(){
	 homeSlider.trigger("owl.next");
 });
 $(".home__prev-button").click(function(){
	 homeSlider.trigger("owl.prev");
 });//карусель end

 //ajax links
 var portfolioAjaxMenuLinks = document.querySelectorAll('.portfolio__ajax-menu-link');
 for (var i = 0; i < portfolioAjaxMenuLinks.length; i++) {
 	portfolioAjaxMenuLinks[i].onclick = function() {
 		for (var i = 0; i < portfolioAjaxMenuLinks.length; i++) {
 			portfolioAjaxMenuLinks[i].classList.remove('active');
 		}
 		this.classList.add('active');
 	}
 }

 	//AJAX вкладки (анимацию делать на keyframes)
	$('.portfolio__ajax-menu-link').click(function() {

		var info = $(this).attr('href') + ' .portfolio__content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
		$('.portfolio__content').hide(0, loadContent());//скрываем содержимое блока #content той страницы, на которой находимся//задать анимацию для содержимого
		$('#loader').fadeIn('slow');//анимация лоадера

		function loadContent() {//основная функция для загрузки контента
			$('.portfolio__content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
				$('.portfolio__content').show(0, hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
			});
		}

		function hideLoader() {//функция для скрытия лоадера
			$('#loader').fadeOut('normal');
		}

		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

	});//ajax вкладки end

	//portfolio video
	var portfolioVideoOverlay = document.querySelector('.portfolio-vid__video-overlay');
	var portfolioVideoPlayButton = document.querySelector('.portfolio-vid__video-link');
	var portfolioVideo = document.querySelector('.portfolio-vid__video');
	portfolioVideoPlayButton.onclick = function() {
		portfolioVideo.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		window.timerId = window.setInterval(function() {
			portfolioVideoOverlay.style.opacity = '0';
			window.timerId = window.setInterval(function() {
				portfolioVideo.style.zIndex = '3';
			}, 1500);
		}, 1000);
	}

 //Каруселька
 //Документация: http://owlgraphic.com/owlcarousel/
 var aboutUsSlider = $(".about-us__testimonials-slider");
 aboutUsSlider.owlCarousel({
	 items : 1,
	 autoPlay: 3000,
	 pagination: true,
	 itemsDesktop: [1199,1],
	 itemsDesktopSmall: [979,1],
	 itemsTablet: [768,1],
	 itemsMobile: [479,1]
 });

 //subscribe validation
 var pricesSubscribeEmail = document.querySelector('.prices-subscribe__email');
 var pricesSubscribeSubmitButton = document.querySelector('.prices-subscribe__submit-button');
 var modalSubscribeError = document.querySelector('.modal__subscribtion-error');
 var modalSubscribeSuccess = document.querySelector('.modal__subscribtion-success');
 var modalOverlay = document.querySelector('.modal__overlay');
 var modalBlocks = document.querySelectorAll('.modal__block');

 pricesSubscribeSubmitButton.addEventListener('click', subscribeInputValueCheck);
 for (var i = 0; i < modalBlocks.length; i++) {
 	modalBlocks[i].addEventListener('click', modalsHide);
 }
 modalOverlay.addEventListener('click', modalsHide);

 function subscribeInputValueCheck() {
 	if (!pricesSubscribeEmail.value) {
 		modalOverlay.classList.add('active');
 		modalSubscribeError.classList.add('active');
 	} else {
 		modalOverlay.classList.add('active');
 		modalSubscribeSuccess.classList.add('active');
 		pricesSubscribeEmail.value = '';
 	}
 }
 function modalsHide() {
 	for (var i = 0; i < modalBlocks.length; i++) {
 		modalBlocks[i].classList.remove('active');
 		modalOverlay.classList.remove('active');
 	}
 }

 //send message validation
 var contactUsUserName = document.querySelector('.contact-us__user-name');
 var contactUsUserEmail = document.querySelector('.contact-us__user-email');
 var contactUsUserMessage = document.querySelector('.contact-us__user-message');
 var contactUsInputs = document.querySelectorAll('.contact-us__input');
 var contactUsSendMessageButton = document.querySelector('.contact-us__send-message-button');
 var modalSendMessageError = document.querySelector('.modal__send-message-error');
 var modalSendMessageSuccess = document.querySelector('.modal__send-message-success');

 contactUsSendMessageButton.addEventListener('click', contactUsIntputsValueCheck);

 function contactUsIntputsValueCheck() {
 	for (var i = 0; i < contactUsInputs.length; i++) {
 		if (!contactUsInputs[i].value) {
 			contactUsInputs[i].style.borderColor = 'red';
 			sendMessageError();
 		} else {
 			contactUsInputs[i].style.borderColor = '';
 		}
 	}

 	if (contactUsUserName.value && contactUsUserEmail.value && contactUsUserMessage.value) {
 		sendMessageSuccess();
 	}
 }

 function sendMessageError() {
 	modalOverlay.classList.add('active');
 	modalSendMessageError.classList.add('active');
 }

 function sendMessageSuccess() {
 	modalOverlay.classList.add('active');
 	modalSendMessageSuccess.classList.add('active');
 	for (var i = 0; i < contactUsInputs.length; i++) {
 		contactUsInputs[i].value = '';
 	}
 }

 //smooth scroll
 	$('.top-panel__menu-link, .top-panel__logo, .footer__logo, .to-top-link, .prices__contact-us-link').mPageScroll2id({
	  offset: 50,
	  scrollSpeed: 200
	});

	//to top button display
	window.onscroll = function() {
		var ypos = window.pageYOffset;
		var toTopLink = document.querySelector('.to-top-link');
		if (ypos > 500) {
			toTopLink.style.opacity = '1';
			toTopLink.style.zIndex = '900';
		} else {
			toTopLink.style.opacity = '';
			toTopLink.style.zIndex = '';
		}
	}

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log
