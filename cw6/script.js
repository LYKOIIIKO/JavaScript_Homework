let list = document.querySelector('.list');
let items = document.querySelectorAll('.list .item');

items.forEach(item => {
    item.draggable = true;
});

let selectedItem;
let currentItem;

list.addEventListener('dragstart', (event) => { //захват перемещаемого элемента
    selectedItem = event.target;
    selectedItem.classList.add('selected');
});

list.addEventListener('dragend', (event) => { //отпускание перемещаемого элемента
    selectedItem.classList.remove('selected');

    if (!currentItem || !currentItem.draggable) return;

    let currentItemOffsetLeft = currentItem.offsetLeft;
    let currentItemOffsetCenter = currentItem.offsetLeft + currentItem.offsetWidth / 2;
    let x = event.clientX - 50;//добавить 

    console.log("left" + currentItem.offsetLeft)
    console.log("width" + currentItem.offsetWidth)
    console.log("center" + currentItemOffsetCenter)
    console.log('x' + x)

    let dir = x <= currentItemOffsetCenter ? 'l' : 'r';
    console.log('dir' + dir)

    if (dir == 'l') list.insertBefore(selectedItem, currentItem);
    else list.insertBefore(selectedItem, currentItem.nextElementSibling);

    currentItem.classList.remove('hover');
    currentItem = undefined;
});

list.addEventListener('dragover', (event) => { //перемещение элемента
    event.preventDefault();

    currentItem = event.target;

    if (selectedItem == currentItem) return;

    currentItem.classList.add('hover');
});

list.addEventListener('dragleave', (event) => { //покидание перемещаемого элемента элемента под ним
    currentItem = undefined;
    event.target.classList.remove('hover');
});