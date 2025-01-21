let Notes = function() {
	let data = [];
	let lastId = 0;

	this.add = (title, content, color) => {
		if (!title && !content) return;

		lastId++;

		let note = {
			id: lastId,
			create: Date.now()
		};

		if (title) note.title = title;
		if (content) note.content = content;
		if (color) note.color = color;

		data.push(note);

		return true;
	}

	this.edit = (id, newData = {}) => {
		if (!id) return false;

		let note = data.find((item) => {
			return item.id == id;
		});

		if (!note) return false;

		for (let key in newData) {
			let value = newData[key];
			if (value) note[key] = value;
		}

		if (!note.title && !note.content) return false;
		return true;
	}

	this.remove = (id) => {
		if (!id) return;

		let dataTmp = data.filter((item) => {
			return item.id != id;
		});

		data = dataTmp;
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