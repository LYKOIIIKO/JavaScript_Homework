class Tags {
	constructor() {
		this.title = 'Tags page';
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('tags__content');

		let allElem = document.createElement('div');
		allElem.classList.add('tags__item');

			let allTitle = document.createElement('a');
			allTitle.classList.add('tags__title');
			allTitle.innerHTML = `All >`;
			allTitle.href = `/`;

		allElem.append(allTitle);
		elem.append(allElem);

		return elem;
	}

	createRecipes(data) {
		let elem = document.createElement('div');
		elem.classList.add('tags__item');

			let titleElem = document.createElement('a');
			titleElem.classList.add('tags__title');
			titleElem.innerHTML = `${data} >`;
			titleElem.href = `/#tags/${data}`;

		elem.append(titleElem);

		return elem;
	}

	async getData(url) {
		await fetch(url)
		.then(response => response.json())
		.then(data => {
			data.forEach(item => {
				this.elem.append(this.createRecipes(item));
			});
		})
	}

	init() {
		this.elem = this.create();

		this.getData('https://dummyjson.com/recipes/tags');

		return this.elem;
	}
}

// let obj = new Page();
// let elem = obj.init();
// let elemTitle = obj.title;
// export {elem as page, elemTitle as pageTitle};

let tags = new Tags().init();
export {tags};