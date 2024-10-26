/*Выведите числа от 1 до 50 и от 35 до 8.*/

for(let i = 1; i <= 50; i++) {
	console.log(i);
}

for(let i = 35; i >= 8; i--) {
	console.log(i);
}

/*Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/

{
	let i = 89;

	while(i >= 11) {
		document.write(`${i} <br>`);
		i--;
	}

}

/*Выведите на экран числа от 15 до 78 исключая четные*/

// for(let i = 15; i <= 78; i++) {
// 	if(i % 2 == 0) continue;
// 	alert(i);
	
// }

/*Необходимо вывести на экран числа от 50 до 1 с шагом 5 и 10.*/

// for(let i = 50; i >= 1; i-= 5) {
	
// 	alert(i);
// }

// for(let i = 50; i >= 1; i-= 10) {
	
// 	alert(i);
// }

/*Выведите в консоль фразу "Hello World!" в обратном порядке.*/

let string = 'Hello World!',
	i = 11;

while(i >= 0) {
	console.log(string[i]);
	i--;
}

/*Написать с помощью цикла while «переворот» числа. Другими словами, нужно создать новое число, у которого цифры шли бы в обратном порядке (например: 472 -> 274).*/

// let num = '12345',
// 	n = num.length - 1,
// 	numReverse = '';

// while(n >= 0 ) {
// 	numReverse += num[n];
// 	n--;
// }

// console.log(+numReverse, typeof +numReverse);


//Найдите сумму чисел от 1 до 20

let sum = 0;

for(let i = 1; i <= 20; i++) {
	sum += i;
}
console.log(sum);

/*Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится?*/

{
	let n = 1000;

	while(n >= 50){
		n = n / 2;
	}

	console.log(n);
}