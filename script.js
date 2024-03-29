// script
function changeColor(target) {
    var button = document.querySelector('.' + target + ' .btn');
    if (button.style.backgroundColor === 'gray') {
        button.style.backgroundColor = 'lightgray';
    } else {
        button.style.backgroundColor = 'gray';
    }
}
document .getElementById("unfnums") .innerHTML="my first javascript"