class Contacts {
	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		elem.innerHTML = 'Contacts page';

		return elem;
	}

	init() {
		let elem = this.create();

		return elem;
	}
}

let contacts = new Contacts().init();
export {contacts as page};