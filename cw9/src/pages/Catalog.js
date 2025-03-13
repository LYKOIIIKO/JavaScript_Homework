import { products } from '../components/Products.js';

class Page {
	constructor() {
		this.title = 'Products';
	}
	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		return elem;
	}

	init() {
		let elem = this.create();

		if (products) elem.append(products);

		return elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};