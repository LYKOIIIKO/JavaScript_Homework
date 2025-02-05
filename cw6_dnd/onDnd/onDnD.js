/* let opt = {
    items: [],
    zones: [],
    zoneOver: null,
    // mobile: false
}; 
// items: список перетаскиваемых элементов

// zones: список элементов для сброса

// zoneOver: главный элемент по которому можно перетаскивать - общая зона перетаскивания

// mobile: обсудим на занятии, т.к. мобильная версия очень сильно отличется от дестопной - я ее пока не делал
*/

let onDnD = function(opt) {
    let items = opt.items || [];
    let zones = opt.zones || [];
    let zoneOver = opt.zoneOver;

    if (items.length == 0 ||
        zoneOver.length == 0 ||
        !zoneOver) return;

    
    let userAgent = navigator.userAgent.toLowerCase(); //BOM объект даёт информацию о самом браузере и операционной системе.Возвращает строку агента пользователя для данного браузера.
    let isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
    
    let itemSelected = null;
    let itemSelectedClone = null; //призрак перетаскиваемой карточки
    let itemOnDrop = null;
    let dropZone = null;
    let appendType = null;


    let start = (event) => {
        let imgDrag = document.createElement('img'); //это чтобы призрак карточки исчезал
        imgDrag.src = '';
        event.dataTransfer.setDragImage(imgDrag, 0, 0);//устанавливается пустое изображение которое мы таскаем

        itemSelected = event.target; //определяем элемент который перетаскиваем
        itemSelected.classList.add('selected');
    };

    let end = (event) => {
        if (itemSelected) { //убираем классы, они больше не нужны
            itemSelected.classList.remove('selected');
            itemSelected.removeAttribute('style');
        }

        itemSelected = null;
        itemSelectedClone.remove(); //удаляем клон
        itemSelectedClone = null;

        if (itemOnDrop) itemOnDrop.style = ''; //обнуляем стили заменяемоц карточки
        itemOnDrop = null;

        if (dropZone) dropZone.classList.remove('enter');
        dropZone = null;

        appendType = null;
    };

    let enter = (event) => {
        if (dropZone) dropZone.classList.remove('enter'); //удаляем класс enter с зоны которая уже определена в переменную

        dropZone = getDropZone(event.target); //назначем новую дроп-зону
        
        if (dropZone) dropZone.classList.add('enter');

        if (itemOnDrop) itemOnDrop.style = '';

        itemOnDrop = event.target; //определем заменяемую карточку
        if (!itemOnDrop ||
            !itemOnDrop.classList.contains('dnd-item') || 
            itemOnDrop == itemSelected) {
            itemOnDrop = null;
        }
    };

    let leave = (event) => {
        let dropZoneRelated = getDropZone(event.relatedTarget);

        if (!dropZoneRelated && dropZone) dropZone.classList.remove('enter');
    };

    let drop = (event) => {
        event.preventDefault(); //отключение стандартных действий браузера

        dropZone = getDropZone(event.target); //опять проверяем дроп-зону

        if (itemSelected && dropZone) {
            if (!itemOnDrop) appendType = null;

            switch(appendType) { //вставка карточки
                case 'bottom':
                case 'after': 
                    itemOnDrop.after(itemSelected);
                break;
                case 'top':
                case 'before':
                    itemOnDrop.before(itemSelected);
                break;
                default: dropZone.append(itemSelected);
            }
        }
    };

    let over = (event) => {
        event.preventDefault();

        if (itemSelected) {
            let gap = 10;
            let x = event.x + gap;
            let y = event.y + gap;

            itemSelected.style = `position: absolute; left: 0; top: 0; z-index: 10;`; //заставляет карточку покинуть свое место
            itemSelected.style.transform = `translate(${x}px, ${y}px)`; //перемещает карточку за курсором
        }

        if (itemOnDrop) {
            let itemOnDropPosXHalf = itemOnDrop.offsetLeft + itemOnDrop.offsetWidth / 2;
            let x = event.clientX;

            let itemOnDropPosYHalf = itemOnDrop.offsetTop + itemOnDrop.offsetHeight / 2;
            let y = event.clientY;

            
            if (!isMobile) {
                if (x <= itemOnDropPosXHalf) {
                    appendType = 'before';
                    itemOnDrop.style.transform = 'translateX(5px)';
                } else if (x > itemOnDropPosXHalf) {
                    appendType = 'after';
                    itemOnDrop.style.transform = 'translateX(-5px)';
                }
            } else {
                if (y <= itemOnDropPosYHalf) {
                    appendType = 'top';
                    itemOnDrop.style.transform = 'translateY(5px)';
                } else if (y > itemOnDropPosYHalf) {
                    appendType = 'bottom';
                    itemOnDrop.style.transform = 'translateY(-5px)';
                }
            }
        }

        if (itemSelected && !itemSelectedClone) itemSelectedClone = itemSelected.cloneNode(true);
        
        if (itemSelectedClone) {
            itemSelectedClone.removeAttribute('style');
            itemSelectedClone.removeAttribute('draggable');
            itemSelectedClone.classList.remove('selected');
            itemSelectedClone.classList.add('cloned');

            if (!itemOnDrop) appendType = null;

            switch(appendType) {
                case 'bottom':
                case 'after': 
                    itemOnDrop.after(itemSelectedClone);
                break;
                case 'top':
                case 'before':
                    itemOnDrop.before(itemSelectedClone);
                break;
                default: dropZone.append(itemSelectedClone);
            }
        }
    };

    let overPrevent = (event) => {
        event.preventDefault();
    };

    let getDropZone = (target) => { //определяем дроп-зону
        if (!target) return;

        let element = target;
        if (!element.classList.contains('dnd-zone')) element = element.closest('.dnd-zone');

        return element;
    };


    items.forEach(element => { //перебор всех карточек. 
        element.draggable = true; //добавляем возможность перетаскивать карточку
        
        element.classList.add('dnd-item'); //добавляем класс dnd

        element.addEventListener('dragstart', start); //добавляем слушателя карточке, НАЧАЛО перетягивания
        element.addEventListener('dragend', end); //добавляем слушателя карточке, КОНЕЦ перетягивания
    });


    zones.forEach(element => { //перебор всех блоков в пределах которых перемещаются карточки
        element.classList.add('dnd-zone'); //метим зоны классом

        element.addEventListener('dragenter', enter); //слушатель. ВХОД карточки в зону
        element.addEventListener('dragleave', leave); //слушатель. ВЫХОД карточки из зоны
        element.addEventListener('drop', drop); //слушатель. ОТПУСКАНИЕ карточки в зону
        element.addEventListener('dragover', overPrevent); //слушатель. ПЕРЕМЕЩЕНИЕ карточки по зоне
    });


    zoneOver.classList.add('dnd-zone-over'); //метим главный элемент зоны работы dnd

    zoneOver.addEventListener('dragover', over); //слушатель. ПЕРЕМЕЩЕНИЕ по главному элементу зоны работы dnd. чтобы таскать призраки карточек по всему экрану
};