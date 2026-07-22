document.getElementById("myForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    let message = document.getElementById("message");

    message.innerHTML = "";
    message.className = "";

    // Name Validation
    if(name === ""){
        message.innerHTML = "Name is required.";
        message.className = "error";
        return;
    }

    // Email Validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!emailPattern.test(email)){
        message.innerHTML = "Enter a valid email address.";
        message.className = "error";
        return;
    }

    // Phone Validation
    let phonePattern = /^[0-9]{10}$/;

    if(!phonePattern.test(phone)){
        message.innerHTML = "Phone number must contain 10 digits.";
        message.className = "error";
        return;
    }

    // Password Validation
    if(password.length < 6){
        message.innerHTML = "Password must be at least 6 characters.";
        message.className = "error";
        return;
    }

    // Success Message
    message.innerHTML = "Form submitted successfully!";
    message.className = "success";

    // Optional: Reset Form
    document.getElementById("myForm").reset();

});
