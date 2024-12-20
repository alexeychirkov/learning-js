/** 
Задание: Управление данными игры через глобальные и локальные переменные

Цель:
    Это задание поможет понять:
        1.	Как глобальные переменные сохраняют своё состояние между вызовами функций.
        2.	Как проверка условий (if) позволяет ограничивать действия на основе состояния глобальных переменных.
        3.	Как функции могут управлять состоянием игры, взаимодействуя с глобальными переменными.

Описание:
        1.	Создай глобальные переменные:
        •	score — начальное значение равно 0.
        •	lives — начальное значение равно 3.
        •	gameOver — начальное значение равно false.
        2.	Напиши функции:
        •	increaseScore(points):
            •	Увеличивает глобальную переменную score на значение points.
            •	Если значение score становится больше или равно 50, выводит сообщение: «Поздравляю, вы победили!» и завершает игру, присваивая gameOver = true.
        •	loseLife():
            •	Уменьшает глобальную переменную lives на 1.
            •	Если количество жизней становится равно 0, выводит сообщение: «Игра окончена!» и завершает игру, присваивая gameOver = true.
        •	restartGame():
            •	Сбрасывает score на 0, lives на 3, а gameOver на false.
            •	Выводит сообщение: «Игра перезапущена!».
        3.	Добавь проверку:
            •	Во всех функциях, если gameOver === true, не выполнять никакие действия (например, не увеличивать очки, не терять жизни).
        4.	Вызови функции в следующем порядке:
            •	Увеличь score несколько раз, чтобы проверить условие победы.
                •	Уменьши количество жизней, чтобы проверить условие проигрыша.
                •	После проигрыша вызови restartGame() и начни сначала.

Пример результата:
        1.	increaseScore(10)
        Консоль: «Очки: 10».
        2.	increaseScore(15)
        Консоль: «Очки: 25».
        3.	loseLife()
        Консоль: «Осталось жизней: 2».
        4.	loseLife()
        Консоль: «Осталось жизней: 1».
        5.	loseLife()
        Консоль: «Игра окончена!»
        6.	restartGame()
        Консоль: «Игра перезапущена!»
        7.	increaseScore(50)
        Консоль: «Поздравляю, вы победили!»
 */
 score = 0;
 lives = 3;
 gameOver = false;

function increaseScore(points) {
    if (gameOver === true) return;
    
    score += points;
    console.log("Очки: " , score);
    
    if (score >= 50) {
        console.log("Поздравляю, вы победили!");
        gameOver = true;
    }
}

function loseLife() {
    if (gameOver === true) return; 
    
    lives -= 1;
    console.log("Осталось жизней: " , lives);
    
    if (lives === 0) {
        console.log("Игра окончена!");
        gameOver = true;
    }
}

function restartGame() {
    score = 0;
    lives = 3;
    gameOver = false;
    console.log("Игра перезапущена!");
}

increaseScore(10);
increaseScore(15);
increaseScore(20);

loseLife();
loseLife(); 
loseLife(); 

restartGame();

increaseScore(50);
