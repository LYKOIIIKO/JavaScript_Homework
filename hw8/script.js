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

	//добавим стиля
	let style = document.createElement('style');
	style.innerHTML = `
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		ul, ol {
			list-style: none;
		}

		.container {
			max-width: 1280px;
			width: 90%;
			margin: 50px auto;
		}

		.main__title,
		.promo__title {
			text-align: center;
			font-family: "Arvo", serif;
			font-size: 36px;
			line-height: 48px;
			color: #212121;
			font-weight: normal;
		}

		.main__title {
			margin-bottom: 15px;
		}

		.main__text {
			display: flex;
			justify-content: center;

			font-family: "Open Sans", serif;
			font-size: 14px;
			line-height: 26px;
			color: #9FA3A7;

			margin-bottom: 50px;

		}

		.promo {
			display: flex;
			justify-content: center;
		}

		.promo__block {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 15px;

			width: 35%;
			padding: 80px 95px;
		}

		.promo__block:hover {
			background-color: #8F75BE;
		}

		.promo__block:hover .promo__title,
		.promo__block:hover .promo__text,
		.promo__block:hover .btn-primary {
			color: #fff;
			background-color: #8F75BE;
		}

		.promo__block:hover .promo__subtitle {
			color: #FFC80A;
		}

		.promo__subtitle {
			font-family: "Montserrat", sans-serif;
			font-size: 12px;
			font-weight: bold;
			letter-spacing: 2.4px;
			color: #9FA3A7;
			text-transform: uppercase;
		}

		.promo__title {
			margin-bottom: 10px;
		}

		.promo__text {
			font-family: "Open Sans", serif;
			font-size: 12px;
			line-height: 22px;
			color: #9FA3A7;

			text-align: center;

			margin-bottom: 50px;
		}

		.btn-primary {
			border: 3px solid #FFC80A;
			border-radius: 30px;
			padding: 15px 24px;

			font-family: "Montserrat", sans-serif;
			font-size: 12px;
			font-weight: bold;
			letter-spacing: 2.4px;
			color: #212121;
			text-transform: uppercase;

			cursor: pointer;
		}
	`;

	head.appendChild(style);

	//подключим шрифты
	let fonts = document.createElement('link');
	fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
	fonts.setAttribute('rel', 'stylesheet');

	head.insertBefore(fonts, document.querySelector('script'));
}



window.addEventListener('load', function() {
	site();
});