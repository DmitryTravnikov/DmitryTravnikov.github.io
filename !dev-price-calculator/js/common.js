'use strict';
// $(document).ready(function() {

//  //Таймер обратного отсчета
//  //Документация: http://keith-wood.name/countdown.html
//  //<div class="countdown" date-time="2015-01-07"></div>
//  var austDay = new Date($(".countdown").attr("date-time"));
//  $(".countdown").countdown({until: austDay, format: 'yowdHMS'});

//  //Попап менеджер FancyBox
//  //Документация: http://fancybox.net/howto
//  //<a class="fancybox"><img src="image.jpg" /></a>
//  //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
//  $(".fancybox").fancybox();

//  //Навигация по Landing Page
//  //$(".top_mnu") - это верхняя панель со ссылками.
//  //Ссылки вида <a href="#contacts">Контакты</a>
//  $(".top_mnu").navigation();

//  //Добавляет классы дочерним блокам .block для анимации
//  //Документация: http://imakewebthings.com/jquery-waypoints/
//  $(".block").waypoint(function(direction) {
//    if (direction === "down") {
//      $(".class").addClass("active");
//    } else if (direction === "up") {
//      $(".class").removeClass("deactive");
//    };
//  }, {offset: 100});

//  //Плавный скролл до блока .div по клику на .scroll
//  //Документация: https://github.com/flesler/jquery.scrollTo
//  $("a.scroll").click(function() {
//    $.scrollTo($(".div"), 800, {
//      offset: -90
//    });
//  });

//  Каруселька
//  Документация: http://owlgraphic.com/owlcarousel/
//  var owl = $(".carousel");
//  owl.owlCarousel({
//    items : 1,
//    autoPlay: 5000,
//    pagination: false,
//    transitionStyle: 'fade',
//    itemsDesktop: [1199,1],
//    itemsDesktopSmall: [979,1],
//    itemsTablet: [768,0],
//    itemsMobile: [479,0]
//  });
//  owl.on("mousewheel", ".owl-wrapper", function (e) {
//    if (e.deltaY > 0) {
//      owl.trigger("owl.prev");
//    } else {
//      owl.trigger("owl.next");
//    }
//    e.preventDefault();
//  });
//  $(".next_button").click(function(){
//    owl.trigger("owl.next");
//  });
//  $(".prev_button").click(function(){
//    owl.trigger("owl.prev");
//  });

//  //Кнопка "Наверх"
//  //Документация:
//  //http://api.jquery.com/scrolltop/
//  //http://api.jquery.com/animate/
//  $("#top").click(function () {
//    $("body, html").animate({
//      scrollTop: 0
//    }, 800);
//    return false;
//  });
	
//  //Аякс отправка форм
//  //Документация: http://api.jquery.com/jquery.ajax/
//  $("form").submit(function() {
//    $.ajax({
//      type: "GET",
//      url: "mail.php",
//      data: $("form").serialize()
//    }).done(function() {
//      alert("Спасибо за заявку!");
//      setTimeout(function() {
//        $.fancybox.close();
//      }, 1000);
//    });
//    return false;
//  });

// });

// // Аккордеон
// $(document).ready(function() {
	
//  $('.service2>.wrapper>.block-2>article').not(':first-of-type').hide();
 
	
//   $('.service2>.wrapper>.block-2>.headline').click(function() {
		
//     var findArticle = $(this).next();
//     var findWrapper = $(this).closest('.block-2');
		
//     if (findArticle.is(':visible')) {
//       findArticle.slideUp(50);
//     }
//     else {
//       findWrapper.find('>article').slideUp(50);
//       findArticle.slideDown(50);
//     }
//   });

// });

// var random = Math.floor(Math.random() * 100 + 1);

$(document).ready(function() {

	//prevent default
	$('.prevdef').click(function(event) {
		event.preventDefault();
	});

	//переменные для основного блока
	//переменные для строки "шаблон"
	var templateAmmount = $('#template-ammount');
	var templateCost = $('#template-cost');
	//переменные для строки "экраны"
	var screenAmmount = $('#screen-ammount');
	var screenCost = $('#screen-cost');
	//переменные для строки "сложных"
	var hardAmmount = $('#hard-ammount');
	var hardCost = $('#hard-cost');
	//переменные для строки "интерактивных"
	var interactiveAmmount = $('#interactive-ammount');
	var interactiveCost = $('#interactive-cost');
	//переменные для строки "форм"
	var formAmmount = $('#form-ammount');
	var formCost = $('#form-cost');
	//переменные для строки "слайдеров"
	var sliderAmmount = $('#slider-ammount');
	var sliderCost = $('#slider-cost');
	//переменные для строки "модальные окна"
	var modalAmmount = $('#modal-ammount');
	var modalCost = $('#modal-cost');
	//переменные для главной суммы
	var mainSumm = $('#main-summ');

	//переменные для блока "дополнительно"
	//переменные для строки "адаптация под планшеты"
	var tabletAdaptation = $('#tablet-adaptation');
	var tabletAdaptationCost = $('#tablet-adaptation-cost');
	//переменные для строки "адаптация под мобильные"
	var mobileAdaptation = $('#mobile-adaptation');
	var mobileAdaptationCost = $('#mobile-adaptation-cost');
	//переменные для строки "заливка на сервер"
	var sitePublishing = $('#site-publishing');
	var sitePublishingCost = $('#site-publishing-cost');
	//переменные для строки "тестирование"
	var siteTesting = $('#site-testing');
	var siteTestingCost = $('#site-testing-cost');
	//переменные для дополнительной суммы
	var additionalSumm = $('#additional-summ');

	//переменные для блока "итого"
	//переменные для строки "предоплата"
	var prepayment = $('#prepayment');
	var prepaymentPercent = $('#prepayment-percent');
	var discount = $('#discount');
	var discountPercent = $('#discount-percent');
	var total = $('#total-result');
	var totalWithDiscount = $('#total-result-with-discount');

	//переменные для кнопки "посчитать"
	var calculate = $('#calculate');



	//основная программа для расчета
	$(calculate).on('click', function() {

		//расчет для строк основной таблицы
		var templateResult = templateAmmount.val() * 1000;//расчет стоимости строки "шаблон"
		$(templateCost).text(templateResult);//вывести результат в поле "стоимость"

		var screenResult = screenAmmount.val() * 500;//расчет стоимости для строки "экранов"
		$(screenCost).text(screenResult);//вывести результат в поле "стоимость"

		var hardResult = hardAmmount.val() * 500;//расчет стоимости для строки "сложных"
		$(hardCost).text(hardResult);//вывести результат в поле "стоимость"

		var interactiveResult = interactiveAmmount.val() * 700;//расчет стоимости для строки "интерактивных"
		$(interactiveCost).text(interactiveResult);//вывести результат в поле "стоимость"

		var formResult = formAmmount.val() * 300;//расчет стоимости для строки "форм"
		$(formCost).text(formResult);//вывести результат в поле "стоимость"

		var sliderResult = sliderAmmount.val() * 500;//расчет стоимости для строки "слайдеров"
		$(sliderCost).text(sliderResult);//вывести результат в поле "стоимость"

		var modalResult = modalAmmount.val() * 300;//расчет стоимости для строки "модальные окна"
		$(modalCost).text(modalResult);//вывести результат в поле "стоимость"

		//расчет итоговой суммы для основной таблицы
		var mainSummResult = templateResult + screenResult + hardResult + interactiveResult + formResult + sliderResult + modalResult;
		$(mainSumm).text(mainSummResult);



		//расчет для строк таблицы дополнительных услуг
		var tabletAdaptationResult = tabletAdaptation.val() * 1100;//расчет стоимости для строки "адаптация под планшеты"
		$(tabletAdaptationCost).text(tabletAdaptationResult);//вывести результат в поле "стоимость"

		var mobileAdaptationResult = mobileAdaptation.val() * 2200;//расчет стоимости для строки "адаптация под мобильные"
		$(mobileAdaptationCost).text(mobileAdaptationResult);//вывести результат в поле "стоимость"

		var sitePublishingResult = sitePublishing.val() * 700;//расчет стоимости для строки "заливка на сервер"
		$(sitePublishingCost).text(sitePublishingResult);//вывести результат в поле "стоимость"

		var siteTestingResult = siteTesting.val() * 1000;//расчет стоимости для строки "тестирование"
		$(siteTestingCost).text(siteTestingResult);//вывести результат в поле "стоимость"

		//расчет итоговой суммы для таблицы дополнительных услуг
		var additionalSummResult = tabletAdaptationResult + mobileAdaptationResult + sitePublishingResult + siteTestingResult;
		$(additionalSumm).text(additionalSummResult);



		//расчет скидок, предоплаты и итоговой стоимости всех услуг
		var totalResult = mainSummResult + additionalSummResult;//расчет итоговой суммы всех услуг
		$(total).text(totalResult);//вывести результат в поле "стоимость"

		var prepaymentResult = prepayment.val();//берем значение из поля предоплаты
		var prepaymentResultPercent = (prepaymentResult / totalResult) * 100;//расчитываем какой процент составляет предоплата от общей суммы
		$(prepaymentPercent).text(Math.floor(prepaymentResultPercent) + '%');//выводим значение процента предоплаты от общей суммы в поле "предоплата в %" c округлением

		var discountPercentResult = prepaymentResultPercent / 100 * 10;//расчитываем 10% от процента предоплаты
		$(discountPercent).text(Math.round(discountPercentResult) + '%');//выводим результат скидки за предоплату

		var discountResult = (totalResult / 100) * discountPercentResult;//высчитывает скидку не в процентах
		$(discount).text(Math.round(discountResult));//выводим значение скидки в поле

		var totalResultWithDiscount = totalResult - discountResult;//конечный результат с учетом скидки за предоплату
		$(totalWithDiscount).text(totalResultWithDiscount);//выводим конечный результат в поле "итого со скидкой"

	});//calculate end

});