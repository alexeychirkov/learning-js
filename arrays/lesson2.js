/*
Задание 4: Анализ температуры с поиском диапазонов
	
    1.	Создай массив temperatures, который содержит 15 случайных чисел от -20 до 40, представляющих температуру воздуха (например, [12, -3, 5, 0, 8, 25, 30, -5, 15, 20, -10, 35, -15, 18, 22]).
	2.	Напиши функции для анализа температур:
        2.1. findColdestDays() — возвращает массив всех дней с самой низкой температурой (если таких дней несколько, они все должны попасть в результат). Выводит сообщение: «Самая низкая температура {значение}°C наблюдалась в дни: {индексы}».
        2.2. findHottestDays() — возвращает массив всех дней с самой высокой температурой (если таких дней несколько, они все должны попасть в результат). Выводит сообщение: «Самая высокая температура {значение}°C наблюдалась в дни: {индексы}».
        2.3. calculateRange() — вычисляет разницу между самой высокой и самой низкой температурой. Выводит сообщение: «Диапазон температуры: от {мин}°C до {макс}°C. Разница: {разница}°C».
        2.4. countInRange(min, max) — считает, сколько дней температура находилась в указанном диапазоне [min, max]. Выводит сообщение: «Температура была в диапазоне от {min}°C до {max}°C в {количество} дней».
        2.5. classifyTemperatures() — возвращает объект, в котором подсчитаны количества холодных (меньше 0°C), прохладных (от 0°C до 15°C), тёплых (от 16°C до 25°C) и жарких дней (выше 25°C). Выводит сообщение: «Холодных дней: {значение}, Прохладных дней: {значение}, Тёплых дней: {значение}, Жарких дней: {значение}».
	3.	Проверь работу функций в следующем порядке:
        3.1. Выведи исходный массив temperatures.
        3.2. Найди самые холодные дни с помощью findColdestDays().
        3.3. Найди самые жаркие дни с помощью findHottestDays().
        3.4. Вычисли диапазон температур с помощью calculateRange().
        3.5. Подсчитай количество дней в диапазоне от -5°C до 10°C с помощью countInRange(-5, 10).
        3.6. Классифицируй температуры по категориям с помощью classifyTemperatures().
	4.	Теория.

        4.1. Что такое диапазон. Диапазон температур — это разница между самой высокой и самой низкой температурой в массиве. Например, если минимальная температура -10°C, а максимальная 30°C, диапазон равен 40°C.

        4.2. Классификация температур. Классификация позволяет разделить дни на категории, основываясь на значениях температуры. Например:
        	•	Холодные дни: температуры ниже 0°C.
        	•	Прохладные дни: температуры от 0°C до 15°C.
        	•	Тёплые дни: температуры от 16°C до 25°C.
        	•	Жаркие дни: температуры выше 25°C.

	5.	Пример результата.

        5.1. Исходный массив:
            Консоль: [12, -3, 5, 0, 8, 25, 30, -5, 15, 20, -10, 35, -15, 18, 22].

        5.2. Самые холодные дни:
            Консоль: «Самая низкая температура -15°C наблюдалась в дни: [12]».

        5.3. Самые жаркие дни:
            Консоль: «Самая высокая температура 35°C наблюдалась в дни: [11]».

        5.4. Диапазон температуры:
            Консоль: «Диапазон температуры: от -15°C до 35°C. Разница: 50°C».

        5.5. Температура в диапазоне от -5°C до 10°C:
            Консоль: «Температура была в диапазоне от -5°C до 10°C в 3 дня».

        5.6. Классификация температур:
            Консоль: «Холодных дней: 3, Прохладных дней: 5, Тёплых дней: 4, Жарких дней: 3».
	6.	Цель.

        6.1. Закрепить умение работать с массивами: искать индексы, анализировать диапазоны и классифицировать данные.
        6.2. Попрактиковаться в создании новых массивов и объектов из исходного массива.
        6.3. Использовать сложные условия для подсчётов и анализа.
*/