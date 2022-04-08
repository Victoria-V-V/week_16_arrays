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