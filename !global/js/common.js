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

	//hamburger
	var hamburger = document.querySelector('.hamburger')
	var site = document.querySelector('.site');
	var siteOverlay = document.querySelector('.site__overlay');
	var menu = document.querySelector('.menu');

	hamburger.addEventListener('click', showMenu);

	function showMenu() {
		this.classList.toggle('active')
		site.classList.toggle('active');
		siteOverlay.classList.toggle('active');
		menu.classList.toggle('active');
		for (var i = 0; i < mainSliderOwlPages.length; i++) {
			menuLinks[i].classList.remove('active');
			if (mainSliderOwlPages[i].classList.contains('active')) {
				menuLinks[i].classList.add('active');
			}
		}
	}

	var menuLinks = document.querySelectorAll('.menu__link');
	for (var i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', hideMenu);
	}
	function hideMenu() {
		hamburger.classList.toggle('active')
		site.classList.toggle('active');
		siteOverlay.classList.toggle('active');
		menu.classList.toggle('active');
		for (var i = 0; i < menuLinks.length; i++) {
			menuLinks[i].classList.remove('active');
			this.classList.add('active');
			mainSliderOwlPages[i].classList.remove('active');
			if (menuLinks[i].classList.contains('active')) {
				mainSliderOwlPages[i].classList.add('active');
				mainSlider.trigger('owl.goTo', [i]);
			}
		}
	}

 //Каруселька
 //Документация: http://owlgraphic.com/owlcarousel/
 var mainSlider = $(".content__main-slider");
 mainSlider.owlCarousel({
	 items : 1,
	 autoPlay: false,
	 pagination: true,
	 transitionStyle: 'fade',
	 mouseDrag: false,
	 itemsDesktop: [1199,1],
	 itemsDesktopSmall: [979,1],
	 itemsTablet: [768,1],
	 itemsMobile: [479,1]
 });
 mainSlider.on("mousewheel DOMMouseScroll", '.owl-wrapper', function (e) {
  if(e.originalEvent.wheelDelta > 0) {
    mainSlider.trigger("owl.prev");
  } else {
    mainSlider.trigger("owl.next");
  }
  e.preventDefault();
});
 $('.home__slider-hire-link, .works__hire-us-link, .about__hire-us-link, .contact__hire-us-link').on('click', function() {
 	mainSlider.trigger('owl.goTo', 5);
 })

	var mainSliderOwlPages = document.querySelectorAll('.content__main-slider .owl-page');
	var mainSegmentations = document.querySelectorAll('.scale__main-segmentation');

	// for (var i = 0; i < mainSliderOwlPages.length; i++) {
	// 	mainSliderOwlPages[i].addEventListener('click', scaleSegmentationsSwitching);
	// }

 // function scaleSegmentationsSwitching() {
	// for (var i = 0; i < mainSliderOwlPages.length; i++) {
	// 	mainSliderOwlPages[i].classList.remove('active');
	// 	mainSegmentations[i].classList.remove('active');
	// }
	// this.classList.add('active');
	// for (var i = 0; i < mainSliderOwlPages.length; i++) {
	// 	if (mainSliderOwlPages[i].classList.contains('active')) {
	// 		mainSegmentations[i].classList.add('active');
	// 	}
	// }
 // }


//home__slider
 var homeSliderPaginationLinks = document.querySelectorAll('.home__slider-pagination-link');
 var homeSlides = document.querySelectorAll('.home__slide');
 for (var i = 0; i < homeSliderPaginationLinks.length; i++) {
 	homeSliderPaginationLinks[i].onclick = function() {
 		for (var i = 0; i < homeSliderPaginationLinks.length; i++) {
 			homeSliderPaginationLinks[i].classList.remove('active');
 			homeSlides[i].classList.remove('active');
 		}
 		this.classList.add('active');
 		for (var i = 0; i < homeSliderPaginationLinks.length; i++) {
 			if (homeSliderPaginationLinks[i].classList.contains('active')) {
 				homeSlides[i].classList.add('active');
 			}
 		}
 	}
 }

 //works__slider

 //hire-us__checkboxes background
 var hireUsCheckboxes = document.querySelectorAll('.hire-us__checkbox');
 for (var i = 0; i < hireUsCheckboxes.length; i++) {
 	hireUsCheckboxes[i].onclick = function() {
 		for (var i = 0; i < hireUsCheckboxes.length; i++) {
 			if (hireUsCheckboxes[i].checked) {
 				hireUsCheckboxes[i].parentNode.classList.add('active');
 			} else {
 				hireUsCheckboxes[i].parentNode.classList.remove('active');
 			}
 		}
 	}
 }
 //hire-us__inputs
 var hireUsInputs = document.querySelectorAll('.hire-us__input');
 for (var i = 0; i < hireUsInputs.length; i++) {
 	hireUsInputs[i].onfocus = function() {
 		this.classList.add('active');
 		this.parentNode.classList.add('active');
 	}
 	hireUsInputs[i].onblur = function() {
 		if (!this.value) {
 			this.classList.remove('active');
 			this.parentNode.classList.remove('active');
 		}
 	}
 }

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log