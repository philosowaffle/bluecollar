/*
        +[title]: printHelloWorld()
        +[description]: Prints 'Hello World!' to the screen in the given element.
        +[inputs]:{{
        	-[elementID]: The #id of the element you want to display the output in
        }}
        +[outputs]: 'Hello Wold!'
        +[code]: {{
        		<html>
        			<div id="printHere"></div>

        			<script>
        				bc_printHelloWorld('printHere');
        			</script>
        		</html>
        }}
        +[compatibility]: All known browsers

*/

// GLOBALS

//FUNCTION

function bc_printHelloWorld( elementID ){

	try{

		document.getElementById( elementID ).innerHTML = "Hello World!";

	} catch( error ){

		logAndThrow( error, "It's possible the id you supplied does not exist." );

	}


}

//END FUNCTION


/*

        +[title]: logger()
        +[description]: Logs error messages to the browsers console.
        +[inputs]:{{
            -[error]: an error that was caught
            -[message]: a message you would like displayed in the log
        }}
        +[outputs]: Error message printed to browser console.
        +[code]: {{
                <script>
                  bc_logger(error, "Something broke...");  // Output: 'bluecollarLog :: '+ error +' :: Something broke...'
                  bc_logger(error); // Output: 'bluecollarLog :: '+ error
                  bc_logger("Stop breaking things."); // Output: 'bluecollarLog :: Stop breaking things.'
                </script>
        }}
        +[known compatibility]: Chrome

*/

// GLOBALS

// FUNCTION

function bc_logger( error , message ){

	window.console.log('bluecollarLog :: '+ error +' :: '+ message );

}

// END FUNCTION



/*

        +[title]: logAndThrow()
        +[description]: Logs error messages to the browsers console and then throws the error.
        +[inputs]:{{
            -[error]: an error that was caught
            -[message]: a message you would like displayed in the log
        }}
        +[outputs]: Error message printed to browser console.
        +[code]: {{
                <script>
                   bc_logAndThrow(error, "You broke it."); // Output: 'bluecollarLog :: '+ error +' :: You broke it.'
                   bc_logAndThrow(error); // Output: 'bluecollarLog :: '+ error
                   bc_logAndThrow("You broke it."); // Output: 'bluecollarLog :: You broke it.'
                </script>
        }}
        +[known compatibility]: Chrome

*/

// GLOBALS

// FUNCTION

function bc_logAndThrow( error , message ){

	window.console.log('bluecollarLog :: '+ error +' :: '+ message );
	throw error;

}

// END FUNCTION




/*

        +[title]: redirect()
        +[description]: Redirects the user to a new site.
        +[inputs]:{{
            -[url]: url to redirect to, fully qualified i.e. http://www.google.com
        }}
        +[outputs]: Redirects to the url.
        +[code]: {{
                <script>
                    bc_redirect("http://www.google.com");
                </script>
        }}
        +[known compatibility]: Chrome

*/

// GLOBALS

// FUNCTION

function bc_redirect( url ){

	window.location.replace( url );

}

// END FUNCTION



/*

        +[title]: getTimestampMilli()
        +[description]: This returns the milliseconds elapsed since 1 January 1970 00:00:00 UTC up until now as a Number.
        +[outputs]: returns a Number of milliseconds
        +[code]: {{
                <script>
                    bc_getTimestampMilli();
                </script>
        }}
        +[known compatibility]: Chrome

*/

// GLOBALS

// FUNCTION

function bc_getTimestampMilli(){

	if (!Date.now) {

    	return new Date().getTime();
	} else {

		return Date.now();

	}

}

// END FUNCTION



/*

        +[title]: getTimestampSec()
        +[description]: This returns the seconds elapsed since 1 January 1970 00:00:00 UTC up until now as a Number.
        +[outputs]: returns a Number of seconds
        +[code]: {{
                <script>
                    bc_getTimestampSec();
                </script>
        }}
        +[known compatibility]: Chrome

*/

// GLOBALS

// FUNCTION

function bc_getTimestampSec(){

	if (!Date.now) {

    	return new Date().getTime() / 1000;
	} else {

		return Date.now() / 1000;

	}

}

// END FUNCTION




/*

        +[title]: getDateTimestamp()
        +[description]: This returns the current timestamp of the form: Fri Feb 13 2009 18:31:30 GMT-0500 (EST)
        +[outputs]: returns the current timestamp of the form: Fri Feb 13 2009 18:31:30 GMT-0500 (EST)
        +[code]: {{
                <script>
                    bc_getDateTimestamp();
                </script>
        }}
        +[known compatibility]: Chrome

*/

// GLOBALS

// FUNCTION

function bc_getDateTimestamp(){

	var timestamp;

	timestamp =  new Date().getTime();
	return new Date(timestamp);

}

// END FUNCTION



/*

        +[title]: displayPopOver()
        +[description]: This brings the popover element into view and fades out the rest of the view.
        +[input]: {{
            -[elementID]: element id to display
        }}
        +[outputs]: This brings the popover element into view and fades out the rest of the view.
        +[code]: {{
                <div id="container">
                    <button onclick="bc_displayPopOver("popthis")">Show Popup!</button>

                    <div id="popthis">
                        <button onclick="bc_hidePopOver("popthis")">Hide Me!</button>
                    </div>
                </div>
        }}
        +[known compatibility]:{{
            -[browser]: Chrome
            -[browser]: Safari
            -[browser]: Firefox
        }}
        +[anchor]:{{
            -[hidePopOver]: hidePopOver()
        }}

*/

// GLOBALS

// FUNCTION

function bc_displayPopOver( elementID ) {

    var fog = document.createElement("div");
    var popover = document.getElementById(elementID);

    fog.setAttribute("id", "bcPopoverFog");

    //The position of fog and popover must be the same and cannot == "relative"
    fog.style.position = "absolute";
    popover.style.position ="absolute";

    document.body.insertBefore(fog, document.body.firstChild);
    popover.style.zIndex = 2;
    popover.style.visibility = "visible";

}

// END FUNCTION



/*

        +[title]: hidePopOver()
        +[description]: This hides the popover element.
        +[input]: {{
            -[elementID]: element id to hide
        }}
        +[outputs]: hides the popover view and returns the rest of the view to normal
        +[code]: {{
                <div id="container">
                    <button onclick="bc_displayPopOver("popthis")">Show Popup!</button>

                    <div id="popthis">
                        <button onclick="bc_hidePopOver("popthis")">Hide Me!</button>
                    </div>
                </div>
        }}
        +[known compatibility]:{{
            -[browser]: Chrome
            -[browser]: Safari
            -[browser]: Firefox
        }}
        +[anchor]:{{
            -[hidePopOver]: displayPopOver()
        }}

*/

// GLOBALS

// FUNCTION

function bc_hidePopOver( elementID ) {

    $("#bcPopoverFog").remove();
    var popover = document.getElementById(elementID);

    popover.style.visibility = "hidden";

}

// END FUNCTION



/*

        +[title]: findInArray()
        +[description]: Finds an element in a given array.
        +[input]: {{
            -[key]:  the element to find
            -[array]: the array to search in
        }}
        +[outputs]: Returns the index of the item in the array or -1 if not found.
        +[code]: {{
                <script>

                  var things = {"firstThing", "secondThing", "findThisThing", "someThing"};

                  var myFoundThing = bc_findInArray("findThisThing", things);    //returns 2

             </script>
        }}
        +[known compatibility]:{{
            -[browser]: Chrome
        }}

*/

// GLOBALS

// FUNCTION

function bc_findInArray( key, array ) {

    var index = array.length;

    while( index >= 0) {

        if( array[index] === key ) {

            return index;

        }

        index--;

    }

    return -1;

}

// END FUNCTION



/*

        +[title]: cloneObject()
        +[description]:  Clones an object.
        +[input]: {{
            -[object]:  a javascript object to clone
        }}
        +[outputs]: A clone of the given javascript object
        +[code]: {{
                <script>
                       var obj = {a:1, b:2, c: function(){return 3;}};

                      var clonedObj = bc_cloneObject(obj);

                    </script>
        }}
        +[known compatibility]:{{
            -[browser]: Chrome
            -[browser]: Firefox
        }}

*/

// GLOBALS

// FUNCTION

function bc_cloneObject( object ) {

    var clone = function() {};

    clone.prototype = object;

    return new clone();

}

// END FUNCTION
