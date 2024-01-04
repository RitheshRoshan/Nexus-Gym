
function toggleMenu() {
    var nav = document.querySelector('ul.responsive');
    nav.classList.toggle('active');
}

function showSignupForm() {
    var signupPopup = document.getElementById('signupPopup');
    var overlay = document.getElementById('overlay');

    signupPopup.style.display = 'block';
    overlay.style.display = 'block';
}

function closeSignupForm() {
    var signupPopup = document.getElementById('signupPopup');
    var overlay = document.getElementById('overlay');

    signupPopup.style.display = 'none';
    overlay.style.display = 'none';
}

function signup(){
    window.alert("SIGN UP SUCCESSFUL !!")
}