class Main {
	create() {
		let elem = document.createElement('main');
		elem.classList.add('main');

		return elem;
	}

	createTitle(value) {
		if (!value) return;

		let elem = document.createElement('h1');
		elem.classList.add('main__title');

		elem.innerHTML = value;

		return elem;
	}

	createContent(content) {
		let elem = document.createElement('div');
		elem.classList.add('main__content');

		if (content) elem.append(content);
		else elem.innerHTML = 'Content not found';

		return elem;
	}

	async getPageContent() {
		let namePage = location.pathname;

		if (namePage == '/') namePage = 'Home';
		else namePage = namePage.replaceAll('/', '');

		let elem = await import(`../pages/${namePage}.js`)
		.then(module => module.page);

		return elem || null;
	}

	async init() {
		let elem = this.create();

		let titleElem = this.createTitle('Home page');

		let content = await this.getPageContent();

		let contentElem = this.createContent(content);

		if (titleElem) elem.append(titleElem);
		if (contentElem) elem.append(contentElem);

		return elem;
	}
}

let main = new Main().init();
export {main};