let success = true;

function validateUsername(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let errors = [];

    if(username.length == 0) {
        errors.push("Username cannot be empty.");
    }
    else if(/\s/.test(username)) {
        errors.push("Username cannot contain spaces.");
    }
    else {
        document.getElementById("usernameErrors").innerHTML = "OK!";
        document.getElementById("usernameErrors").classList.add("text-success");
        success = true;
        return;
    }

    document.getElementById("usernameErrors").innerHTML = errors.join("<br>");
    success = false;
}

function validateEmail(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let errors = [];

    if(email.length == 0) {
        errors.push("Email cannot be empty.");
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Invalid email format.");
    }
    else {
        document.getElementById("emailErrors").innerHTML = "OK!";
        document.getElementById("emailErrors").classList.add("text-success");
        success = true;
        return;
    }

    document.getElementById("emailErrors").innerHTML = errors.join("<br>");
    success = false;
}

function validatePhoneNumber(event) {
    event.preventDefault();

    let phoneNumber = document.getElementById("phoneNumber").value;
    let errors = [];

    if(phoneNumber.length == 0) {
        errors.push("Phone number cannot be empty.");
    }
    else if(!/^\d{10}$/.test(phoneNumber)) {
        errors.push("Phone number must be exactly 10 digits.");
    }
    else {
        document.getElementById("phoneNumberErrors").innerHTML = "OK!";
        document.getElementById("phoneNumberErrors").classList.add("text-success");
        success = true;
        return;
    }

    document.getElementById("phoneNumberErrors").innerHTML = errors.join("<br>");
    success = false;
}

function validatePassword(event) {
    event.preventDefault();

    let password = document.getElementById("password").value;
    let errors = [];

    if(password.length == 0) {
        errors.push("Password cannot be empty.");
    }
    else if(password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    else if(!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    else if(!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    else if(!/\d/.test(password)) {
        errors.push("Password must contain at least one digit.");
    }
    else {
        document.getElementById("passwordErrors").innerHTML = "OK!";
        document.getElementById("passwordErrors").classList.add("text-success");
        success = true;
        return;
    }

    document.getElementById("passwordErrors").innerHTML = errors.join("<br>");
    success = false;
}

function validateConfirmPassword(event) {
    event.preventDefault();

    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(confirm.length == 0) {
        document.getElementById("confirmErrors").innerHTML = "Confirm Password cannot be empty.";
    }
    else if(confirm !== password) {
        document.getElementById("confirmErrors").innerHTML = "Passwords do not match.";
    }
    else {
        document.getElementById("confirmErrors").innerHTML = "OK!";
        document.getElementById("confirmErrors").classList.add("text-success");
        success = true;
        return;
    }

    success = false;
}

function validateForm(event) {
    event.preventDefault();

    if (success == true) {
        setTimeout(() => {
            document.getElementById("status").innerHTML = "Form submitted successfully!";
            document.getElementById("status").classList.add("text-success");
        }, 1000);
    }
    else {
        document.getElementById("status").innerHTML = "Please fix the errors in the form.";
        document.getElementById("status").classList.add("text-danger");
    }
}