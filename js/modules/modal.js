export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="abrir"]');
  const btnClose = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function closeModal(event) {
    event.preventDefault();
    containerModal.classList.remove('ativo');
  }

  function exitClickToClose(event) {
    if (event.target === this) {
      closeModal(event);
    }
  }

  if (btnOpen && btnClose && containerModal) {
    btnOpen.addEventListener('click', toggleModal);
    btnClose.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', exitClickToClose);
  }
}
