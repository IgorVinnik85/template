import css from './ModalNotify.module.css';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const ModalNotify = () => {
    return createPortal(<div className={css.modal}>Login Successful</div>,
        modalRoot
    );
};

export default ModalNotify;
