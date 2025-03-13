import { cartAdd } from "../components/Cart.js";

class Page {
	constructor() {
		this.id = null;
		this.title = 'Product page';
	}

	getId() {
		let href = location.href;
		href = href.split('/');

		if (!href || href.length == 0) return;

		return href[href.length - 1];
	}

	createProduct(data) {
		let elem = document.createElement('div');
		elem.classList.add('product');

		elem.innerHTML = `
		<div class="product__item">
			<img src="${data.image}" alt="${data.title}">
		</div>
		`;

		let rightItem = document.createElement('div');
		rightItem.classList.add('product__item');

		rightItem.innerHTML = `
			<h1 class="product__title">${data.title}</h1>
			<div class="product__info">
				<span class="product__category">${data.category}</span>
				<span class="product__rate">Rating: ${data.rating.rate} (${data.rating.count})</span>
				<span class="product__id">№ ${data.id}</span>
			</div>
			<div class="product__desc">${data.description}</div>
		`;

		let footerItem = document.createElement('div');
		footerItem.classList.add('product__footer');

		footerItem.innerHTML = `
			<span class="product__price">$ ${data.price}</span>	
		`;

		let btnAdd = document.createElement('button');
		btnAdd.classList.add('product__btn_add');

		btnAdd.innerHTML = `Add to cart`;

		footerItem.append(btnAdd);
		rightItem.append(footerItem);
		elem.append(rightItem);

		btnAdd.addEventListener('click', () => {
			cartAdd(data.id);
		})
		
		return elem;
	}

	async getData(url) {
		await fetch(url)
		.then(response => response.json())
		.then(data => {
				this.elem.append(this.createProduct(data));
			});
	}

	create() {
		let elem = document.createElement('div');
		elem.classList.add('main__content','content');

		return elem;
	}

	init() {
		this.id = this.getId();
		this.elem = this.create();
		
		this.getData(`https://fakestoreapi.com/products/${this.id}`);

		return this.elem;
	}
}

let obj = new Page();
let elem = obj.init();
let elemTitle = obj.title;
export {elem as page, elemTitle as pageTitle};