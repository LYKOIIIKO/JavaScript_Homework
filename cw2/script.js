function alert (value, type) {

	let allDataElems = document.querySelectorAll('[data-alert]'); //ищем все элементы с атрибутом data-alert

	if(allDataElems && allDataElems.length > 0) { 
		allDataElems.forEach(function(elem) {//перебираем эти элементы если они есть

			elem.addEventListener('click', function (event) { //добавляем слушателя на них
				event.preventDefault(); //отменяем стандартное действие браузера

				let value = elem.dataset.alert; //считывает значение атрибута и запоминает его в переменную
				let type = elem.dataset.alertType || ''; //тоже самое, только атрибут другой, с типом отображения

				alert(value, type);//наш алерт будет запускаться при нажатии на элемент
			})
		})
	}

	if(!value) return;//проверка на дурака
	

	function create () { //создать структуру
		clear();

		let mainElem = document.createElement('div');
		mainElem.classList.add('alert');

		if (type) mainElem.classList.add(`alert-${type}`);

		let contentElem = document.createElement('div');
		contentElem.classList.add('alert__content');

		let btnClose = document.createElement('button');
		btnClose.classList.add('alert__btn_close');

		btnClose.innerHTML = '+';
		contentElem.innerHTML = value;

		mainElem.append(contentElem, btnClose);
		

		btnClose.addEventListener('click', function () {
			close();
		})

		return mainElem;
	}

	function clear () { //оставить только последний алерт
		let allElems = document.querySelectorAll('.alert');

	if (allElems && allElems.length > 0) {
		allElems.forEach(function(elem) {
			elem.remove();
		})
	}
	}

	function close () { //закрыть окно алерта
		mainElem.remove();
	}

	let mainElem = create(); //сохранение самого алерта

	document.body.append(mainElem);	//добавление алерта на страницу

	setTimeout(function () {  //анимация окна
		mainElem.classList.add('alert-active');
	}, 1);
}


window.addEventListener('load', function() { //отложенный запуск
	
	//alert('kkkfkfkfkfkfkfkfkf', 'error');
	alert();
})