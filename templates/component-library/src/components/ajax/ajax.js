$(document).ready(function() {

	let ajaxLinks = document.querySelectorAll('.ajax__link');
	for (let i = 0; i < ajaxLinks.length; i++) {
		ajaxLinks[i].addEventListener('click', function() {
				for (let i = 0; i < ajaxLinks.length; i++) {
					ajaxLinks[i].classList.remove('active');
				}
				this.classList.add('active');
		})
	}

	//AJAX вкладки
	$('.ajax__link').click(function() {

		let info = $(this).attr('href') + ' .ajax__content';//берет href ссылки и задает тот блок, который будет обновляться с помощью ajax при переходе по ссылке
		$('.ajax__content').hide(0, loadContent());//скрываем содержимое блока .ajax__content той страницы, на которой находимся//задать анимацию для содержимого
		$('#loader').fadeIn('slow');//анимация лоадера

		function loadContent() {//основная функция для загрузки контента
			$('.ajax__content').load(info, '', function() {//блок, в который мы хотим загрузить новый контент//info подгружает именно тот контент, который нам нужен//'' - различные переменные, дата, опускаем его
				$('.ajax__content').fadeIn('fast', hideLoader());//показываем наш блок с контентом//скрываем лоадер//задать анимацию для содержимого
			});
		}

		function hideLoader() {//функция для скрытия лоадера
			$('#loader').fadeOut('normal');
		}

		return false;//чтобы не происходило перехода по ссылке, а только происходила подгрузка контента

	});//ajax вкладки end

});
