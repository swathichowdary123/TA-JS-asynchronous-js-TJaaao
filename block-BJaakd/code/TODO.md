1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
// Your code
new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Resolved!");
  }, 1000); // Delay resolution by 1000ms
})
  .then((value) => console.log(value));
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
// Your code
new Promise((resolve, reject) => {
  reject("Rejected Promise!"); // Reject immediately
})
.catch((reason) => console.log(reason));
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
// Your code
new Promise((resolve, reject) => {
  reject("Rejected Promise!"); // Reject immediately
})
.catch((reason) => console.log("Rejection:", reason))
.finally(() => console.log("Promise Settled!"))
.then( // This won't execute since promise is rejected
  (value) => console.log("Resolution:", value)
);
```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // callback queue

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D'); // A D C B -output
```

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
// Your code
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
// Your code
new Promise((resolve) => {
  resolve(21); // Resolve with 21
})
  .then((value) => value + 10) // Add 10 and store in value
  .then((value) => {
    if (value > 100) {
      throw new Error("Value exceeded 100!"); // Throw error if greater than 100
    }
    return value + 100; // Add 100 and store in value
  })
  .then((value) => console.log(value)) // Log the final value
  .catch((error) => console.error(error.message)); 
```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
// Your code
new Promise((resolve) => {
  resolve(['A']); // Resolve with ['A']
})
.then((value) => value.concat('B')) // Add 'B' and return array
.then((value) => ({ 0: value[0], 1: value[1] })) // Convert to object and return
.then((value) => console.log(value)) // Log the object
.catch((error) => console.error(error.message));
```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
// Your code
const first = new Promise((resolve) => {
  resolve(1); // Resolve with 1
});

first
  .then((value) => {
    console.log("Got:", value); // Log value (1)
    return 2; // Return 2
  })
  .then((value) => {
    console.log("Got:", value); // Log value (2)
    return 3; // Return 3
  })
  .then((value) => {
    console.log("Got:", value); // Log value (3)
    return 4; // Return 4
  })
  .then((value) => console.log("Final value:", value));
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
// Your code
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
// Your code
const firstPromise = new Promise((resolve) => {
  resolve("John"); // Resolve with "John"
});

firstPromise
  .then((value) => {
    console.log("First value:", value); // Log "John"
    return new Promise((resolve) => {
      resolve("Arya"); // Resolve with "Arya"
    });
  })
  .then((value) => {
    console.log("Second value:", value); // Log "Arya"
    return new Promise((resolve) => {
      setTimeout(() => resolve("Bran"), 2000); // Resolve with "Bran" after 2000ms
    });
  })
  .then((value) => console.log("Final value:", value)); 
```
