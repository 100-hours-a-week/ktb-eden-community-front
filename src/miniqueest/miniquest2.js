const numbers = [1,2,3,4,5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
const new_mul2_Array = numbers.map(function(element){
    return element * 2;
});

console.log(sum);
console.log(new_mul2_Array);