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

	var headerMenuLinks = document.querySelectorAll('.header__menu-link');

	for (var i = 0; i < headerMenuLinks.length; i++) {
		headerMenuLinks[i].onclick = function() {
			for (var i = 0; i < headerMenuLinks.length; i++) {
				headerMenuLinks[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	}



	var projectsListLinks = document.querySelectorAll('.projects__list-link');
	var projectsSlides = document.querySelectorAll('.projects__slide');
	var projectsPrevButton = document.querySelector('.projects__prev-button');
	var projectsNextButton = document.querySelector('.projects__next-button');
	var projectsCounter = 0;

	projectsNextButton.addEventListener('click', increaseProjectsCounter);
	projectsPrevButton.addEventListener('click', decreaseProjectsCounter);
	for (var i = 0; i < projectsListLinks.length; i++) {
		projectsListLinks[i].addEventListener('click', projectsSwitchingTabs2);
	}

	function increaseProjectsCounter() {
		projectsCounter++;
		projectCounterStatementCheck();
		cLog(projectsCounter);
	}
	function decreaseProjectsCounter() {
		projectsCounter--;
		projectCounterStatementCheck();
		cLog(projectsCounter);
	}
	function projectCounterStatementCheck() {
		if (projectsCounter >= projectsSlides.length) {
			projectsCounter = projectsSlides.length - 1;
		}
		if (projectsCounter <= 0) {
			projectsCounter = 0;
		}
		projectsSwitchButtonsStyle();
		projectsSwitchingSlides();
		projectsSwitchingTabs1();
	}
	function projectsSwitchButtonsStyle() {
		if (projectsCounter > 0) {
			projectsPrevButton.style.opacity = '1';
			projectsPrevButton.style.zIndex = '3';
		} else {
			projectsPrevButton.style.opacity = '';
			projectsPrevButton.style.zIndex = '';
		}
		if (projectsCounter >= projectsSlides.length - 1) {
			projectsNextButton.style.opacity = '0';
			projectsNextButton.style.zIndex = '-1';
		} else {
			projectsNextButton.style.opacity = '';
			projectsNextButton.style.zIndex = '';
		}
	}
	function projectsSwitchingSlides() {
		for (var i = 0; i < projectsSlides.length; i++) {
			projectsSlides[i].classList.remove('active');
			projectsSlides[projectsCounter].classList.add('active');
		}
	}
	function projectsSwitchingTabs1() {
		for (var i = 0; i < projectsListLinks.length; i++) {
			projectsListLinks[i].classList.remove('active');
			projectsListLinks[projectsCounter].classList.add('active');
		}
	}
	function projectsSwitchingTabs2() {
		for (var i = 0; i < projectsListLinks.length; i++) {
			projectsListLinks[i].classList.remove('active');
		}
		this.classList.add('active');
		for (var i = 0; i < projectsListLinks.length; i++) {
			if (projectsListLinks[i].classList.contains('active')) {
				projectsCounter = i;
			}
		}
		projectsSwitchingSlides();
		projectsSwitchButtonsStyle();
	}




	var onlineControlVideoButton = document.querySelector('.online-control__video-button');
	var onlineControlVideoOverlay = document.querySelector('.online-control__video-overlay');
	var onlineControlVideo = document.querySelector('.online-control__video');

	onlineControlVideoButton.onclick = function() {
		onlineControlVideoOverlay.style.opacity = '0';
		onlineControlVideoOverlay.style.zIndex = '-1';
		this.style.opacity = '0';
		this.style.zIndex = '-1';

		onlineControlVideo.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	}




	var wildestFantasiesListLinks = document.querySelectorAll('.wildest-fantasies__list-link');
	for (var i = 0; i < wildestFantasiesListLinks.length; i++) {
		wildestFantasiesListLinks[i].onclick = function() {
			for (var i = 0; i < wildestFantasiesListLinks.length; i++) {
				wildestFantasiesListLinks[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	}

	//AJAX вкладки (анимацию делать на keyframes)
	$('.wildest-fantasies__list-link').click(function() {

		var info = $(this).attr('href') + ' .wildest-fantasies__ajax-section';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
		$('.wildest-fantasies__ajax-section').hide(0, loadContent());//скрываем содержимое блока #content той страницы, на которой находимся//задать анимацию для содержимого
		$('#loader').fadeIn('slow');//анимация лоадера

		function loadContent() {//основная функция для загрузки контента
			$('.wildest-fantasies__ajax-section').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
				$('.wildest-fantasies__ajax-section').fadeIn('slow', hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
			});
		}

		function hideLoader() {//функция для скрытия лоадера
			$('#loader').fadeOut('normal');
		}

		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

	});//ajax вкладки end




	var workingSlides = document.querySelectorAll('.working__slide');
	var workingTabs = document.querySelectorAll('.working__tabs-list-link');
	var workingPagipationElems document.querySelectorAll('.working__pagination-elem');
	var workingPrevButton = document.querySelector('.working__prev-button');
	var workingNextButton = document.querySelector('.working__next-button');

	

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log