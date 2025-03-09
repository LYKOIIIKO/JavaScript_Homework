class Storage {
	constructor(key) {
		if(!key || typeof key != 'string') return;
		this.key = key;
		
		//this.data = this.get() || null; //чтобы каждый раз не выполнять get

		this.value = null;
	}
	

	set data(value) {
		if(!value) return;

		value = JSON.stringify(value);

		if(!value || typeof value != 'string') return;
		console.log(this.key, value)

		window.localStorage.setItem(this.key, value);
	}

	get data() {
		if (this.value && typeof this.value == 'object') return; //чтобы каждый раз не выполнять get

		let value = window.localStorage.getItem(this.key);

		if (!value) return;

		value = JSON.parse(value);

		return value;
	}

	// set(data) {
	// 	if(!data) return;

	// 	data = JSON.stringify(data);

	// 	if(!data || typeof data != 'string') return;

	// 	window.localStorage.setItem(this.key, data);
	// }

	// get() {
	// 	if (this.data && typeof this.data == 'object') return; //чтобы каждый раз не выполнять get

	// 	let data = window.localStorage.getItem(this.key);

	// 	if (!data) return;

	// 	data = JSON.parse(data);

	// 	return data;
	// }
}

//let store = new Storage('mynotes');

// let myData = [
// 	{
// 		id: 1,
// 		title: 'Title note 1',
// 		content: 'Text text text',
// 		create: Date.now()
// 	},
// 	{
// 		id: 2,
// 		title: 'Title note 2',
// 		content: 'Text text text',
// 		create: Date.now()
// 	},
// 	{
// 		id: 3,
// 		title: 'Title note 3',
// 		content: 'Text text text',
// 		create: Date.now()
// 	},
// 	{
// 		id: 4,
// 		title: 'Title note 4',
// 		content: 'Text text text',
// 		create: Date.now()
// 	},
// 	{
// 		id: 5,
// 		title: 'Title note 5',
// 		content: 'Text text text',
// 		create: Date.now()
// 	}
// ]

//store.set(myData);

//store.data = myData;