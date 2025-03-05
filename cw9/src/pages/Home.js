class Home {
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

let home = new Home().init();
export {home as page};