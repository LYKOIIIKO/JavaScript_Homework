import { tags } from './Tags.js';
import { recipes } from './Recipes.js';


class Page {
	constructor() {
		this.title = 'Home page';
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		return elem;
	}

	init() {
		let elem = this.create();

		if (tags) elem.append(tags);
		if (recipes) elem.append(recipes);

		return elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};