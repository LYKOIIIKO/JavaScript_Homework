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


window.addEventListener('load', function() {

    popup();

});
