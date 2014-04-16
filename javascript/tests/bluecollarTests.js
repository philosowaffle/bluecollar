/*
	*** Logging ***

	Logger output can be found in the browser console i.e. Developer Tools, Firebug, etc.
*/
QUnit.log = function(result, message)
  {
    if (window.console && window.console.log)
    {
      window.console.log(result +' :: '+ message);
    }
  }
/* 
	*** Logging ***
*/

//TESTS
$(document).ready(function(){


/*
	*** Hello World Tests ***

	** Functions tested in the Suite:
	- printHelloWorld(var);
*/

//Function Suite
	module("Hello World Tests");

//Function under test: printHelloWorld(var)    
    test("Print success on valid input", function(){

   		printHelloWorld("printHelloWorldTestElement");

   		equal(document.getElementById("printHelloWorldTestElement").innerHTML, "Hello World!" );

    });

//Function under test: printHelloWorld(var)    
    test("Throw exception on invalid id", function(){

   		var expectedError = new RegExp("TypeError:");

   		throws(function(){ printHelloWorld("id_that_does_not_exist"); }, expectedError, "Expected a TypError to be thrown.");

    });

/*
	*** END SUITE ***
*/



/*
	*** Log And Throw Tests ***

	** Functions tested in the Suite:
	- logAndThrow(var,var);
*/

//Function Suite
	module("Log And Throw Tests");

//Function under test: logAndThrow(var,var)    
    test("Throws exception passed", function(){

    	var expectedError = new RegExp("myTestingError");

   		throws(function(){logAndThrow("myTestingError")}, expectedError, "Expecting 'MyTestingError' to be thrown.");

    });

/*
	*** END SUITE ***
*/


/*
	*** Redirect *** **currently no good way to test other than manually

	** Functions tested in the Suite:
	- redirect(var);
*/

//Function Suite
// 	 module("Redirect Tests");

// //Function under test: redirect(var)    
//     test("Throws exception passed", function(){

//     	var iframe = document.getElementById("redirectTestElement");

//     	equal(iframe.contentWindow.document.URL, "http://www.google.com", "Expecting iframe to be pointing to google.com.");


//     });

/*
	*** END SUITE ***
*/

});
//END OF TESTS