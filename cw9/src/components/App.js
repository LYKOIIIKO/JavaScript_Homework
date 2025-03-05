import { header } from '../layouts/Header.js';
//import { main } from '../layouts/Main.js';
import { footer } from '../layouts/Footer.js';


class App {
	constructor() {
		this.init();
	}	

	create() {
		let elem = document.createElement('div');
		elem.classList.add('app');

		return elem;
	}

	createHead() {
		let metaCharsetElem = document.createElement('meta');
		metaCharsetElem.setAttribute('charset', 'UTF-8');

		let metaVPElem = document.createElement('meta');
		metaVPElem.setAttribute('name', 'viewport');
		metaVPElem.setAttribute('content', 'width=device-width, initial-scale=1.0');

		let titleElem = document.createElement('title');
		titleElem.innerHTML = 'Store App';

		let linkElem = document.createElement('link');
		linkElem.rel = 'stylesheet';
		linkElem.href = '/src/index.css';

		return {
			charset: metaCharsetElem,
			view: metaVPElem,
			title: titleElem,
			css: linkElem
		};
	}

	async render() {
		if (!this.elem) return;

		let headElems = this.createHead();

		if (header) this.elem.append(header);
		//if (main) this.elem.append(main);

		await import('../layouts/Main.js')
		.then(module => module.main)
		.then(content => {
			this.elem.append(content);
		});

		if (footer) this.elem.append(footer);

		document.head.append(headElems.charset, headElems.view, headElems.title, headElems.css);
		document.body.append(this.elem);
	}

	init() {
		this.elem = this.create();
		this.render();
	}
}

export default new App();