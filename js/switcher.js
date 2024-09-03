const switchInput = document.getElementById('theme-toggle');
const overlay = document.querySelector(".overlay");

switchInput.addEventListener('change', function() {
    if (this.checked) {
        overlay.style.backgroundColor = '#646464';
    } else {
        overlay.style.backgroundColor = 'white';
    }
});