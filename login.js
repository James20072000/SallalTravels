import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

console.log("Login script started");

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    // using firebase checking login
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login Successful!");
            window.location.href = "index.html"; // after login redirect to home page
        })
        .catch((error) => {
            // message appears when password get wrong
            errorMsg.textContent = "Invalid Email or Password";
            console.error(error.message);
        });
});




