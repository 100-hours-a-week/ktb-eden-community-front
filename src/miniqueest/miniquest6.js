const myFirstPromise = new Promise((resolve, reject) => {
    resolve(`Hello, Promise!`);
});

const waitForMessage = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Hello, Async/Await!`), 1000);
});

myFirstPromise.then(message => {
    console.log(message);
})

waitForMessage.then(message => {
    console.log(message);
})