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
