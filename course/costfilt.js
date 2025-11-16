const readline = require("readline");

const products = [
  { id: 1, name: "Phone", price: 1000 },
  { id: 2, name: "Laptop", price: 3000 },
  { id: 3, name: "Keyboard", price: 500 },
  { id: 4, name: "Monitor", price: 1500 }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введите минимальную цену: ", minInput => {
  rl.question("Введите максимальную цену: ", maxInput => {
    
    const min = Number(minInput);
    const max = Number(maxInput);

    const filtered = products.filter(
      p => p.price >= min && p.price <= max
    );

    console.log("\nТовары в заданном диапазоне:");
    console.log(filtered);

    rl.close();
  });
});
