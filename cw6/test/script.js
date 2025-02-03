let mainElem = document.createElement('div');
mainElem.classList.add('test');

	let firstBlock = document.createElement('div');
	firstBlock.classList.add('test__block');
		let firstList = document.createElement('ul');
		firstList.classList.add('test__list');
			let item1 = document.createElement('li');
			item1.classList.add('test__item');
			item1.innerHTML = '1TextTextTextText';
			let item2 = document.createElement('li');
			item2.classList.add('test__item');
			item2.innerHTML = '2TextTextTextText';
			let item3 = document.createElement('li');
			item3.classList.add('test__item');
			item3.innerHTML = '3TextTextTextText';
			let item4 = document.createElement('li');
			item4.classList.add('test__item');
			item4.innerHTML = '4TextTextTextText';
			let item5 = document.createElement('li');
			item5.classList.add('test__item');
			item5.innerHTML = '5TextTextTextText';

	let secondBlock = document.createElement('div');
	secondBlock.classList.add('test__block');
		let secondList = document.createElement('ul');
		secondList.classList.add('test__list');

firstList.append(item1, item2, item3, item4, item5);

firstBlock.append(firstList);

secondBlock.append(secondList);

mainElem.append(firstBlock, secondBlock);

document.body.append(mainElem);


let list = document.querySelectorAll('.test__list');

let item = document.querySelectorAll('.test__item');
item.forEach((item) => {
	item.draggable = true;
})

let selectedItem,
	currentItem,
	selectedList,
	currentList;

list.forEach((item) => {
	item.addEventListener('dragstart', (event) => {
		selectedItem = event.target;
		selectedItem.classList.add('selected');

		selectedList = item;
	})

	item.addEventListener('dragend', (event) => { 
		selectedItem.classList.remove('selected');
	
		if (!currentItem && selectedList == currentList) return;

		let currentItemOffsetCenter = currentItem.offsetLeft + currentItem.offsetWidth / 2;
		let x = event.clientX - 50;
	
		let dir = x <= currentItemOffsetCenter ? 'l' : 'r';

		if (selectedList != currentList) currentList.append(selectedItem);

		if (selectedList == currentList) {
			if (dir == 'l') item.insertBefore(selectedItem, currentItem);
			else item.insertBefore(selectedItem, currentItem.nextElementSibling);	
		}
	
		currentItem.classList.remove('hover');
		currentItem = undefined;
		currentList = undefined;
	});
	
	item.addEventListener('dragover', (event) => { //перемещение элемента
		event.preventDefault(); //этим мы убираем выделение текста на item
	
		currentItem = event.target;

		currentList = currentItem.closest('ul'); //определяем список-цель
	
		if (selectedItem == currentItem) return;
	
		currentItem.classList.add('hover');
		

	});
	
	item.addEventListener('dragleave', (event) => { //покидание перемещаемого элемента элемента под ним
		event.target.classList.remove('hover');
		currentList.classList.remove('hover');

		currentItem = undefined;
		currentList = undefined;
	});
});
