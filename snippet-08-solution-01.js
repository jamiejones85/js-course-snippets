/**
 * Snippet 08 - "So, what's the problem?"
 * Create a new scope per iteration by using a fuction and executing it
 */

var i = 1;

while (i < 10) {
    (function() {
        var b = i;
        setTimeout( function timer() {
            console.log(b);
        }, i * 500);
    })();
    i++;
}
