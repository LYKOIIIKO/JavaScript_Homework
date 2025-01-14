function Task(task, id) { //сущность задачи
	if(!task) return;

	this.item = task;

	this.id = id;

	this.status = false;
}

function App() {
	this.data = [];
	let lastId = 0;
	
	this.add = function(task) { //метод добавления задачи в хранилище
		lastId++;
		let newItem = new Task(task, lastId);

		if(!newItem.item) return;

		this.data.push(newItem);
	}

	this.done = function(id) { //метод сохранения статуса задачи
		if(!id || id < 0) return false;

		let task = this.data.find(function(item) {
			return item.id == id;
		})
		
		if(!task) return false;

		task.status = !task.status;
	}

	this.edit = function(id, name) {
		if(!id || id <= 0 || !name) return false;

		let task = this.data.find(function(item) {
			return item.id == id;
		})

		if(!task) return false;

		task.item = name;

		return true;
	}
	
	this.get = function() { //метод вывода хранилища
		return this.data;
	}

	this.clear = function() { //удалить все задачи
		this.data = [];
	}
}


function AppUI() { //создаем сущность/структуру HTML
	let appElem = document.createElement('div');
	appElem.classList.add('app');

	let appTitle = document.createElement('div');
	appTitle.classList.add('app__title');

	let appBtnRemoveAll = document.createElement('button'); //кнопка очистки списка
	appBtnRemoveAll.classList.add('app__btnRemoveAll');
	appBtnRemoveAll.addEventListener('click', function() {
		app.clear();
		updateList();
	})

	let appName = document.createElement('span');
	appName.classList.add('app__name');
	appName.innerHTML = 'ToDo List';
	
	let appContent = document.createElement('div');
	appContent.classList.add('app__content');

	let appInput = document.createElement('div');
	appInput.classList.add('app__input');

	let inputElem = document.createElement('input');
	inputElem.setAttribute('type', 'text');
	inputElem.setAttribute('name', 'task_item');
	inputElem.setAttribute('placeholder', 'Type your task...');

	let appInputBtn = document.createElement('button');
	appInputBtn.classList.add('app__input_btn');
	appInputBtn.innerHTML = '+';

	let appList = document.createElement('ul');
	appList.classList.add('app__list');
	

	let app = new App();

	appInput.append(inputElem, appInputBtn);
	appContent.append(appInput, appList);
	appTitle.append(appBtnRemoveAll, appName);
	appElem.append(appTitle, appContent);
	document.body.append(appElem);
	

	let updateList = function () { //функция обновления списка задач на странице
		appList.innerHTML = '';

		let data = app.get();

		if(!data || data.length == 0) return;

		data.forEach(function(item) { //добавляем задачу на страницу
			let appItem = document.createElement('li');
			appItem.classList.add('app__item');

			let appItemBtn = document.createElement('button');
			appItemBtn.classList.add('app__item_btn');

			let appItemTask = document.createElement('span');
			appItemTask.classList.add('app__item_task');
			appItemTask.innerHTML = item.item;

			appItem.append(appItemBtn, appItemTask);
			appList.append(appItem);


			appItem.addEventListener('click', function() { //добавляет класс active и сохраняет его при обновлении
				app.done(item.id);
				updateList();
			});

			if(item.status) appItem.classList.add('active');
			else appItem.classList.remove('active');


			appItemTask.addEventListener('dblclick', (event) => { //добавляем даблклик для редактирования
				let name = event.target.innerText;

				let newName = prompt('', name);

				app.edit(item.id, newName);

				updateList();
			})
		})
	}

	inputElem.addEventListener('keypress', function(event) { //создаем задачу нажатием enter на input
		if(event.code != 'Enter') return;

		let taskValue = inputElem.value; //забираем значение из input

		app.add(taskValue);//добавляем его в хранилище

		inputElem.value = ''; //очищаем значение в объекте

		updateList();//добавляем задачу на страницу
	})

	appInputBtn.addEventListener('click', function() { //создаем задачу нажатием на кнопку +
		let taskValue = inputElem.value; //забираем значение из input

		app.add(taskValue);//добавляем его в хранилище

		inputElem.value = ''; //очищаем значение в объекте

		updateList();//добавляем задачу на страницу
	})

	//добавляем появление кнопки + при наведении на input
	inputElem.addEventListener('mouseover', function() { 
		appInputBtn.style.display = 'inline-block';
	})
	
	inputElem.addEventListener('mouseout', function() {
		appInputBtn.style.display = 'none';
	})

	appInputBtn.addEventListener('mouseover', function() {
		appInputBtn.style.display = 'inline-block';
	})

	appInputBtn.addEventListener('mouseout', function() {
		appInputBtn.style.display = 'none';
	})
}


window.addEventListener('load', function() {
	let appUI = new AppUI();
});
