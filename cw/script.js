function Word(word, translate) { //сущность Слова
	if(!word || !translate) return;
	
	this.rus = word;
	this.en = translate;

	this.edit = function(translate) { //метод редактирования английского слова
		if(!translate) return;

		this.en = translate;
	};
}

function App() { //сущность. код самого приложения
	let id = 0;

	this.data = [];

	this.add = function(word, translate) { //метод добавления слов в словарь
		let item = new Word(word, translate); //создаем объект Слово

		if(!item.rus) return; //проверка на пустой объект
		item.id = ++id; //наращиваем id

		this.data.push(item); //пушим слово в словарь
	};

	this.edit = function(id, translate) { //метод редактирования слова. по id найдем слово, translate слово на замену
		let item = this.data.find(function(item) { //ищем слово в словаре по id
			return item.id === id; //находит слово
		});

		if (!item) return; //проверка на наличие слова

		item.edit(translate); //запускает функцию в Слове по редактированию
	};

	this.remove = function(id) { //метод удаления слова из словаря
		let dataTmp = this.data.filter(function(item) { //создаем временный массив. перебираем фильтром сохраняя все кроме удаляемого
			return item.id != id; //вот проверка
		});

		this.data = dataTmp; //заменяем дату на дату без удаленного слова
	};

	this.get = function(id) { //метод выводит весь словарь. если указать id выведет конкретное слово
		if (id) { // если id указан то
			let item = this.data.find(function(item) { //функция поиска слова в всловаре по id
				return item.id === id;
			});

			if (item) return item; //если item найден выведет item
			return;//иначе ничего
		}

		return this.data; // выведет весь словарь целиком если id не указан
	};

}

function AppUI() { //сущность создает скелет/структуру на html
	let appElem = document.createElement('div');
	appElem.classList.add('app');

	let formElem = document.createElement('div');
	formElem.classList.add('app__form');

	let inputWordRus = document.createElement('input');
	inputWordRus.setAttribute('type', 'text');
	inputWordRus.setAttribute('name', 'word_rus');
	inputWordRus.setAttribute('placeholder', 'Слово');

	let inputWordEn = document.createElement('input');
	inputWordEn.type = 'text';
	inputWordEn.name = 'word_en';
	inputWordEn.placeholder = 'Перевод';

	let btnAdd = document.createElement('button');
	btnAdd.classList.add('app__btn', 'app__btn-add');
	btnAdd.innerHTML = '+';


	let listElem = document.createElement('ul');
	listElem.classList.add('app__list');

	formElem.append(inputWordRus, inputWordEn, btnAdd); //дочерний блок с input. пушим в html созданные элементы
	appElem.append(formElem, listElem); //главный блок

	document.body.append(appElem);//пушим главный блок в body

	let app = new App(); //запускаем код приложения

	let updateList = function () { //функция по обновлению содержимого словаря на странице
		listElem.innerHTML = ''; //обнуляем список

		let data = app.get(); //забираем словарь

		if(!data || data.length == 0) return;

		data.forEach(function(item) { //создание структуры элемента слова в словаре с кнопками редактировать и удалить
			let itemElem = document.createElement('li');
			itemElem.classList.add('app__item');
		
			let wordRusElem = document.createElement('span');
			wordRusElem.classList.add('app__word_rus');
			wordRusElem.innerHTML = item.rus;
		
			let wordEnElem = document.createElement('span');
			wordEnElem.classList.add('app__word_en');
			wordEnElem.innerHTML = item.en;
		
			let wordBtns = document.createElement('div');
			wordBtns.classList.add('app__word_btns');
		
			wordBtnEdit = document.createElement('button');
			wordBtnEdit.classList.add('app__btn', 'app__btn-edit');
			wordBtnEdit.innerHTML = 'Редактрировать';
		
			wordBtnRemove = document.createElement('button');
			wordBtnRemove.classList.add('app__btn', 'app__btn-remove');
			wordBtnRemove.innerHTML = 'Удалить';
		
			wordBtns.append(wordBtnEdit, wordBtnRemove);
			itemElem.append(wordRusElem, wordEnElem, wordBtns);
			listElem.append(itemElem);


			wordBtnEdit.addEventListener('click', function() {
				let translate = prompt('Новый перевод');
				if(!translate) return;

				app.edit(item.id, translate);

				updateList();
			});

			wordBtnRemove.addEventListener('click', function() {
				app.remove(item.id);

				updateList();
			});
		})
	}

	btnAdd.addEventListener('click', function() { //добавляем событие при клике на кнопку +
		let inputRusValue = inputWordRus.value;
		let inputEnValue = inputWordEn.value;
		
		app.add(inputRusValue, inputEnValue);

		inputWordRus.value = '';
		inputWordEn.value = '';

		updateList();
	})
}

window.addEventListener('load', function() { //запускаем выполнение кода после загрузки html и css
	new AppUI();
})

/* структура кода
1. Word
    - создать:
    {
        rus: 'Стол',
        en: 'Table',
    }

    - редактировать

2. App
    - добавление
    - редактирование
    - удаление
    - получение/вывод
*/