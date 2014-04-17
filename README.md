bluecollar
==========

Just some good old-fashioned tools for a blue-collar coder.

bluecollar is an api that wraps traditional javascript and jQuery.  The most basic goal of this library of functions is to document and make easily available some of the  most common and repetitive javascript functions that your average javascript novice encounters.  Many of the functions currently in the library are inspired by the top voted javascript questions in [StackOverflow](http://stackoverflow.com/questions/tagged/javascript?page=2&sort=votes&pagesize=15).

In addition to wrapping up commonly performed javascript tasks, this api has the goal of simplicity.  Any user should be able to grab the bluecollar.js file, drop it in their path, and go.  Functions that are implemented in bluecollar should attempt to be as straight-forward and simplified as possible to encourage the library to be easily and quickly customizable.

You are either a programmer who compulsively saves and documents useful code snippets, or you are not.  This library is for the latter.

Usage
=====

Simply download the bluecollar.js and place it in your web projects path, then link to it like you would any other javascript file.  In general it is best to also make sure you are including jQuery and the bluecollar.css file as some functions may utilize these.

    <link rel="stylesheet" href="path/to/bluecollar.css" type="text/css"/>
    <script src="http://code.jquery.com/jquery-latest.js"> </script>
    <script type="text/javascript" src="path/to/bluecollar.js"></script>


Documentation
=============

With an api that aims to be as broad as this one does, documentation is a must.  The primary source of documentation is the wiki.  In addition, each function in the bluecollar.js file is documented similar to how javadoc's are outlined.  This is to help multiple developers all work on the same file without stepping on each other's toes, primarily when it comes to any global variables that may be defined.

[API Documentation](https://github.com/philosowaffle/bluecollar/wiki)


Contribution
============

This library is only as robust as the group of programmers contributing to it.  A goal would be that this become a dumping ground for anytime a developer comes across a useful javascript snippet.  And in order to ensure that contributions made are useful and functional unit testing will be done using the QUnit framework.  More information about contributing can be found on the pull request info page.

[Pull Request Info](https://github.com/philosowaffle/bluecollar/wiki/Pull-Requests)
