# Form-Validation
This is the repo for the Implmenting Form Validation with HTLM5 and JavaScript Assignment for Week 3, Level 2 with CodeX.

## Objective
Develop a web form that incorporates both HTML5 and JavaScript validation techniques. This exercise aims to enhance your understanding of form validation, ensuring the correctness and quality of user input.

## Instructions
This assignment involves creating an HTML-only webpage that features a form with robust validation using HTML5 attributes and custom JavaScript.

## Files
-index.html - both forms live on one page
-styles.css - layout + `:valid` / `:invalid` styles for the HTML5 form
-README.md
-script.js - event handlers and validation logic for both forms
-license - MIT license
-.gitignore 

## How the Form Works
The form includes both HTML5 and JavaScript validations. All validations function correctly, preventing form submission on invalid data. 

Data for the top form, which is based on HTML5 validation, displays entered after the submit button is pressed. Validation is turned on for the following fields:
-email
-Username - minimum of 5 characters
-Password - minimum of 8 characters
-Agreement checkboxes

An event listener was added on the top and the bottom to prevent form submission and show the data entered. Password field isnt shown to protect the data that was entered that field. I could put something in next time to say that the Password was accepted, or meets the minimum requirements. A second event listener was added to the top to clear the output area for the top part of the form and any other data that may be left in the top part of the form. 

The Alternate Username area is for the JavaScript validation portion of the assignment. I tried to use something that may be a real-life instance, though checking of valid usernames is much fancier now and doesn't require a submission based upon how the site is coded. This is a good start though for now! 

There is an event listner for the Alt Username part of the form that checks to see if enough characters were entered. If not, it will say that the username must be as long as the minimum length indicated in the JS validation, which is 5. If it is 5 or more, then it says the username length is valid. This is in an output area, similar to the html5 part of the form above that shows the message upon checking to see if the username is valid or not. 

## Testing/Debugging
Utilized the Live Server addon to test the form/debug it and to double check the console within the browser. Also used the "problems" section in vs Code to help identify areas that were coded incorrectly.

## GitHub Site URL
The deployed version of the dev branch can be found here - 

## GitHub repository
[The GitHub repository for this assignment can be found here ](https://github.com/ellamkoch/Form-Validation/tree/dev)