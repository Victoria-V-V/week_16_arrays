//Задание 1
let frontend = ['js', 'css', 'html'];
const btn1 = document.querySelector('.btn1');
btn1.addEventListener("click", () => {
    document.getElementById('result1').innerHTML = frontend[0];
});

//Задание 2
let elements = [0, 1, false, 2, undefined, '', 3, null];
let filteredElements = elements.filter(function (element) {
    return element;
});
const btn2 = document.querySelector('.btn2');
btn2.addEventListener("click", () => {
    document.getElementById('result2').innerHTML = `Новый массив` + filteredElements;
});

//Задание 3
let matrix = [
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4]
];
// //Первый вариант. Если нам достаточно найти индекс ПЕРВОГО массива в матрице, длина которого > 3.
// let el = matrix.findIndex(el => el.length > 3);
// const btn3 = document.querySelector('.btn3');
// btn3.addEventListener("click", () => {
//     document.getElementById('result3').innerHTML = el;
// });

// //Второй вариант. Если нам надо найти индексы всех массивов в матрице, длина которых > 3.

let indexes = [];
matrix.forEach((el, index) => {
    if (el.length > 3) {
        indexes.push(index);
    }
});
const btn3 = document.querySelector('.btn3');
btn3.addEventListener("click", () => {
    document.getElementById('result3').innerHTML = indexes;
});