class NotesUI extends Notes {
    constructor(id) {
        super();

        if (!id) return;

        this.id = id;
        this.elems = null;

        this.init();
    }

    create() {
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

        return {
            main: notesElem,
            fieldTitle: fieldTitle,
            fieldContent: fieldContent,
            list: listElem
        };
    }

    createItem(title, content, id) {
        if (!title && !content) return;

        let itemElem = document.createElement('li');
            itemElem.classList.add('notes__item', 'note');
            itemElem.id = id;

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


        itemBtnRemove.addEventListener('click', (event) => {
            this.onRemove(id);
        });

        itemElem.addEventListener('dblclick', (event) => {
            this.onEdit(id);
        });

        return itemElem;
    }

    onAdd(event) {
        if (!event.ctrlKey || event.code != 'Enter') return false;

        let titleValue = this.elems.fieldTitle.value;
        let contentValue = this.elems.fieldContent.value;

        this.elems.fieldTitle.value = '';
        this.elems.fieldContent.value = '';

        this.add(titleValue, contentValue);
        this.update();
    }

    onEdit(id) {
        this.showFormEdit(id);
    }

    onSave(id, title, content, modalElem) {
        let newData = {
            title: title,
            content: content
        };
    
        this.edit(id, newData);
        modalElem.remove();
        this.update();
    }

    onRemove(id) {
        this.remove(id);
        this.update();
    }

    update() {
        this.elems.list.innerHTML = '';

        let data = this.get();

        data.forEach((item) => {
            let itemElem = this.createItem(item.title || '', item.content || '', item.id);
            if (itemElem) this.elems.list.append(itemElem);
        });
        
        onDnD({
            items: this.elems.list.querySelectorAll('.notes__item'),
            zones: [this.elems.list],
            zoneOver: document.body
        })
    }

    showFormEdit(id) {
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
        itemBtnSave.innerHTML = 'Save';

        let itemBtnClose = document.createElement('button');
        itemBtnClose.classList.add('note__btn_close');
        itemBtnClose.innerHTML = 'Close';

        fieldTitle.value = noteData.title || '';
        fieldContent.value = noteData.content || '';

        modalElem.append(fieldTitle, fieldContent, itemBtnSave, itemBtnClose);

        document.body.append(modalElem);

        itemBtnSave.addEventListener('click', () => {
            let title = fieldTitle.value;
            let content = fieldContent.value;

           this.onSave (id, title, content, modalElem);
        });

        itemBtnClose.addEventListener('click', () => {
            modalElem.remove();
        });
    }

    init() {
        let rootElem = document.querySelector(`#${this.id}`);
        if (!rootElem) return;

        this.elems = this.create();
        rootElem.append(this.elems.main);

        this.elems.fieldTitle.addEventListener('keypress', (event) => {
            this.onAdd(event);
        });
        this.elems.fieldContent.addEventListener('keypress', (event) => {
            this.onAdd(event);
        });

        this.update(); //временно
    }
}



// let NotesUI = function(id) {
//     if (!id) return;

//     Notes.apply(this);

//     let elems = null;

//     let create = () => {
//         let notesElem = document.createElement('div');
//         notesElem.classList.add('notes');

//         let formElem = document.createElement('div');
//         formElem.classList.add('notes__form');

//             let fieldTitle = document.createElement('input');
//             fieldTitle.classList.add('notes__field_title');
//             fieldTitle.type = 'text';
//             fieldTitle.placeholder = 'Title';

//             let fieldContent = document.createElement('textarea');
//             fieldContent.classList.add('notes__field_content');
//             fieldContent.placeholder = 'Note';

//         let listElem = document.createElement('ul');
//         listElem.classList.add('notes__list');

//         formElem.append(fieldTitle, fieldContent);

//         notesElem.append(formElem, listElem);

//         return {
//             main: notesElem,
//             fieldTitle: fieldTitle,
//             fieldContent: fieldContent,
//             list: listElem
//         };
//     };

//     let createItem = (title, content, id) => {
//         if (!title && !content) return;

//         let itemElem = document.createElement('li');
//             itemElem.classList.add('notes__item', 'note');
//             itemElem.id = id;

//                 let itemTitle = document.createElement('h3');
//                 itemTitle.classList.add('note__title');
//                 itemTitle.innerHTML = title;

//                 let itemContent = document.createElement('div');
//                 itemContent.classList.add('note__content');
//                 itemContent.innerHTML = content;

//                 let itemBtns = document.createElement('div');
//                 itemBtns.classList.add('note__btns');

//                     let itemBtnRemove = document.createElement('button');
//                     itemBtnRemove.classList.add('note__btn_remove');


//         itemBtns.append(itemBtnRemove);

//         itemElem.append(itemTitle, itemContent, itemBtns);


//         itemBtnRemove.addEventListener('click', (event) => {
//             onRemove(id);
//         });

//         itemElem.addEventListener('dblclick', (event) => {
//             onEdit(id);
//         });

//         return itemElem;
//     };

//     let onAdd = (event) => {
//         if (!event.ctrlKey || event.code != 'Enter') return false;

//         let titleValue = elems.fieldTitle.value;
//         let contentValue = elems.fieldContent.value;

//         elems.fieldTitle.value = '';
//         elems.fieldContent.value = '';

//         // симуляция добавления
//         // let itemElem = createItem(titleValue, contentValue);
//         // if (itemElem) elems.list.append(itemElem);

//         this.add(titleValue, contentValue);
//         update();
//     };

//     let onEdit = (id) => {
//         showFormEdit(id);
//     };

//     let onSave = (id, title, content, modalElem) => {
//         let newData = {
//             title: title,
//             content: content
//         };

//         this.edit(id, newData);
//         modalElem.remove();
//         update();
//     }

//     let onRemove = (id) => {
//         this.remove(id);
//         update();
//     };

//     let update = () => {
//         elems.list.innerHTML = '';

//         let data = this.get();

//         data.forEach((item) => {
//             let itemElem = createItem(item.title || '', item.content || '', item.id);
//             if (itemElem) elems.list.append(itemElem);
//         });
        
//         onDnD({
//             items: elems.list.querySelectorAll('.notes__item'),
//             zones: [elems.list],
//             zoneOver: document.body
//         })
//     };

//     let showFormEdit = (id) => {
//         let noteData = this.get(id);

//         if (!noteData) return;

//         let modalElem = document.createElement('div');
//         modalElem.classList.add('note__form_edit');

//         let fieldTitle = document.createElement('input');
//             fieldTitle.classList.add('note__field_title');
//             fieldTitle.type = 'text';

//         let fieldContent = document.createElement('textarea');
//         fieldContent.classList.add('note__field_content');

//         let itemBtnSave = document.createElement('button');
//         itemBtnSave.classList.add('note__btn_save');
//         itemBtnSave.innerHTML = 'Save';

//         let itemBtnClose = document.createElement('button');
//         itemBtnClose.classList.add('note__btn_close');
//         itemBtnClose.innerHTML = 'Close';

//         fieldTitle.value = noteData.title || '';
//         fieldContent.value = noteData.content || '';

//         modalElem.append(fieldTitle, fieldContent, itemBtnSave, itemBtnClose);

//         document.body.append(modalElem);

//         itemBtnSave.addEventListener('click', () => {
//             let title = fieldTitle.value;
//             let content = fieldContent.value;

//            onSave (id, title, content, modalElem);
//         });

//         itemBtnClose.addEventListener('click', () => {
//             modalElem.remove();
//         });
//     };

//     let init = () => {
//         let rootElem = document.querySelector(`#${id}`);
//         if (!rootElem) return;

//         elems = create();

//         rootElem.append(elems.main);

//         elems.fieldTitle.addEventListener('keypress', onAdd);
//         elems.fieldContent.addEventListener('keypress', onAdd);

//         update(); //временно
//     };

//     init();
// };