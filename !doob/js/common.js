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

	var topPanelSelect = document.querySelector('.top-panel__select');
	var topPanelOptionsContainer = document.querySelector('.top-panel__options-container');
	var topPanelOptions = document.querySelectorAll('.top-panel__option');
	topPanelSelect.onclick = function() {
		this.classList.toggle('active');
		topPanelOptionsContainer.classList.toggle('active');
	}
	for (var i = 0; i < topPanelOptions.length; i++) {
		topPanelOptions[i].onclick = function() {
			for (var i = 0; i < topPanelOptions.length; i++) {
				topPanelOptions[i].classList.remove('active');
				this.classList.add('active');
				if (this.classList.contains('active')) {
					topPanelSelect.innerHTML = this.innerHTML;
				}
			}
		}
	}
	topPanelOptionsContainer.onmouseleave = function() {
		this.classList.remove('active');
		topPanelSelect.classList.remove('active');
	}

	 //Каруселька
	 //Документация: http://owlgraphic.com/owlcarousel/
	 var aboutUsSlider = $(".about-us__slider");
	 aboutUsSlider.owlCarousel({
		 items : 1,
		 autoPlay: 3000,
		 pagination: false,
		 itemsDesktop: [1199,1],
		 itemsDesktopSmall: [979,1],
		 itemsTablet: [768,1],
		 itemsMobile: [479,1]
	 });
	 $(".about-us__slider-next").click(function(){
		 aboutUsSlider.trigger("owl.next");
	 });
	 $(".about-us__slider-previous").click(function(){
		 aboutUsSlider.trigger("owl.prev");
	 });//карусель end

	 var portfolioSlider = $(".portfolio__slider");
	 portfolioSlider.owlCarousel({
		 items : 1,
		 autoPlay: 3000,
		 pagination: false,
		 transitionStyle: 'fadeUp',
		 itemsDesktop: [1199,1],
		 itemsDesktopSmall: [979,1],
		 itemsTablet: [768,1],
		 itemsMobile: [479,1]
	 });
	 $(".portfolio__slider-next").click(function(){
		 portfolioSlider.trigger("owl.next");
	 });
	 $(".portfolio__slider-previous").click(function(){
		 portfolioSlider.trigger("owl.prev");
	 });//карусель end

	 var blogSlider = $(".blog__slider");
	 blogSlider.owlCarousel({
		 items : 1,
		 autoPlay: 3000,
		 pagination: false,
		 transitionStyle: 'fadeUp',
		 itemsDesktop: [1199,1],
		 itemsDesktopSmall: [979,1],
		 itemsTablet: [768,1],
		 itemsMobile: [479,1]
	 });
	 $(".blog__slider-next").click(function(){
		 blogSlider.trigger("owl.next");
	 });
	 $(".blog__slider-previous").click(function(){
		 blogSlider.trigger("owl.prev");
	 });//карусель end

	 //contact-us__form validation
	 var contactUsEmail = document.querySelector('.contact-us__email');
	 var contactUsSubject = document.querySelector('.contact-us__subject');
	 var contactUsMessage = document.querySelector('.contact-us__message');
	 var contactUsInputs = document.querySelectorAll('.contact-us__input');
	 var contactUsSendButton = document.querySelector('.contact-us__send-button');
	 var modalOverlay = document.querySelector('.modal__overlay');
	 var modalContactUsError = document.querySelector('.modal__contact-us-error');
	 var modalContactUsSuccess = document.querySelector('.modal__contact-us-success');
	 var modalContactUsContent = document.querySelectorAll('.modal__contact-us-content');
	 var contactUsValidationArr = [contactUsEmail, contactUsSubject, contactUsMessage];

	 contactUsSendButton.addEventListener('click', validationCheck);
	 modalOverlay.addEventListener('click', modalHide);
	 for (var i = 0; i < modalContactUsContent.length; i++) {
	 	modalContactUsContent[i].addEventListener('click', modalHide);
	 }

	 function validationCheck() {
	 	for (var i = 0; i < contactUsValidationArr.length; i++) {
	 		if (!contactUsValidationArr[i].value) {
	 			modalErrorShow();
	 		}
	 	}

	 	if (contactUsEmail.value && contactUsSubject.value && contactUsMessage.value) {
	 		modalSuccessShow();
	 		for (var i = 0; i < contactUsValidationArr.length; i++) {
	 			contactUsValidationArr[i].value = '';
	 		}
	 	}
	 }

	 function modalErrorShow() {
	 	modalOverlay.style.display = 'block';
	 	modalContactUsError.style.top = '50%';
	 }

	 function modalSuccessShow() {
	 	modalOverlay.style.display = 'block';
	 	modalContactUsSuccess.style.top = '50%';
	 }

	 function modalHide() {
	 	modalOverlay.style.display = '';
	 	modalContactUsError.style.top = '';
	 	modalContactUsSuccess.style.top = '';
	 }


	//smooth scrolling
	$('.top-panel__menu-link, .top-panel__contact-us, .footer__menu-link').mPageScroll2id({
		offset: 1,
		scrollSpeed: 200
	});

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log