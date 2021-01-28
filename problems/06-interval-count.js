/***********************************************************************
Write a function `intervalCount` that accepts a callback, a delay in 
milliseconds, and an amount. The function should set an interval with 
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/

// const intervalCount = (cb, delay, numTimes) => {
// let interval; 
//   for (let i = 0; i < numTimes; i++){
//   interval = setInterval(cb, delay)
//   setInterval(cb, delay)

//   } 

//   clearInterval(interval)

// }

const intervalCount =(cb, delay, numTimes) => {

  let interval = setInterval(function() {
    cb()
    numTimes--
    if (numTimes === 0) {
      clearInterval(interval)
    }
  }, delay)

}

intervalCount(function() {
  console.log('hi');
}, 500, 4); // prints 'hi' at 500ms intervals a total of 3 times

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
