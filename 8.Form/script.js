document.getElementById("firstname").addEventListener("keyup", firstname);
function firstname() {
  let x = document.getElementById("firstname").value;
  document.getElementById("display-firstname").innerHTML = x;
}
/* */
const ageInput = document.getElementById('age');
const hardTruthSection = document.getElementById('a-hard-truth');

ageInput.addEventListener('keyup', function() {
  let age = parseInt(ageInput.value);

  if (age > 18) {
    hardTruthSection.style.visibility = 'visible';
  }
});
/* */
const pwdinput = document.getElementById('pwd');
const pwdcfinput = document.getElementById('pwd-confirm');

pwdinput.addEventListener('keyup', function() {
    let pwd = pwdinput.value;
    let pwdConfirm = pwdcfinput.value;

    if (pwd.length < 6 || pwd !== pwdConfirm) {
        pwdinput.style.backgroundColor = 'red';
        pwdcfinput.style.backgroundColor = 'red';
    } else {
        pwdinput.style.backgroundColor = '';
        pwdcfinput.style.backgroundColor = '';
    }
});

pwdcfinput.addEventListener('keyup', function() {
    let pwd = pwdinput.value;
    let pwdConfirm = pwdcfinput.value;

    if (pwd.length < 6 || pwd !== pwdConfirm) {
        pwdinput.style.backgroundColor = 'red';
        pwdcfinput.style.backgroundColor = 'red';
    } else {
        pwdinput.style.backgroundColor = '';
        pwdcfinput.style.backgroundColor = '';
    }
});
/* */
const DarkMode = document.getElementById("toggle-darkmode");
const body = document.body;

DarkMode.addEventListener('change', function() {
    const selectedMode = DarkMode.value;
    if (selectedMode === 'dark') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    } else {
        body.style.backgroundColor = '';
        body.style.color = '';
    }
});

    