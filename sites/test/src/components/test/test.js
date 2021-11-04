import {cLog} from '../../index.js';
cLog('Hello world!');

$('.scroll-link').mPageScroll2id({
	offset: 50,
	scrollSpeed: 200
});


$(document).ready(function() {

	//AJAX вкладки
	$('.test__ajax-link').click(function() {

		var info = $(this).attr('href') + ' .test__ajax-container';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
		$('.test__ajax-container').hide(0, loadContent());//скрываем содержимое блока .test__ajax-container той страницы, на которой находимся//задать анимацию для содержимого
		$('#loader').fadeIn('slow');//анимация лоадера

		function loadContent() {//основная функция для загрузки контента
			$('.test__ajax-container').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
				$('.test__ajax-container').show(0, hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
			});
		}

		function hideLoader() {//функция для скрытия лоадера
			$('#loader').fadeOut('normal');
		}

		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

	});//ajax вкладки end

});