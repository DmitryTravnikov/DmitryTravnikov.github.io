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

document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById('preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000);
}

$(document).ready(function() {

	//prevent default
	function prevdef() {
		$('.prevdef').click(function(event) {
			event.preventDefault();
		});
	}// prevdef();
	prevdef();


	//lang select
	var headerLangPics = document.querySelectorAll('.header__lang-pic');
	var headerSelectOptionsReal = document.querySelectorAll('.header__select-option-real');
	var headerLangSelectFake = document.querySelector('.header__lang-select-fake');
	var headerFakeOptionsContainer = document.querySelector('.header__fake-options-container');
	var headerLangSelectOptionsFake = document.querySelectorAll('.header__lang-select-option-fake');

	headerLangSelectFake.onclick = function() {
		this.classList.toggle('active');
		if (this.classList.contains('active')) {
			headerFakeOptionsContainer.style.opacity = '1';
			headerFakeOptionsContainer.style.zIndex = '999';
		} else {
			headerFakeOptionsContainer.style.opacity = '';
			headerFakeOptionsContainer.style.zIndex = '';
		}
	}

	for (var i = 0; i < headerLangSelectOptionsFake.length; i++) {
		headerLangSelectOptionsFake[i].onclick = function() {
			for (var i = 0; i < headerLangSelectOptionsFake.length; i++) {
				headerLangSelectOptionsFake[i].classList.remove('active');
				headerLangPics[i].classList.remove('active');
			}
			this.classList.add('active');
			headerLangSelectFake.innerHTML = this.innerHTML;
			for (var i = 0; i < headerLangSelectOptionsFake.length; i++) {
				if (headerLangSelectOptionsFake[i].classList.contains('active')) {
					headerSelectOptionsReal[i].selected = true;
					headerLangPics[i].classList.add('active');
				}
			}
			headerLangSelectFake.classList.remove('active');
			headerFakeOptionsContainer.style.opacity = '';
			headerFakeOptionsContainer.style.zIndex = '';
		}
	}




	//video
	var videoSectionPlayButton = document.querySelector('.video-section__play-button');
	var videoSectionVideoOverlay = document.querySelector('.video-section__video-overlay');
	var videoSectionVideo = document.querySelector('.video-section__video');

	videoSectionPlayButton.onclick = function() {
		videoSectionVideoOverlay.style.opacity = '0';
		videoSectionVideoOverlay.style.zIndex = '-1';
		videoSectionVideo.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		this.style.opacity = '0';
		this.style.zIndex = '-1';
	}





	//carousel
	var left = 'left';
	var center = 'center';
	var right = 'right';
	var counter1 = 0;
	var counter2 = 1;
	var counter3 = 2;

	var slides = document.querySelectorAll('.saving-money__slide');
	(function() {
		window.timerId = window.setInterval(function() {
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove(left);
				slides[i].classList.remove(right);
				slides[i].classList.remove(center);
				slides[counter1].classList.add(right);
				slides[counter2].classList.add(left);
				slides[counter3].classList.add(center);
			}
			counter1++;
			counter2++;
			counter3++;
			if (counter1 >= slides.length) {
				counter1 = 0;
			}
			if (counter2 >= slides.length) {
				counter2 = 0;
			}
			if (counter3 >= slides.length) {
				counter3 = 0;
			}
		}, 2000);
	})();


	//service select
	var contactSelectReal = document.querySelector('.contact__select-real');
	var contactSelectOptionsReal = document.querySelectorAll('.contact__select-option-real');
	var contactSelectFake = document.querySelector('.contact__select-fake');
	var contactSelectOptionsFakeContainer = document.querySelector('.contact__select-options-fake-container');
	var contactSelectOptionsFake = document.querySelectorAll('.contact__select-option-fake');

	contactSelectFake.onclick = function() {
		this.classList.toggle('active');
		if (this.classList.contains('active')) {
			contactSelectOptionsFakeContainer.style.opacity = '1';
			contactSelectOptionsFakeContainer.style.zIndex = '3';
		} else {
			contactSelectOptionsFakeContainer.style.opacity = '';
			contactSelectOptionsFakeContainer.style.zIndex = '';
		}
	}

	for (var i = 0; i < contactSelectOptionsFake.length; i++) {
		contactSelectOptionsFake[i].onclick = function() {
			for (var i = 0; i < contactSelectOptionsFake.length; i++) {
				contactSelectOptionsFake[i].classList.remove('active');
			}
			this.classList.add('active');
			contactSelectFake.innerHTML = this.innerHTML;
			contactSelectFake.classList.remove('active');
			contactSelectOptionsFakeContainer.style.opacity = '';
			contactSelectOptionsFakeContainer.style.zIndex = '';
			for (var i = 0; i < contactSelectOptionsFake.length; i++) {
				if (contactSelectOptionsFake[i].classList.contains('active')) {
					contactSelectOptionsReal[i].selected = true;
				}
			}
		}
	}



	//modals contact us
	var modalOverlay = document.querySelector('.modal__overlay');
	var modalWindows = document.querySelectorAll('.modal__window');
	var modalErrorContainer = document.querySelector('.modal__error-container');
	var modalSuccessContainer = document.querySelector('.modal__success-container');
	var contactFirstNameInput = document.querySelector('.contact__first-name-input');
	var contactLastNameInput = document.querySelector('.contact__last-name-input');
	var contactPhoneNumberInput = document.querySelector('.contact__phone-number-input');
	var contactSubmitButton = document.querySelector('.contact__submit-button');
	var validationArr = [contactFirstNameInput, contactLastNameInput, contactPhoneNumberInput];

	contactSubmitButton.addEventListener('click', validationCheck);
	modalOverlay.addEventListener('click', modalsHide);
	for (var i = 0; i < modalWindows.length; i++) {
		modalWindows[i].addEventListener('click', modalsHide);
	}

	function validationCheck() {
		for (var i = 0; i < validationArr.length; i++) {
			if (!validationArr[i].value) {
				validationArr[i].style.borderColor = '#ED4C5C';
				modalErrorShow();
			} else {
				validationArr[i].style.borderColor = '';
			}
		}

		if (contactSelectFake.innerHTML == 'Select Service') {
			contactSelectFake.style.borderColor = '#ED4C5C';
			modalErrorShow();
		} else {
			contactSelectFake.style.borderColor = '';
		}

		if (contactFirstNameInput.value && contactLastNameInput.value && contactPhoneNumberInput.value && contactSelectFake.innerHTML != 'Select Service') {
			modalSuccessShow();
		}
	}

	function modalErrorShow() {
		modalOverlay.style.display = 'block';
		modalErrorContainer.style.opacity = '1';
		modalErrorContainer.style.zIndex = '999';
	}

	function modalSuccessShow() {
		modalOverlay.style.display = 'block';
		modalSuccessContainer.style.opacity = '1';
		modalSuccessContainer.style.zIndex = '999';

		for (var i = 0; i < validationArr.length; i++) {
			validationArr[i].value = '';
		}

		for (var i = 0; i < contactSelectOptionsFake.length; i++) {
			contactSelectOptionsFake[i].classList.remove('active');
		}

		contactSelectFake.innerHTML = 'Select Service';
	}

	function modalsHide() {
		modalOverlay.style.display = '';
		modalErrorContainer.style.opacity = '';
		modalErrorContainer.style.zIndex = '';
		modalSuccessContainer.style.opacity = '';
		modalSuccessContainer.style.zIndex = '';
		modalSignUpNLogin.style.opacity = '';
		modalSignUpNLogin.style.zIndex = '';
	}

	//modals sign up & login
	var modalSignUpNLogin = document.querySelector('.modal__sign-up-n-login');
	var modalEmailInput = document.querySelector('.modal__email-input');
	var modalPasswordInput = document.querySelector('.modal__password-input');
	var modalSignUpButton = document.querySelector('.modal__sign-up-button');
	var modalLoginButton = document.querySelector('.modal__login-button');
	var modalCloseButton = document.querySelector('.modal__close-button');
	var headerLoginButton = document.querySelector('.header__login-button');
	var mainSignUpButton = document.querySelector('.main__sign-up-button');
	var headerMenuSignUp = document.querySelector('.header__menu-sign-up');
	var validationArr2 = [modalEmailInput, modalPasswordInput];

	headerLoginButton.addEventListener('click', modalSignUpNLoginShow);
	mainSignUpButton.addEventListener('click', modalSignUpNLoginShow);
	headerMenuSignUp.addEventListener('click', modalSignUpNLoginShow);

	modalSignUpButton.addEventListener('click', validationCheck2);
	modalLoginButton.addEventListener('click', validationCheck2);
	modalCloseButton.addEventListener('click', modalsHide);

	function validationCheck2() {
		for (var i = 0; i < validationArr2.length; i++) {
			if (!validationArr2[i].value) {
				validationArr2[i].style.borderColor = '#ED4C5C';
			} else {
				validationArr2[i].style.borderColor = '';
			}
		}

		if (modalEmailInput.value && modalPasswordInput.value) {
			for (var i = 0; i < validationArr2.length; i++) {
				validationArr2[i].value = '';
			}
		}
	}

	function modalSignUpNLoginShow() {
		modalOverlay.style.display = 'block';
		modalSignUpNLogin.style.opacity = '1';
		modalSignUpNLogin.style.zIndex = '999';
	}





	//smooth scroll
	$('.header__menu-link, .footer__list-link, .to-top-link').mPageScroll2id({
		offset: 0,
		scrollSpeed: 1000
	});





	//to top link & animation
	window.onscroll = function() {
		var ypos = window.pageYOffset;
		var toTopLink = document.querySelector('.to-top-link');
		if (ypos > 500) {
			toTopLink.style.opacity = '1';
			toTopLink.style.zIndex = '5';
		} else {
			toTopLink.style.opacity = '';
			toTopLink.style.zIndex = '';
		}
		if ($(window).width() > 960) {
			var ypos = window.pageYOffset;

			var elem1 = document.querySelector('.video-section__block1');
			var elem2 = document.querySelector('.video-section__block2');
			var elem3 = document.querySelector('.features__headline');
			var elem4 = document.querySelector('.features__block1');
			var elem5 = document.querySelector('.features__block2');
			var elem6 = document.querySelector('.features__block3');
			var elem7 = document.querySelector('.technology__headline');
			var elem8 = document.querySelector('.technology__block1');
			var elem9 = document.querySelector('.technology__block2');
			var elem10 = document.querySelector('.technology__block3');
			var elem11 = document.querySelector('.technology__block4');
			var elem12 = document.querySelector('.saving-money__block1');
			var elem13 = document.querySelector('.saving-money__block2');
			var elem14 = document.querySelector('.contact__block1');
			var elem15 = document.querySelector('.contact__block2');
			var elem16 = document.querySelector('.footer__block1');
			var elem17 = document.querySelector('.footer__block2');
			var elem18 = document.querySelector('.footer__block3');
			var elem19 = document.querySelector('.footer__block4');
			var elem20 = document.querySelector('.copy__link');

			if (ypos > 100 && ypos < 1100) {
				elem1.style.left = '0rem';
				elem1.style.opacity = '1';
				elem2.style.right = '0rem';
				elem2.style.opacity = '1';
			} else {
				elem1.style.left = '';
				elem1.style.opacity = '';
				elem2.style.right = '';
				elem2.style.opacity = '';
			}
			if (ypos > 700 && ypos < 1700) {
				elem3.style.top = '0rem';
				elem3.style.opacity = '1';
				elem4.style.bottom = '0rem';
				elem4.style.opacity = '1';
				elem5.style.bottom = '0rem';
				elem5.style.opacity = '1';
				elem6.style.bottom = '0rem';
				elem6.style.opacity = '1';
			} else {
				elem3.style.top = '';
				elem3.style.opacity = '';
				elem4.style.bottom = '';
				elem4.style.opacity = '';
				elem5.style.bottom = '';
				elem5.style.opacity = '';
				elem6.style.bottom = '';
				elem6.style.opacity = '';
			}
			if (ypos > 1300 && ypos < 2300) {
				elem7.style.top = '0rem';
				elem7.style.opacity = '1';
				elem8.style.bottom = '0rem';
				elem8.style.opacity = '1';
				elem9.style.bottom = '0rem';
				elem9.style.opacity = '1';
				elem10.style.bottom = '0rem';
				elem10.style.opacity = '1';
				elem11.style.bottom = '0rem';
				elem11.style.opacity = '1';
			} else {
				elem7.style.top = '';
				elem7.style.opacity = '';
				elem8.style.bottom = '';
				elem8.style.opacity = '';
				elem9.style.bottom = '';
				elem9.style.opacity = '';
				elem10.style.bottom = '';
				elem10.style.opacity = '';
				elem11.style.bottom = '';
				elem11.style.opacity = '';
			}
			if (ypos > 1700 && ypos < 2800) {
				elem12.style.left = '0rem';
				elem12.style.opacity = '1';
				elem13.style.right = '0rem';
				elem13.style.opacity = '1';
			} else {
				elem12.style.left = '';
				elem12.style.opacity = '';
				elem13.style.right = '';
				elem13.style.opacity = '';
			}
			if (ypos > 2200 && ypos < 3200) {
				elem14.style.left = '0rem';
				elem14.style.opacity = '1';
				elem15.style.right = '0rem';
				elem15.style.opacity = '1';
			} else {
				elem14.style.left = '';
				elem14.style.opacity = '';
				elem15.style.right = '';
				elem15.style.opacity = '';
			}
			if (ypos > 2700) {
				elem16.style.top = '0rem';
				elem16.style.opacity = '1';
				elem17.style.top = '0rem';
				elem17.style.opacity = '1';
				elem18.style.top = '0rem';
				elem18.style.opacity = '1';
				elem19.style.top = '0rem';
				elem19.style.opacity = '1';
				elem20.style.left = '0rem';
				elem20.style.opacity = '1';
			} else {
				elem16.style.top = '';
				elem16.style.opacity = '';
				elem17.style.top = '';
				elem17.style.opacity = '';
				elem18.style.top = '';
				elem18.style.opacity = '';
				elem19.style.top = '';
				elem19.style.opacity = '';
				elem20.style.left = '';
				elem20.style.opacity = '';
			}
			cLog(ypos);
		}
	}


	//parallax onmousemove
	$('.main').mousemove(function(e) {
		var moveX = (e.pageX * -1 / 10);
		var moveY = (e.pageY * -1 / 10);
		$(this).css('background-position', moveX + 'px ' + moveY + 'px ');
	})

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log
