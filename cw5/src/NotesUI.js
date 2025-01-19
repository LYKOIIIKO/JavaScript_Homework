let NotesUI = function() {
    let elems = null;

    let create = () => {
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

        // return [notesElem, fieldTitle, fieldContent, listElem];
        return {
            main: notesElem,
            fieldTitle: fieldTitle,
            fieldContent: fieldContent,
            list: listElem
        };
    };

    let createItem = (title, content) => {
        if (!title && !content) return;

        let itemElem = document.createElement('li');
            itemElem.classList.add('notes__item', 'note');

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


        itemBtnRemove.addEventListener('click', onRemove);
        itemElem.addEventListener('dblclick', onEdit);

        return itemElem;
    };

    let onAdd = (event) => {
        if (!event.ctrlKey || event.code != 'Enter') return false;

        let titleValue = elems.fieldTitle.value;
        let contentValue = elems.fieldContent.value;

        elems.fieldTitle.value = '';
        elems.fieldContent.value = '';

        // симуляция добавления
        let itemElem = createItem(titleValue, contentValue);
        elems.list.append(itemElem);
    };

    let onEdit = (event) => {
        console.log('edit');
    };

    let onRemove = (event) => {
        console.log('remove');
    };

    let init = () => {
        elems = create();

        document.body.append(elems.main);

        elems.fieldTitle.addEventListener('keypress', onAdd);
        elems.fieldContent.addEventListener('keypress', onAdd);
    };

    init();
};