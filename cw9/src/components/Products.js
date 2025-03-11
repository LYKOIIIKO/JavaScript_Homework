class Products {
	create() {
		let elem = document.createElement('div');
		elem.classList.add('catalog__products', 'products');

		return elem;
	}

	createProducts(data) {
		let elem = document.createElement('div');
		elem.classList.add('products__item', 'product');

		// elem.innerHTML = `
		// 	<div class="products__container_img">
		// 		<img class="products__image" src="${data.image}" alt="${data.title}">
		// 	</div>
				
		// 	<div class="products__container_content">
		// 		<a class="products__title" href="/#product/${data.id}">${data.title}</a>
		// 		<div class="products__price">$${data.price}</div>
		// 		<button class="products__btn_add">Add to cart</button>
		// 	</div>
		// `;

		let containerImg = document.createElement('div');
		containerImg.classList.add('products__container_img');
			let imgElem = document.createElement('img');
			imgElem.classList.add('products__image');
			imgElem.src = data.image;
			imgElem.alt = data.title;

		let containerContent = document.createElement('div');
		containerContent.classList.add('products__container_content');
			let titleElem = document.createElement('a');
			titleElem.classList.add('products__title');
			titleElem.href = `/#product/${data.id}`;
			titleElem.innerHTML = data.title;
			
			let priceElem = document.createElement('div');
			priceElem.classList.add('products__price');
			priceElem.innerHTML = `$${data.price}`;

			let btnAddElem = document.createElement('button');
			btnAddElem.classList.add('products__btn_add');
			btnAddElem.innerHTML = `Add to cart`;

		containerContent.append(titleElem, priceElem, btnAddElem);
		containerImg.append(imgElem);

		elem.append(containerImg, containerContent);
		
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