//Дополнительные задачи на уроке 31.10.2024

//Найдите сумму элементов массива (3, -5, "23", 0, "0", 1, -9)

// let arr = [3, -5, "23", 0, "0", 1, -9],
// 	sum = null;

// let count1 = 0,
// 	count2 = 0;

// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i];
// 	if (+arr[i] > 0) {
// 		count1 += 1;
// 	} else if (+arr[i] < 0) {
// 		count2 += 1;
// 	}
// }
// alert(sum);

//Посчитайте кол-во отрицательных, положительных элементов

// alert(`Положительных чисел в массиве ${count1}, отрицательных ${count2}`);

//-------------------------------------------------------------------------
//Найдите максимальный и минимальный элементы массива [23, 2, 0, , -2, 56, 12, 11]. Выведите эти элементы

// let arr = [23, 2, 0, , -2, 56, 12, 11],
// 	min = Infinity,
// 	max = -Infinity;

// for (let i = 0; i < arr.length; i++) {
// 	if (+arr[i] > max) {
// 		max = arr[i];
// 	} else if (+arr[i] < min) {
// 		min = arr[i];
// 	}
// }

// alert(`Максимальное число в массиве ${max} , минимальное число ${min}`);

//-------------------------------------------------------------------------
//Создайте произвольный массив и выведите его перевернутую версию (создав новый массив), например: [0, ‘N’, 98, ‘Text’, 3, 5] => [5, 3, ‘Text’, 98, ‘N’, 0]

// let arr = [0, "N", 98, 'Text', 3, 5],
// 	arrRev = [];

// for (let i = 1; i <= arr.length; i++){
// 	arrRev.push(arr[arr.length - i]);
// }

// alert(arrRev);

//-------------------------------------------------------------------------
//Есть два массива с числовыми значениями одинаковой длины. Создайте третий массив с суммами элементов данных массивов. Например:  [12,4,0] + [8,7,6] = [20, 11, 6].

// let arr1 =  [12,4,0],
// 	arr2 = [8,7,6],
// 	arr3 = [];

// arr3[0] = arr1[0] + arr2[0];
// arr3[1] = arr1[1] + arr2[1];
// arr3[2] = arr1[2] + arr2[2];

// alert(arr3);

//-------------------------------------------------------------------------
//Дан массив целых чисел (минимум 6 элементов). Проверить, есть ли в нем одинаковые элементы. Вывести в консоль: “Есть повторки!”, “Нет повторов”.

// let arr = [0, 1, 2, 3, 2, 5],
// 	check = false;

// for (let i = 0; i < arr.length; i++){
// 	let index = arr.indexOf(arr[i]);

// 	if (index != -1 && index != i) {
// 		check = true;
// 	} 
// }

// if (check == false){
// 	alert('Нет повторок');
// } else if (check == true) {
// 	alert('Есть повторки!!!');
// }

//-------------------------------------------------------------------------
//Создайте массив из пяти имен и выведите их на экран те из них, которые начинаются с определенной буквы, которая вводится с клавиатуры.

// let arr = ['Вася','Лера','Петя','Маша','Ваня'],
// 	name = prompt('Введите первую букву имени...');

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i][0] == name) {
// 		console.log(arr[i]);
// 	}
// }

//-------------------------------------------------------------------------
//Если в одномерном массиве имеются три подряд идущих одинаковых элемента, то переменной r присвоить значение истина

// let arr = [0,1,2,3,5,8,9,6,7,7,7,4,8,6,15],
// 	r = false;

// for (let i = 0; i < arr.length; i++){

// 	if ( arr[i] == arr[i + 1] && arr[i + 1] == arr[i + 2] ) {
// 		r = true;
// 		break;
// 	} 
// }

// if(r == true) {
// 	alert('В массиве есть три подряд повторяющихся элементов');
// }

//-------------------------------------------------------------------------
//Заданы два массива. Один содержит наименование услуг, а другой – расценки за эти услуги. Удалите из обоих массивов все элементы, которые по цене равняются n  рублей. Выведите оба массива и удаленные элементы.

// 1. Создаем два массива с услугами и ценами.
// 2. Задаем значение переменной N с ценой, товары по которой будем удалять.
// 3. Создаем цикл для массива price
// 4. Выполняем поиск значения N в массиве price. В случае если эл. найден, то мы его удалям из массива, запоминая его index.
// 5. Сохраняем элемент по index в переменную для вывода на экран.
// 6. Из массива services удаляем элемент под индексом из index.
// 7. Выводим оба массива и удаленный элемент ввиде: 

// "Услуга 1: $4"
// "Услуга 2: $23"
// "Удалена Услуга 5: $82"

// let arr1 = [' Покраска',' Очистка',' Полировка',' Мытье',' Ремонт'],
// 	arr2 = [10,100,100,400,500],
// 	n = 100,
// 	arr11 = [],
// 	arr22 = [],
// 	arr1Copy = [],
// 	arr2Copy = [];

// for (let i = 0; i < arr2.length; i++){
// 	if (n == arr2[i]) {
// 		arr22.push(arr2[i]);
// 		arr11.push(arr1[i]);
// 	} else {
// 		arr1Copy.push(arr1[i]);
// 		arr2Copy.push(arr2[i]);
// 	}
// }

// for (let i = 0; i < arr1Copy.length; i++) {
// 	console.log(`${arr1Copy[i]}: ${arr2Copy[i]}$`);
// }

// for (let i = 0; i < arr11.length; i++) {
// 	console.log(`Удалена${arr11[i]}: ${arr22[i]}$`)
// }

//-----------------------------------------------------------------
//Домашка основная.
//-----------------------------------------------------------------
// 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

//2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

// let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > -10 && arr[i] < -3) {
// 		console.log(arr[i]);
// 	}
// }

//3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите.

// let arrFor = [],
// 	arrWhile = [],
// 	i = 23,
// 	result = null;

// for (let i = 23; i <= 57; i++) {
// 	arrFor.push(i);
// }

// while (i <= 57) {
// 	arrWhile.push(i);
// 	i++
// }

// for (let i = 0; i < arrFor.length; i++) {
// 	result += arrFor[i];
// }
// console.log(arrFor);
// console.log(arrWhile);
// console.log(result);

//4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = ['10','20','30','50','235','3000'];

// for (let i = 0; i < arr.length; i++) {
// 	if (+arr[i][0] == 1 || +arr[i][0] == 2 || +arr[i][0] == 5) {
// 		console.log(arr[i]);
// 	}
// }

//5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// let arr = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];

// for (let i = 0; i < arr.length; i++) {
	
// 	if (i == 5 || i == 6) {
// 		document.write(`<b> ${arr[i]} </b>`);
// 	} else {
// 		document.write(` ${arr[i]}`);
// 	}
// }

//6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length.

// let arr = [0,1,2,3,4,5];

// arr.push(6);

// console.log(arr[arr.length - 1]);

//7. Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.

// let arr = [],
// 	a = +prompt('Введите число...');

// while (a != '') {
// 	arr.push(a);
// 	a = +prompt('Введите число...');
// }

// console.log(arr);

// arr.sort(function(a, b) {
// 	return a - b;
// })

// console.log(arr);

//8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.

// let arr = [12, false, 'Текст', 4, 2, -5, 0],
// 	i = 0,
// 	arrRev1 = [],
// 	arrRev2 = [];

// arrRev1 = arr.reverse();

// while (i < arr.length) {
// 	arrRev2.push(arr[i]);
// 	i++;
// }

// console.log(arrRev1);
// console.log(arrRev2);

//9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

// let arr = [5, 9, 21, , , 9, 78, , , , 6],
// 	count = null;

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == undefined) {
// 		count ++;
// 	}
// }

// alert(`Количество пустых элементов в массиве ${count}`);

//10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].

// let arr = [1,8,0,13,76,8,7,0,22,0,2,3,2],
// 	sum = null;

// for (let i = arr.indexOf(0) + 1; i < arr.lastIndexOf(0); i++) {
// 	sum += arr[i];
// }

// alert(sum);

//11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь. Например: высота = 5, на экране:

// let arr1 = ['&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&#8743;'];
// let arr2 = ['&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&nbsp;','&#8743;','&#8743;','&#8743;','&nbsp;'];
// let arr3 = ['&nbsp;','&nbsp;','&nbsp;','&nbsp;','&#8743;','&#8743;','&#8743;','&#8743;','&#8743;','&nbsp;'];
// let arr4 = ['&nbsp;','&nbsp;','&#8743;','&#8743;','&#8743;','&#8743;','&#8743;','&#8743;','&#8743;'];
// let arr5 = ['&#8743;', '&#8743;', '&#8743;', '&#8743;', '&#8743;', '&#8743;', '&#8743;', '&#8743;', '&#8743;'];

// document.write(`${arr1.join('')} <br>`);
// document.write(`${arr2.join('')} <br>`);
// document.write(`${arr3.join('')} <br>`);
// document.write(`${arr4.join('')} <br>`);
// document.write(`${arr5.join('')} <br>`);

// let triangleHeight = +prompt('Введите желаемую высоту треугольника...'),
// 	triangleLevel = [];

// for (let i = 1; i <= 5; i++) {
// 	for (let j = 8; j == 0; j = j - 2) {
// 		triangleLevel.
// 	}
// }

