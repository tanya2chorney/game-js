const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.backdrop'),
};

function openModal() {
  document.body.classList.add('show-modal');
}

refs.openModalBtn.addEventListener('click', openModal);

function closeModal() {
  document.body.classList.remove('show-modal');
}

function closeBackdrop(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

refs.closeModalBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', closeBackdrop);
