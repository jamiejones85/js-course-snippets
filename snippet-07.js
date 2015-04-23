/**
 * Snippet 07 - "We need some closure"
 */

function myModule() {

    var a = 20;

    function clear() {
        a = 0;
        console.log(a);
    }

    return clear;
}

//module variable now references the clear function in the myModule
var module = myModule();

//we are now executing module, which is a reference to clear, which we are now executing out of scope.
module();
