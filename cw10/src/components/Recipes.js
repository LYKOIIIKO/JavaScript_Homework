class Recipes {
	constructor() {
		this.title = 'Recipes page';
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('recipes__content');

		return elem;
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
				timeElem.innerHTML = data.cookTimeMinutes;

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
				this.elem.append(this.createRecipes(item));
			});
		})
	}

	init() {
		this.elem = this.create();

		this.getData('https://dummyjson.com/recipes');

		return this.elem;
	}
}

// let obj = new Page();
// let elem = obj.init();
// let elemTitle = obj.title;
// export {elem as page, elemTitle as pageTitle};

let recipes = new Recipes().init();
export {recipes};