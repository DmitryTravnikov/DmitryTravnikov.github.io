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

	var screensInput = document.querySelector('.screens-input');
	var screensOutput = document.querySelector('.screens-output');
	var hardScreensInput = document.querySelector('.hard-screens-input');
	var hardScreensOutput = document.querySelector('.hard-screens-output');
	var modalsInput = document.querySelector('.modals-input');
	var modalsOutput = document.querySelector('.modals-output');
	var adaptiveCheckbox = document.querySelector('.adaptive-checkbox');
	var adaptiveOutput = document.querySelector('.adaptive-output');
	var resultOutput = document.querySelector('.result-output');
	var calculateButton = document.querySelector('.calculate-button');
	var clearButton = document.querySelector('.clear-button');

	var screenPrice = 400;
	var hardScreenPrice = 500;
	var modalPrice = 300;
	var adaptivePrice = 100;

	calculateButton.onclick = function() {
		var result = 0;

		var screensAmmount = screensInput.value;
		var hardScreensAmmount = hardScreensInput.value;
		var modalsAmmount = modalsInput.value;

		if (!adaptiveCheckbox.checked) {
			if (!hardScreensInput.value) {
				var totalScreensPrice = screensAmmount * screenPrice;
				screensOutput.innerHTML = totalScreensPrice;
				var totalModalsPrice = modalsAmmount * modalPrice;
				modalsOutput.innerHTML = totalModalsPrice;

				result = totalScreensPrice + totalModalsPrice;

				resultOutput.innerHTML = result;

				hardScreensOutput.innerHTML = '-';

				adaptiveOutput.innerHTML = '-';
			} else {
				var totalScreensPrice = (screensAmmount * screenPrice) - (hardScreensAmmount * screenPrice);

				screensInput.value = screensInput.value - hardScreensInput.value;

				screensOutput.innerHTML = totalScreensPrice;
				var totalHardScreensPrice = hardScreensAmmount * hardScreenPrice;
				hardScreensOutput.innerHTML = totalHardScreensPrice;
				var totalModalsPrice = modalsAmmount * modalPrice;
				modalsOutput.innerHTML = totalModalsPrice;

				result = totalScreensPrice + totalHardScreensPrice + totalModalsPrice;

				resultOutput.innerHTML = result;

				adaptiveOutput.innerHTML = '-';
			}
		} else {
			if (!hardScreensInput.value) {
				var totalScreensPrice = screensAmmount * (screenPrice + adaptivePrice);
				screensOutput.innerHTML = totalScreensPrice;
				var totalModalsPrice = modalsAmmount * (modalPrice + adaptivePrice);
				modalsOutput.innerHTML = totalModalsPrice;

				result = totalScreensPrice + totalModalsPrice;

				resultOutput.innerHTML = result;

				hardScreensOutput.innerHTML = '-';

				adaptiveOutput.innerHTML = '100/экран';
			} else {
				var totalScreensPrice = (screensAmmount * (screenPrice + adaptivePrice)) - (hardScreensAmmount * (screenPrice + adaptivePrice));

				screensInput.value = screensInput.value - hardScreensInput.value;

				screensOutput.innerHTML = totalScreensPrice;
				var totalHardScreensPrice = hardScreensAmmount * (hardScreenPrice + adaptivePrice);
				hardScreensOutput.innerHTML = totalHardScreensPrice;
				var totalModalsPrice = modalsAmmount * (modalPrice + adaptivePrice);
				modalsOutput.innerHTML = totalModalsPrice;

				result = totalScreensPrice + totalHardScreensPrice + totalModalsPrice;

				resultOutput.innerHTML = result;

				adaptiveOutput.innerHTML = '100/экран';
			}
		}

		this.disabled = true;
		clearButton.disabled = false;
	}

	clearButton.onclick = function() {
		screensInput.value = '';
		hardScreensInput.value = '';
		modalsInput.value = '';
		adaptiveCheckbox.checked = false;

		screensOutput.innerHTML = '?';
		hardScreensOutput.innerHTML = '?';
		modalsOutput.innerHTML = '?';
		adaptiveOutput.innerHTML = '?';
		resultOutput.innerHTML = '?';

		this.disabled = true;
		calculateButton.disabled = false;
	}

});//doc.ready end

var cLog = function(n) {
	return console.log(n);
};//console.log