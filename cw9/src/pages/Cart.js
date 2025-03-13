import { cartGet } from '../components/Cart.js';

class Page {
	constructor() {
		this.title = 'Cart page';
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		return elem;
	}

	createProducts(data) {
		let total = 0;

		let elem = document.createElement('div');
		elem.classList.add('cart');

		let listElem = document.createElement('ul');
		listElem.classList.add('cart__list');

		data.forEach((item, index) => {
			let quantity = 1;
			let totalItem = quantity * item.price;

			totalItem = totalItem.toFixed(2);

			total += +totalItem;

			let liElem = document.createElement('li');
			liElem.classList.add('cart__item');

			liElem.innerHTML = `
			<div class="cart__number">${index + 1}</div>
			<div class="cart__id">${item.id}</div>
			<div class="cart__image"><img width="50" src="${item.image}" alt="${item.title}"></div>
			<div class="cart__title"><a href="/#product/${item.id}">${item.title}</a></div>
			<div class="cart__quantity"><input type="number" value="${quantity}"></div>
			<div class="cart__price">${item.price}</div>
			<div class="cart__total">${totalItem}</div>
			`;

			listElem.append(liElem);
		});

		let elemTotal = document.createElement('div');
		elemTotal.classList.add('cart__total');
		elemTotal.innerHTML = `Total: $ ${total.toFixed(2)}`;

		elem.append(listElem, elemTotal);

		return elem;
	}

	init() {
		this.elem = this.create();

		cartGet()
		.then(data => {
			this.elem.append(this.createProducts(data));
		})

		return this.elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};