
function checkForm() {
    var fname = document.mainForm.fnameField;
    var lname = document.mainForm.lnameField;
    var email = document.mainForm.emailField;
    var password = document.mainForm.passField1;
    var password2 = document.mainForm.passField2;
    var check = true;
    if (fname.value === "") {
        console.log('EMPTY');
        alert("You didn't enter a first name!");
        fname.style.backgroundColor = "#F8E0E0";
        check = false;
    } 
    if (lname.value === "") {
        console.log('EMPTY');
        alert("You didn't enter a last name!");
        lname.style.backgroundColor = "#F8E0E0";
        check = false;
    } 
    if (email.value === "") {
        console.log('EMPTY');
        alert("You didn't enter a email!");
        email.style.backgroundColor = "#F8E0E0";
        check = false;
    } 
    if (password.value === "") {
        console.log('EMPTY');
        alert("You didn't enter a password!");
        password.style.backgroundColor = "#F8E0E0";
        check = false;
    } 
    if (password.value != password2.value|| password2.value === "") {
        console.log('EMPTY');
        alert("Password didn't match.");
        password2.style.backgroundColor = "#F8E0E0";
        check = false;
    } 
    alert("Hello " + fname.value + " " + lname.value + "!");
    return check;
}
