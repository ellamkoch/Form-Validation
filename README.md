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
The webpage includes **two forms** — one using HTML5 validation and another using JavaScript validation. Both prevent form submission when invalid data is entered.

### HTML5 Validation (Top Form)
- Displays entered data after the Submit button is pressed.  
- Validations are turned on for the following fields:
  - Email  
  - Username (minimum of 5 characters)  
  - Password (minimum of 8 characters)  
  - Agreement checkboxes (required)  

An event listener prevents the form from submitting to the server and instead displays the entered data below the form. For privacy, the password is not shown in the output—though a message could be added in the future to confirm that the password met requirements.

Another event listener clears the output area and resets all input fields when the **Clear Top Form** button is clicked.

### JavaScript Validation (Alternate Username)
This second form represents a simple JS-only validation example. It checks whether an alternate username meets the required minimum length (5 characters).  

- If too short, a message appears saying the username must be at least 5 characters long.  
- If valid, a success message appears.  

The message appears dynamically in an output area below the input field. This mimics how a real-world form might check usernames, even though most modern implementations now validate automatically without a separate submit step.

## Testing and Debugging
- Used the **Live Server** VS Code extension to preview and test changes in real time.  
- Checked for console messages in the browser’s Developer Tools to troubleshoot validation and logic.  
- Used the VS Code **Problems** panel to locate and fix syntax or reference errors.

## GitHub Site URL
[The deployed version of the dev branch can be found here](https://ellamkoch.github.io/Form-Validation/)

## GitHub repository
[The GitHub repository for this assignment can be found here ](https://github.com/ellamkoch/Form-Validation/tree/dev)