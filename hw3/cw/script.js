let a = 56;
let b = -5;

let min; // undefined
let max; // undefined

if (a > b) {
    max = a;
    min = b;
} else {
    max = b;
    min = a;
}

console.log(`Min: ${min}, Max: ${max}`);


{
    let arrNums = [45, -1, 5, 0, 89, 7, 11, 23, -5, 0, 7]; // -5, 89
    let min = Infinity;
    let max = -Infinity;

    // console.log(arrNums);
    // console.log(arrNums[5]);
    // console.log(arrNums[0]);

    for (let i = 0; i < arrNums.length; i++) {      // i = 3, min = -1, max = 45
        if (arrNums[i] > max) max = arrNums[i];     // (0 > 45) = 
        if (arrNums[i] < min) min = arrNums[i];     // (0 < -1) = 
    }

    console.log(`Min: ${min}, Max: ${max}`);
}


let str = 'Sergey Olga Peter';

// let str2 = new String('Text text text');

console.log(str);
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);
console.log(str[5]);

let name1 = str[0] + str[1] + str[2] + str[3] + str[4] + str[5];
console.log(name1);


console.log('------');

let name = '';

for (let i = 0; i <= str.length; i++) {
    if (str[i] != undefined && str[i] != ' ') {
        name += str[i];
    } else {
        console.log(name);
        name = '';
    }
}


console.log('-----');


/*Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.*/

{
    let strNums = "4 57 4 0 636 1 32 4 65 -4 3 5 7 89 7 -10 1 36 8 98";

    let min = Infinity;
    let max = -Infinity;

    let num = '';

    for (let i = 0; i <= strNums.length; i++) {
        if (strNums[i] != undefined && strNums[i] != ' ') {
            num += strNums[i];
        } else {
            num = +num;

            if (num > max) max = num;
            if (num < min) min = num;

            console.log(num);
            num = '';
        }
    }

    console.log(`Min: ${min}, Max: ${max}`);
}


console.log('-----');


/*11. Напишите программу, которая проверяет правильность ввода пароля от пользователя. Важно, чтобы пароль соотв. сл. требованиям: длина пароля от 6 символов; пароль должен состоять только из лат. символов; содержать минимум 1 число, 1 большой символ и любой знак из списка: _*&-#$.*/

// let pass = prompt('Введите пароль: ', 's052_Y');
// console.log(pass);

// let strTrueChars = '_*&-#$0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
// let strTrueUpChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';

// let passCheck = '';
// for (let i = 0; i < pass.length; i++) {
//     let char = pass[i];

//     for (let j = 0; j < strTrueChars.length; j++) {
//         if (char == strTrueChars[j]) {
//             passCheck += char;
//         }
//     }
// }

// let checkUpChar = false;
// for (let i = 0; i < pass.length; i++) {
//     let char = pass[i];

//     for (let j = 0; j < strTrueUpChars.length; j++) {
//         if (char == strTrueUpChars[j]) {
//             checkUpChar = true;
//             break;
//         }
//     }
// }

// if (pass.length >= 6 && passCheck == pass && checkUpChar == true) {
//     console.log('Пароль верный');
// } else {
//     console.log('Пароль неверный');
// }



/* 13. Найти число с максимальной суммой цифр среди чисел: 56,987,103,9011,45. */

{
    let strNums = '56,987,103,9011,45';
    let max = -Infinity;
    let num = '';
    let maxNum;

    for (let i = 0; i <= strNums.length; i++) {
        if (strNums[i] != undefined && strNums[i] != ',') {
            num += strNums[i];
        } else {
            // num = +num;

            let sum = 0;
            for (let j = 0; j < num.length; j++) {
                sum += +num[j];
            }

            if (sum > max) {
                max = sum;
                maxNum = num;
            }

            console.log(num, ` = ${sum}`);
            num = '';
        }
    }

    console.log(`Max num ${maxNum}, ${max}`);
}

console.log('-----');

/* 14. Вывести на экран «прямоугольник», образованный из двух видов символов. Контур прямоугольника должен состоять из одного символа, а в «заливка» — из другого.

##############################
#0000000000000000000000000000#
#0000000000000000000000000000#
#0000000000000000000000000000#
#0000000000000000000000000000#
##############################
*/

/*
1. Сколько строк? => 6
2. Сколько символов в одной строке? => 30
3. Какой символ рамки? => "#"
4. Какой символ заполнения? => "0"
5. Создаем цикл для создания строк (6шт)
6. Создаем переменную для формирования каждой строки из симоволов длиной 30
    6.1 Если первая и последняя строка, то символы в строке должны быть "#"
    6.2 В остальных строках: каждая начинается и заканчивает #, а ост. символы 0
*/

let h = 6,
    l = 30,
    chB = '#',
    chF = '0';

let result = '';    
for (let i = 1; i <= h; i++) {
    // console.log(i);
    
    let line = '';
    for (j = 1; j <= l; j++) {
        if (i == 1 || i == h) {
            line += chB;
        } else {        
            if (j == 1 || j == l) line += chB;
            else line += chF;
        }
    }

    document.write(line + '<br>');
    // console.log(line);

    result += line + '\n';
}

console.log(result);