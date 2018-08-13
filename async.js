// log the `rnd` result in the console using all three async techniques.
// You can only call console.log inside the `main` function.

const randomNumber = () => {
  return Math.random();
}

// 1. Make it wait for 1 sec. with `setTimeout` and log it on main function
const timeoutRandomNumber = (callback) => {
  setTimeout(callback, 1000);
}

// 2. Now wrap the timeout version to work with promises
const promiseRandomNumber = (rnd) => {
  return new Promise((resolve, reject) => {
    timeoutRandomNumber(() => resolve(rnd));
  });
}

// 3. Finally, code a final version with async await.
const asyncRandomNumber = async (callback) => {
  await timeoutRandomNumber(callback);
}

const rangedRandomNumber = (base, min, max) => {
  return Math.floor((base * (max - min)) + min);
}

const main = () => {
  const rnd = randomNumber();
  console.log(rangedRandomNumber(rnd, 14, 42));
  timeoutRandomNumber(() => console.log('timeout', rnd));
  promiseRandomNumber(rnd)
    .then((r) => console.log('promise', r));
  asyncRandomNumber(() => console.log('async', rnd));
}

main();
