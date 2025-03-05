class Catalog {
	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		elem.innerHTML = 'Catalog page';

		return elem;
	}

	init() {
		let elem = this.create();

		return elem;
	}
}

let catalog = new Catalog().init();
export {catalog as page};