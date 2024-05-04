// Створення масиву arr1
var arr1 = [
    1,
    5,
    9,
    4,
    {
        name: "Viktor",
        mark: 85,
        subject: "JS"
    },
    function(num) {
        return num ** 4;
    },
    function(obj) {
        console.log(obj.name);
    },
    -6,
    14
];

// Виведення поелементно у консоль вмісту масиву arr1
console.log("1.2.4 Вміст масиву arr1:");
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// Заміна числа 5 на число 8 за допомогою методу splice
arr1.splice(arr1.indexOf(5), 1, 8);

// Вставка рядка "Hello" між числами 9 і 4 за допомогою методу splice
arr1.splice(arr1.indexOf(4), 0, "Hello");

// Утворення масиву arr2 з функціями за допомогою методу slice
var arr2 = arr1.slice(5, 7);

// Виведення поелементно у консоль вмісту масиву arr2
console.log("1.2.8 Вміст масиву arr2:");
for (var i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// Утворення масиву arr3 з числами 1, 8, 9 за допомогою методу slice
var arr3 = arr1.slice(0, 3).concat(arr1.slice(3, 4), arr1.slice(6, 7));

// Виведення поелементно у консоль вмісту масиву arr3
console.log("1.2.10 Вміст масиву arr3:");
for (var i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// Утворення масиву arr3Reversed за допомогою методу reverse
var arr3Reversed = arr3.slice().reverse();

// Виведення поелементно у консоль вмісту масиву arr3Reversed
console.log("1.2.12 Вміст масиву arr3Reversed:");
for (var i = 0; i < arr3Reversed.length; i++) {
    console.log(arr3Reversed[i]);
}

// Виведення індексу числа -6 у масиві arr1 за допомогою методу indexOf
console.log("1.2.13 Індекс числа -6 у масиві arr1:", arr1.indexOf(-6));

// Виведення числових елементів масиву arr1, значення яких більші за 4 за допомогою методу filter
var filteredArr1 = arr1.filter(function(item) {
    return typeof item === 'number' && item > 4;
});
console.log("1.2.14 Елементи масиву arr1, значення яких більші за 4:", filteredArr1);

// Виклик функції для виведення імені об'єкта у масиві arr1
arr1[arr1.findIndex(function(item) {
    return typeof item === 'object';
})](arr1.find(function(item) {
    return typeof item === 'object';
}));

// Виклик функції для обчислення четвертого степеня числа -6 у масиві arr1 та виведення результату у консоль
console.log("1.2.16 Четвертий степінь числа -6 у масиві arr1:", arr1[arr1.indexOf(-6) - 1](-6));

// Виведення поелементно у консоль вмісту масиву arr1 за допомогою оператора for...in
console.log("1.2.17 Вміст масиву arr1 за допомогою оператора for...in:");
for (var index in arr1) {
    console.log(arr1[index]);
}

// Виведення властивостей об'єкта у масиві arr1 за допомогою оператора for...in
console.log("1.2.18 Властивості об'єкта у масиві arr1 за допомогою оператора for...in:");
for (var index in arr1[arr1.findIndex(function(item) {
    return typeof item === 'object';
})]) {
    console.log(arr1[arr1.findIndex(function(item) {
        return typeof item === 'object';
    })][index]);
}

// Виведення поелементно у консоль вмісту масиву arr1 за допомогою оператора for...of
console.log("1.2.19 Вміст масиву arr1 за допомогою оператора for...of:");
for (var item of arr1) {
    console.log(item);
}

// Додавання властивості version до масиву arr1
arr1.version = "1.0.0";

// Виведення поелементно у консоль вмісту масиву arr1 за допомогою оператора for...in
console.log("1.2.21 Вміст масиву arr1 за допомогою оператора for...in:");
for (var index in arr1) {
    console.log(arr1[index]);
}

// Виведення поелементно у консоль вмісту масиву arr1 за допомогою оператора for...of
console.log("1.2.22 Вміст масиву arr1 за допомогою оператора for...of:");
for (var item of arr1) {
    console.log(item);
}

// Створення об'єктів з властивостями
var Petryk = {
    name: "Petryk",
    skill: "JS",
    level: "junior"
};
var Mychajlyk = {
    name: "Mychajlyk",
    skill: "HTML/CSS",
    level: "middle"
};
var Volodyk = {
    name: "Volodyk",
    skill: "TS",
    level: "trainee"
};

// Створення Map map1 та додавання об'єктів до неї
var map1 = new Map();
map1.set(Petryk.name, Petryk);
map1.set(Mychajlyk.name, Mychajlyk);
map1.set(Volodyk.name, Volodyk);

// Виведення у консоль результатів перевірок наявності елементів у map1
console.log("1.2.25 Чи є елемент з ключем 'Ivanko' у map1:", map1.has("Ivanko"));
console.log("1.2.26 Чи є елемент з ключем 'Volodyk' у map1:", map1.has("Volodyk"));

// Виведення у консоль ключів елементів map1 за допомогою оператора for...of
console.log("1.2.27 Ключі елементів map1:");
for (var key of map1.keys()) {
    console.log(key);
}

// Видалення елемента з ключем "Mychajlyk" із map1
map1.delete("Mychajlyk");

// Виведення у консоль даних про елементи map1 за допомогою оператора for...of
console.log("1.2.29 Дані про елементи map1:");
for (var entry of map1) {
    console.log(entry[1].name + " is " + entry[1].level + " in " + entry[1].skill);
}

// Створення Set set1 та додавання об'єктів до неї
var set1 = new Set();
set1.add(Petryk);
set1.add(Mychajlyk);
set1.add(Volodyk);

// Створення об'єкта "Antypko"
var Antypko = {
    name: "Antypko",
    skill: "PHP",
    level: "senior"
};

// Виведення у консоль результатів перевірок наявності об'єктів у set1
console.log("1.2.32 Чи є об'єкт 'Antypko' у set1:", set1.has(Antypko));
console.log("1.2.33 Чи є об'єкт 'Mychajlyk' у set1:", set1.has(Mychajlyk));

// Виведення елементів set1 за допомогою оператора for...of
console.log("1.2.34 Елементи set1:");
for (var item of set1) {
    console.log(item.name + " is " + item.level + " in " + item.skill);
}

// Видалення елемента "Volodyk" із set1
set1.delete(Volodyk);

// Виведення даних про елементи set1 за допомогою оператора for...of
console.log("1.2.36 Дані про елементи set1:");
for (var item of set1) {
    console.log(item.name + " is " + item.level + " in " + item.skill);
}
