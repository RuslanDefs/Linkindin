const Modal = () => {
  if (document.querySelector('.overlay')) {
    function bindModal(triggerSelector, modalSelector) {
      const triger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector);
      triger.forEach(item => {
        item.addEventListener('click', (e) => {
          if (e.target) {
            e.preventDefault();
          }
          modal.classList.add('popup-active');
        });
      });
      modal.addEventListener('click', (e) => {
        if (e.target.contains(modal)) {
          modal.classList.remove('popup-active'),
          document.body.style.overflow = 'visible';
          if (document.querySelector('.print-info')) {
            deleteProcucts(
              modal.querySelectorAll('.print-info'),
            );
          }
        }
      });
    }
    bindModal('.triger-file', '.overlay-file')
  }
}
export default Modal;