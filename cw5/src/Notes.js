let Notes = function() { //app core
	let data = [ //notes storages 
		{
			id: 1,
			title: '1111111111111111',
			content: 'asdasdasdas',
			create: Date.now()
		},
		{
			id: 2,
			title: '222222222222222222',
			content: 'asdasdasdas',
			create: Date.now()
		},
		{
			id: 3,
			title: '333333333333333333333',
			content: 'asdasdasdas',
			create: Date.now()
		},
		{
			id: 4,
			title: '44444444',
			content: 'asdasdasdas',
			create: Date.now()
		},
	]; 

	let lastId = 0;

	this.add = (title, content, color) => {
		if (!title && !content) return;

		lastId++;

		let note = { //object note
			id: lastId,
			create: Date.now()
		};

		if (title) note.title = title;
		if (content) note.content = content;
		if (color) note.color = color;

		data.push(note);

		return true;
	}

	this.edit = (id, newData = {}) => { //object variant
		if (!id) return false;

		let note = data.find((item) => {
			return item.id == id;
		});

		if (!note) return false;

		for (let key in newData) {
			let value = newData[key]; 
			if (value) note[key] = value; //если значение свойства не пустое, пушим свойство и значение в заметку
		}

		if (!note.title && !note.content) return false; //дополнительная проверка на пустой заголовок и контент заметки
		return true;
	}

	this.remove = (id) => {
		if (!id) return;

		let dataTmp = data.filter((item) => { //возвращаем все заметки кроме удаляемой
			return item.id != id;
		});

		data = dataTmp; //перезаписываем data
	}

	this.get = (id) => {
		if (id > 0) {
			let note = data.find((item) => {
				return item.id == id;
			});

			if (note) return note;
			return false;
		}

		return data;
	}
}