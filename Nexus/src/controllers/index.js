
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
    alert('SIGN UP SUCCESSFUL !!')
}

document.querySelector('.toggle').addEventListener('click', function() {
    document.querySelector('.head-content ul').classList.toggle('show');
    document.querySelector('.toggle').style.display = 'none';
    document.querySelector('.close').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.head-content ul').classList.toggle('show');
    document.querySelector('.toggle').style.display = 'block';
    document.querySelector('.close').style.display = 'none';
});