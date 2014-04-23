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


/*
	*** Timestamp Tests ***

	** Functions tested in the Suite:
	- getTimestampMilli();
	- getTimestampSec();
	- getDateTimestamp();
*/

//Function Suite
	module("Timestamp Tests");

//Function under test: getTimestampMilli()
    test("Throws exception passed", function(){

    	var timestampFunc = getTimestampMilli();
    	var timestampAct = Date.now();

   	equal(timestampFunc, timestampAct, "Expect timestamps to be equal");

    });

//Function under test: getTimestampSec()
    test("Throws exception passed", function(){

    	var timestampFunc = getTimestampSec();
    	var timestampAct = Date.now() / 1000;

   	equal(timestampFunc, timestampAct, "Expect timestamps to be equal");

    });

//Function under test: getDateTimestamp()
    test("Throws exception passed", function(){

    	var timestampFunc = getDateTimestamp();
    	var timestampAct = new Date();
    	timestampAct = timestampAct.toString();

   	equal(timestampFunc, timestampAct, "Expect timestamps to be equal");

    });

/*
	*** END SUITE ***
*/



/*
    *** PopOver Tests ***

    ** Functions tested in the Suite:
    - displayPopover(var);
    - hidePopover(var);
*/

//Function Suite
    module("PopOver Tests");

//Function under test: displayPopOver(var)
//and hidePopOver(var);
    test("Throws exception passed", function(){

        var popup = document.getElementById("popup");
        var bcPopover = document.getElementById("bcPopover");

        displayPopOver("popup");

        equal(popup.style.position, "absolute");
        equal(popup.style.visibility, "visible");
        equal(popup.style.zIndex, 2);

        hidePopOver("popup");

        equal(popup.style.visibility, "hidden");

        var fog = document.getElementById("bcPopoverFog");

        equal(fog, null);

        displayPopOver("bcPopover");

        equal(bcPopover.style.position, "absolute");
        equal(bcPopover.style.visibility, "visible");
        equal(bcPopover.style.zIndex, 2);

        hidePopOver("bcPopover");

        equal(bcPopover.style.visibility, "hidden");

        fog = document.getElementById("bcPopoverFog");

        equal(fog, null);

    });

/*
    *** END SUITE ***
*/


});
//END OF TESTS