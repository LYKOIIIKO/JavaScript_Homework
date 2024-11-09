//Домашняя работа №5 - Функции

console.log('-----------Задание 1-----------');
//1.Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.

function result1(a, b, c) {
	return (a - b) / c;
}

console.log(result1(10, 2, 3));

console.log('-----------Задание 2-----------');
//2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

function result2(a) {
	console.log(`Квадрат числа ${a} равен ${a * a}`);
	console.log(`Куб числа ${a} равен ${a * a * a}`);
}

result2(3);

console.log('-----------Задание 3-----------');
//3.Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

function max(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

console.log(min(3, 5));
console.log(max(3, 5));

console.log('-----------Задание 4-----------');
//4.Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.

function createArr() {
	let a = +prompt('Введите первое число...'),
		b = +prompt('Введите второе число...'),
		arr = [];

	while (a <= b) {
		arr.push(a);
		a++;
	}

	return arr
}

let array = createArr();

function showArr() {
	console.log(array);
}

showArr();

console.log('-----------Задание 5-----------');
//5.Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.

function isEven(num) {
	return num % 2 == 0;
}

console.log(isEven(3));






////////////////////////////////////доп
/*Создайте массив с числами и длиной массива от 5 до 8 на выш выбор. Необходимо найти и вывести наименьшее число в массиве*/

// используйте внутри функции уже созданные функции для создания массива и поиска мин значения

// function min(a, b) {
// 	return a > b ? b : a;
// }

// function getArr(a, b) {
// 	let arr = [];
// 	for(let i = a; i <= b; i++){
// 		arr.push(i);
// 	}
// 	return arr;
// }

// function getMinInArr(arr) {
// 	let m = Infinity;
// 	for(let i = 0; i < arr.length; i++) {
		
// 		m = min(m, arr[i]);
// 	}
// 	return m;
// }

// let myArr = getArr(1, 8);
// console.log(getMinInArr(myArr));

// //"Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию" Напишите функцию findLongestWord(str), которая принимает строку в качестве параметра и находит самое длинное слово в строке.


// function findLongestWord(str) {
// 	strArr = str.split(' ');
// 	strMax = '';
// 	for (let i = 0; i < strArr.length; i++) {
// 		if (strArr[i].length > strMax.length) {
// 			strMax = strArr[i];
// 		}
// 	}
// 	console.log(strMax);
// }

// let str = 'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию';
// findLongestWord(str);
/////////////////////////////////////////////////////////////////////////

console.log('-----------Задание 6-----------');
//6. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательные функции isEven и createArr из предыдущих задач.

function evenArr(array) {
	let evenArray = [];
	for(let i = 0; i < array.length; i++) {
		if (isEven(array[i]) == true) evenArray.push(array[i]);
	}
	return evenArray;
}

console.log(evenArr(array));

console.log('-----------Задание 7-----------');

// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
// циклы):
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
// параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
// кроме пробела, то пирамида должна быть нарисована этим символом,
// например:

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********

function pyramid(pyramidHeigth) {
	for(let i = 1; i <= pyramidHeigth; i++) {
		let line = '';

		for (let j = 1; j <= (i * 2) - 1; j++) {
			if(arguments.length > 1 && arguments[1] != ' ') line +=arguments[1]; //проверка на наличие доп параметра
			else line += i;
		}
		console.log(line);
	}
}

let pyramidHeigth = +prompt('Введите высоту пирамиды');
pyramid(pyramidHeigth, "*");

console.log('-----------Задание 8-----------');
// 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

//     *
//    ***
//   *****
//  *******
// *********

// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.

function triangle(triangleHeigth) {
	for(let i = 1; i <= triangleHeigth; i++) {
		let line = '';

		for (let j = 1; j <= triangleHeigth - i; j++) {
			line += ' ';
		}
	
		for (let j = 1; j <= (i * 2) - 1; j++) {
			line += '*';
		}
		console.log(line);
	}
}

function triangleReverse(triangleHeigth) {
	for(let i = 1; i <= triangleHeigth; i++) {
		let line = '';

		for (let j = 1; j <= (i - 1); j++) {
			line += ' ';
		}
	
		for (let j = 1; j <= ((triangleHeigth * 2) - ((i * 2) - 1)); j++) {
			line += '*';
		}
		console.log(line);
	}
}

let triangleHeigth = +prompt('Введите высоту равнобедренного треугольника');
triangle(triangleHeigth);
triangleReverse(triangleHeigth);

console.log('-----------Задание 9-----------');
//9. Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.

function fibonacci() {
	let arr = [0, 1];
	for(let i = 2; (arr[i - 1] + arr[i - 2]) <= 1000; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}

	return arr;
}

console.log(fibonacci());

console.log('-----------Задание 10-----------');
//10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.
// Я НЕ ПОНИМАЮ УСЛОВИЕ
function numCheck(num) {
	let sum = null;
	for (let i = 0; i < num.length; i++) {
		sum += +num[i];
	}
	return sum;
}

console.log(numCheck('333'));

console.log('-----------Задание 11-----------');
//11. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.

function printArray(arr) {
	console.log(arr[i]);
	i++;
	if (i < arr.length) printArray(arr);
}

let i = 0;
printArray([0,1,2,3,4,5]);

console.log('-----------Задание 12-----------');
// //12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
// группы студента и выводящую введённые данные в следующем виде:

// *****************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович *
// *****************************

// Размер рамки должен определятся автоматически по самой длинной строке.
// Рамку вывести в консоль.
//ЭТО БЫЛО ЖЕСТКО

function showHomework() {
	let firstName = prompt('Введите имя'),
		lastName = prompt('Введите фамилию'),
		middleName = prompt('Введите отчество'),
		group = prompt('Введите номер группы'),
		string1 = '',
		string2 = `* Домашняя работа: «Функции» `,
		string3 = `* Выполнил: студент гр. ${group} `,
		string4 = `* ${lastName} ${firstName} ${middleName} `,
		length = null;

	if(string2.length > string3.length && string2.length > string4.length) {
		length = string2.length + 1;
	} else if (string3.length > string2.length && string3.length > string4.length) {
		length = string3.length + 1;
	} else if (string4.length > string2.length && string4.length > string3.length) {
		length = string4.length + 1;
	}

	for (let i = 0; i < length; i++) {
		string1 += '*';
	}

	if(string2.length < length) {
		stringPush = '';
		for(let i = 1; i < (length - string2.length); i++) {
			stringPush += ' ';
		}
		string2 += stringPush + '*';
	}

	if(string3.length < length) {
		stringPush = '';
		for(let i = 1; i < (length - string3.length); i++) {
			stringPush += ' ';
		}
		string3 += stringPush + '*';
	}

	if(string4.length < length) {
		stringPush = '';
		for(let i = 1; i < (length - string4.length); i++) {
			stringPush += ' ';
		}
		string4 += stringPush + '*';
	}

	console.log(string1);
	console.log(string2);
	console.log(string3);
	console.log(string4);
	console.log(string1);
}

showHomework();

console.log('-----------Задание 13-----------');
//13. Напишите ф-цию, которая должна проверить правильность ввода адреса эл. почты, неиспользуя регулярные выражения. Почта верна при условии: a. весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут быть первыми и последними в адресе, и идти подряд, например: «..», «@.», «.@» или «@@», «_@», «@-», «--» и т.п. b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени, и точку; c. после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.

