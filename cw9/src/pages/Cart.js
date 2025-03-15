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

		let titleElem = document.createElement('li');
		titleElem.classList.add('cart__list_title');
		
			let titleDeliteElem = document.createElement('div');
			titleDeliteElem.classList.add('cart__list_delite');

			let titleProductElem = document.createElement('div');
			titleProductElem.classList.add('cart__list_product');
			titleProductElem.innerHTML = 'Product';

			let titlePriceElem = document.createElement('div');
			titlePriceElem.classList.add('cart__list_price');
			titlePriceElem.innerHTML = 'Price';

			let titleQuantityElem = document.createElement('div');
			titleQuantityElem.classList.add('cart__list_quantity');
			titleQuantityElem.innerHTML = 'Quantity';

			let titleSubtotalElem = document.createElement('div');
			titleSubtotalElem.classList.add('cart__list_subtotal');
			titleSubtotalElem.innerHTML = 'Subtotal';

			titleElem.append(titleDeliteElem, titleProductElem, titlePriceElem, titleQuantityElem, titleSubtotalElem);
			listElem.append(titleElem);

		data.forEach((item, index) => {
			let quantity = 1;
			let totalItem = quantity * item.price;

			totalItem = totalItem.toFixed(2);

			total += +totalItem;

			let liElem = document.createElement('li');
			liElem.classList.add('cart__item');

			// liElem.innerHTML = `
			// <div class="cart__number">${index + 1}</div>
			// <div class="cart__id">${item.id}</div>
			// <div class="cart__image"><img width="50" src="${item.image}" alt="${item.title}"></div>
			// <div class="cart__title"><a href="/#product/${item.id}">${item.title}</a></div>
			// <div class="cart__quantity"><input type="number" value="${quantity}"></div>
			// <div class="cart__price">${item.price}</div>
			// <div class="cart__total">${totalItem}</div>
			// `;

			let itemDelite = document.createElement('div');
			itemDelite.classList.add('cart__delite');
				let itemDeliteBtn = document.createElement('button');
				itemDeliteBtn.classList.add('cart__delite_btn');

			let itemProduct = document.createElement('div');
			itemProduct.classList.add('cart__product');

				let itemProductImg = document.createElement('img');
				itemProductImg.classList.add('cart__product_img');
				itemProductImg.src = `${item.image}`;

				let itemProductTitle = document.createElement('a');
				itemProductTitle.classList.add('cart__product_title');
				itemProductTitle.href = `/#product/${item.id}`;
				itemProductTitle.innerHTML = `${item.title}`;

			let itemPrice = document.createElement('span');
			itemPrice.classList.add('cart__price');
			itemPrice.innerHTML = `$${item.price}`;

			let itemQuantity = document.createElement('div');
			itemQuantity.classList.add('cart__quantity');

				let itemQuantityInput = document.createElement('input');
				itemQuantityInput.classList.add('cart__input');
				itemQuantityInput.type = 'number';
				itemQuantityInput.value = `${quantity}`;

			let itemSubtotal = document.createElement('span');
			itemSubtotal.classList.add('cart__subtotal');
			itemSubtotal.innerHTML = `$${totalItem}`;

			itemDelite.append(itemDeliteBtn);
			itemProduct.append(itemProductImg, itemProductTitle);
			itemQuantity.append(itemQuantityInput);
			liElem.append(itemDelite, itemProduct, itemPrice, itemQuantity, itemSubtotal);

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