class Products {
	create() {
		let elem = document.createElement('div');
		elem.classList.add('catalog__products', 'products');

		return elem;
	}

	createProducts(data) {
		let elem = document.createElement('div');
		elem.classList.add('products__item', 'product');

		elem.innerHTML = `
			<img class="products__image" src="${data.image}" alt="${data.title}">
			<a class="products__title" href="/#product/${data.id}">${data.title}</a>
			<div class="products__price">$${data.price}</div>
			<button class="products__btn_add">Add to cart</button>
		`;

		return elem;
	}

	async getData(url) {
		await fetch(url)
		.then(response => response.json())
		.then(data => {
			data.forEach(item => {
				this.elem.append(this.createProducts(item));
				
			});
		})
	}

	init() {
		this.elem = this.create();

		this.getData('https://fakestoreapi.com/products');

		return this.elem;
	}
}

let products = new Products().init();
export {products};