import { tag } from './Tag.js';
class Page {
	constructor() {
		this.id = null;
		this.title = 'Tags';
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

			let elemRecipes = document.createElement('div');
			elemRecipes.classList.add('recipes__content');

		return [elem, elemRecipes];
	}

	checkTag(tag, id) {
		tag.childNodes.forEach(item =>{
			item.classList.remove('active');
			if (item.innerText == `${id} >`) item.classList.add('active');
		})
	}

	createRecipes(data) {
		let elem = document.createElement('div');
		elem.classList.add('recipes__item');

		let firstElem = document.createElement('div');
		firstElem.classList.add('recipes__part');

			let imgElem = document.createElement('img');
			imgElem.classList.add('recipes__img');
			imgElem.src = data.image;
			imgElem.alt = data.name;

		let secondElem = document.createElement('div');
		secondElem.classList.add('recipes__part');

			let thirdElem = document.createElement('div');
			thirdElem.classList.add('recipes__desc');

				let titleElem = document.createElement('a');
				titleElem.classList.add('recipes__title');
				titleElem.href = `/#recipes/${data.id}`;
				titleElem.innerHTML = data.name;

				let rateElem = document.createElement('span');
				rateElem.classList.add('recipes__rate');
				rateElem.innerHTML = data.rating;

			let fourthElem = document.createElement('div');
			fourthElem.classList.add('recipes__desc');

				let timeElem = document.createElement('span');
				timeElem.classList.add('recipes__time');
				timeElem.innerHTML = `${data.cookTimeMinutes} min`;

				let commentElem = document.createElement('span');
				commentElem.classList.add('recipes__comment');
				commentElem.innerHTML = data.reviewCount;

		fourthElem.append(timeElem, commentElem);
		thirdElem.append(titleElem, rateElem);
		secondElem.append(thirdElem, fourthElem);
		firstElem.append(imgElem);

		elem.append(firstElem, secondElem);

		return elem;
	}

	async getData(url) {
		await fetch(url)
		.then(response => response.json())
		.then(data => {
			data.recipes.forEach(item => {
				this.elemRecipes.append(this.createRecipes(item));
			});
		})
	}

	init() {
		this.id = this.getId();

		this.elems = this.create();
		this.elem = this.elems[0];
		this.elemRecipes = this.elems[1];
		
		this.checkTag(tag, this.id);
		
		if (this.id) this.getData(`https://dummyjson.com/recipes/tag/${this.id}`);
		
		if (tag) this.elem.append(tag, this.elemRecipes);

		return this.elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.id;
export {elem as page, elemTitle as pageTitle};