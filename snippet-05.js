/**
 * Snippet 05 - "Leveraging Scope"
 */

/**
 * @@@ We want this to be 'private' @@@
 * Uppercase and add !!!! to the text
 * @param string text the text to uppercase and append !!!!
 */
function manipulateText(text) {
    if (text) {
        text = text.toUpperCase() + '!!!!!';
    }
    return text;
}

/**
 * Shout out a phrase, this should be a 'public' method
 * @param  string phrase phrase to shout out
 *
 */
function shout(phrase) {
    console.log(manipulateText(phrase));
}

shout('hello');
