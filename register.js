import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

console.log("Register script started");

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let fullname = document.getElementById("fullname").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let gender = document.getElementById("gender").value;
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    // 1. full name validation 
    let namePattern = /^[a-zA-Z\s]+$/;
    if (fullname.length < 3) {
        errorMsg.textContent = "Full name must be at least 3 characters long.";
        return;
    }
    if (!namePattern.test(fullname)) {
        errorMsg.textContent = "Name should only contain letters and spaces.";
        return;
    }

    // 2. full number validation 
    let phonePattern = /^[6-9][0-9]{9}$/; 
    if (!phonePattern.test(contact)) {
        errorMsg.textContent = "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.";
        return;
    }

    // 3. DOB VALIDATION 
    if (dob === "") {
        errorMsg.textContent = "Please select your date of birth.";
        return;
    }

    // 4. EMAIL VALIDATION 
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Enter a valid email address.";
        return;
    }

    // 5. password validation 
    if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters long.";
        return;
    }

    // 6. gender validation 
    if (gender === "") {
        errorMsg.textContent = "Please select your gender.";
        return;
    }

    // Using firebase new account created 
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Registration Successful!");
            window.location.href = "login.html";
        })
        .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
                errorMsg.textContent = "This email is already registered! Try logging in.";
            } else if (error.code === "auth/invalid-email") {
                errorMsg.textContent = "The email address is badly formatted.";
            } else {
                errorMsg.textContent = error.message;
            }
        });
});

