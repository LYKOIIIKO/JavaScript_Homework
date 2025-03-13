class Cart {
	static add(id) {
		let data = localStorage.getItem('cart');
		if (data) data = JSON.parse(data);

		if (!data) data = [];

		if (data.includes(id)) return;

		data.push(id);

		data = JSON.stringify(data);

		if (!data) return;

		localStorage.setItem('cart', data);

		Cart.updateWidget();
	}

	static async get() {
		let cartData = localStorage.getItem('cart');
		if (cartData) cartData = JSON.parse(cartData);

		if (!cartData) return [];

		await fetch('https://fakestoreapi.com/products')
		.then(response => response.json())
		.then(data => {
			let tmpData = data.filter(item => {
				return cartData.includes(item.id);
			});

			cartData = tmpData.map(item => {
				return {
					id: item.id,
					title: item.title,
					image: item.image,
					price: item.price
				}
			})
		});
		

		return cartData;
	}

	static updateWidget() {
		let counterElem = document.querySelector('.cart_widget__count');
		let totalElem = document.querySelector('.cart_widget__total');

		if(!counterElem || !totalElem) return;

		Cart.get()
		.then(data => {
			let total = 0;

			data.forEach(item => {
				total += +item.price;
			});

			counterElem.innerHTML = data.length;
			totalElem.innerHTML = `$ ${total}`;

		})
	}
}

let cartAdd = Cart.add;
let cartGet = Cart.get;
let cartUpdate = Cart.updateWidget;

export { cartAdd, cartGet, cartUpdate };