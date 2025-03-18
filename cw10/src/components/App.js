import { main, mainContainer } from './Main.js';

class App {
    constructor() {
        this.init();
    }

    create() {
        let elem = document.createElement('div');
		elem.classList.add('app');

		return elem;
    }

    router() {
        let getPage = async () => {
			let page;

			let hash = location.hash;

			if (!hash) {
				page = 'home';
			} else {
				hash = hash.slice(1);
				
				let hashItems = hash.split('/');

				if (hashItems[0]) page = hashItems[0];
			}
			
			if (!page) page = '404';

			let timestamp = new Date().getTime();

			let elem = await import(`./${page}.js?v=${timestamp}`)
			.then(module => {
                mainContainer.innerHTML = '';

				document.title = module.pageTitle;

				mainContainer.append(module.page);
			})
		}

		let links = document.querySelectorAll('a[href="/"]');

		if (links) links.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault();

				history.pushState(null, null, '/');
				getPage();
			})
		});

		window.addEventListener('hashchange', (e) => {
			getPage();
		})

		getPage();
    }

    async render() {
        if (!this.elem) return;

		if (main) this.elem.append(main);

		document.body.append(this.elem);
    }

    async init() {
        this.elem = this.create();
        await this.render();
        this.router();
    }
}

export default new App();