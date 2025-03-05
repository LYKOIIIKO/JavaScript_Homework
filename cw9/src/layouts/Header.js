import { nav } from './Nav.js';
import { cartWidget } from '../components/CartWidget.js';

class Header {
	create() {
		let elem = document.createElement('header');
		elem.classList.add('header');

		return elem;
	}

	createLogo() {
		let elem = document.createElement('div');
		elem.classList.add('header__logo');

		elem.innerHTML = `
		<a href="/"><img src="https://placehold.co/100x50/EEE/31343C" alt="#"></a>
		`;

		return elem;
	}

	init() {
		let elem = this.create();

		let logoElem = this.createLogo();

		if (logoElem) elem.append(logoElem);
		if (nav) elem.append(nav);
		if (cartWidget) elem.append(cartWidget);

		return elem;
	}
}

let header = new Header().init();
export {header};