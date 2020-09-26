'use strict';

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

$(document).ready(function() {

	//prevent default
	function prevdef() {
		$('.prevdef').click(function(event) {
			event.preventDefault();
		});
	}// prevdef();
	prevdef();

		// Slider1
	var section1TabsLinks = document.querySelectorAll('.projects__list-link');
	var section1Slides = document.querySelectorAll('.projects__slide');
	var section1PaginationElems = document.querySelectorAll('.projects__pagination-elem');
	var section1PrevButton = document.querySelector('.projects__prev-button');
	var section1NextButton = document.querySelector('.projects__next-button');
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







	let portfolioVideoOverlay = document.querySelector('.control__video-overlay');
	let portfolioVideoPlayButton = document.querySelector('.control__video-play-button');
	let portfolioVideo = document.querySelector('.control__video');
	portfolioVideoPlayButton.onclick = function() {
		portfolioVideo.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		window.timerId = window.setInterval(function() {
			portfolioVideoOverlay.style.opacity = '0';
			window.timerId = window.setInterval(function() {
				portfolioVideo.style.zIndex = '3';
			}, 1500);
		}, 1000);
	}







	let wildestLinks = document.querySelectorAll('.wildest__list-link');
	for (let i = 0; i < wildestLinks.length; i++) {
		wildestLinks[i].onclick = function() {
			for (let i = 0; i < wildestLinks.length; i++) {
				wildestLinks[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	}

	//AJAX вкладки (анимацию делать на keyframes)
	$('.wildest__list-link').click(function() {

		var info = $(this).attr('href') + ' .wildest__content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
		$('.wildest__content').hide(0, loadContent());//скрываем содержимое блока .wildest__content той страницы, на которой находимся//задать анимацию для содержимого
		$('#loader').fadeIn('slow');//анимация лоадера

		function loadContent() {//основная функция для загрузки контента
			$('.wildest__content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
				$('.wildest__content').fadeIn('fast', hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
			});
		}

		function hideLoader() {//функция для скрытия лоадера
			$('#loader').fadeOut('normal');
		}

		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

	});//ajax вкладки end












	// Slider2
	var section2TabsLinks = document.querySelectorAll('.working__list-link');
	var section2Slides = document.querySelectorAll('.working__slide');
	var section2PaginationElems = document.querySelectorAll('.working__pagination-elem');
	var slider2Counter = 0;

	for (var i = 0; i < section2TabsLinks.length; i++) {
		section2TabsLinks[i].addEventListener('click', slider2TabsLinksSwitch);
	}
	for (var i = 0; i < section2PaginationElems.length; i++) {
		section2PaginationElems[i].addEventListener('click', slider2PaginationElemsSwitch);
	}

	function startSlider2() {
		window.slider1 = window.setInterval(function() {
			slider2Counter++;
			if (slider2Counter >= section2Slides.length) {
				slider2Counter = 0;
			}
			for (var i = 0; i < section2Slides.length; i++) {
				section2Slides[i].classList.remove('active');
				section2Slides[slider2Counter].classList.add('active');
				section2PaginationElems[i].classList.remove('active');
				section2PaginationElems[slider2Counter].classList.add('active');
				section2TabsLinks[i].classList.remove('active');
				section2TabsLinks[slider2Counter].classList.add('active');
			}
		}, 4000);
	}
	startSlider2();

	function stopSlider2() {
		window.clearInterval(window.slider1);
	}

	function slider2TabsLinksSwitch(argument) {
		stopSlider2();
		for (var i = 0; i < section2TabsLinks.length; i++) {
			section2TabsLinks[i].classList.remove('active');
			this.classList.add('active');
			if (section2TabsLinks[i].classList.contains('active')) {
				slider2Counter = i;
			}
		}
		for (var i = 0; i < section2Slides.length; i++) {
			section2Slides[i].classList.remove('active');
			section2Slides[slider2Counter].classList.add('active');
			section2PaginationElems[i].classList.remove('active');
			section2PaginationElems[slider2Counter].classList.add('active');
		}
		startSlider2();
	}

	function slider2PaginationElemsSwitch() {
		stopSlider2();
		for (var i = 0; i < section2PaginationElems.length; i++) {
			section2PaginationElems[i].classList.remove('active');
			this.classList.add('active');
			if (section2PaginationElems[i].classList.contains('active')) {
				slider2Counter = i;
			}
		}
		for (var i = 0; i < section2Slides.length; i++) {
			section2Slides[i].classList.remove('active');
			section2Slides[slider2Counter].classList.add('active');
			section2TabsLinks[i].classList.remove('active');
			section2TabsLinks[slider2Counter].classList.add('active');
		}
		startSlider2();
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
	  var map = new ymaps.Map('map', {
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










	// modals
	let modalOverlay = document.querySelector('.modal__overlay');

	let modalSuccessContainer = document.querySelector('.modal__success-container');
	let modalCloseButton = document.querySelector('.modal__close-button');
	let modalFormContainer = document.querySelector('.modal__form-container');
	let modalFormCloseButton = document.querySelector('.modal__form-close-button');
	let modalSubmitButton = document.querySelector('.modal__submit-button');
	let modalNameInput = document.querySelector('.modal__name-input');
	let modalPhoneInput = document.querySelector('.modal__phone-input');
	let modalEmailInput = document.querySelector('.modal__email-input');
	let modalCheckbox = document.querySelector('.modal__checkbox');
	let modalCheckboxDescription = document.querySelector('.modal__checkbox-description');
	let modalValidationArr = [modalNameInput, modalPhoneInput, modalEmailInput];

	let headerRequestButton = document.querySelector('.header__request-a-call-link');
	let footerRequestButton = document.querySelector('.footer__request-link');

	headerRequestButton.addEventListener('click', showModalForm);
	footerRequestButton.addEventListener('click', showModalForm)
	modalCloseButton.addEventListener('click', hideModals);
	modalFormCloseButton.addEventListener('click', hideModals);

	modalSubmitButton.addEventListener('click', modalValidationCheck);

	function showModalForm() {
		modalOverlay.style.display = 'block';
		modalFormContainer.style.opacity = '1';
		modalFormContainer.style.zIndex = '999';
	}

	function hideModals() {
		modalOverlay.style.display = '';
		modalFormContainer.style.opacity = '';
		modalFormContainer.style.zIndex = '';
		modalSuccessContainer.style.opacity = '';
		modalSuccessContainer.style.zIndex = '';
	}

	function modalValidationCheck() {
		for (let i = 0; i < modalValidationArr.length; i++) {
			if (!modalValidationArr[i].value) {
				modalValidationArr[i].style.borderBottomColor = 'red';
			} else {
				modalValidationArr[i].style.borderBottomColor = '';
			}
		}

		if (!modalCheckbox.checked) {
			modalCheckboxDescription.style.color = 'red';
		} else {
			modalCheckboxDescription.style.color = '';
		}

		if (modalNameInput.value && modalPhoneInput.value && modalEmailInput.value && modalCheckbox.checked) {
			for (let i = 0; i < modalValidationArr.length; i++) {
				modalValidationArr[i].value = '';
				modalValidationArr[i].style.borderBottomColor = '';
				modalCheckbox.style.color = '';
				modalCheckbox.checked = false;
			}
			hideModals();
			modalSuccessShow();
		}
	}

	function modalSuccessShow() {
		modalOverlay.style.display = 'block';
		modalSuccessContainer.style.opacity = '1';
		modalSuccessContainer.style.zIndex = '999';
	}


	let controlNameInput = document.querySelector('.control__name-input');
	let controlPhoneInput = document.querySelector('.control__phone-input');
	let controlSubmitButton = document.querySelector('.control__submit-button');
	let controlCheckbox = document.querySelector('.control__checkbox');
	let controlCheckboxDescription = document.querySelector('.control__checkbox-description');
	let controlValidationArr = [controlNameInput, controlPhoneInput];

	controlSubmitButton.addEventListener('click', controlValidationCheck);

	function controlValidationCheck() {
		for (let i = 0; i < controlValidationArr.length; i++) {
			if (!controlValidationArr[i].value) {
				controlValidationArr[i].style.borderBottomColor = 'red';
			} else {
				controlValidationArr[i].style.borderBottomColor = '';
			}
		}

		if (!controlCheckbox.checked) {
			controlCheckboxDescription.style.color = 'red';
		} else {
			controlCheckboxDescription.style.color = '';
		}

		if (controlNameInput.value && controlPhoneInput.value && controlCheckbox.checked) {
			modalSuccessShow();
			controlNameInput.value = '';
			controlPhoneInput.value = '';
			controlCheckbox.checked = false;
		}
	}


	let requestNameInput = document.querySelector('.request__name-input');
	let requestPhoneInput = document.querySelector('.request__phone-input');
	let requestEmailInput = document.querySelector('.request__email-input');
	let requestCheckbox = document.querySelector('.request__checkbox');
	let requestCheckboxDescription = document.querySelector('.request__checkbox-description');
	let requestSubmitButton = document.querySelector('.request__submit-button');
	let requestValidationArr = [requestNameInput, requestPhoneInput, requestEmailInput];

	requestSubmitButton.addEventListener('click', requestValidationCheck);

	function requestValidationCheck() {
		for (let i = 0; i < requestValidationArr.length; i++) {
			if (!requestValidationArr[i].value) {
				requestValidationArr[i].style.borderBottomColor = 'red';
			} else {
				requestValidationArr[i].style.borderBottomColor = '';
			}
		}

		if (!requestCheckbox.checked) {
			requestCheckboxDescription.style.color = 'red';
		} else {
			requestCheckboxDescription.style.color = '';
		}

		if (requestNameInput.value && requestPhoneInput.value && requestEmailInput.value && requestCheckbox.checked) {
			for (let i = 0; i < requestValidationArr.length; i++) {
				requestValidationArr[i].value = '';
				requestCheckbox.checked = false;
			}
			modalSuccessShow();
		}
	}



	let questionsNameInput = document.querySelector('.questions__name-input');
	let questionsPhoneInput = document.querySelector('.questions__phone-input');
	let questionsQuestionInput = document.querySelector('.questions__question-input');
	let questionsCheckbox = document.querySelector('.questions__checkbox');
	let questionsCheckboxDescription = document.querySelector('.questions__checkbox-description');
	let questionsSubmitButton = document.querySelector('.questions__submit-button');
	let questionsValidationArr = [questionsNameInput, questionsPhoneInput, questionsQuestionInput];

	questionsSubmitButton.addEventListener('click', questionsValidationCheck);

	function questionsValidationCheck() {
		for (let i = 0; i < questionsValidationArr.length; i++) {
			if (!questionsValidationArr[i].value) {
				questionsValidationArr[i].style.borderBottomColor = 'red';
			} else {
				questionsValidationArr[i].style.borderBottomColor = '';
			}
		}

		if (!questionsCheckbox.checked) {
			questionsCheckboxDescription.style.color = 'red';
		} else {
			questionsCheckboxDescription.style.color = '';
		}

		if (questionsNameInput.value && questionsPhoneInput.value && questionsQuestionInput.value && questionsCheckbox.checked) {
			for (let i = 0; i < questionsValidationArr.length; i++) {
				questionsValidationArr[i].value = '';
				questionsCheckbox.checked = false;
			}
			modalSuccessShow();
		}
	}

	jQuery(function($){
		$(".modal__phone-input").mask("+9(999)999-99-99");
		$(".control__phone-input").mask("+9(999)999-99-99");
		$(".request__phone-input").mask("+9(999)999-99-99");
		$(".questions__phone-input").mask("+9(999)999-99-99");
	});


	$('.to-top-link, .header__menu-link, .footer__menu-link').mPageScroll2id({
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