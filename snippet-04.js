/**
 * Snippet 04 - "There is no block scope" part 2
 */
var isOnFire = true;

if (isOnFire) {
    var currenctAction = "exit building";
    console.log(currenctAction);
}

console.log(currenctAction);
