/*

Приложение "Библиотека"

1. Книга
2. Каталог книг
3. Интерфей приложения

*/

class Book {
    constructor(title, description, author, year, pages) {
        this.title = null;
        this.description = null;
        this.author = null;
        this.year = null;
        this.pages = null;
    }

    //if(!word || !translate) return;
	
	

    editBook(title, description, author, year, pages) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.year = year;
        this.pages = pages;
    }

    getBook(title, description, author, year, pages) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.year = year;
        this.pages = pages;
        return {
            title: this.title,
            description:this.description,
            author: this.author,
            year: this.year,
            pages: this.pages
        };
    }
}

class Catalog extends Book {
    constructor() {
        super();
        this.data = [];
        this.lastId = 0;
    }

    add(title, description, author, year, pages) {
		let item = this.getBook(title, description, author, year, pages); 
        

		//if(!item.rus) return; //проверка на пустой объект
		item.id = ++this.lastId; //наращиваем id

		this.data.push(item); //пушим слово в словарь
    }

    edit(id, title, description, author, year, pages) {
        let item = this.data.find(function(item) { //ищем слово в словаре по id
			return item.id === id; //находит слово
		});

		if (!item) return; //проверка на наличие слова


		item.title = title,
        item.description = description,
        item.author = author,
        item.year = year,
        item.pages = pages; //запускает функцию в Слове по редактированию
    }

    remove(id) {
        let dataTmp = this.data.filter(function(item) { //создаем временный массив. перебираем фильтром сохраняя все кроме удаляемого
			return item.id != id; //вот проверка
		});

		this.data = dataTmp; //заменяем дату на дату без удаленного слова
    }

    get(id) {
        // code

        // return book;
        return this.data;
    }
}

class Library extends Catalog {
    constructor() {
        super();

        this.init();
    }

    create() {
        let appElem = document.createElement('div');
        appElem.classList.add('app');
    
        let formElem = document.createElement('div');
        formElem.classList.add('app__form');
    
        let inputTitle = document.createElement('input');
        inputTitle.type = 'text';
        inputTitle.name = 'title';
        inputTitle.placeholder = 'Title';
    
        let inputDescription = document.createElement('input');
        inputDescription.type = 'text';
        inputDescription.name = 'description';
        inputDescription.placeholder = 'Description';

        let inputAuthor = document.createElement('input');
        inputAuthor.type = 'text';
        inputAuthor.name = 'author';
        inputAuthor.placeholder = 'Author';

        let inputYear = document.createElement('input');
        inputYear.type = 'text';
        inputYear.name = 'year';
        inputYear.placeholder = 'Year';

        let inputPages = document.createElement('input');
        inputPages.type = 'text';
        inputPages.name = 'pages';
        inputPages.placeholder = 'Pages';
    
        let btnAdd = document.createElement('button');
        btnAdd.classList.add('app__btn', 'app__btn-add');
        btnAdd.innerHTML = '+';
    
    
        let listElem = document.createElement('ul');
        listElem.classList.add('app__list');
    
        formElem.append(inputTitle, inputDescription, inputAuthor, inputYear, inputPages, btnAdd); //дочерний блок с input. пушим в html созданные элементы
        appElem.append(formElem, listElem); //главный блок
    
        

        return {
            btn: btnAdd,
            app: appElem,
            list:listElem,
            title: inputTitle,
            description: inputDescription,
            author: inputAuthor,
            year: inputYear,
            pages: inputPages
        }
    }

    createItem(title, description, author, year, pages, id) {
        //if (!title && !description && !author && !year && !pages) return;

        let itemElem = document.createElement('li');
			itemElem.classList.add('app__item');
		
			let titleElem = document.createElement('span');
			titleElem.classList.add('app__title');
			titleElem.innerHTML = title;
		
			let descriptionElem = document.createElement('span');
			descriptionElem.classList.add('app__description');
			descriptionElem.innerHTML = description;

            let authorElem = document.createElement('span');
			authorElem.classList.add('app__author');
			authorElem.innerHTML = author;

            let yearElem = document.createElement('span');
			yearElem.classList.add('app__year');
			yearElem.innerHTML = year;

            let pagesElem = document.createElement('span');
			pagesElem.classList.add('app__pages');
			pagesElem.innerHTML = pages;

		
			let bookBtns = document.createElement('div');
			bookBtns.classList.add('app__book_btns');
		
			let bookBtnEdit = document.createElement('button');
			bookBtnEdit.classList.add('app__btn', 'app__btn-edit');
			bookBtnEdit.innerHTML = 'Редактрировать';
		
			let bookBtnRemove = document.createElement('button');
			bookBtnRemove.classList.add('app__btn', 'app__btn-remove');
			bookBtnRemove.innerHTML = 'Удалить';
		
			bookBtns.append(bookBtnEdit, bookBtnRemove);
			itemElem.append(titleElem, descriptionElem, authorElem, yearElem, pagesElem, bookBtns);
			


        bookBtnEdit.addEventListener('click', () => {
            let newTitle = prompt('New title');
            let newDescription = prompt('New Description');
            let newAuthor = prompt('New Author');
            let newYear = prompt('New Year');
            let newPages = prompt('New Pages');
            // if(!translate) return;

            this.edit(id, newTitle, newDescription, newAuthor, newYear, newPages);

           this.update();
        });

        bookBtnRemove.addEventListener('click', () => {
            
            this.remove(id);

            this.update();
        });

        return {
            book: itemElem,
            title: titleElem,
            description: descriptionElem,
            author: authorElem,
            year: yearElem,
            pages: pagesElem
        };
    }

    onAdd() {
        // code

        this.update();
    }

    onEdit() {
        // code

        // prompt ???
        // editable ??
        // modal + onSave ??

        this.update();
    }

    onRemove() {
        // code

        this.update();
    }

    update() {
        this.elems.list.innerHTML = '';

        let data = this.get();

        data.forEach((item) => {
            let itemElem = this.createItem(item.title || '', item.description || '', item.author || '', item.year || '', item.pages || '', item.id);
           
            if (itemElem) this.elems.list.append(itemElem.book);
        });		
    }

    init() {
        this.elems = this.create();

        let item;


        document.body.append(this.elems.app);//пушим главный блок в body
        

        this.elems.btn.addEventListener('click', () => {
            //item = this.createItem();

            //this.elems.list.append(item);

            let inputTitleValue = this.elems.title.value,
                inputDescriptionValue = this.elems.description.value,
                inputAuthorValue = this.elems.author.value,
                inputYearValue = this.elems.year.value,
                inputPagesValue = this.elems.pages.value;
            
            this.add(inputTitleValue, inputDescriptionValue, inputAuthorValue, inputYearValue, inputPagesValue);

           // inputWordRus.value = '';
           // inputWordEn.value = '';

            this.update();



        })


        // append to body
    }

}

new Library();
// let myLibrary = new Library;
// console.log(myLibrary);