# Working with Forms
## Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.

```
document.getElementById("firstname").addEventListener("keyup", firstname);

function firstname() {
  let x = document.getElementById("firstname").value;
  document.getElementById("display-firstname").innerHTML = x;
}
```

## Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.

```
// Get references to the input and the section
const ageInput = document.getElementById('age');
const hardTruthSection = document.getElementById('a-hard-truth');

// Add a keyup event listener to the age input
ageInput.addEventListener('keyup', function() {
  // Get the current age value from the input
  const age = parseInt(ageInput.value);

  // Check if the age is upper 18
  if (age > 18) {
    // show the hard truth section
    hardTruthSection.style.visibility = 'visible';
  }
});
```

## Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.

```
// Get references to the password input fields
const pwdinput = document.getElementById('pwd');
const pwdcfinput = document.getElementById('pwd-confirm');

// Add a keyup event listener to the first password input
pwdinput.addEventListener('keyup', function() {
    // Get the values of the password fields
    let pwd = pwdinput.value;
    let pwdConfirm = pwdcfinput.value;

    // Check if the password length is less than 6 characters or if the passwords don't match
    if (pwd.length < 6 || pwd !== pwdConfirm) {
        // Set both password input fields to have a red background
        pwdinput.style.backgroundColor = 'red';
        pwdcfinput.style.backgroundColor = 'red';
    } else {
        // Reset the background color of both password input fields
        pwdinput.style.backgroundColor = '';
        pwdcfinput.style.backgroundColor = '';
    }
});

// Add a keyup event listener to the password confirmation input
pwdcfinput.addEventListener('keyup', function() {
    // Get the values of the password fields
    let pwd = pwdinput.value;
    let pwdConfirm = pwdcfinput.value;

    // Check if the password length is less than 6 characters or if the passwords don't match
    if (pwd.length < 6 || pwd !== pwdConfirm) {
        // Set both password input fields to have a red background
        pwdinput.style.backgroundColor = 'red';
        pwdcfinput.style.backgroundColor = 'red';
    } else {
        // Reset the background color of both password input fields
        pwdinput.style.backgroundColor = '';
        pwdcfinput.style.backgroundColor = '';
    }
});
```
## Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.

```
// Get references to the select element and the body element
const toggleDarkMode = document.getElementById('toggle-darkmode');
const body = document.body;

// Add a change event listener to the select element
toggleDarkMode.addEventListener('change', function() {
    // Get the selected value of the select element
    const selectedMode = toggleDarkMode.value;

    // Check the selected value and apply corresponding styles
    if (selectedMode === 'dark') {
        // Dark mode: set black background and white text
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        // Light mode: reset styles to default
        body.style.backgroundColor = '';
        body.style.color = '';
    }
});
```