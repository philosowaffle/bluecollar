/*
	*** Hello World ***

	**Description
	Prints 'Hello World!' to the screen in the given element.

	**Inputs
	elementID - The #id of the element you want to display the output in.

	**Output
	'Hello World!'

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
	*** LOGGING ***

	**Description
	Logs error messages to the browsers console.

	**Input
	error - an error that was caught
	message - a message you would like displayed in the log

	**Output
	Error message printed to browser console.

*/

// GLOBALS

// FUNCTION

function bc_logger( error , message ){

	window.console.log('bluecollarLog :: '+ error +' :: '+ message );

}

// END FUNCTION



/*
	*** LOG AND THROW ***

	**Description
	Logs error messages to the browsers console and then throws the error.

	**Input
	error - the error that was caught
	message - a message you would like displayed in the log

	**Output
	Error message printed to browser console.  Throws the error.

*/

// GLOBALS

// FUNCTION

function bc_logAndThrow( error , message ){

	window.console.log('bluecollarLog :: '+ error +' :: '+ message );
	throw error;

}

// END FUNCTION



/*
	*** Redirect ***

	**Description
	Redirects the user to a new site.

	**Input
	url - url to redirect to, fully qualified i.e. http://www.google.com

	**Output
	Redirects to the url.

*/

// GLOBALS

// FUNCTION

function bc_redirect( url ){

	window.location.replace( url );

}

// END FUNCTION



/*
	*** getTimestampMilli ***

	**Description
	This returns the milliseconds elapsed since 1 January 1970 00:00:00 UTC up until now as a Number.

	**Input

	**Output
	returns a Number of milliseconds

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
	*** getTimestampSec ***

	**Description
	This returns the seconds elapsed since 1 January 1970 00:00:00 UTC up until now as a Number.

	**Input

	**Output
	returns a Number of seconds

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
	*** getDateTimestamp ***

	**Description
	This returns the current timestamp of the form: Fri Feb 13 2009 18:31:30 GMT-0500 (EST)

	**Input

	**Output
	returns the current timestamp of the form: Fri Feb 13 2009 18:31:30 GMT-0500 (EST)

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
    *** displayPopOver ***

    **Description
    This brings the popover element into view and fades out the rest of the view.

    **Input
    elementID - element id to display

    **Output
    This brings the popover element into view and fades out the rest of the view.

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
    *** hidePopOver ***

    **Description
    This hides the popover element.

    **Input
    elementID - element id to display

    **Output
    This brings the popover element into view and fades out the rest of the view.

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
    *** findInArray ***

    **Description
    Finds an element in a given array.

    **Input
    key - the element to find
    array - the array to search in

    **Output
    Returns the index of the item in the array or -1 if not found.

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
    *** cloneObject ***

    **Description
    Clones an object.

    **Input
    object - a javascript object to clone

    **Output
    A clone of the given javascript object

*/

// GLOBALS

// FUNCTION

function bc_cloneObject( object ) {

    var clone = function() {};

    clone.prototype = object;

    return new clone();

}

// END FUNCTION