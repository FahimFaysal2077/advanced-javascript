const numbers = [3, 4, 5, 6, 7, 8];
const output = [];
// 01
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);


// 02
function square(element) {
    return element * element;
}

// 03
const square = element => element * element;

// 04
const square = x => x * x;



// 05
numbers.map(function square(element, index, array) {
    console.log(element, index, array);
})


// // map:
const result = numbers.map(function square(element) {
    return element * element;
})

const result = numbers.map(x => x * x);

console.log(result);


// Filter:
// NUMBER 01
const bigger = numbers.filter(x => x > 5);
console.log(bigger);


// NUMBER 02
const small = numbers.filter(x => x < 5);
console.log(small);


// NUMBER 03
const small2 = numbers.filter(x => x < 3);
console.log(small2);


// Find:
const isThere = numbers.find(x => x > 5);
console.log(isThere);