const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todos = [];

// Функция для отображения меню
function showMenu() {
    console.log('\n--- TODO Меню ---');
    console.log('1. Показать задачи');
    console.log('2. Добавить задачу');
    console.log('3. Удалить задачу');
    console.log('0. Выйти');
    rl.question('Выберите действие: ', handleMenu);
}

// Обработчик выбора в меню
function handleMenu(choice) {
    switch (choice) {
        case '1':
            if (todos.length === 0) {
                console.log('Список задач пуст.');
            } else {
                console.log('Ваши задачи:');
                todos.forEach((task, index) => {
                    console.log(`${index}: ${task}`);
                });
            }
            showMenu();
            break;
        case '2':
            rl.question('Введите новую задачу: ', (task) => {
                todos.push(task);
                console.log('Задача добавлена!');
                showMenu();
            });
            break;
        case '3':
            if (todos.length === 0) {
                console.log('Список задач пуст. Нечего удалять.');
                showMenu();
            } else {
                todos.forEach((task, index) => {
                    console.log(`${index}: ${task}`);
                });
                rl.question('Введите индекс задачи для удаления: ', (idxInput) => {
                    const index = Number(idxInput);
                    if (!isNaN(index) && index >= 0 && index < todos.length) {
                        const removed = todos.splice(index, 1);
                        console.log(`Удалена задача: ${removed}`);
                    } else {
                        console.log('Неверный индекс!');
                    }
                    showMenu();
                });
            }
            break;
        case '0':
            console.log('Выход из программы. Пока!');
            rl.close();
            break;
        default:
            console.log('Неверный выбор. Попробуйте снова.');
            showMenu();
            break;
    }
}

// Запускаем меню
showMenu();