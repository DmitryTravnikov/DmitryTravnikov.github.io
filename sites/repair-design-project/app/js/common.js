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

	// Slider1
	var section1TabsLinks = document.querySelectorAll('.section1__tabs-link');
	var section1Slides = document.querySelectorAll('.section1__slide');
	var section1PaginationElems = document.querySelectorAll('.section1__pagination-elem');
	var section1PrevButton = document.querySelector('.section1__prev-button');
	var section1NextButton = document.querySelector('.section1__next-button');
	var slider1Counter = 0;

	section1PrevButton.addEventListener('click', slider1PrevButtonSwitch);
	section1NextButton.addEventListener('click', slider1NextButtonSwitch);
	for (var i = 0; i < section1TabsLinks.length; i++) {
		section1TabsLinks[i].addEventListener('click', slider1TabsLinksSwitch);
	}
	for (var i = 0; i < section1PaginationElems.length; i++) {
		section1PaginationElems[i].addEventListener('click', slider1PaginationElemsSwitch);
	}

	function startSlider1() {
		window.slider1 = window.setInterval(function() {
			slider1Counter++;
			if (slider1Counter >= section1Slides.length) {
				slider1Counter = 0;
			}
			for (var i = 0; i < section1Slides.length; i++) {
				section1Slides[i].classList.remove('active');
				section1Slides[slider1Counter].classList.add('active');
				section1PaginationElems[i].classList.remove('active');
				section1PaginationElems[slider1Counter].classList.add('active');
				section1TabsLinks[i].classList.remove('active');
				section1TabsLinks[slider1Counter].classList.add('active');
			}
		}, 4000);
	}
	startSlider1();

	function stopSlider1() {
		window.clearInterval(window.slider1);
	}

	function slider1NextButtonSwitch() {
		stopSlider1();
		slider1Counter++;
		if (slider1Counter >= section1Slides.length) {
			slider1Counter = 0;
		}
		for (var i = 0; i < section1Slides.length; i++) {
			section1Slides[i].classList.remove('active');
			section1Slides[slider1Counter].classList.add('active');
			section1PaginationElems[i].classList.remove('active');
			section1PaginationElems[slider1Counter].classList.add('active');
			section1TabsLinks[i].classList.remove('active');
			section1TabsLinks[slider1Counter].classList.add('active');
		}
		startSlider1();
	}

	function slider1PrevButtonSwitch() {
		stopSlider1();
		slider1Counter--;
		if (slider1Counter < 0) {
			slider1Counter = section1Slides.length - 1;
		}
		for (var i = 0; i < section1Slides.length; i++) {
			section1Slides[i].classList.remove('active');
			section1Slides[slider1Counter].classList.add('active');
			section1PaginationElems[i].classList.remove('active');
			section1PaginationElems[slider1Counter].classList.add('active');
			section1TabsLinks[i].classList.remove('active');
			section1TabsLinks[slider1Counter].classList.add('active');
		}
		startSlider1();
	}

	function slider1TabsLinksSwitch(argument) {
		stopSlider1();
		for (var i = 0; i < section1TabsLinks.length; i++) {
			section1TabsLinks[i].classList.remove('active');
			this.classList.add('active');
			if (section1TabsLinks[i].classList.contains('active')) {
				slider1Counter = i;
			}
		}
		for (var i = 0; i < section1Slides.length; i++) {
			section1Slides[i].classList.remove('active');
			section1Slides[slider1Counter].classList.add('active');
			section1PaginationElems[i].classList.remove('active');
			section1PaginationElems[slider1Counter].classList.add('active');
		}
		startSlider1();
	}

	function slider1PaginationElemsSwitch() {
		stopSlider1();
		for (var i = 0; i < section1PaginationElems.length; i++) {
			section1PaginationElems[i].classList.remove('active');
			this.classList.add('active');
			if (section1PaginationElems[i].classList.contains('active')) {
				slider1Counter = i;
			}
		}
		for (var i = 0; i < section1Slides.length; i++) {
			section1Slides[i].classList.remove('active');
			section1Slides[slider1Counter].classList.add('active');
			section1TabsLinks[i].classList.remove('active');
			section1TabsLinks[slider1Counter].classList.add('active');
		}
		startSlider1();
	}










	// Slider2
	var section7ListLinks = document.querySelectorAll('.section7__list-link');
	var section7Slides = document.querySelectorAll('.section7__slide');
	var section7PaginationElems = document.querySelectorAll('.section7__pagination-elem');
	var section7PrevButton = document.querySelector('.section7__prev-button');
	var section7NextButton = document.querySelector('.section7__next-button');
	var slider2Counter = 0;

	section7PrevButton.addEventListener('click', slider2PrevButtonSwitch);
	section7NextButton.addEventListener('click', slider2NextButtonSwitch);
	for (var i = 0; i < section7ListLinks.length; i++) {
		section7ListLinks[i].addEventListener('click', slider2ListLinksSwitch);
	}
	for (var i = 0; i < section7PaginationElems.length; i++) {
		section7PaginationElems[i].addEventListener('click', slider2PaginationElemsSwitch);
	}

	function startSlider2() {
		window.slider2 = window.setInterval(function() {
			slider2Counter++;
			if (slider2Counter >= section7Slides.length) {
				slider2Counter = 0;
			}
			for (var i = 0; i < section7Slides.length; i++) {
				section7Slides[i].classList.remove('active');
				section7Slides[slider2Counter].classList.add('active');
				section7PaginationElems[i].classList.remove('active');
				section7PaginationElems[slider2Counter].classList.add('active');
				section7ListLinks[i].classList.remove('active');
				section7ListLinks[slider2Counter].classList.add('active');
			}
		}, 4000);
	}
	startSlider2();

	function stopSlider2() {
		window.clearInterval(window.slider2);
	}

	function slider2NextButtonSwitch() {
		stopSlider2();
		slider2Counter++;
		if (slider2Counter >= section7Slides.length) {
			slider2Counter = 0;
		}
		for (var i = 0; i < section7Slides.length; i++) {
			section7Slides[i].classList.remove('active');
			section7Slides[slider2Counter].classList.add('active');
			section7PaginationElems[i].classList.remove('active');
			section7PaginationElems[slider2Counter].classList.add('active');
			section7ListLinks[i].classList.remove('active');
			section7ListLinks[slider2Counter].classList.add('active');
		}
		startSlider2();
	}

	function slider2PrevButtonSwitch() {
		stopSlider2();
		slider2Counter--;
		if (slider2Counter < 0) {
			slider2Counter = section7Slides.length - 1;
		}
		for (var i = 0; i < section7Slides.length; i++) {
			section7Slides[i].classList.remove('active');
			section7Slides[slider2Counter].classList.add('active');
			section7PaginationElems[i].classList.remove('active');
			section7PaginationElems[slider2Counter].classList.add('active');
			section7ListLinks[i].classList.remove('active');
			section7ListLinks[slider2Counter].classList.add('active');
		}
		startSlider2();
	}

	function slider2ListLinksSwitch(argument) {
		stopSlider2();
		for (var i = 0; i < section7ListLinks.length; i++) {
			section7ListLinks[i].classList.remove('active');
			this.classList.add('active');
			if (section7ListLinks[i].classList.contains('active')) {
				slider2Counter = i;
			}
		}
		for (var i = 0; i < section7Slides.length; i++) {
			section7Slides[i].classList.remove('active');
			section7Slides[slider2Counter].classList.add('active');
			section7PaginationElems[i].classList.remove('active');
			section7PaginationElems[slider2Counter].classList.add('active');
		}
		startSlider2();
	}

	function slider2PaginationElemsSwitch() {
		stopSlider2();
		for (var i = 0; i < section7PaginationElems.length; i++) {
			section7PaginationElems[i].classList.remove('active');
			this.classList.add('active');
			if (section7PaginationElems[i].classList.contains('active')) {
				slider2Counter = i;
			}
		}
		for (var i = 0; i < section7Slides.length; i++) {
			section7Slides[i].classList.remove('active');
			section7Slides[slider2Counter].classList.add('active');
			section7ListLinks[i].classList.remove('active');
			section7ListLinks[slider2Counter].classList.add('active');
		}
		startSlider2();
	}







	// Video Play Button
	var section2VideoOverlay = document.querySelector('.section2__video-overlay');
	var section2VideoPlayButton = document.querySelector('.section2__video-play-button');
	var section2Video = document.querySelector('.section2__video');
	section2VideoPlayButton.onclick = function() {
		section2Video.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		window.timerId = window.setInterval(function() {
			section2VideoOverlay.style.opacity = '0';
			section2VideoOverlay.style.zIndex = '-1';
			window.timerId = window.setInterval(function() {
				section2Video.style.zIndex = '3';
			}, 1500);
		}, 1000);
	}





	// Map
	ymaps.ready(init);

	var placemarks = [
	  {
	    latitude: 59.94,
	    longitude: 30.31,
	    hintContent: '<div class="map__hint">Дворцовая пл., 2, Санкт-Петербург, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="img/contacts-map-marker.png" alt"Бургер"/>',
	      'Самые вкусные бургеры у нас! Приходите по адресу: Дворцовая пл., 2, Санкт-Петербург, 190000',
	      '</div>'
	    ]
	  },
	  {
	    latitude: 59.95,
	    longitude: 30.31,
	    hintContent: '<div class="map__hint">Дворцовая пл., 2, Санкт-Петербург, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="img/contacts-map-marker.png" alt"Бургер"/>',
	      'Самые вкусные бургеры у нас! Приходите по адресу: Дворцовая пл., 2, Санкт-Петербург, 190000',
	      '</div>'
	    ]
	  }
	],
	  geoObjects = [];//var placemarks end

	function init() {
	  var map = new ymaps.Map('section10__map', {
	    center: [59.94, 30.32],
	    zoom: 13,
	    controls: ['zoomControl'],
	    behaviors: ['drag']
	  });// var map end

	  for (var i = 0; i < placemarks.length; i++) {
	    geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
	      hintContent: placemarks[i].hintContent,
	      balloonContent: placemarks[i].balloonContent.join('')
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
	    clusterIcons: [
	      {
	        href: 'img/contacts-map-marker.png',//изображение кластеризатора
	        size: [100, 100],
	        offset: [-50, -50]
	      }
	    ],
	    clusterIconContentLayout: null//отключает визуальное отображение количества точек при кластеризации
	  });

	  map.geoObjects.add(clusterer);
	  clusterer.add(geoObjects);
	  
	  //на мобильных устройствах... (проверяем по userAgent браузера)
	  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	      //... отключаем перетаскивание карты
	      map.behaviors.disable('drag');
	  }

	}//init end







	//Smooth Scroll
	$('.header__menu-link, .section11__menu-link, .to-top-link').mPageScroll2id({
	  offset: 50,
	  scrollSpeed: 500
	});






		//AJAX вкладки (анимацию делать на keyframes)
		var section5ListLinks = document.querySelectorAll('.section5__list-link');
		for (var i = 0; i < section5ListLinks.length; i++) {
			section5ListLinks[i].onclick = function() {
				for (var i = 0; i < section5ListLinks.length; i++) {
					section5ListLinks[i].classList.remove('active');
				}
				this.classList.add('active');
			}
		}		

		$('.section5__list-link').click(function() {

			var info = $(this).attr('href') + ' .section5__content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
			$('.section5__content').hide(0, loadContent());//скрываем содержимое блока #content той страницы, на которой находимся//задать анимацию для содержимого
			$('#loader').fadeIn('slow');//анимация лоадера

			function loadContent() {//основная функция для загрузки контента
				$('.section5__content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
					$('.section5__content').fadeIn('normal', hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
				});
			}

			function hideLoader() {//функция для скрытия лоадера
				$('#loader').fadeOut('normal');
			}

			return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

		});//ajax вкладки end






		// Request Modals Show
		var modalOverlay = document.querySelector('.modal__overlay');
		var requestContainer = document.querySelector('.request__container');
		var requestCloseButton = document.querySelector('.request__close-button');
		var headerRequestLink = document.querySelector('.header__request-link');
		var section11RequestButton = document.querySelector('.section11__request-button');

		headerRequestLink.addEventListener('click', requestModalsShow);
		section11RequestButton.addEventListener('click', requestModalsShow);
		requestCloseButton.addEventListener('click', requestModalsHide);

		function requestModalsShow() {
			modalOverlay.style.display = 'block';
			requestContainer.style.opacity = '1';
			requestContainer.style.zIndex = '999';
		}

		function requestModalsHide() {
			modalOverlay.style.display = '';
			requestContainer.style.opacity = '';
			requestContainer.style.zIndex = '';
		}


		// Request Validation Check
		var modalSuccessContainer = document.querySelector('.modal__success-container');
		var modalCloseButton = document.querySelector('.modal__close-button');
		var requestSubmitButton = document.querySelector('.request__submit-button');
		var requestNameInput = document.querySelector('.request__name-input');
		var requestNumberInput = document.querySelector('.request__number-input');
		var requestEmailInput = document.querySelector('.request__email-input');
		var requestCheckbox = document.querySelector('.request__checkbox');
		var requestCheckboxDescription = document.querySelector('.request__checkbox-description');
		var requestValidationArr = [requestNameInput, requestNumberInput, requestEmailInput];

		requestSubmitButton.addEventListener('click', requestValidationCheck);
		modalCloseButton.addEventListener('click', modalSuccessHide);

		function requestValidationCheck() {
			for (var i = 0; i < requestValidationArr.length; i++) {
				if (!requestValidationArr[i].value) {
					requestValidationArr[i].style.borderColor = '#BA1C1B';
				} else {
					requestValidationArr[i].style.borderColor = '';
				}
			}
			if (!requestCheckbox.checked) {
				requestCheckboxDescription.style.color = '#BA1C1B';
			} else {
				requestCheckboxDescription.style.color = '';
			}
			if (requestNameInput.value && requestNumberInput.value && requestEmailInput.value && requestCheckbox.checked) {
				for (var i = 0; i < requestValidationArr.length; i++) {
					requestValidationArr[i].value = '';
					requestCheckbox.checked = false;
					requestContainer.style.opacity = '';
					requestContainer.style.zIndex = '';
					modalSuccessShow();
				}
			}
		}

		function modalSuccessShow() {
			modalOverlay.style.display = 'block';
			modalSuccessContainer.style.opacity = '1';
			modalSuccessContainer.style.zIndex = '999';
		}

		function modalSuccessHide() {
			modalOverlay.style.display = '';
			modalSuccessContainer.style.opacity = '';
			modalSuccessContainer.style.zIndex = '';
		}







		// Section2 validation check
		var section2NameInput = document.querySelector('.section2__name-input');
		var section2PhoneInput = document.querySelector('.section2__phone-input');
		var section2Checkbox = document.querySelector('.section2__checkbox');
		var section2CheckboxDescription = document.querySelector('.section2__checkbox-description');
		var section2SubmitButton = document.querySelector('.section2__submit-button');
		var section2ValidationArr = [section2NameInput, section2PhoneInput];

		section2SubmitButton.addEventListener('click', section2ValidationCheck);

		function section2ValidationCheck() {
			for (var i = 0; i < section2ValidationArr.length; i++) {
				if (!section2ValidationArr[i].value) {
					section2ValidationArr[i].style.borderColor = '#BA1C1B';
				} else {
					section2ValidationArr[i].style.borderColor = '';
				}
			}
			if (!section2Checkbox.checked) {
				section2CheckboxDescription.style.color = '#BA1C1B';
			} else {
				section2CheckboxDescription.style.color = '';
			}
			if (section2NameInput.value && section2PhoneInput.value && section2Checkbox.checked) {
				modalSuccessShow();
				for (var i = 0; i < section2ValidationArr.length; i++) {
					section2ValidationArr[i].value = '';
					section2Checkbox.checked = false;
				}
			}
		}








		// Section4 Validation Check
		var section4NameInput = document.querySelector('.section4__name-input');
		var section4PhoneInput = document.querySelector('.section4__phone-input');
		var section4EmailInput = document.querySelector('.section4__email-input');
		var section4Checkbox = document.querySelector('.section4__checkbox');
		var section4CheckboxDescription = document.querySelector('.section4__checkbox-description');
		var section4SubmitButton = document.querySelector('.section4__submit-button');
		var section4ValidationArr = [section4PhoneInput, section4EmailInput, section4NameInput];

		section4SubmitButton.addEventListener('click', section4ValidationCheck);

		function section4ValidationCheck() {
			for (var i = 0; i < section4ValidationArr.length; i++) {
				if (!section4ValidationArr[i].value) {
					section4ValidationArr[i].style.borderColor = '#BA1C1B';
				} else {
					section4ValidationArr[i].style.borderColor = '';
				}
			}
			if (!section4Checkbox.checked) {
				section4CheckboxDescription.style.color = '#BA1C1B';
			} else {
				section4CheckboxDescription.style.color = '';
			}
			if (section4PhoneInput.value && section4EmailInput.value && section4NameInput.value && section4Checkbox.checked) {
				modalSuccessShow();
				for (var i = 0; i < section4ValidationArr.length; i++) {
					section4ValidationArr[i].value = '';
					section4Checkbox.checked = false;
				}
			}
		}







		// Section10 validation check
		var section10NameInput = document.querySelector('.section10__name-input');
		var section10PhoneInput = document.querySelector('.section10__phone-input');
		var section10QuestionInput = document.querySelector('.section10__question-input');
		var section10Checkbox = document.querySelector('.section10__checkbox');
		var section10CheckboxDescription = document.querySelector('.section10__checkbox-description');
		var section10SubmitButton = document.querySelector('.section10__submit-button');
		var section10ValidationArr = [section10NameInput, section10PhoneInput, section10QuestionInput];

		section10SubmitButton.addEventListener('click', section10ValidationCheck);

		function section10ValidationCheck() {
			for (var i = 0; i < section10ValidationArr.length; i++) {
				if (!section10ValidationArr[i].value) {
					section10ValidationArr[i].style.borderColor = '#BA1C1B';
				} else {
					section10ValidationArr[i].style.borderColor = '';
				}
			}
			if (!section10Checkbox.checked) {
				section10CheckboxDescription.style.color = '#BA1C1B';
			} else {
				section10CheckboxDescription.style.color = '';
			}
			if (section10NameInput.value && section10PhoneInput.value && section10QuestionInput.value && section10Checkbox.checked) {
				modalSuccessShow();
				for (var i = 0; i < section10ValidationArr.length; i++) {
					section10ValidationArr[i].value = '';
					section10Checkbox.checked = false;
				}
			}
		}







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






	// Masked inputs
	jQuery(function($){
		$(".request__number-input, .section2__phone-input, .section4__phone-input, .section10__phone-input").mask("+9(999)999-99-99");
	});


});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log