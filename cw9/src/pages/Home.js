class Page {
	constructor() {
		this.title = 'Home page';
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		elem.innerHTML = 'Content home page';

		return elem;
	}

	init() {
		let elem = this.create();

		return elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};