window.addEventListener('load', () => {
    onDnD({ //запуск функции drag and drop для секции с тремя блоками
        items: document.querySelectorAll('.item'),
        zones: document.querySelectorAll('.box'),
        zoneOver: document.body,
        mobile: false
    });

    onDnD({ //запуск функции drag and drop для секции с заметками
        items: document.querySelectorAll('.note'),
        zones: document.querySelectorAll('.notes'),
        zoneOver: document.body,
        mobile: false
    });

    /*let userAgent = navigator.userAgent.toLowerCase();
    let isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);

    let items = document.querySelectorAll('.item');
    let boxes = document.querySelectorAll('.box');

    let itemSelected = null;
    let itemOnDrop = null;
    let dropZone = null;
    let appendType = null;

    items.forEach(item => {
        item.draggable = true;

        item.addEventListener('dragstart', (event) => {
            // console.log('dragstart', event);

            let imgDrag = document.createElement('img');
            imgDrag.src = '/img_drag.jpg';
            event.dataTransfer.setDragImage(imgDrag, 0, 0);

            itemSelected = event.target;
            itemSelected.classList.add('selected');
        });

        item.addEventListener('dragend', (event) => {
            // console.log('dragend', event);

            if (itemSelected) {
                itemSelected.classList.remove('selected');
                itemSelected.removeAttribute('style');
            }

            itemSelected = null;

            if (itemOnDrop) itemOnDrop.style = '';
            itemOnDrop = null;

            if (dropZone) dropZone.classList.remove('enter');
            dropZone = null;

            appendType = null;
        });
    });

    boxes.forEach(box => {
        box.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        box.addEventListener('drop', (event) => {
            event.preventDefault();

            // console.log('drop', event);

            dropZone = event.target;
            if (!dropZone.classList.contains('dropzone')) dropZone = dropZone.closest('.dropzone');

            if (itemSelected && dropZone) {
                if (!itemOnDrop) appendType = null;

                switch(appendType) {
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
        });

        box.addEventListener('dragenter', (event) => {
            // console.log('dragenter', event, event.target, event.relatedTarget);

            if (dropZone) dropZone.classList.remove('enter');

            dropZone = event.target;
            if (!dropZone.classList.contains('dropzone')) dropZone = dropZone.closest('.dropzone');

            if (dropZone) dropZone.classList.add('enter');

            if (itemOnDrop) itemOnDrop.style = '';

            itemOnDrop = event.target;
            if (!itemOnDrop ||
                !itemOnDrop.classList.contains('item') || 
                itemOnDrop == itemSelected) {
                itemOnDrop = null;
            }
        });

        box.addEventListener('dragleave', (event) => {
            // console.log('dragleave', event, event.target);
            
            let dropZoneRelated = event.relatedTarget;
            if (!dropZoneRelated.classList.contains('dropzone')) dropZoneRelated = dropZoneRelated.closest('.dropzone');

            if (!dropZoneRelated && dropZone) dropZone.classList.remove('enter');
        });
    });

    document.body.addEventListener('dragover', (event) => {
        // console.log('dragover', event, event.target);

        if (itemSelected) {
            let gap = 10;
            let x = event.x + gap;
            let y = event.y + gap;

            itemSelected.style = `position: absolute; left: 0; top: 0; z-index: 10;`;
            itemSelected.style.transform = `translate(${x}px, ${y}px)`;
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
    });*/
    
});