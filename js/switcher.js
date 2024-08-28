const switchInput = document.getElementById('theme-toggle');
const body = document.body;

switchInput.addEventListener('change', function() {
    if (this.checked) {
        body.style.backgroundColor = '#646464';
    } else {
        body.style.backgroundColor = 'white';
    }
});