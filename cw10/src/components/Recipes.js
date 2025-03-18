import { tag } from './Tag.js';

class Page {
	constructor() {
		this.id = null;
		this.title = 'Recipes';
	}

	getId() {
		let href = location.href;
		href = href.split('/');

		if (!href || href.length == 0) return;

		return href[href.length - 1];
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		return elem;
	}

	createRecipe(data) {
		let elem = document.createElement('div');
		elem.classList.add('recipe__content');

		let firstElem = document.createElement('div');
		firstElem.classList.add('recipe__part');

			let imgElem = document.createElement('img');
			imgElem.classList.add('recipe__img');
			imgElem.src = data.image;
			imgElem.alt = data.name;

		let secondElem = document.createElement('div');
		secondElem.classList.add('recipe__part');

			let titleElem = document.createElement('span');
			titleElem.classList.add('recipe__title');
			titleElem.innerHTML = data.name;

			let infoElem = document.createElement('div');
			infoElem.classList.add('recipe__info');

			let rateElem = document.createElement('span');
			rateElem.classList.add('recipe__rate');
			rateElem.innerHTML = data.rating;

			let timeElem = document.createElement('span');
			timeElem.classList.add('recipe__time');
			timeElem.innerHTML = `Cooking time: ${data.cookTimeMinutes} min`;

			let time2Elem = document.createElement('span');
			time2Elem.classList.add('recipe__time');
			time2Elem.innerHTML = `Preparation time for cooking: ${data.prepTimeMinutes} min`;

			let commentElem = document.createElement('span');
			commentElem.classList.add('recipe__comment');
			commentElem.innerHTML = data.reviewCount;

			let tagsElem = document.createElement('div');
			tagsElem.classList.add('recipe__tags');

			data.tags.forEach(item => {
				let tagElem = document.createElement('a');
				tagElem.classList.add('recipe__tag');
				tagElem.innerHTML = item;
				tagElem.href = `/#tags/${item}`;
				tagsElem.append(tagElem);
			});

		
			let ingrElem = document.createElement('p');
			ingrElem.classList.add('recipe__ingr');
			ingrElem.innerHTML = `Ingredients: ${data.ingredients}`;

			let instElem = document.createElement('p');
			instElem.classList.add('recipe__instr');
			instElem.innerHTML = data.instructions;



		infoElem.append(rateElem, commentElem)
		secondElem.append(titleElem, tagsElem, infoElem, time2Elem, timeElem, ingrElem, instElem);
		firstElem.append(imgElem);

		elem.append(firstElem, secondElem);

		return elem;
	}

	async getData(url) {
		await fetch(url)
		.then(response => response.json())
		.then(data => this.elem.append(this.createRecipe(data)));
	}

	init() {
		this.id = this.getId();

		this.elem = this.create();

		if (tag) this.elem.append(tag);

		if (this.id) this.getData(`https://dummyjson.com/recipes/${this.id}`);

		return this.elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};