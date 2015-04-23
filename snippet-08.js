/**
 * Snippet 08 - "So, what's the problem?"
 */

var i = 1;

while (i < 10) {

    setTimeout( function timer() {
        console.log(i);
    }, i * 500);

    i++;
}
