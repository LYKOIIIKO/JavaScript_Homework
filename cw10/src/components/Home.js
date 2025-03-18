import { tag } from './Tag.js';
import { recipe } from './Recipe.js';


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

		if (tag) elem.append(tag);
		if (recipe) elem.append(recipe);

		return elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};