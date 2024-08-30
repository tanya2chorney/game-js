const linkItems = document.querySelectorAll('.link-item');

linkItems.forEach(linkItem => {
  linkItem.addEventListener('click', function (event) {
    event.preventDefault();

    const dropdown = this.nextElementSibling;

    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  });
});

document.addEventListener('click', function (event) {
  if (!event.target.closest('.list_item')) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.style.display = 'none';
    });
  }
});
