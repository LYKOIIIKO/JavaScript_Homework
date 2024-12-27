function tabs() {
    /* конструкция табов
    [data-tabs]
        ul
            li
        ul
            li
    */    

    let elems = document.querySelectorAll('[data-tabs]'); //ищем все элементы на странице с тегом data-tabs

    elems.forEach(function(item) { //перебираем блок вкладок
        function clear(listElem) { //убирает класс active
            listElem.forEach(function(item) {
                item.classList.remove('active');// убирает класс active с любого списка что попадает в функцию
            });
        }

        function active(item, index) { //добавляет класс active
            clear(tabsElems); //убираем класс active с имени вкладок
            clear(contentsElems); //убираем класс active с контента вкладок

            item.classList.add('active');
            contentsElems[index].classList.add('active');
        }

        let tabsElems = item.querySelectorAll('ul:first-child > li'); //ищем список с именами вкладок
        let contentsElems = item.querySelectorAll('ul:last-child > li'); //ищем список с контентом вкладок

        if (!tabsElems || tabsElems.length == 0 || //защита от дурака
            !contentsElems || contentsElems.length == 0 ||
            tabsElems.length != contentsElems.length) return;
        
        tabsElems.forEach(function(item, index) { //перебираем имена вкладок. forEach считывает также индексы элементов от 0
            item.addEventListener('click', function() { //добавляем действие при клике на вкладку
                active(item, index);
            });
        });
    });
}

function contentFilter(id) {
    /*
    #id
        tag
            item[data-filter="value"]
        tag
            item[data-filter="value"]
    */

    if (!id) return; //защита от дурака

    let elem = document.querySelector(`#${id}`); //ищем наш блок фильтр
    
    if (!elem) return; //защита от дурака

    let btns = elem.children[0].children; //усложнаем себе жизнь делая более универсальное решение чтобы найти первый элемент с именами кнопок
    let items = elem.children[1].children; //выводятся в виде HTMLCollection
    

    if (!btns || btns.length == 0 || //защита от дурака
        !items || items.length == 0
    ) return;

    function clear() { //функция удаления класса active у элементов
        let btnsTmp = [...btns]; //усложняем жизнь дальше. делаем временный массив с нашими кнопками
        let itemsTmps = [...items];

        btnsTmp.forEach(function(btn) {
            btn.classList.remove('active');
        });

        itemsTmps.forEach(function(item) {
            item.classList.remove('hide');
        });
    }

    function show(value) { //отображаем только нужные картинки при нажатии на соответствующую кнопку
        if (!value) return; //при нажатии на кнопку All функция обрывается

        let itemsTmp = [...items];

        itemsTmp.forEach(function(item) {
            if (item.dataset.filter != value) item.classList.add('hide'); //скрываем лишние элементы если они не совпадают с тэгом data-filter
        });
    }

    Array.from(btns).forEach(function(btn) { //перебираем наши батоны. такая конструкция потому что forEach не перебирает HTMLCollection
        btn.addEventListener('click', function() { //добавляем каждому батону действие при клике
            clear(); //чистим классы active и hide

            let value = btn.dataset.filter; //забираем значение тэга data-filter у элемента
            show(value); //оставляем нужные картинки
            
            btn.classList.add('active'); //активируем кнопку
        });
    });
}

window.addEventListener('load', function() {

    tabs();
    contentFilter('gallery001'); //запускаем функцию для конкретного фильтра с id=galery001. НЕ ДЛЯ ВСЕХ, как табы выше

});