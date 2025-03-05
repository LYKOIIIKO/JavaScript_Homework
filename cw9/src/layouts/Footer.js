class Footer {
	create() {
		let elem = document.createElement('footer');
		elem.classList.add('footer');

		return elem;
	}

	createLogo() {
		let elem = document.createElement('div');
		elem.classList.add('footer__logo');

		elem.innerHTML = `
		<a href="/"><img src="https://placehold.co/100x50/333/eee" alt="#"></a>
		`;

		return elem;
	}

	createContacts() {
		let elem = document.createElement('ul');
		elem.classList.add('footer__contacts');

		elem.innerHTML = `
		<li class="footer__contacts_item">
			<img class="footer__contacts_ico" src="https://placehold.co/24x24/333/eee" alt="#">
			<a class="footer__contacts_link" href="/">asdadasdasdasdasdasdadasd</a>
		</li>
		<li class="footer__contacts_item">
			<img class="footer__contacts_ico" src="https://placehold.co/24x24/333/eee" alt="#">
			<a class="footer__contacts_link" href="/">222222222222222222222222</a>
		</li>
		<li class="footer__contacts_item">
			<img class="footer__contacts_ico" src="https://placehold.co/24x24/333/eee" alt="#">
			<a class="footer__contacts_link" href="/">3333333333333333333333333333333333333333333</a>
		</li>
		`;

		return elem;
	}

	init() {
		let elem = this.create();

		let logoElem = this.createLogo();
		let contactsElem = this.createContacts();

		if (logoElem) elem.append(logoElem);
		if (contactsElem) elem.append(contactsElem);

		return elem;
	}
}

let footer = new Footer().init();
export {footer};