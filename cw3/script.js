function popup() {
    let elems = document.querySelectorAll('[data-popup]');

    if (!elems || elems.length == 0) return;

    function getContent(id, type, link) {
        if (!id && !type) return;

        let content = '';

        switch(type) {
            case "youtube":
                if(!link) return;

                let reg = /(?:.+\/)([0-9a-z]+)/i;

                let linkParse = link.match(reg);
                if(!linkParse || linkParse.length <= 1 || !linkParse[1]) return;

                let hash = linkParse[1] || '';

                content = `<iframe src="https://www.youtube.com/embed/${hash}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            break;
            case "image":
                if(!link) return;

                content = `<img src = "${link}" alt = "#">`;
            break;
            default:
                let elem = document.querySelector(`#${id}`);

                if (!elem) return;

                content = elem.innerHTML;
        }

        return content;
    }

    function create(content) {
        if (!content) return;

        let mainElem = document.createElement('div');
        mainElem.classList.add('popup');

        let bgElem = document.createElement('div');
        bgElem.classList.add('popup__bg');

        let containerElem = document.createElement('div');
        containerElem.classList.add('popup__container');

        let closeBtn = document.createElement('button');
        closeBtn.classList.add('popup__btn-close');

        let contentElem = document.createElement('div');
        contentElem.classList.add('popup__content');

        
        closeBtn.innerHTML = '+';
        contentElem.innerHTML = content;


        containerElem.append(closeBtn, contentElem);
        mainElem.append(bgElem, containerElem);

        bgElem.addEventListener('click', clear);
        closeBtn.addEventListener('click', clear);

        return mainElem;
    }

    function clear() {
        let elems = document.querySelectorAll('.popup');

        elems.forEach(function(elem) {
            elem.remove();
        });
    }

    elems.forEach(function(elem) {
        elem.addEventListener('click', function(e) {
            e.preventDefault();

            let id = elem.dataset.popupId;
            let type = elem.dataset.popupType;
            let link = elem.href;

            let popupElem = create(getContent(id, type, link));
            if(!popupElem) return;

            clear();

            document.body.append(popupElem);
        });
    });
}

function title() {
    let elems = document.querySelectorAll('[title]');

    if(!elems || elems.length == 0) return;

    function create(value) {
        if(!value) return;

        let elem = document.createElement('div');
        elem.classList.add('title');

        elem.innerHTML = value;

        return elem;
    }

    function clear() {
        let elems = document.querySelectorAll('.title');

        elems.forEach(function(elem) {
            elem.remove();
        })
    }

    elems.forEach(function(elem) {

        let value = '';
        let titleElem = '';


        elem.addEventListener('mouseenter', function(event) {
            clear();

            value = elem.title;
            titleElem = create(value);

            if(!titleElem) return;

            document.body.append(titleElem);
            elem.removeAttribute('title');

            titleElem.style.top = (event.pageY + 5) + 'px';
            titleElem.style.left = (event.pageX + 5) + 'px';
        });

        elem.addEventListener('mouseleave', function(event) {
            elem.title = value;

            let toLeaveElem = event.toElement;
            if(toLeaveElem.classList[0] == 'title') return;

            clear();
        });

        elem.addEventListener('mousemove', function(event) {
            titleElem.style.top = (event.pageY + 5) + 'px';
            titleElem.style.left = (event.pageX + 5) + 'px';
        })
    })
}

function accordion() {

    let elems = document.querySelectorAll('[data-accordion]');

    if(!elems || elems.length == 0) return;

    function closeAll(accordion) {
        if(!accordion) return;

        let liElems = accordion.querySelectorAll('li');

        liElems.forEach(function(li) {
            li.classList.remove('active');
        })
    }

    elems.forEach(function(elem) {
        let titles = elem.querySelectorAll('h3');

        titles.forEach(function(title) {
            title.addEventListener('click', function(event) {
               let parentLi = event.target.closest('li');
               if(!parentLi) return;

                if(!parentLi.classList.contains('active')) closeAll(elem);
               parentLi.classList.toggle('active');
            })
        })
    })
}


window.addEventListener('load', function() {

    popup();
    title();
    accordion();

});
