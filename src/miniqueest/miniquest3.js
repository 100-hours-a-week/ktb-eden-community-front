const add = (a,b) => {
    const sum = a+b;
    return sum;
}

const sumArray = (arr) => {
    let sum = 0;
    for(const i of arr){
        sum += i;
    }
    return sum;
    // return arr.reduce((acc, cur) => acc + cur, 0);
}

const sum = add(2,3);
const total = sumArray([1,2,3,4,5]);
console.log(sum);
console.log(total);