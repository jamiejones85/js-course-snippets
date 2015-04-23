/**
 * Snippet 05 - "Leveraging Scope" a solution
 */

/**
 * Shout out a phrase, this should be a 'public' method
 * @param  string phrase phrase to shout out
 *
 */
function shout(phrase) {

    /**
     * Uppercase and add !!!! to the text
     * @param string text the text to uppercase and append !!!!
     */
    function manipulateText(text) {
        if (text) {
            text = text.toUpperCase() + '!!!!!';
        }
        return text;
    }


    console.log(manipulateText(phrase));
}

shout('hello');

//This will give ReferenceError
//manipulateText('hello');
