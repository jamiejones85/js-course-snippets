/**
 * Snippet 06 - "Modules"
 */

function myModule() {

    var a = 20;

    function log() {
        console.log("a is now: " + a);
    }

    function increment() {
        b = 20;
        a++;
        log();
    }

    function decrement() {
        a--;
        log();
    }

    clear = function() {
        a = 0;
        log();
    }

    return {
        decrement: decrement,
        increment: increment
    }
}

var module = myModule();

module.increment();
module.increment();
module.decrement();

clear();
