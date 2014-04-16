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

function printHelloWorld( elementID ){

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
	
function logger( error , message ){

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
	
function logAndThrow( error , message ){

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
	
function redirect( url ){

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
	
function getTimestampMilli(){

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
	
function getTimestampSec(){

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
	
function getDateTimestamp(){

	var timestamp;

	timestamp =  new Date().getTime();
	return new Date(timestamp);

}

// END FUNCTION
