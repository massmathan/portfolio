var header = document.getElementById('header');
var listToggleBtn = document.getElementById('bi-list');
var closeToggleBtn = document.getElementById('bi-x');

function toggle(isOpening) {
    if (isOpening) {
        header.style.animation = "navopenanimation 0.3s ease-in-out forwards";
        listToggleBtn.style.visibility = 'hidden';
        closeToggleBtn.style.visibility = 'visible';
    } else {
        header.style.animation = "navcloseanimation 0.3s ease-in-out backwards";
        listToggleBtn.style.visibility = 'visible';
        closeToggleBtn.style.visibility = 'hidden';

      
    }
}
