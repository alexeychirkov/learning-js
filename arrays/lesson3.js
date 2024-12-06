// Создай массив numbers, содержащий 15 случайных чисел от -20 до 20 (например, [5, -3, 8, 0, -12, 7, -7, 10, -2, 3, -1, 4, 0, 6, -5]).

// 2. Напиши функции для работы с группами чисел:
// 2.1. countPositive() — считает количество положительных чисел в массиве и выводит сообщение: «Положительных чисел: {значение}».
// 2.2. countNegative() — считает количество отрицательных чисел в массиве и выводит сообщение: «Отрицательных чисел: {значение}».
// 2.3. countZero() — считает количество нулей в массиве и выводит сообщение: «Количество нулей: {значение}».
// 2.4. splitIntoGroups() — возвращает объект с тремя массивами: positives (все положительные числа), negatives (все отрицательные числа), zeros (все нули). Выводит сообщение: «Положительные числа: {массив}, Отрицательные числа: {массив}, Нули: {массив}».

// 3. Проверь работу функций в следующем порядке:
// 3.1. Выведи исходный массив numbers.
// 3.2. Подсчитай количество положительных чисел с помощью countPositive().
// 3.3. Подсчитай количество отрицательных чисел с помощью countNegative().
// 3.4. Подсчитай количество нулей с помощью countZero().
// 3.5. Раздели числа на группы с помощью splitIntoGroups() и выведи результат.

// 4. Пример результата.
// 4.1. Исходный массив:
// Консоль: [5, -3, 8, 0, -12, 7, -7, 10, -2, 3, -1, 4, 0, 6, -5].
// 4.2. Положительных чисел:
// Консоль: «Положительных чисел: 7».
// 4.3. Отрицательных чисел:
// Консоль: «Отрицательных чисел: 6».
// 4.4. Количество нулей:
// Консоль: «Количество нулей: 2».
// 4.5. Разделение на группы:
// Консоль: «Положительные числа: [5, 8, 7, 10, 3, 4, 6], Отрицательные числа: [-3, -12, -7, -2, -1, -5], Нули: [0, 0]».

// 5. Цель.
// 5.1. Закрепить навыки фильтрации массива и подсчёта элементов по условию.
// 5.2. Научиться создавать группы данных из одного массива.
// 5.3. Освоить основы анализа распределения чисел в массиве.

function getRandomNumber(from, to) {
    return Math.floor(Math.random() * to) + from
}
let numbers = []
for (let index = 0; index < 15; index++) {
    numbers.push(getRandomNumber(-10, 20))
}
console.log(numbers)

function count(nums, validator) {
    let c = 0
    for (let index = 0; index < nums.length; index++) {
        const el = nums[index]
        const valid = validator(el, index * 5)//boolean
        if (valid) {
            c++
        }
    }
    return c
}
const positiveValidator = function (el, index) { 
    const result = el > 0
    console.log("validating el",el,result, index / 5 - 5);
    return result
 }

const numOfPositive = count(numbers, positiveValidator)

const numOfNegitive = count(numbers, function (el) { return el < 0 })

const numOfZero = count(numbers, function (el) { return el === 0 })

const numOf = count(numbers, function (el) { return el%2 !== 0 })


console.log("Положительных чисел: ", numOfPositive, "");
console.log("Отрицательных чисел: ", numOfNegitive, "");
console.log("Количество нулей : ", numOfZero, "");
console.log("Количество nechetnih : ", numOf, "");

console.log("Положительных чисел222: ", count([], positiveValidator), "");

function splitIntoGroups() {
    let positiveMas = []
    let negativeMas = []
    let zeroMas = []
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > 0) {
            positiveMas.push(numbers[index])
        }
    }
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] < 0) {
            negativeMas.push(numbers[index])
        }
    }
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] === 0) {
            zeroMas.push(numbers[index])
        }
    }
    console.log("Положительные числа : ", positiveMas)
    console.log("Отрицательные числа : ", negativeMas)
    console.log("Нули : ", zeroMas)
}
splitIntoGroups()