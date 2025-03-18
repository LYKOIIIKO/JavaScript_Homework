class Main {
	create() {
		let elem = document.createElement('main');
		elem.classList.add('main');

		let elemContainer = document.createElement('div');
		elemContainer.classList.add('container');

		elem.append(elemContainer);

		//elem.innerHTML = ``;

		return [elem, elemContainer];
	}

	init() {
		let elems = this.create();

		return elems;
	}
}

let mainElems = new Main().init();
let main = mainElems[0];
let mainContainer = mainElems[1];
export {main, mainContainer};