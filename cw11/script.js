let exercise = async () => {
	//Напишите функцию fetchUserData, которая будет получать данные пользователя по URL https://jsonplaceholder.typicode.com/users/1 и выводить имя, email, полный адрес и телефон пользователя на экран.

	let fetchUserData = async () => {
		let task = '1. Напишите функцию fetchUserData, которая будет получать данные пользователя по URL https://jsonplaceholder.typicode.com/users/1 и выводить имя, email, полный адрес и телефон пользователя на экран.';

		await fetch('https://jsonplaceholder.typicode.com/users/1')
		.then(response => response.json())
		.then(data => {
			console.log(task);
			console.log(data.name);
			console.log(data.email);
			console.log(data.address);
			console.log(data.phone);
		});
	}

	await fetchUserData();

	//Создай функцию fetchRandomDog, которая делает запрос к API для получения случайного изображения собаки (например, https://dog.ceo/api/breeds/image/random), и выводи это изображение на веб-странице, в HTML-документ.

	let fetchRandomDog = async () => {
		let task = '2. Создай функцию fetchRandomDog, которая делает запрос к API для получения случайного изображения собаки (например, https://dog.ceo/api/breeds/image/random), и выводи это изображение на веб-странице, в HTML-документ.';
		let taskElem = document.createElement('div');
		taskElem.innerHTML = task;
		let dogImgElem = document.createElement('img');
		dogImgElem.style.maxWidth = '300px';

		await fetch('https://dog.ceo/api/breeds/image/random')
		.then(response => response.json())
		.then(data => {
			dogImgElem.src = data.message;

			document.body.append(taskElem, dogImgElem);
		});
	}

	await fetchRandomDog();

	//Напиши функцию fetchStarWarsCharacter, которая получает информацию о персонажах Звездных войн из API https://swapi.dev/api/people/1/ и выводит имя, рост и цвет волос на веб-странице, в HTML-документ.

	let fetchStarWarsCharacter = async () => {
		let task = '3. Напиши функцию fetchStarWarsCharacter, которая получает информацию о персонажах Звездных войн из API https://swapi.dev/api/people/1/ и выводит имя, рост и цвет волос на веб-странице, в HTML-документ.';
		let taskElem = document.createElement('div');
		taskElem.innerHTML = task;

		let elem = document.createElement('p');

		await fetch('https://swapi.dev/api/people/1/')
		.then(response => response.json())
		.then(data => {
			elem.innerHTML = `
				Character name: ${data.name} <br>
				Character height: ${data.height} <br>
				Hair color: ${data.hair_color}
			`

			document.body.append(taskElem, elem);
		});
	}

	await fetchStarWarsCharacter();

	//Напишие функцию wordsTranslate для перевода слов с английского на русский, используя API: https://tmp.myitschool.org/API/translate/?source=LANG&target=LANG&word=WORD , где source - с какого языка переводим, target - на какой язык перевод, word - что переводим.

	//Реализуй функцию fetchRandomFact, которая запрашивает случайный факт о человечестве из https://uselessfacts.jsph.pl/random.json?language=en и выводит его на веб-странице.

	let fetchRandomFact = async () => {
		let task = '4.Реализуй функцию fetchRandomFact, которая запрашивает случайный факт о человечестве из https://uselessfacts.jsph.pl/random.json?language=en и выводит его на веб-странице.';
		let taskElem = document.createElement('div');
		taskElem.innerHTML = task;

		let elem = document.createElement('p');

		await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
		.then(response => response.json())
		.then(data => {
			elem.innerHTML = data.text;

			document.body.append(task, elem);
		});
	}

	await fetchRandomFact();

	//Реализуй функцию fetchJokeAndCacheData, которая получает данные (шутку по URL https://official-joke-api.appspot.com/random_joke) и кэширует их в localStorage. При повторном вызове функции проверяй, есть ли данные в кэше, и выводи их, если они доступны.

	let fetchJokeAndCacheData = async () => {
		let task = '5. Реализуй функцию fetchJokeAndCacheData, которая получает данные (шутку по URL https://official-joke-api.appspot.com/random_joke) и кэширует их в localStorage. При повторном вызове функции проверяй, есть ли данные в кэше, и выводи их, если они доступны.';
		let taskElem = document.createElement('div');
		taskElem.innerHTML = task;

		let elem = document.createElement('p');

		if (!localStorage.getItem('joke')) {
			await fetch('https://official-joke-api.appspot.com/random_joke')
			.then(response => response.json())
			.then(data => {
				let jokeData = [data.setup, data.punchline];

				localStorage.setItem('joke', jokeData.join(' '));
				
				elem.innerHTML = localStorage.getItem('joke');

				document.body.append(task, elem);
			});
		} else {
			elem.innerHTML = localStorage.getItem('joke');

			document.body.append(task, elem);
		}
		
	}

	await fetchJokeAndCacheData();

	//Создай функцию fetchWeather, которая получает данные о погоде по вашему городу (например, используйте https://www.weatherapi.com/) и отображает текущую температуру и погодные условия.

	let fetchWeather = async (city) => {
		let task = '6. Создай функцию fetchWeather, которая получает данные о погоде по вашему городу (например, используйте https://www.weatherapi.com/) и отображает текущую температуру и погодные условия.';
		let taskElem = document.createElement('div');
		taskElem.innerHTML = task;

		let elem = document.createElement('p');
		let url = `http://api.weatherapi.com/v1/current.json?key=dc62a3da6768406c83a181957252403&q=${city}`;

		await fetch(url)
		.then(response => response.json())
		.then(data => {
			elem.innerHTML = `
				Country: ${data.location.country} <br>
				City: ${data.location.name} <br>
				Temperature: ${data.current.temp_c} <br>
				Weather: ${data.current.condition.text} <br>
			`;
			document.body.append(task, elem);
		});
	}

	await fetchWeather('Soligorsk');

	//Реализуй функцию fetchCurrencyRates, которая получает актуальные курсы валют с API, например, https://api.exchangerate-api.com/v4/latest/USD, и отображает их на веб-странице - выведите все валютные пары, либо только одну любую, например: USD/BYN.

	let fetchCurrencyRates = async () => {
		let task = '7. Реализуй функцию fetchCurrencyRates, которая получает актуальные курсы валют с API, например, https://api.exchangerate-api.com/v4/latest/USD, и отображает их на веб-странице - выведите все валютные пары, либо только одну любую, например: USD/BYN.';
		let taskElem = document.createElement('div');
		taskElem.innerHTML = task;

		let elem = document.createElement('details');
		let url = `https://api.exchangerate-api.com/v4/latest/USD`;

		await fetch(url)
		.then(response => response.json())
		.then(data => {
			for (let key in data.rates) {
				elem.innerHTML += `USD/${key} = ${data.rates[key]} <br>`
			}

			document.body.append(task, elem);
		});
	}

	await fetchCurrencyRates();

	//Реализуйте функцию fetchUsersWithPostCount, которая получает пользователей и их посты из https://jsonplaceholder.typicode.com/users и https://jsonplaceholder.typicode.com/posts, а затем выводит пользователей с количеством их постов.

	let fetchUsersWithPostCount = async () => {
		let task = '8. Реализуйте функцию fetchUsersWithPostCount, которая получает пользователей и их посты из https://jsonplaceholder.typicode.com/users и https://jsonplaceholder.typicode.com/posts, а затем выводит пользователей с количеством их постов.';
		let taskElem = document.createElement('div');
		taskElem.innerHTML = task;

		let elem = document.createElement('details');
		let url1 = `https://jsonplaceholder.typicode.com/users`;
		let url2 = `https://jsonplaceholder.typicode.com/posts`;
		let dataUsers = [];
		let dataPosts = {};
		let counter = 0;

		await fetch(url1)
		.then(response => response.json())
		.then(data => {
			dataUsers = data;
		});
		
		await fetch(url2)
		.then(response => response.json())
		.then(data => {
			dataUsers.filter(user => {

				data.filter(post => {
					if(user.id == post.userId) {
						counter++;
						let key = user.name;
						dataPosts[key] = counter;
					} else counter = 0;
				});
			})
			
			for (let key in dataPosts) {
				elem.innerHTML += `${key} total posts: ${dataPosts[key]} <br>`
			}

			document.body.append(task, elem);
		});
	}

	await fetchUsersWithPostCount();

	//Напишите функцию fetchWithErrorHandling, которая делает запрос к несуществующему URL и обрабатывает ошибку. Вывести сообщение об ошибке в консоль.

	let fetchWithErrorHandling = async () => {
		let task = '9. Напишите функцию fetchWithErrorHandling, которая делает запрос к несуществующему URL и обрабатывает ошибку. Вывести сообщение об ошибке в консоль.';
		console.log(task);

		await fetch('https://dsfsdfsdhfhsdhfkh.com')
		.catch(err => console.log(err.message));
		
	}

	await fetchWithErrorHandling();
}

exercise();