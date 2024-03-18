document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Replace "your_password" with your actual password
    if (username === "assaf" && password === "1") {
        window.location.href = "main.html";
    } else {
        alert("סיסמא שגויה אנא נסה שנית.");
    }
});

function onSignIn(googleUser) {
    // Handle the Google sign-in response here
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    // Send the ID token to your server for verification and user authentication
    // Example: You can use Ajax to send the token to your server endpoint
    // Once authenticated, redirect the user to the desired page
}
function googleSignIn() {
    // Implement Google Sign-In logic here
}