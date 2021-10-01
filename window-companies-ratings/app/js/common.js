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
			for (let i = 0; i < headerMenuLinks.length; i++) {
				headerMenuLinks[i].parentNode.classList.remove('active');
			}
			this.parentNode.classList.add('active');
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
					mainCollapseButtons[i].children[j].innerHTML = 'Свернуть';
				}
			} else {
				mainCollapsedBlocks[i].classList.remove('active');
				for (let j = 0; j < mainCollapseButtons[i].children.length; j++) {
					mainCollapseButtons[i].children[j].innerHTML = 'Развернуть';
				}
			}
		}
	}















	// Main Slider
	var mainSlider = $(".main__slider");

	if ($(window).width() < 992) {
		mainSlider.owlCarousel({
			items : 1,
			autoPlay: 5000,
			pagination: true,
			transitionStyle: 'fade',
			itemsDesktop: [1199,1],
			itemsDesktopSmall: [979,1],
			itemsTablet: [768,1],
			itemsMobile: [479,1]
		});
		$(".main__next-button").click(function(){
			mainSlider.trigger("owl.next");
		});
		$(".main__prev-button").click(function(){
			mainSlider.trigger("owl.prev");
		});//карусель end
	}

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log