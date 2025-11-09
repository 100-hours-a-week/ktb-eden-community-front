function doWorkAsync() {
    setTimeout(() => {
        console.log(`Async Operation Complete`);
    },1000);
}

console.log(`Start`);
console.log(`Processing`);
console.log(`End`);


console.log(`Start`);
doWorkAsync();
console.log(`End`);