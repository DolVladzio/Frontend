// Створення масиву на 20 елементів і заповнення його псевдовипадковими цілими числами
let array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100)); // Генеруємо випадкові числа від 0 до 99
}

// Сортування масиву за зростанням
array.sort((a, b) => a - b);

// Отримання контейнера для виведення масиву
let sortedArrayContainer = document.getElementById('sortedArrayContainer');

// Виведення відсортованого масиву на сторінку
let sortedArrayParagraph = document.createElement('p');
sortedArrayParagraph.textContent = 'Відсортований масив: ' + array.join(', ');
sortedArrayContainer.appendChild(sortedArrayParagraph);

// JavaScript-код для обробки кнопки "Згенерувати"
let generateButton = document.getElementById('generateButton');
let generatedDiv = document.getElementById('generatedDiv');
let heightSelect = document.getElementById('heightSelect');

generateButton.addEventListener('click', function() {
    let selectedHeight = heightSelect.value;
    
    // Створення елемента <div> з характеристиками
    let newDiv = document.createElement('div');
    newDiv.textContent = 'Колір: Синій, Ширина: 30px, Висота: ' + selectedHeight + 'px';
    newDiv.style.color = 'blue';
    newDiv.style.width = '30px';
    newDiv.style.height = selectedHeight + 'px';

    // Додавання нового <div> на сторінку
    generatedDiv.innerHTML = '';
    generatedDiv.appendChild(newDiv);
});

// JavaScript-код для обробки кнопок "Посунути вліво" та "Посунути вправо"
let moveLeftButton = document.getElementById('moveLeftButton');
let moveRightButton = document.getElementById('moveRightButton');

moveLeftButton.addEventListener('click', function() {
    moveBlock(-20);
});

moveRightButton.addEventListener('click', function() {
    moveBlock(20);
});

function moveBlock(offset) {
    let generatedDiv = document.getElementById('generatedDiv');
    let currentLeft = parseFloat(generatedDiv.style.left) || 0;
    generatedDiv.style.left = (currentLeft + offset) + 'px';
}
