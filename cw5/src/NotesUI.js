let NotesUI = function() {
    Notes.apply(this, arguments); //наследуем Notes

    let elems = null;

    let dragItemSelected;
    let dragItemCurrent;

    let create = () => { //basic interface creation
        let notesElem = document.createElement('div');
        notesElem.classList.add('notes');

        let formElem = document.createElement('div');
        formElem.classList.add('notes__form');

            let fieldTitle = document.createElement('input');
            fieldTitle.classList.add('notes__field_title');
            fieldTitle.type = 'text';
            fieldTitle.placeholder = 'Title';

            let fieldContent = document.createElement('textarea');
            fieldContent.classList.add('notes__field_content');
            fieldContent.placeholder = 'Note';

        let listElem = document.createElement('ul');
        listElem.classList.add('notes__list');


        formElem.append(fieldTitle, fieldContent);

        notesElem.append(formElem, listElem);

        // return [notesElem, fieldTitle, fieldContent, listElem]; //requires reference to id
        return { //preferred way to return an object
            main: notesElem,
            fieldTitle: fieldTitle,
            fieldContent: fieldContent,
            list: listElem
        };
    };

    let createItem = (title, content, id) => { //note structure creation
        if (!title && !content) return;

        let itemElem = document.createElement('li');
            itemElem.classList.add('notes__item', 'note');
            itemElem.draggable = true;

                let itemTitle = document.createElement('h3');
                itemTitle.classList.add('note__title');
                itemTitle.innerHTML = title;

                let itemContent = document.createElement('div');
                itemContent.classList.add('note__content');
                itemContent.innerHTML = content;

                let itemBtns = document.createElement('div');
                itemBtns.classList.add('note__btns');

                    let itemBtnRemove = document.createElement('button');
                    itemBtnRemove.classList.add('note__btn_remove');


        itemBtns.append(itemBtnRemove);

        itemElem.append(itemTitle, itemContent, itemBtns);


        itemBtnRemove.addEventListener('click', () => {
            onRemove(id);
        });
        itemElem.addEventListener('dblclick', () => {
            onEdit(id);
        });

        return itemElem;
    };

    let onAdd = (event) => { //creating a note by pressing ctrl+enter
        if (!event.ctrlKey || event.code != 'Enter') return false;

        let titleValue = elems.fieldTitle.value;
        let contentValue = elems.fieldContent.value;

        elems.fieldTitle.value = '';
        elems.fieldContent.value = '';

        // test
        //let itemElem = createItem(titleValue, contentValue);
        //if(titleValue || contentValue) elems.list.append(itemElem);
        //else return false;

        this.add(titleValue, contentValue);
        update();
    };

    let onEdit = (id) => {
        showFormEdit(id);
    };

    let onRemove = (id) => {

       this.remove(id);
       update();
    };

    let update = () => {
        elems.list.innerHTML = ''; //очищаем список чтобы не дублировались заметки

        let data = this.get(); //забираем базу

        data.forEach((item) => { //делаем createItem для каждой заметки
            let itemElem = createItem(item.title || '', item.content || '', item.id);
            if (itemElem) elems.list.append(itemElem);
        });
    }

    let showFormEdit = (id) => { //создание модального окна
        let noteData = this.get(id);

        if (!noteData) return;

        let modalElem = document.createElement('div');
        modalElem.classList.add('note__form_edit');

            let fieldTitle = document.createElement('input');
            fieldTitle.classList.add('note__field_title');
            fieldTitle.type = 'text';

            let fieldContent = document.createElement('textarea');
            fieldContent.classList.add('note__field_content');
            
            let itemBtnSave = document.createElement('button');
            itemBtnSave.classList.add('note__btn_save');

            let itemBtnClose = document.createElement('button');
            itemBtnClose.classList.add('note__btn_close');

        fieldTitle.value = noteData.title || '';
        fieldContent.value = noteData.content || '';

        modalElem.append(itemBtnClose, fieldTitle, fieldContent, itemBtnSave);
        document.body.append(modalElem);

        itemBtnSave.addEventListener('click', () => {
            let title = fieldTitle.value;
            let content = fieldContent.value;

            let newData = {
                title: title,
                content: content
            }

            this.edit(id, newData);
            modalElem.remove();

            update();
        })

        itemBtnClose.addEventListener('click', () => {
            modalElem.remove();
        })

    }

    let onDrag = () => {
        elems.list.addEventListener('dragstart', (event) => {
            dragItemSelected = event.target;
            dragItemSelected.classList.add('selected');
        })

        elems.list.addEventListener('dragover', (event) => {
            event.preventDefault();

            dragItemCurrent = event.target.closest('li');

            if (dragItemSelected == dragItemCurrent) return;

            if (dragItemCurrent) dragItemCurrent.classList.add('hover');
        })

        elems.list.addEventListener('dragleave', (event) => {
           
            dragItemCurrent = undefined;
            event.target.classList.remove('hover');
        })

        elems.list.addEventListener('dragend', (event) => {
            dragItemSelected.classList.remove('selected');

            if (!dragItemCurrent || !dragItemCurrent.draggable) return;

            let dragItemCurrentOffsetCenter = dragItemCurrent.offsetLeft + dragItemCurrent.offsetWidth / 2;
            let x = event.clientX;

            let dir = x <= dragItemCurrentOffsetCenter ? 'l' : 'r';
            

            if (dir == 'l') elems.list.insertBefore(dragItemSelected, dragItemCurrent);
            else elems.list.insertBefore(dragItemSelected, dragItemCurrent.nextElementSibling);
            
            dragItemCurrent.classList.remove('hover');
            
            dragItemSelected = undefined;
            dragItemCurrent = undefined;

        })
    }

    let init = () => { //initializing and adding events to the main element
        elems = create();

        document.body.append(elems.main);

        elems.fieldTitle.addEventListener('keypress', onAdd);
        elems.fieldContent.addEventListener('keypress', onAdd);

        onDrag();

        update();
    };

    init();
};