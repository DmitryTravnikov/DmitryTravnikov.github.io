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


// var random = Math.floor(Math.random() * 100 + 1);

// document.body.onload = function() {
// 	setTimeout(function() {
// 		var preloader = document.getElementById('page-preloader');
// 		if (!preloader.classList.contains('done')) {
// 			preloader.classList.add('done');
// 		}
// 	}, 1000);
// }

$(document).ready(function() {

	//prevent default
	$('.prevdef').click(function(event) {
		event.preventDefault();
	});

	var range = $('#range');
	var ageOutput = $('#age');
	var daysOutput = $('#days');
	var monthsOutput = $('#months');
	var percentsOutput = $('#percents');
	var averageLifeExpectancy = 72 / 100;

	var daysResult, monthsResult, percentsResult;

	//calc
	function calc() {
		daysResult = range.val() * 365;
		$(daysOutput).text(daysResult.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

		monthsResult = range.val() * 12;
		$(monthsOutput).text(monthsResult.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

		percentsResult = Math.round(range.val() / averageLifeExpectancy);
		$(percentsOutput).text(percentsResult.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	}

	//calc on mousemove and changing
	$(range).on('mousemove change', function() {
		$(ageOutput).val(range.val());

		calc();
	});

	//calc on change and keyup
	$(ageOutput).on('change keyup', function(e) {
		$(ageOutput).val(ageOutput.val());
		$(range).val(ageOutput.val());

		if (e.keyCode >= 0 && e.keyCode < 8 || e.keyCode > 8 && e.keyCode < 48 || e.keyCode > 57 && e.keyCode < 96 || e.keyCode > 105) {
			$(ageOutput).val('');
		}

		if (ageOutput.val() > 100) {
			$(ageOutput).val('');
		} else if (ageOutput.val() < 1) {
			$(ageOutput).val('');
		}

		calc();
	});

	//calc on focus and focusout
	$(ageOutput).on('focus', function() {
		$(this).val('');
	}).on('focusout', function() {
		$(this).val(range.val());
		
		calc();
	});

	//switch language and color theme
	var trigger = $('#trigger');

	$(trigger).on('click', function() {
		//change color theme
		$(this).toggleClass('active');
		$('.container').toggleClass('active');
		$('.outputs, .output').toggleClass('active');
		$('.language .rus, .language .eng').toggleClass('active');
		$('h1').toggleClass('active');
		$(range).toggleClass('active');

		//switch between languages
		var firstParagraph = $('.outputs .row1 p');
		var secondParagraph = $('.outputs .row2 p');
		var thirdParagraph = $('.outputs .row3 p');

		$('.outputs .row p').toggleClass('eng');
		if ($(firstParagraph).hasClass('eng')) {
			$(firstParagraph).text('— Дней вы прожили');
		} else {
			$(firstParagraph).text('— Days you had lived');
		}

		if ($(secondParagraph).hasClass('eng')) {
			$(secondParagraph).text('— Месяцев');
		} else {
			$(secondParagraph).text('— Months');
		}

		if ($(thirdParagraph).hasClass('eng')) {
			$(thirdParagraph).text('— Процентов от средней продолжительности жизни');
		} else {
			$(thirdParagraph).text('— Percentage of average life expectancy worldwide');
		}
		//headline switch language
		var headline = $('h1');
		$(headline).toggleClass('eng');
		if ($(headline).hasClass('eng')) {
			$(headline).text('Ваш возраст:');
		} else {
			$(headline).text('Your age:');
		}
	});//trigger.click end

});//doc.ready end