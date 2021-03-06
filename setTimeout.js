/* setTimeout isn't reliable at all, 
it doesn't always execute the code according to the timer
because there could be scenarios when multiple promises are there which
has higher priority of being inside microtask queue, so until these callback functions
gets executed call stack will not be empty and setTimeout whose timer has done and
waiting inside callback queue will not execute */

// there are some alternative of setTimeout() which can also be used to set a delay

console.log('start');

var customDelay = new Promise(function (resolve) {
    var delay = 3000; // milliseconds
    var before = Date.now();
    while (Date.now() < before + delay) { };
    resolve('Success!');
});

customDelay.then(function (msg) {
    console.log("Happy New Year !");
});

//above technique will work fine but it will block rest code execution until it completes

console.log('end');