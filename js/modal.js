(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.modal.addEventListener('click', handleBackdropClick);

  function handleEscapePress(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) closeModal();
  }

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscapePress);
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
    document.removeEventListener('keydown', handleEscapePress);
  }
})();
