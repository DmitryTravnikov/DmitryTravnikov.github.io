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

	// Header Menu Links
	let headerMenuLinks = document.querySelectorAll('.header__menu-link');
	let headerSubmenus = document.querySelectorAll('.header__submenu');
	
	for (let i = 0; i < headerMenuLinks.length; i++) {
		headerMenuLinks[i].onclick = function() {
			this.parentNode.classList.toggle('active');
		}
	}












	// Hamburger
	let headerHamburger = document.querySelector('.header__hamburger');
	let headerMenuNFakeSelectContainer = document.querySelector('.header__menu-n-fake-select-container');
	headerHamburger.onclick = function() {
		this.classList.toggle('active');
		headerMenuNFakeSelectContainer.classList.toggle('active');
	}










	// Header Select
	let headerFakeSelect = document.querySelector('.header__fake-select');
	headerFakeSelect.onclick = function() {
		this.classList.toggle('active');
	}









	


	
	// Main select
	let mainSortSelect = document.querySelector('.main__sort-select');
	let mainFakeSelect = document.querySelector('.main__fake-select');
	let mainFakeOptionsContainer = document.querySelector('.main__fake-options-container');
	let mainFakeOptions = document.querySelectorAll('.main__fake-option');

	mainFakeSelect.addEventListener('click', showMainFakeOptionsContainer);

	for (let i = 0; i < mainFakeOptions.length; i++) {
		mainFakeOptions[i].addEventListener('click', mainFakeOptionsToggleActive);
	}

	mainFakeOptionsContainer.addEventListener('mouseleave', hideMainFakeOptionsContainer)

	function showMainFakeOptionsContainer() {
		this.classList.toggle('active');
		mainFakeOptionsContainer.classList.toggle('active');
	}

	function mainFakeOptionsToggleActive() {
		for (let i = 0; i < mainFakeOptions.length; i++) {
			mainFakeOptions[i].classList.remove('active');
		}

		this.classList.add('active');
		mainFakeSelect.innerHTML = this.innerHTML;

		for (let i = 0; i < mainFakeOptions.length; i++) {
			if (mainFakeOptions[i].classList.contains('active')) {
				mainSortSelect.options[i].selected = true;
			}
		}

		hideMainFakeOptionsContainer();
	}

	function hideMainFakeOptionsContainer() {
		mainFakeOptionsContainer.classList.remove('active');
		mainFakeSelect.classList.remove('active');
	}

	











	

	// Main Collapsed Blocks
	let mainCollapseButtons = document.querySelectorAll('.main__collapse-button');
	let mainCollapsedBlocks = document.querySelectorAll('.main__collapsed-block');

	for (let i = 0; i < mainCollapseButtons.length; i++) {
		mainCollapseButtons[i].addEventListener('click', mainCollapsedBlockToggle);
	}

	function mainCollapsedBlockToggle() {
		this.classList.toggle('active');
		for (let i = 0; i < mainCollapseButtons.length; i++) {
			if (mainCollapseButtons[i].classList.contains('active')) {
				mainCollapsedBlocks[i].classList.add('active');
				for (let j = 0; j < mainCollapseButtons[i].children.length; j++) {
					if (window.innerWidth < 992) {
						mainCollapseButtons[i].children[j].innerHTML = 'Свернуть';
					}
					if (window.innerWidth >= 992) {
						mainCollapseButtons[i].children[j].innerHTML = '';
					}
				}
			} else {
				mainCollapsedBlocks[i].classList.remove('active');
				for (let j = 0; j < mainCollapseButtons[i].children.length; j++) {
					if (window.innerWidth < 992) {
						mainCollapseButtons[i].children[j].innerHTML = 'Развернуть';
					}
					if (window.innerWidth >= 992) {
						mainCollapseButtons[i].children[j].innerHTML = '';
					}
				}
			}
		}
	}

	for (let i = 0; i < mainCollapseButtons.length; i++) {
		for (let j = 0; j < mainCollapseButtons[i].children.length; j++) {	
			if (window.innerWidth >= 992) {
				mainCollapseButtons[i].children[j].innerHTML = '';
			}
		}
	}















	// Main Slider
	if (window.innerWidth < 992) {
		var mainSlider = $(".main__slider");
		mainSlider.owlCarousel({
			items : 1,
			autoPlay: 5000,
			pagination: true,
			transitionStyle: 'fade',
			itemsDesktop: [1199,1],
			itemsDesktopSmall: [991,1],
			itemsTablet: [767,1],
			itemsMobile: [575,1]
		});
		$(".main__next-button").click(function(){
			mainSlider.trigger("owl.next");
		});
		$(".main__prev-button").click(function(){
			mainSlider.trigger("owl.prev");
		});//карусель end
	}















	// Main Show Button

















	// Windows Map	
	ymaps.ready(init);

	var placemarks = [
	  {
	    latitude: 55.747378844904134,
	    longitude: 37.61655558803437,
	    hintContent: '<div class="map__hint">Cофийская набережная, 16, Москва, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="assets/windows-map-pin.webp" alt"Бургер"/>',
	      'Самые качественные окна у нас! Приходите по адресу: Cофийская набережная, 16, Москва, 190000',
	      '</div>'
	    ]
	  },
	  {
	    latitude: 55.7459,
	    longitude: 37.615,
	    hintContent: '<div class="map__hint">Cофийская набережная, 16, Москва, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="assets/windows-map-pin.webp" alt"Бургер"/>',
	      'Самые качественные окна у нас! Приходите по адресу: Cофийская набережная, 16, Москва, 190000',
	      '</div>'
	    ]
	  },
	  {
	    latitude: 55.74895,
	    longitude: 37.61591,
	    hintContent: '<div class="map__hint">Cофийская набережная, 16, Москва, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="assets/windows-map-pin.webp" alt"Бургер"/>',
	      'Самые качественные окна у нас! Приходите по адресу: Cофийская набережная, 16, Москва, 190000',
	      '</div>'
	    ]
	  },
	  {
	    latitude: 55.74850,
	    longitude: 37.61450,
	    hintContent: '<div class="map__hint">Cофийская набережная, 16, Москва, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="assets/windows-map-pin.webp" alt"Бургер"/>',
	      'Самые качественные окна у нас! Приходите по адресу: Cофийская набережная, 16, Москва, 190000',
	      '</div>'
	    ]
	  },
	  {
	    latitude: 55.74810,
	    longitude: 37.61110,
	    hintContent: '<div class="map__hint">Cофийская набережная, 16, Москва, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="assets/windows-map-pin.webp" alt"Бургер"/>',
	      'Самые качественные окна у нас! Приходите по адресу: Cофийская набережная, 16, Москва, 190000',
	      '</div>'
	    ]
	  },
	  {
	    latitude: 55.74710,
	    longitude: 37.61010,
	    hintContent: '<div class="map__hint">Cофийская набережная, 16, Москва, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="assets/windows-map-pin.webp" alt"Бургер"/>',
	      'Самые качественные окна у нас! Приходите по адресу: Cофийская набережная, 16, Москва, 190000',
	      '</div>'
	    ]
	  },
	  {
	    latitude: 55.74910,
	    longitude: 37.61010,
	    hintContent: '<div class="map__hint">Cофийская набережная, 16, Москва, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="assets/windows-map-pin.webp" alt"Бургер"/>',
	      'Самые качественные окна у нас! Приходите по адресу: Cофийская набережная, 16, Москва, 190000',
	      '</div>'
	    ]
	  },
	  {
	    latitude: 55.74710,
	    longitude: 37.61910,
	    hintContent: '<div class="map__hint">Cофийская набережная, 16, Москва, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="assets/windows-map-pin.webp" alt"Бургер"/>',
	      'Самые качественные окна у нас! Приходите по адресу: Cофийская набережная, 16, Москва, 190000',
	      '</div>'
	    ]
	  },
	  {
	    latitude: 55.74810,
	    longitude: 37.61910,
	    hintContent: '<div class="map__hint">Cофийская набережная, 16, Москва, 190000</div>',
	    balloonContent: [
	      '<div class="map__balloon">',
	      '<img class="map__burger" src="assets/windows-map-pin.webp" alt"Бургер"/>',
	      'Самые качественные окна у нас! Приходите по адресу: Cофийская набережная, 16, Москва, 190000',
	      '</div>'
	    ]
	  }
	],
	  geoObjects = [];//var placemarks end

	function init() {
	  var map = new ymaps.Map('windows-map', {
	    center: [55.747378844904134,37.61655558803437],
	    zoom: 16,
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
	      iconImageHref: 'assets/windows-map-pin.webp',
	      iconImageSize: [32, 32],//размер изображения
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

	
	if (window.innerWidth >= 992) {
		let windowsMapWrapper = document.querySelector('.windows-map-wrapper');
		windowsMapWrapper.parentNode.removeChild(windowsMapWrapper.parentNode.lastChild);
		let windowsMapContainer = document.createElement('div');
		windowsMapContainer.classList.add('windows-map-container');
		windowsMapWrapper.appendChild(windowsMapContainer);
		let windowsMap = document.createElement('div');
		windowsMap.classList.add('windows-map');
		windowsMap.id = 'windows-map';
		windowsMapContainer.appendChild(windowsMap);
	}















	// Testimonials Slider
	if (window.innerWidth < 992) {
		var testimonialsSlider = $(".testimonials__slider");
		testimonialsSlider.owlCarousel({
			items : 1,
			autoPlay: 5000,
			pagination: true,
			transitionStyle: 'fade',
			itemsDesktop: [1199,1],
			itemsDesktopSmall: [991,1],
			itemsTablet: [767,1],
			itemsMobile: [575,1]
		});
		$(".testimonials__next-button").click(function(){
			testimonialsSlider.trigger("owl.next");
		});
		$(".testimonials__prev-button").click(function(){
			testimonialsSlider.trigger("owl.prev");
		});//карусель end
	}
















	// Testimonials Show More
	let testimonialsSlides = document.querySelectorAll('.testimonials__slide');
	let testimonialsShowMoreButton = document.querySelector('.testimonials__show-more-button');
	let testimonialsCounter = 0;

	testimonialsShowMoreButton.addEventListener('click', testimonialsShowMore);

	function testimonialsShowMore() {
		testimonialsCounter++;
		testimonialsSlides[testimonialsCounter].classList.add('active');
		if (testimonialsCounter >= testimonialsSlides.length - 1) {
			testimonialsShowMoreButton.removeEventListener('click', testimonialsShowMore);
			testimonialsShowMoreButton.addEventListener('click', testimonialsShowLess);
			this.innerHTML = 'Свернуть';
		}
	}

	function testimonialsShowLess() {
		for (let i = 1; i < testimonialsSlides.length; i++) {
			testimonialsSlides[i].classList.remove('active');
		}
		testimonialsCounter = 0;
		testimonialsShowMoreButton.innerHTML = 'Показать еще';
		testimonialsShowMoreButton.removeEventListener('click', testimonialsShowLess);
		testimonialsShowMoreButton.addEventListener('click', testimonialsShowMore);
	}













	// Accordion
	let accordionHeadlines = document.querySelectorAll('.accordion__panel-headline');
	for (let i = 0; i < accordionHeadlines.length; i++) {
		accordionHeadlines[i].onclick = function() {
			for (let i = 0; i < accordionHeadlines.length; i++) {
				accordionHeadlines[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	}

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log