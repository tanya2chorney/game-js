const switchInput = document.getElementById('theme-toggle');
const body = document.body;
const container = document.querySelectorAll('.container');

switchInput.addEventListener('change', function () {
  if (this.checked) {
    body.style.backgroundColor = '#646464';
    container.style.backgroundColor = '#646464';
  } else {
    body.style.backgroundColor = 'white';
    container.style.backgroundColor = 'white';
  }
});
