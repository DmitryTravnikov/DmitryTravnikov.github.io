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

	var mainVideoOverlay = document.querySelector('.main__video-overlay');
	var mainVideoPlayButton = document.querySelector('.main__video-play-button');
	var mainVideo = document.querySelector('.main__video');
	mainVideoPlayButton.onclick = function() {
		mainVideo.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		window.timerId = window.setInterval(function() {
			mainVideoOverlay.style.opacity = '0';
			window.timerId = window.setInterval(function() {
				mainVideo.style.zIndex = '3';
			}, 1500);
		}, 1000);
	}




	let productsMenuLinks = document.querySelectorAll('.products__menu-link');
	for (let i = 0; i < productsMenuLinks.length; i++) {
		productsMenuLinks[i].onclick = function() {
			for (let i = 0; i < productsMenuLinks.length; i++) {
				productsMenuLinks[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	}

	//AJAX вкладки (анимацию делать на keyframes)
	$('.products__menu-link').click(function() {

		var info = $(this).attr('href') + ' .products__content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
		$('.products__content').hide(0, loadContent());//скрываем содержимое блока .products__content той страницы, на которой находимся//задать анимацию для содержимого
		$('#loader').fadeIn('slow');//анимация лоадера

		function loadContent() {//основная функция для загрузки контента
			$('.products__content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
				$('.products__content').fadeIn('slow', hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
			});
		}

		function hideLoader() {//функция для скрытия лоадера
			$('#loader').fadeOut('normal');
		}

		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

	});//ajax вкладки end




	let dTeamBigImage = document.querySelector('.d-team__big-image');
	let dTeamWorkerImages = document.querySelectorAll('.d-team__worker-image');
	let dTeamDescriptions = document.querySelectorAll('.d-team__description');
	let dTeamWorkerSecondaryNames = document.querySelectorAll('.d-team__worker-secondary-name');

	for (let i = 0; i < dTeamWorkerImages.length; i++) {
		dTeamBigImage.src = dTeamWorkerImages[0].src;
		dTeamWorkerImages[i].onclick = function() {
			for (let i = 0; i < dTeamWorkerImages.length; i++) {
				dTeamWorkerImages[i].classList.remove('active');
				dTeamWorkerSecondaryNames[i].classList.remove('active');
				dTeamDescriptions[i].classList.remove('active');
				this.classList.add('active');
				if (dTeamWorkerImages[i].classList.contains('active')) {
					dTeamBigImage.src = dTeamWorkerImages[i].src;
					dTeamWorkerSecondaryNames[i].classList.add('active');
					dTeamDescriptions[i].classList.add('active');
				}
			}
		}
	}




	let modalOverlay = document.querySelector('.modal__overlay');
	let modalWindows = document.querySelectorAll('.modal__window');
	let modalSubscribeSuccess = document.querySelector('.modal__subscribe-success');
	let modalErrorContainer = document.querySelector('.modal__error-container');
	let modalSuccessContainer = document.querySelector('.modal__success-container');

	let subscribeEmailInput = document.querySelector('.subscribe__email-input');
	let subscribeButton = document.querySelector('.subscribe__button');

	let contactNameInput = document.querySelector('.contact__name-input');
	let contactEmailInput = document.querySelector('.contact__email-input');
	let contactMessageInput = document.querySelector('.contact__message-input');
	let contactSendMessageButton = document.querySelector('.contact__send-message-button');

	let validationArr = [contactNameInput, contactEmailInput, contactMessageInput];

	modalOverlay.addEventListener('click', modalsHide);
	for (let i = 0; i < modalWindows.length; i++) {
		modalWindows[i].addEventListener('click', modalsHide);
	}

	function modalsHide() {
		modalOverlay.style.display = '';
		modalErrorContainer.style.opacity = '';
		modalErrorContainer.style.zIndex = '';
		modalSuccessContainer.style.opacity = '';
		modalSuccessContainer.style.zIndex = '';
		modalSubscribeSuccess.style.opacity = '';
		modalSubscribeSuccess.style.zIndex = '';
	}

	// subscribe form validation
	subscribeButton.addEventListener('click', subscribeValidationCheck);

	function subscribeValidationCheck() {
		if (!subscribeEmailInput.value) {
			subscribeEmailInput.style.borderColor = '#FF3F40';
			modalErrorShow();
		} else {
			subscribeEmailInput.style.borderColor = '';
		}

		if (subscribeEmailInput.value) {
			modalSubscribeSuccessShow();
		}
	}

	function modalErrorShow() {
		modalOverlay.style.display = 'block';
		modalErrorContainer.style.opacity = '1';
		modalErrorContainer.style.zIndex = '999';
	}

	function modalSubscribeSuccessShow() {
		modalOverlay.style.display = 'block';
		modalSubscribeSuccess.style.opacity = '1';
		modalSubscribeSuccess.style.zIndex = '999';
		subscribeEmailInput.value = '';
	}



	// contact form validation
	contactSendMessageButton.addEventListener('click', contactValidationCheck);

	function contactValidationCheck() {
		for (let i = 0; i < validationArr.length; i++) {
			if (!validationArr[i].value) {
				validationArr[i].style.borderColor = '#FF3F40';
				modalErrorShow();
			} else {
				validationArr[i].style.borderColor = '';
			}
		}

		if (contactNameInput.value && contactEmailInput.value && contactMessageInput.value) {
			modalSuccessShow();
		}
	}

	function modalSuccessShow() {
		modalOverlay.style.display = 'block';
		modalSuccessContainer.style.opacity = '1';
		modalSuccessContainer.style.zIndex = '999';
		for (let i = 0; i < validationArr.length; i++) {
			validationArr[i].value = '';
		}
	}




	$('.header__menu-link, .to-top').mPageScroll2id({
		offset: 0,
		scrollSpeed: 200
	});

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log