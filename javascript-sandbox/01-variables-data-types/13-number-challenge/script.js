// Math.random()=angka 0.?????

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);

const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;
console.log(productOutput);

const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput);

const rm = x % y;
const rmOutput = `${x} % ${y} = ${diff}`;
console.log(rmOutput);
