//Домашняя работа №6 - Дата и время. Математические ф-ции. Работа со строками. Регулярные выражения.

console.log('---------------Задание 1----------------');
//Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

let str = 'aaa@bbb@ccc';

console.log(str.replace(/@/g, '!'));



console.log('---------------Задание 2----------------');
//В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.

let date = "2025-12-31";

console.log(date.replace(/(2025)-(12)-(31)/g, '$3/$2/$1'))

console.log('---------------Задание 3----------------');
//Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).

let str1 = 'Я учу javascript!';

console.log(str1.substring(2, 5), str1.substring(6, 16));
console.log(str1.substr(2, 3), str1.substr(6, 10));
console.log(str1.substring(2, 5), str1.substring(6, 16));

console.log('---------------Задание 4----------------');
//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr = ['4', '2', '5', '19', '13', '0', '10'],
	arrSumCubed = null;

for (let i = 0; i < arr.length; i++) {
	arrSumCubed += Math.pow(arr[i], 3);
}

console.log(Math.sqrt(arrSumCubed));

console.log('---------------Задание 5----------------');
//Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

function abs(a, b) {
	let c = a - b;
	return Math.abs(c);
}

console.log(abs(3,5));
console.log(abs(6,1));

console.log('---------------Задание 6----------------');
//Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).

let date3 = new Date();


let hour = date3.getHours(),
	min = date3.getMinutes(),
	sec = date3.getSeconds(),
	day = date3.getDate(),
	month = date3.getMonth(),
	year = date3.getFullYear();

if(day.length < 2) {
	day = "0" + day;
}

if(month.length < 2) {
	month = "0" + month;
}

console.log(`${hour}:${min}:${sec} ${day}.${month}.${year}`);

console.log('---------------Задание 7----------------');
//Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.

let str7 = 'aa aba abba abbba abca abea';

console.log(str7.match(/ab+a/gi));

console.log('---------------Задание 8----------------');
//Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.

function checkPhone(phone) {
	let rule = /^[+]\d{1,3} \d{1,5} \d{6,10}/g;

	return rule.test(phone);
}

console.log(checkPhone('+375 33 6301373'));
console.log(checkPhone('+3 33536 630'));
console.log(checkPhone('333+ 335 630768696966969'));
console.log(checkPhone('+3 22 6350147'));

console.log('---------------Задание 9----------------');
//Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия: 
//- весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки; 
//- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени; 
//- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов. 
//Функция должна возвращать true или false. Используйте регулярные выражения.
//СЛОЖНА!!!!!!!!!!!!!!!!!!!!!

// function checkEmail(email) {
// 	if (email.match(/[а-яА-Я]/)) {
// 		return 'Адрес содержит кириллические символы!'
// 	} else if (email.match(/[а-яА-Я]/))
// }

// console.log(checkEmail('lykoiiiko@gmail.com'));
// console.log(checkEmail('lykoiiikoЯ@gmail.com'));

console.log('---------------Задание 10----------------');
//Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.

function getAdress(link) {
	let arr = [];
	arr.push(link.origin);
	if (link.pathname != '' && link.pathname != '/') arr.push(link.pathname);
	if (link.search != '') arr.push(link.search);
	if (link.hash != '') arr.push(link.hash);

	return arr;
}

let link = new URL('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');

console.log(getAdress(link));


console.log('-----------Дополнительное задание 1-----------');
//Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.

function randomElement(arr) {
	let max = arr.length - 1,
		min = 0;
	return Math.random() * (max - min) + min;
}

console.log(Math.round(randomElement([0,1,2,3,4,5,6,7,8,9,10])));

console.log('-----------Дополнительное задание 2-----------');
//Напишите функцию, которая принимает дату рождения и возвращает, сколько лет человеку на данный момент.
//37 лет 7 месяцев 2 дня / 12.04.1987

function howOld(birthday) {
	let arr = birthday.split('.'),
		date = new Date(),
		day = date.getDate(),
		month = date.getMonth() + 1,
		year = date.getFullYear(),
		date1 = (year * 365) + (month * 30) ;
		date2 = (arr[0] * 365) + (arr[1] * 30) + +arr[2],
		dateDiff = date1 - date2,
		birthdayYear = dateDiff / 365,
		birthdayMonth = 12 * (birthdayYear - Math.floor(birthdayYear));
		
	return `${Math.floor(birthdayYear)} лет ${birthdayMonth} месяцев`;
}

console.log(howOld('1995.06.19'));