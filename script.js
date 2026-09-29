/* =========================================
   UNIAbLE JAVASCRIPT
   ========================================= */


/*
    Find the buttons from our HTML.

    document.getElementById()
    searches the HTML for an element
    with the specified ID.
*/

const voiceSignupButton =
    document.getElementById("voiceSignupButton");

const voiceLoginButton =
    document.getElementById("voiceLoginButton");

const emailLoginButton =
    document.getElementById("emailLoginButton");

const guestButton =
    document.getElementById("guestButton");


/* =========================================
   VOICE SIGN-UP
   ========================================= */

voiceSignupButton.addEventListener("click", function () {

    alert(
        "Welcome to UniAble! Voice Sign-Up will start here."
    );

});


/* =========================================
   VOICE LOGIN
   ========================================= */

voiceLoginButton.addEventListener("click", function () {

    alert(
        "Voice Login will start here."
    );

});


/* =========================================
   EMAIL LOGIN
   ========================================= */

emailLoginButton.addEventListener("click", function () {

    alert(
        "Email Login will start here."
    );

});


/* =========================================
   GUEST
   ========================================= */

guestButton.addEventListener("click", function () {

    alert(
        "Welcome to UniAble Guest Mode."
    );

});