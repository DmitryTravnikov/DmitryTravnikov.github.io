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

	let galleryItemsContainers = document.querySelectorAll('.gallery__items-container');
	let galleryLoadMoreLink = document.querySelector('.gallery__load-more-link');
	let galleryCounter = 0;

	galleryLoadMoreLink.addEventListener('click', showMoreItemsContainers);
	function showMoreItemsContainers() {
		galleryCounter++;
		for (let i = 0; i < galleryItemsContainers.length; i++) {
			galleryItemsContainers[galleryCounter].classList.add('active');
		}
		if (galleryCounter >= galleryItemsContainers.length - 1) {
			galleryLoadMoreLink.removeEventListener('click', showMoreItemsContainers);
			galleryLoadMoreLink.style.cursor = 'not-allowed';
		}
	}



	var processVideoOverlay = document.querySelector('.process__video-overlay');
	var processVideoPlayButton = document.querySelector('.process__video-play-button');
	var processVideo = document.querySelector('.process__video');
	processVideoPlayButton.onclick = function() {
		processVideo.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		window.timerId = window.setInterval(function() {
			processVideoOverlay.style.opacity = '0';
			window.timerId = window.setInterval(function() {
				processVideo.style.zIndex = '3';
			}, 1500);
		}, 1000);
	}



	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var reviewsSlider = $(".reviews__slider");
	reviewsSlider.owlCarousel({
		items : 1,
		autoPlay: 5000,
		pagination: true,
		transitionStyle: 'fade',
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile: [479,1]
	});




	let modalOverlay = document.querySelector('.modal__overlay');
	let modalWindows = document.querySelectorAll('.modal__window');
	let modalSuccessContainer = document.querySelector('.modal__success-container');
	let modalErrorContainer = document.querySelector('.modal__error-container');
	let contactNameInput = document.querySelector('.contact__name-input');
	let contactEmailInput = document.querySelector('.contact__email-input');
	let contactTitleInput = document.querySelector('.contact__title-input');
	let contactCommentInput = document.querySelector('.contact__comment-input');
	let contactSendMessageButton = document.querySelector('.contact__send-message-button');
	let validationArr = [contactNameInput, contactEmailInput, contactTitleInput, contactCommentInput];

	contactSendMessageButton.addEventListener('click', validationCheck);

	modalOverlay.addEventListener('click', modalsHide);
	for (let i = 0; i < modalWindows.length; i++) {
		modalWindows[i].addEventListener('click', modalsHide);
	}

	function validationCheck() {
		for (let i = 0; i < validationArr.length; i++) {
			if (!validationArr[i].value) {
				validationArr[i].style.borderColor = '#00CAC4';
				modalErrorShow();
			} else {
				validationArr[i].style.borderColor = '';
			}
		}

		if (contactNameInput.value && contactEmailInput.value && contactTitleInput.value && contactCommentInput.value) {
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
		for (let i = 0; i < validationArr.length; i++) {
			validationArr[i].value = '';
		}
	}

	function modalsHide() {
		modalOverlay.style.display = 'none';
		modalErrorContainer.style.opacity = '0';
		modalErrorContainer.style.zIndex = '-1';
		modalSuccessContainer.style.opacity = '0';
		modalSuccessContainer.style.zIndex = '-1';
	}



	$('.header__menu-link, .to-top').mPageScroll2id({
		offset: 50,
		scrollSpeed: 200
	});

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log