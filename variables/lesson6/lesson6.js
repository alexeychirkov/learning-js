/**
Задание 3: Глобальная переменная и функция, изменяющая её значение
	1.	Создай глобальную переменную score и присвой ей значение 0.
	2.	Напиши функцию updateScore(points), которая:
	•	Принимает один параметр points.
	•	Увеличивает значение глобальной переменной score на значение параметра points.
	3.	Напиши функцию resetScore(), которая:
	•	Сбрасывает значение глобальной переменной score на 0.
	4.	Проверь работу:
	•	Вызови updateScore(10) несколько раз, а затем вызови resetScore().
	•	Выведи значение score в консоль после каждого вызова.

Цель: Увидеть, как функции могут изменять глобальные переменные.
 */
score = 0;
function updateScore(points) {
	score += points
}
function resetScore() {
	score = 0
}
updateScore(10);
console.log(score);
updateScore(10);
console.log(score);
updateScore(10);
console.log(score);
updateScore(10);
console.log(score);
resetScore();
console.log(score);