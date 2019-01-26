// 'use strict';
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

// document.body.onload = function() {
// 	setTimeout(function() {
// 		var preloader = document.getElementById('page-preloader');
// 		if (!preloader.classList.contains('done')) {
// 			preloader.classList.add('done');
// 		}
// 	}, 100);
// }

$(document).ready(function() {

	//prevent default
	function prevdef() {
		$('.prevdef').click(function(event) {
			event.preventDefault();
		});
	}
	prevdef();

	var menuLink = $('header .main-menu li a');

	$(menuLink).on('click', function() {
		$(menuLink).removeClass('active');
		$(this).addClass('active');
	})

	 //Каруселька
	 var owl = $(".slider");
	 owl.owlCarousel({
		 items : 1,
		 autoPlay: 5000,
		 // pagination: false,
		 transitionStyle: 'fade',
		 itemsDesktop: [1199,1],
		 itemsDesktopSmall: [979,1],
		 itemsTablet: [768,1],
		 itemsMobile: [479,1]
	 });

	// Map	
	ymaps.ready(init);

	var placemarks = [
	  {
	    latitude: 59.94030000,
	    longitude:  30.32205450,
	    hintContent: '<div class="map__hint">191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</div>',
	    balloonContent: [
	      // '<div class="map__balloon">',
	      // '<img class="map__burger" src="img/contacts-map-marker.png" alt"Бургер"/>',
	      // 'Самые вкусные бургеры у нас! Приходите по адресу: Дворцовая пл., 2, Санкт-Петербург, 190000',
	      // '</div>'
	    ]
	  },
	  // {
	  //   latitude: 59.95,
	  //   longitude: 30.31,
	  //   hintContent: '<div class="map__hint">Дворцовая пл., 2, Санкт-Петербург, 190000</div>',
	  //   balloonContent: [
	  //     '<div class="map__balloon">',
	  //     '<img class="map__burger" src="img/contacts-map-marker.png" alt"Бургер"/>',
	  //     'Самые вкусные бургеры у нас! Приходите по адресу: Дворцовая пл., 2, Санкт-Петербург, 190000',
	  //     '</div>'
	  //   ]
	  // }
	],
	  geoObjects = [];//var placemarks end

	function init() {
	  var map = new ymaps.Map('map', {
	    center: [59.93973906, 30.317000050],
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
	      iconImageHref: 'img/map-pin.png',
	      iconImageSize: [231, 190],//размер изображения
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

	//modal and form validate
	var contact = $('#contact');

	var modalOverlay = $('.modal-overlay');
	var modalContact = $('.modal-contact');
	var modalThanks = $('.modal-thanks');

	var name = $('#name');
	var email = $('#email');
	var message = $('#message');
	var submit = $('#submit');
	var close = $('.close');

	$(contact).on('click', function() {
		$(modalOverlay).show();
		$(modalContact).show();
		$(name.val(''));
		$(email.val(''));
		$(message.val(''));
	})

	$(close).on('click', function() {
		$(modalOverlay).hide();
		$(modalContact).hide();
		$(modalThanks).hide();
		$(name).css('border-color', '#D7DCDE');
		$(email).css('border-color', '#D7DCDE');
		$(message).css('border-color', '#D7DCDE');
	})

	function formArr() {
		var arr = [name, email, message];

		for (var i = 0; i < arr.length; i++) {
			if (!arr[i].val()) {
				arr[i].css('border-color', '#FB565A');
			} else if (arr[i].val()) {
				arr[i].css('border-color', '#D7DCDE');
			} else {
				console.log('errror');
			}

			if (arr[0].val() && arr[1].val() && arr[2].val()) {
				$(modalContact).hide();
				$(modalThanks).show();
			}
		}
	}

	$(submit).on('click', function() {
		formArr();
	})

	//arrows active
	var arrow = $('.arrow');
	$(arrow).on('click', function() {
		$(arrow).children().removeClass('active');
		$(this).children().addClass('active');
	})
	//page active
	var page = $('.page');
	$(page).on('click', function() {
		$(page).removeClass('active');
		$(this).addClass('active');
	})

	//range
	var range = $('#range');
	var output = $('#output');
	$(range).on('change mousemove', function() {
		$(output).text($(this).val());
	})

});//doc.ready end