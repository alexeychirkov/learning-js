/*
Задание 3: Анализ и обработка массива чисел
        1.	Создай массив numbers, который содержит 10 случайных чисел от 1 до 100 (например, [45, 12, 78, 4, 56, 90, 33, 67, 89, 23]).
        2.	Напиши функции для работы с массивом:
        2.1. findMin() — находит и возвращает минимальное число в массиве. Выводит сообщение: «Минимальное число: {значение}».
        2.2. findMax() — находит и возвращает максимальное число в массиве. Выводит сообщение: «Максимальное число: {значение}».
        2.3. calculateAverage() — вычисляет среднее арифметическое всех чисел в массиве и выводит сообщение: «Среднее значение: {значение}».
        2.4. filterGreaterThan(value) — возвращает массив чисел, которые больше указанного значения value. Выводит: «Числа больше {value}: {массив чисел}».
        2.5. replaceNumbersLessThan(value, newValue) — заменяет все числа в массиве, которые меньше value, на newValue. Выводит сообщение: «Числа меньше {value} заменены на {newValue}. Новый массив: {массив}».
        3.	Проверь работу функций в следующем порядке:
        3.1. Выведи исходный массив numbers.
        3.2. Найди минимальное число с помощью findMin().
        3.3. Найди максимальное число с помощью findMax().
        3.4. Вычисли среднее значение с помощью calculateAverage().
        3.5. Отфильтруй числа больше 50 с помощью filterGreaterThan(50).
        3.6. Замени все числа меньше 30 на 0 с помощью replaceNumbersLessThan(30, 0) и выведи обновлённый массив.
        4.	Краткая теория.
        4.1. Как фильтровать массив с помощью filter.
            Метод filter используется для создания нового массива, который содержит только те элементы, которые соответствуют заданному условию. 
            Его удобно применять, чтобы отобрать числа больше определённого значения, как в функции filterGreaterThan(value).
        4.2. Пример:
            Здесь filter проверяет каждое число: если оно больше 30, то добавляет его в новый массив.

            const numbers = [10, 25, 30, 45, 50];  
            const filtered = numbers.filter(num => num > 30);  
            console.log(filtered); // [45, 50]  
    5.	Цель.
        5.1. Освоить перебор массива и использование циклов.
        5.2. Закрепить работу с методом filter.
        5.3. Попрактиковаться в выполнении математических операций, включая поиск минимума, максимума и среднего значения.

*/

function getRandomNumber(from, to) {
        return Math.floor(Math.random() * to) + from
}
let numbersMas = []
for (let i = 0; i < 10; i++) {
        numbersMas.push(getRandomNumber(1, 100))
}
function findMin() {
        let min = numbersMas[0]
        for (let i = 1; i < numbersMas.length; i++) {
                if (numbersMas[i] < min) {
                        min = numbersMas[i]
                }
        }
        console.log("Минимальное число:", min);
}
function findMax() {
        let max = numbersMas[0]
        for (let i = 0; i < numbersMas.length; i++) {
                if (numbersMas[i] > max) {
                        max = numbersMas[i]
                }
        }
        console.log("Максимальное число:", max)
}
function calculateAverage() {
        let summa = 0
        for (let i = 0; i < numbersMas.length; i++) {
                summa += numbersMas[i]
        }
        let average = summa / numbersMas.length
        console.log("Среднее значение:", average);
}
function filterGreaterThan(value) {
       let result = []
       for (let i = 0; i < numbersMas.length; i++) {
                if (numbersMas[i] > value) {
                        result.push(numbersMas[i])
                }
       }
       console.log("Числа больше", value, ":" , result);
       return result
}
function replaceNumbersLessThan(value, newValue) {
        for (let i = 0; i < numbersMas.length; i++) {
                if (numbersMas[i] < value) {
                        numbersMas[i] = newValue
                }
        }
        console.log("Числа меньше ", value , " заменены на ", newValue , ". Новый массив:", numbersMas)
}
console.log(numbersMas);
findMin()
findMax()
calculateAverage()
filterGreaterThan(50)
replaceNumbersLessThan(30, 0)
