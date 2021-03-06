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
	 var brandingSlider = $(".branding__slider");
	 brandingSlider.owlCarousel({
		 items : 1,
		 autoPlay: 2000,
		 pagination: true,
		 itemsDesktop: [1199,1],
		 itemsDesktopSmall: [979,1],
		 itemsTablet: [768,1],
		 itemsMobile: [479,1]
	 });
	 //Каруселька
	 //Документация: http://owlgraphic.com/owlcarousel/
	 var testimonialsSlider = $(".testimonials__slider");
	 testimonialsSlider.owlCarousel({
		 items : 1,
		 autoPlay: 2000,
		 pagination: true,
		 itemsDesktop: [1199,1],
		 itemsDesktopSmall: [979,1],
		 itemsTablet: [768,1],
		 itemsMobile: [479,1]
	 });



	 var ourTeamItems = document.querySelectorAll('.our-team__item');
	 var ourTeamContent = document.querySelector('.our-team__content');
	 for (var i = 0; i < ourTeamItems.length; i++) {
	 	ourTeamItems[i].onmouseenter = function() {
	 		this.classList.add('active');
	 		for (var i = 0; i < this.children.length; i++) {
	 			this.children[i].classList.add('active');
	 			for (var j = 0; j < this.firstElementChild.children.length; j++) {
	 				this.firstElementChild.children[j].classList.add('active');
	 			}
	 		}
	 	}
	 	ourTeamItems[i].onmouseleave = function() {
	 		this.classList.remove('active');
	 		for (var i = 0; i < this.children.length; i++) {
	 			this.children[i].classList.remove('active');
	 			for (var j = 0; j < this.firstElementChild.children.length; j++) {
	 				this.firstElementChild.children[j].classList.remove('active');
	 			}
	 		}
	 	}
	 }


	 var contactUsLabels = document.querySelectorAll('.contact-us__label');
	 var contactUsInputs = document.querySelectorAll('.contact-us__input');
	 for (var i = 0; i < contactUsInputs.length; i++) {
	 	contactUsInputs[i].onclick = function() {
	 		for (var i = 0; i < contactUsInputs.length; i++) {
	 			contactUsInputs[i].classList.remove('active');
	 			contactUsLabels[i].classList.remove('active');
	 			contactUsInputs[i].parentNode.classList.remove('active');
	 		}
	 		this.classList.add('active');
	 		this.previousElementSibling.classList.add('active');
	 		this.parentNode.classList.add('active');
	 	}
	 	contactUsInputs[i].onblur = function() {
	 		for (var i = 0; i < contactUsInputs.length; i++) {
	 			contactUsInputs[i].classList.remove('active');
	 			contactUsLabels[i].classList.remove('active');
	 			contactUsInputs[i].parentNode.classList.remove('active');
	 		}
	 	}
	 }

	$('.home__scroll-down, .footer__scroll-top').mPageScroll2id({
		offset: 0,
		scrollSpeed: 400
	});

	var contactUsInputs = document.querySelectorAll('.contact-us__input');
	var contactUsSubmitButton = document.querySelector('.contact-us__submit-button');
	var modalOverlay = document.querySelector('.modal__overlay');
	var modalError = document.querySelector('.modal__error');
	var modalSuccess = document.querySelector('.modal__success');
	var contactUsUserName = document.querySelector('.contact-us__user-name');
	var contactUsUserEmail = document.querySelector('.contact-us__user-email');
	var contactUsCompany = document.querySelector('.contact-us__company');
	var contactUsSubject = document.querySelector('.contact-us__subject');
	var contactUsUserMessage = document.querySelector('.contact-us__user-message');
	var validationArr = [contactUsUserName, contactUsUserEmail, contactUsCompany, contactUsSubject, contactUsUserMessage];

	contactUsSubmitButton.addEventListener('click', modalShow);
	modalOverlay.addEventListener('click', modalHide);
	modalError.addEventListener('click', modalHide);
	modalSuccess.addEventListener('click', modalHide);

	function modalShow() {
		for (var i = 0; i < validationArr.length; i++) {
			if (!validationArr[i].value) {
				modalOverlay.style.display = 'block';
				modalError.style.top = '50%';
			}
		}

		if (contactUsUserName.value && contactUsUserEmail.value && contactUsCompany.value && contactUsSubject.value && contactUsUserMessage.value) {
			modalOverlay.style.display = 'block';
			modalSuccess.style.top = '50%';
			for (var i = 0; i < validationArr.length; i++) {
				validationArr[i].value = '';
			}
		}
	}
	function modalHide() {
		modalOverlay.style.display = '';
		modalError.style.top = '';
		modalSuccess.style.top = '';
	}

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log