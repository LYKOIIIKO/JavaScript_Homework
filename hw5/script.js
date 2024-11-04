//Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.

// function result(a, b, c) {
// 	console.log(a - b / c);
// }

// result(4, 7, 9);

//Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

// function min(a, b) {
// 	if (a < b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }

// console.log(min(1,2));

// function max(a, b) {
// 	if (a < b) {
// 		return b;
// 	} else {
// 		return a;
// 	}
// }

// console.log(max(1,2));

//Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.
//НЕВЕРНОЕ РЕШЕНИЕ аННА РЕШИЛА ПРАВИЛЬНО
// let arr = [],
// 	num = +prompt('Введи число');

// function getArr() {
// 	for(let i = 0; num != ''; i++) {
		
// 		arr.push(num);
// 		num = +prompt('Введи число');
// 	}
// 	return arr;
// }
// getArr();

// function letArr() {
// 	console.log(arr);
// }
//  letArr();


// function showArr(arr) {
// 	// 	for(let i = 0; i < arr.length; i++) {
// 	// 		console.log(arr[i]);
// 	// 	}
// 	// }

/*Создайте массив с числами и длиной массива от 5 до 8 на выш выбор. Необходимо найти и вывести наименьшее число в массиве*/

// используйте внутри функции уже созданные функции для создания массива и поиска мин значения

function min(a, b) {
	return a > b ? b : a;
}

function getArr(a, b) {
	let arr = [];
	for(let i = a; i <= b; i++){
		arr.push(i);
	}
	return arr;
}

function getMinInArr(arr) {
	let m = Infinity;
	for(let i = 0; i < arr.length; i++) {
		
		m = min(m, arr[i]);
	}
	return m;
}

let myArr = getArr(1, 8);
console.log(getMinInArr(myArr));

//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.

function isEven(num) {
	let check;
	if (num % 2 == 0) {
		check = true;
	} else {
		check = false;
	}
	return check;
}

//alert(isEven(1));

//Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательные функции isEven и createArr из предыдущих задач.

function getEvenArr(myArr) {
	let evenArr = [];

	for (let i = 0; i < myArr.length; i++) {
		if(isEven(myArr[i])) {
			evenArr.push(myArr[i]);
		}
	}
	return evenArr;
}

console.log(getEvenArr(myArr));

//"Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию" Напишите функцию findLongestWord(str), которая принимает строку в качестве параметра и находит самое длинное слово в строке.


function findLongestWord(str) {
	strArr = str.split(' ');
	strMax = '';
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i].length > strMax.length) {
			strMax = strArr[i];
		}
	}
	console.log(strMax);
}

let str = 'Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию';
findLongestWord(str);