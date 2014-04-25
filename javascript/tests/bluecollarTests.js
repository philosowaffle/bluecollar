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

   		bc_printHelloWorld("printHelloWorldTestElement");

   		equal(document.getElementById("printHelloWorldTestElement").innerHTML, "Hello World!" );

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
    test("Logs and Throws an exception", function(){

    	var expectedError = new RegExp("myTestingError");

   		throws(function(){bc_logAndThrow("myTestingError")}, expectedError, "Expecting 'MyTestingError' to be thrown.");

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
    test("Timestamp in milliseconds", function(){

    	var timestampFunc = bc_getTimestampMilli();
    	var timestampAct = Date.now();

   	equal(timestampFunc, timestampAct, "Expect timestamps to be equal");

    });

//Function under test: getTimestampSec()
    test("Timestamp in seconds", function(){

    	var timestampFunc = bc_getTimestampSec();
    	var timestampAct = Date.now() / 1000;

   	equal(timestampFunc, timestampAct, "Expect timestamps to be equal");

    });

//Function under test: getDateTimestamp()
    test("Timestamp as datetime", function(){

    	var timestampFunc = bc_getDateTimestamp();
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
    test("Shows and hides popover succesfully", function(){

        var popup = document.getElementById("popup");
        var bcPopover = document.getElementById("bcPopover");

        bc_displayPopOver("popup");

        equal(popup.style.position, "absolute");
        equal(popup.style.visibility, "visible");
        equal(popup.style.zIndex, 2);

        bc_hidePopOver("popup");

        equal(popup.style.visibility, "hidden");

        var fog = document.getElementById("bcPopoverFog");

        equal(fog, null);

        bc_displayPopOver("bcPopover");

        equal(bcPopover.style.position, "absolute");
        equal(bcPopover.style.visibility, "visible");
        equal(bcPopover.style.zIndex, 2);

        bc_hidePopOver("bcPopover");

        equal(bcPopover.style.visibility, "hidden");

        fog = document.getElementById("bcPopoverFog");

        equal(fog, null);

    });

/*
    *** END SUITE ***
*/



/*
    *** findInArray Tests ***

    ** Functions tested in the Suite:
    - findInArray(var,var)
*/

//Function Suite
    module("findInArray Tests");

//Function under test: findInArray(var,var)
    test("Find items in an array", function(){

        var myArray = [];
        var x;

        for (x = 0; x < 100; x++) {

            myArray[x] = "item" + x;

        }

        var test = bc_findInArray("item0", myArray);

        equal(test, 0);

        test = bc_findInArray("item50", myArray);

        equal(test, 50);

        test = bc_findInArray("item99", myArray);

        equal(test, 99);

        test = bc_findInArray("item100", myArray);

        equal(test, -1);

    });

/*
    *** END SUITE ***
*/



/*
    *** cloneObject Tests ***

    ** Functions tested in the Suite:
    - cloneObject(var)
*/

//Function Suite
    module("cloneObject Tests");

//Function under test: findInArray(var,var)
    test("Clones an object", function(){

        var obj = {one: "obj"};

        var myObject = {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
            e: 5,
            f:  6,
            g: 7,
            h: 8,
            i: 9,
            j: 10,
            k: function() {return "stegosaurus";},
            l: ["cat", "dog", "mouse"],
            m: obj
        };
        var x;

        var clone = bc_cloneObject(myObject);

        equal(clone.a, myObject.a);
        equal(clone.b, myObject.b);
        equal(clone.c, myObject.c);
        equal(clone.d, myObject.d);
        equal(clone.e, myObject.e);
        equal(clone.f, myObject.f);
        equal(clone.g, myObject.g);
        equal(clone.h, myObject.h);
        equal(clone.i, myObject.i);
        equal(clone.j, myObject.j);
        equal(clone.k, myObject.k);
        equal(clone.l, myObject.l);
        equal(clone.m, myObject.m);

    });

/*
    *** END SUITE ***
*/


});
//END OF TESTS