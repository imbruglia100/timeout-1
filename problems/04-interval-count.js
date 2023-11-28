/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
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

function intervalCount(cb, delay, amount) {
  let num = amount
  let interval = setInterval(cb, delay)

  const doClearInterval = () => {
    if(num === 0) return clearInterval(interval)
    num--
    setTimeout(doClearInterval, delay)
  }

  return doClearInterval()
}

intervalCount(function() {
  console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
