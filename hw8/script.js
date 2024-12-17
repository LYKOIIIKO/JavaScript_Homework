function site () {
	//базовые тэги и атрибуты

	let html = document.querySelector('html');
	html.setAttribute('lang', 'en');

	let head = document.querySelector('head');

	let metaUTF8 = document.createElement('meta');
	metaUTF8.setAttribute('charset', 'UTF-8');

	let metaView = document.createElement('meta');
	metaView.setAttribute('name', 'viewport');
	metaView.setAttribute('content', 'width=device-width, initial-scale=1.0');

	let title = document.createElement('title');
	title.innerHTML = 'Call to Action';

	head.append(metaUTF8, metaView, title);

	//структура сайта

	let site = document.createElement('div');
	site.classList.add('site');

	let container = document.createElement('div');
	container.classList.add('container');

	let mainTitle = document.createElement('h1');
	mainTitle.classList.add('main__title');
	mainTitle.innerHTML = 'Choose Your Option';

	let mainText = document.createElement('span');
	mainText.classList.add('main__text');
	mainText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

	let promo = document.createElement('div');
	promo.classList.add('promo');

	let promoBlock = document.createElement('div');
	promoBlock.classList.add('promo__block');

	let promoSubtitle = document.createElement('h3');
	promoSubtitle.classList.add('promo__subtitle');
	promoSubtitle.innerHTML = 'Freelancer';

	let promoTitle = document.createElement('h2');
	promoTitle.classList.add('promo__title');
	promoTitle.innerHTML = 'Initially designed to';

	let promoText = document.createElement('span');
	promoText.classList.add('promo__text');
	promoText.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

	let btnPrimary = document.createElement('button');
	btnPrimary.classList.add('btn-primary');
	btnPrimary.innerHTML = 'Start here';


	let promoBlock2 = document.createElement('div');
	promoBlock2.classList.add('promo__block');

	let promoSubtitle2 = document.createElement('h3');
	promoSubtitle2.classList.add('promo__subtitle');
	promoSubtitle2.innerHTML = 'Studio';

	let promoTitle2 = document.createElement('h2');
	promoTitle2.classList.add('promo__title');
	promoTitle2.innerHTML = 'Initially designed to';

	let promoText2 = document.createElement('span');
	promoText2.classList.add('promo__text');
	promoText2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

	let btnPrimary2 = document.createElement('button');
	btnPrimary2.classList.add('btn-primary');
	btnPrimary2.innerHTML = 'Start here';


	promoBlock.append(promoSubtitle, promoTitle, promoText, btnPrimary);
	promoBlock2.append(promoSubtitle2, promoTitle2, promoText2, btnPrimary2);
	promo.append(promoBlock, promoBlock2);
	container.append(mainTitle, mainText, promo);
	site.append(container);

	document.body.append(site);
}



window.addEventListener('load', function() {
	site();
});