const { stdout } = require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('Введите массив чисел через пробел: ', (input) => {
    let numbers = input.split(' ').map(Number);

    numbers = [...new Set(numbers)];

    numbers.sort((a, b) => a - b);

    console.log('Ваш отсортированный массив чисел:', numbers);

    rl.close();
})