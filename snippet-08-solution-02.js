/**
 * Snippet 08 - "So, what's the problem?"
 * Create a new scope per iteration by using a fuction and executing it, but passing i in to it, shadowing the globally scoped i
 *
 */

var i = 1;

while (i < 10) {
    (function(i) {
        setTimeout( function timer() {
            console.log(i);
        }, i * 500);
    })(i);
    i++;
}
