/**
Задание 2: Конфликт имён локальной и глобальной переменных
	1.	Создай глобальную переменную message со значением "Это глобальное сообщение".
	2.	Напиши функцию showMessage(), которая:
	•	Создаёт локальную переменную message со значением "Это локальное сообщение".
	•	Выводит значение переменной message в консоль.
	3.	Вызови функцию showMessage() и затем выведи значение глобальной переменной message в консоль.

Цель: Понять, как локальная переменная с тем же именем «скрывает» глобальную внутри функции.
 */
message = "Global Message"
function showMessage() {
	let message = "Local Message"
	console.log(message);
}
console.log(message);

