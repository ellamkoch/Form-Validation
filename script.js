// HTML5 Form Variables and Output
const html5Form = document.getElementById("html5_form");
const html5Output = document.getElementById("output_html5Form");

// Variables of the HTML5 form inputs - this references all input fields in the HTML5 form
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const password = document.getElementById("password");
// pulls all checkbox iinputs with this shared class name
const agreements = document.querySelectorAll(".checkbox_item_input"); // select all checkboxes with this class

//Event Listener for the html5 form's submit button
html5Form.addEventListener("submit", function (e) {
    // Prevents page refresh on submit
    e.preventDefault(); // doesn't block HTML5 validation. Only lists information if its valid

 // Builds a friendly sentence based based on which boxes are checked
function buildAgreementsText() {
  const phrases = []; // creates an empty list to store what the user agreed to
  agreements.forEach((box) => { // loops through each checkbox
    if (!box.checked) return; // ! means we skip unchecked boxes
    if (box.value === "safe")  phrases.push("be safe while journaling"); //pushes the phrase if the box is checked that equals the named value
    if (box.value === "enjoy") phrases.push("enjoy life to the fullest");
  });
 // If any boxes were checked, join them into one sentence
  return phrases.length
    ? `You agreed to ${phrases.join(" and ")}.` //? is a ternary operator that  means if in this case as a shortcut for if/else
    : "You did not agree to the required agreements."; // or list this. : is an else in this case. 
}
 // Calls the function above to build the message
  const agreementsText = buildAgreementsText();

    // Output results of the html5 form
    html5Output.innerHTML = `
        <p>Your first name is: ${firstName.value} and your last name is: ${lastName.value}</p>
        <p>Your email is: ${email.value}</p>
        <p>Your birth date is: ${birthDate.value}</p>
        <p>You agreed to: ${agreementsText}</p>
    `;
    

    // Makes the html5 form output div visible    
    html5Output.style.display = 'block';
    
    // Clears the form up top
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';
    birthDate.value = '';
    agreements.forEach((box) => 
        { box.checked = false; }); // unchecks all checkboxes
    });

// JS Form Section

// JS Variables
const formJs = document.getElementById("js_form");
const altUsernameInput = document.getElementById("altUsername");
const jsOutput = document.getElementById("output_jsForm"); //

// JS Validation Logic check
function validateAltUserNameLength(altUsername) { // checks to see whether the username meets 5 char min req
    const minLength = 5;

    if(altUsername.length < minLength) {
        return `Username must be at least ${minLength} characters long`; // this message is shown if the user name is too short
    } else  {
        return `Username length is valid.`; // this message is shown if the user name is the valid length. 
    }
}
// Event listener for the Alt Username submit validation
formJs.addEventListener("submit", function(e) { //Runs on submit of the alt username
    e.preventDefault(); // stops the page refresh when clicking submit
    const altUsernameValue = altUsernameInput.value.trim(); //Gets the trimmed value of the field, and removes spaces at beginng or end
    const message = validateAltUserNameLength(altUsernameValue); // runs validation function on the alt username

    jsOutput.textContent = message; // displays the validation message to the user
    jsOutput.style.display = "block"; // shows js output box only after clicking submit for the alt user name
});

altUsernameInput.addEventListener("input", function() { // hides old message until submit is pressed again for the alt username
  output.style.display = "none";
});