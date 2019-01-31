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


	//remove active
	function removeActiveFun() {
		for (var i = 0; i < visitedLinks.length; i++) {
			visitedLinks[i].classList.remove('active');
		}
	}

	var visitedLinks = document.querySelectorAll('.visited__link');
	for (var i = 0; i < visitedLinks.length; i++) {
		visitedLinks[i].onclick = function() {
			removeActiveFun();
			this.classList.add('active');
		}
	}

	var joinSubmit = document.querySelectorAll('.join__submit');
	for (var i = 0; i < joinSubmit.length; i++) {
		joinSubmit[i].onclick = function() {
			removeActiveFun();
		}
	}

	var  livePoweredBy = document.querySelector('.live__powered-by');
	livePoweredBy.onclick = function() {
			removeActiveFun();
	}



	//modal videos
	var body = document.body;
	var watchNowLinks = document.querySelectorAll('.video__watch-now');
	var modalVideoContainer = document.querySelectorAll('.modal__video-container');
	var modalOverlay = document.querySelector('.modal__overlay');
	var modalCloseButtons = document.querySelectorAll('.modal__close-button');
	var videos = document.querySelectorAll('iframe');

	for (var i = 0; i < watchNowLinks.length; i++) {
		watchNowLinks[i].onclick = function() {
			for (var i = 0; i < watchNowLinks.length; i++) {
				watchNowLinks[i].classList.remove('play');
				this.classList.add('play');
				if (watchNowLinks[i].classList.contains('play')) {
					modalVideoContainer[i].style.display = 'block';
					videos[i].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
					modalOverlay.style.display = 'block';
					body.style.overflow = 'hidden';
				}
			}
		}
	}

	function hideModalVideos() {
		for (var i = 0; i < modalVideoContainer.length; i++) {
			modalVideoContainer[i].style.display = '';
			videos[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		}
		modalOverlay.style.display = '';
		body.style.overflow = 'auto';
	}

	for (var i = 0; i < modalCloseButtons.length; i++) {
		modalCloseButtons[i].onclick = function() {
			hideModalVideos();
		}
	}

	modalOverlay.onclick = function() {
		hideModalVideos();
	}


	//inputs validation
	var joinSubmitButtons = document.querySelectorAll('.join__submit');
	for (var i = 0; i < joinSubmitButtons.length; i++) {
		joinSubmitButtons[i].onclick = function() {

			var joinInputs = document.querySelectorAll('.join__input');
			for (var i = 0; i < joinInputs.length; i++) {
				if (joinInputs[i].value) {
					for (var i = 0; i < joinSubmitButtons.length; i++) {

						var thanks = document.createElement('p');
						thanks.classList.add('thanks__for-signing-up');
						thanks.innerHTML = 'Thanks for signing up!';
						joinSubmitButtons[i].parentNode.appendChild(thanks);


						joinSubmitButtons[i].parentNode.removeChild(joinSubmitButtons[i].previousElementSibling);
						joinSubmitButtons[i].parentNode.removeChild(joinSubmitButtons[i]);
					}
				}
			}


		}
	}


	//parallax
	window.onscroll = function() {
		if ($(window).width() > 960) {
			var ypos = window.pageYOffset;
			var parallax1 = document.querySelectorAll('.parallax1');
			var parallax2 = document.querySelectorAll('.parallax2');
			var parallax3 = document.querySelectorAll('.parallax3');

			for (var i = 0; i < parallax1.length; i++) {
				parallax1[i].style.top = ypos * -0.035 + 'rem';
			}
			for (var i = 0; i < parallax2.length; i++) {
				parallax2[i].style.top = 44.3 + ypos * 0.035 + 'rem';	
			}

			for (var i = 0; i < parallax3.length; i++) {
				if (ypos > 2200) {
					parallax3[i].style.top = -18.8 + (ypos - 2200) * 0.035 + 'rem';
				}
			}
		}
	}



	//smooth scrolling
	$('.nav__menu-link, .xperience-top__tickets-link').mPageScroll2id({
	  scrollSpeed: 200
	});


	//show/hide menu
	var navMenuButton = document.querySelector('.nav__menu-button');
	navMenuButton.onclick = function() {
		this.classList.toggle('active');
	}


});//doc.ready end


var cLog = function(n) {
	return console.log(n);
};//console.log