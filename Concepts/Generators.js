//To create a generator use function*
// •	Generators – Unlike normal function that return only single value, generators can yield multiple values on demand.
function* generateOutput() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateOutput();

// Use next to get value and done status
const one = generator.next();
//output -> {value: 1, done: false}

for (let value of generator) {
  alert(value); // 1, then 2, then 3
}

console.log(generator);
