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

	if ($(window).width() > 0 && $(window).width() < 575) {
		(function() {
			let worksMenuLinks = document.querySelectorAll('.works__menu-link');
			let worksContentContainer = document.querySelector('.works__content-container');
			let worksShowMoreLink = document.querySelector('.works__show-more-link');
			let worksCounter = 0;
			let worksPicsContainers = document.querySelectorAll('.works__pics-container');

			for (let i = 0; i < worksMenuLinks.length; i++) {
				worksMenuLinks[i].onclick = function() {
					for (let i = 0; i < worksMenuLinks.length; i++) {
						worksMenuLinks[i].classList.remove('active');
					}
					this.classList.add('active');
					worksContentContainer.style.height = '134rem';

					for (let i = 0; i < worksPicsContainers.length; i++) {
						worksPicsContainers[i].style.display = 'none';
						worksPicsContainers[0].style.display = 'flex';
					}
					worksShowMoreLink.addEventListener('click', showMoreWorks);
				}
			}

			worksShowMoreLink.addEventListener('click', showMoreWorks);
			function showMoreWorks() {
				worksCounter++;
				for (let i = 0; i < worksPicsContainers.length; i++) {
					worksPicsContainers[worksCounter].style.display = 'flex';
				}
				worksContentContainer.style.height = parseInt(getComputedStyle(worksContentContainer).height) + parseInt(getComputedStyle(worksPicsContainers[0]).height) + 'px';
				if (worksCounter >= worksPicsContainers.length) {
					worksCounter = 0;
					this.removeEventListener('click', showMoreWorks);
				}
			}
		})();
	}

	if ($(window).width() > 576 && $(window).width() < 767) {
		(function() {
			let worksMenuLinks = document.querySelectorAll('.works__menu-link');
			let worksContentContainer = document.querySelector('.works__content-container');
			let worksShowMoreLink = document.querySelector('.works__show-more-link');
			let worksCounter = 0;
			let worksPicsContainers = document.querySelectorAll('.works__pics-container');

			for (let i = 0; i < worksMenuLinks.length; i++) {
				worksMenuLinks[i].onclick = function() {
					for (let i = 0; i < worksMenuLinks.length; i++) {
						worksMenuLinks[i].classList.remove('active');
					}
					this.classList.add('active');
					worksContentContainer.style.height = '131rem';

					for (let i = 0; i < worksPicsContainers.length; i++) {
						worksPicsContainers[i].style.display = 'none';
						worksPicsContainers[0].style.display = 'flex';
					}
					worksShowMoreLink.addEventListener('click', showMoreWorks);
				}
			}

			worksShowMoreLink.addEventListener('click', showMoreWorks);
			function showMoreWorks() {
				worksCounter++;
				for (let i = 0; i < worksPicsContainers.length; i++) {
					worksPicsContainers[worksCounter].style.display = 'flex';
				}
				worksContentContainer.style.height = parseInt(getComputedStyle(worksContentContainer).height) + parseInt(getComputedStyle(worksPicsContainers[0]).height) + 'px';
				if (worksCounter >= worksPicsContainers.length) {
					worksCounter = 0;
					this.removeEventListener('click', showMoreWorks);
				}
			}
		})();
	}

	if ($(window).width() >= 768 && $(window).width() < 991) {
		(function() {
			let worksMenuLinks = document.querySelectorAll('.works__menu-link');
			let worksContentContainer = document.querySelector('.works__content-container');
			let worksShowMoreLink = document.querySelector('.works__show-more-link');
			let worksCounter = 0;
			let worksPicsContainers = document.querySelectorAll('.works__pics-container');

			for (let i = 0; i < worksMenuLinks.length; i++) {
				worksMenuLinks[i].onclick = function() {
					for (let i = 0; i < worksMenuLinks.length; i++) {
						worksMenuLinks[i].classList.remove('active');
					}
					this.classList.add('active');
					worksContentContainer.style.height = '134rem';

					for (let i = 0; i < worksPicsContainers.length; i++) {
						worksPicsContainers[i].style.display = 'none';
						worksPicsContainers[0].style.display = 'flex';
					}
					worksShowMoreLink.addEventListener('click', showMoreWorks);
				}
			}

			worksShowMoreLink.addEventListener('click', showMoreWorks);
			function showMoreWorks() {
				worksCounter++;
				for (let i = 0; i < worksPicsContainers.length; i++) {
					worksPicsContainers[worksCounter].style.display = 'flex';
				}
				worksContentContainer.style.height = parseInt(getComputedStyle(worksContentContainer).height) + parseInt(getComputedStyle(worksPicsContainers[0]).height) + 'px';
				if (worksCounter >= worksPicsContainers.length) {
					worksCounter = 0;
					this.removeEventListener('click', showMoreWorks);
				}
			}
		})();
	}

	if ($(window).width() >= 992 && $(window).width() < 1199) {
		(function() {
			let worksMenuLinks = document.querySelectorAll('.works__menu-link');
			let worksContentContainer = document.querySelector('.works__content-container');
			let worksShowMoreLink = document.querySelector('.works__show-more-link');
			let worksCounter = 0;
			let worksPicsContainers = document.querySelectorAll('.works__pics-container');

			for (let i = 0; i < worksMenuLinks.length; i++) {
				worksMenuLinks[i].onclick = function() {
					for (let i = 0; i < worksMenuLinks.length; i++) {
						worksMenuLinks[i].classList.remove('active');
					}
					this.classList.add('active');
					worksContentContainer.style.height = '105rem';

					for (let i = 0; i < worksPicsContainers.length; i++) {
						worksPicsContainers[i].style.display = 'none';
						worksPicsContainers[0].style.display = 'flex';
					}
					worksShowMoreLink.addEventListener('click', showMoreWorks);
				}
			}

			worksShowMoreLink.addEventListener('click', showMoreWorks);
			function showMoreWorks() {
				worksCounter++;
				for (let i = 0; i < worksPicsContainers.length; i++) {
					worksPicsContainers[worksCounter].style.display = 'flex';
				}
				worksContentContainer.style.height = parseInt(getComputedStyle(worksContentContainer).height) + parseInt(getComputedStyle(worksPicsContainers[0]).height) + 'px';
				if (worksCounter >= worksPicsContainers.length) {
					worksCounter = 0;
					this.removeEventListener('click', showMoreWorks);
				}
			}
		})();
	}

	if ($(window).width() >= 1200) {
		(function() {
			let worksMenuLinks = document.querySelectorAll('.works__menu-link');
			let worksContentContainer = document.querySelector('.works__content-container');
			let worksShowMoreLink = document.querySelector('.works__show-more-link');
			let worksCounter = 0;
			let worksPicsContainers = document.querySelectorAll('.works__pics-container');

			for (let i = 0; i < worksMenuLinks.length; i++) {
				worksMenuLinks[i].onclick = function() {
					for (let i = 0; i < worksMenuLinks.length; i++) {
						worksMenuLinks[i].classList.remove('active');
					}
					this.classList.add('active');
					worksContentContainer.style.height = '115rem';

					for (let i = 0; i < worksPicsContainers.length; i++) {
						worksPicsContainers[i].style.display = 'none';
						worksPicsContainers[0].style.display = 'flex';
					}
					worksShowMoreLink.addEventListener('click', showMoreWorks);
				}
			}

			worksShowMoreLink.addEventListener('click', showMoreWorks);
			function showMoreWorks() {
				worksCounter++;
				for (let i = 0; i < worksPicsContainers.length; i++) {
					worksPicsContainers[worksCounter].style.display = 'flex';
				}
				worksContentContainer.style.height = parseInt(getComputedStyle(worksContentContainer).height) + parseInt(getComputedStyle(worksPicsContainers[0]).height) + 'px';
				if (worksCounter >= worksPicsContainers.length) {
					worksCounter = 0;
					this.removeEventListener('click', showMoreWorks);
				}
			}
		})();
	}

	//AJAX вкладки (анимацию делать на keyframes)
	$('.works__menu-link').click(function() {

		var info = $(this).attr('href') + ' .works__content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
		$('.works__content').hide(0, loadContent());//скрываем содержимое блока .works__content той страницы, на которой находимся//задать анимацию для содержимого
		$('#loader').fadeIn('slow');//анимация лоадера

		function loadContent() {//основная функция для загрузки контента
			$('.works__content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
				$('.works__content').fadeIn('slow', hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
			});
		}

		function hideLoader() {//функция для скрытия лоадера
			$('#loader').fadeOut('normal');
		}

		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

	});//ajax вкладки end









	let teamItems = document.querySelectorAll('.team__item');
	let teamWorkerInfos = document.querySelectorAll('.team__worker-info');
	for (let i = 0; i < teamItems.length; i++) {
		teamItems[i].onclick = function() {
			for (let i = 0; i < teamItems.length; i++) {
				teamItems[i].classList.remove('active');
				teamWorkerInfos[i].classList.remove('active');
			}
			this.classList.add('active');
			for (let i = 0; i < teamItems.length; i++) {
				if (teamItems[i].classList.contains('active')) {
					teamWorkerInfos[i].classList.add('active');
				}
			}
		}
	}







	 //Каруселька
	 //Документация: http://owlgraphic.com/owlcarousel/
	 var clientsSlider = $(".clients__slider");
	 clientsSlider.owlCarousel({
		 items : 1,
		 autoPlay: 5000,
		 pagination: false,
		 transitionStyle: 'fade',
		 itemsDesktop: [1199,1],
		 itemsDesktopSmall: [979,1],
		 itemsTablet: [768,1],
		 itemsMobile: [479,1]
	 });
	 $(".clients__slider-next-button").click(function(){
		 clientsSlider.trigger("owl.next");
	 });
	 $(".clients__slider-prev-button").click(function(){
		 clientsSlider.trigger("owl.prev");
	 });//карусель end

	 //Каруселька
	 //Документация: http://owlgraphic.com/owlcarousel/
	 var reviewSlider = $(".review__slider");
	 reviewSlider.owlCarousel({
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
	let modalErrorContainer = document.querySelector('.modal__error-container');
	let modalSuccessContainer = document.querySelector('.modal__success-container');
	let modalWindows = document.querySelectorAll('.modal__window');

	let formSectionNameInput = document.querySelector('.form-section__name-input');
	let formSectionMailInput = document.querySelector('.form-section__mail-input');
	let formSectionSubjectInput = document.querySelector('.form-section__subject-input');
	let formSectionMessageInput = document.querySelector('.form-section__message-input');
	let formSectionSubmitButton = document.querySelector('.form-section__submit-button');

	let formSectionValidationArray = [formSectionNameInput, formSectionMailInput, formSectionSubjectInput, formSectionMessageInput];

	formSectionSubmitButton.addEventListener('click', formSectionValidationCheck);

	modalOverlay.addEventListener('click', modalsHide);
	for (let i = 0; i < modalWindows.length; i++) {
		modalWindows[i].addEventListener('click', modalsHide);
	}

	function formSectionValidationCheck() {
		for (let i = 0; i < formSectionValidationArray.length; i++) {
			if (!formSectionValidationArray[i].value) {
				formSectionValidationArray[i].style.borderColor = '#FFE600';
				modalErrorShow();
			} else {
				formSectionValidationArray[i].style.borderColor = '';
			}
		}

		if (formSectionNameInput.value && formSectionMailInput.value && formSectionSubjectInput.value && formSectionMessageInput.value) {
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

		for (let i = 0; i < formSectionValidationArray.length; i++) {
			formSectionValidationArray[i].style.border = '';
			formSectionValidationArray[i].value = '';
		}
	}

	function modalsHide() {
		modalOverlay.style.display = 'none';
		modalErrorContainer.style.opacity = '0';
		modalErrorContainer.style.zIndex = '-1';
		modalSuccessContainer.style.opacity = '0';
		modalSuccessContainer.style.zIndex = '-1';
	}






	
	$('.to-top-link, .main__scroll-down-link, .header__menu-link, .works__contact-us-link').mPageScroll2id({
		offset: 0,
		scrollSpeed: 200
	});

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log