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

	var topPanelHamburger = document.querySelector('.top-panel__hamburger');
	topPanelHamburger.onclick = function() {
		this.classList.toggle('active');
		for (var i = 0; i < this.children.length; i++) {
			this.children[i].classList.toggle('active');
		}
	}

	var workMenuLinks = document.querySelectorAll('.work__menu-link');
	for (var i = 0; i < workMenuLinks.length; i++) {
		workMenuLinks[i].onclick = function() {
			for (var i = 0; i < workMenuLinks.length; i++) {
				workMenuLinks[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	}

	//AJAX вкладки (анимацию делать на keyframes)
	$('.work__menu-link').click(function() {

		var info = $(this).attr('href') + ' .work__content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
		$('.work__content').hide(0, loadContent());//скрываем содержимое блока #content той страницы, на которой находимся//задать анимацию для содержимого
		$('#loader').fadeIn('slow');//анимация лоадера

		function loadContent() {//основная функция для загрузки контента
			$('.work__content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
				$('.work__content').fadeIn(300, hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
			});
		}

		function hideLoader() {//функция для скрытия лоадера
			$('#loader').fadeOut('normal');
		}

		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

	});//ajax вкладки end

	var teamEmployeeCards = document.querySelectorAll('.team__employee-card');
	var teamItems = document.querySelectorAll('.team__item');
	for (var i = 0; i < teamItems.length; i++) {
		teamItems[i].onclick = function() {
			for (var i = 0; i < teamEmployeeCards.length; i++) {
				teamEmployeeCards[i].classList.remove('active');
				teamItems[i].classList.remove('active');
			}
			this.classList.add('active');
			for (var i = 0; i < teamItems.length; i++) {
				if (teamItems[i].classList.contains('active')) {
					teamEmployeeCards[i].classList.add('active');
				}
			}
		}
	}

	var clientsPrevButton = document.querySelector('.clients__prev-button');
	var clientsNextButton = document.querySelector('.clients__next-button');
	var clientsContentStripe = document.querySelector('.clients__content-stripe');
	var left = 0;
	clientsNextButton.onclick = function() {
		left = left - 20;
		if (left == -140) {
			left = 0;
		}
		if (left < 0) {
			clientsPrevButton.disabled = false;
			clientsPrevButton.style.cursor = 'pointer';
		} else {
			clientsPrevButton.disabled = true;
			clientsPrevButton.style.cursor = 'default';
		}
		clientsContentStripe.style.left = left + 'rem';
	}
	clientsPrevButton.onclick = function() {
		if (clientsPrevButton.disabled === false) {
			left = left + 20;
			if (left == 0) {
				left = 0;
				this.disabled = true;
				this.style.cursor = 'default';
			}
			clientsContentStripe.style.left = left + 'rem';
		}
	}


	 //Каруселька
	 //Документация: http://owlgraphic.com/owlcarousel/
	 var clientsSlider = $(".clients__slider");
	 clientsSlider.owlCarousel({
		 items : 1,
		 autoPlay: 3000,
		 pagination: false,
		 itemsDesktop: [1199,1],
		 itemsDesktopSmall: [979,1],
		 itemsTablet: [768,1],
		 itemsMobile: [479,1]
	 });

	$('.top-panel__menu-link, .work__contact-us, .header__scroll-down, .footer__to-top-button, .top-panel__logo').mPageScroll2id({
		offset: 97,
		scrollSpeed: 200
	});

	var formSectionInputs = document.querySelectorAll('.form-section__input');
	var formSectionName = document.querySelector('.form-section__name');
	var formSectionMail = document.querySelector('.form-section__mail');
	var formSectionSubject = document.querySelector('.form-section__subject');
	var formSectionMessage = document.querySelector('.form-section__message');
	var formSectionSubmitButton = document.querySelector('.form-section__submit-button');
	var modalOverlay = document.querySelector('.modal__overlay');
	var modalErrorContainer = document.querySelector('.modal__error-container');
	var modalSuccessContainer = document.querySelector('.modal__success-container');

	formSectionSubmitButton.addEventListener('click', validationCheck);
	modalOverlay.addEventListener('click', modalHide);
	modalErrorContainer.addEventListener('click', modalHide);
	modalSuccessContainer.addEventListener('click', modalHide);

	function validationCheck() {
		for (var i = 0; i < formSectionInputs.length; i++) {
			if (!formSectionInputs[i].value) {
				formSectionInputs[i].style.borderColor = 'red';
				modalErrorShow();
			} else {
				formSectionInputs[i].style.borderColor = '';
			}

			if (formSectionName.value && formSectionMail.value && formSectionSubject.value && formSectionMessage.value) {
				modalSuccessShow();
				for (var i = 0; i < formSectionInputs.length; i++) {
					formSectionInputs[i].value = '';
					formSectionInputs[i].style.borderColor = '';
				}
			}
		}
	}

	function modalErrorShow() {
		modalOverlay.style.display = 'block';
		modalErrorContainer.style.zIndex = '999';
		modalErrorContainer.style.opacity = '1';
	}

	function modalSuccessShow() {
		modalOverlay.style.display = 'block';
		modalSuccessContainer.style.zIndex = '999';
		modalSuccessContainer.style.opacity = '1';
	}

	function modalHide() {
		modalOverlay.style.display = 'none';
		modalErrorContainer.style.zIndex = '-1';
		modalErrorContainer.style.opacity = '0';
		modalSuccessContainer.style.zIndex = '-1';
		modalSuccessContainer.style.opacity = '0';
	}

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log