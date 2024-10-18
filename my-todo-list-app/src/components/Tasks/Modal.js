import { React } from "react";
import './Modal.scss';
import closeIcon from './images/closeIcon.svg';

const Modal = ({ closeModal, children }) => {
    return (
        <section className="modal__overlay">
            <div className="modal__content">
                <div className="header__modal">
                    <p>Añadir tarea</p>
                    <button className="close__modal-x" onClick={closeModal}>
                        <img src={closeIcon} alt="icono cerrar" />
                    </button>
                </div>
                {children}
                <button className="modal__button-cancel" onClick={closeModal}>
                    Cancelar
                </button>
            </div>
        </section>
    );
};

export default Modal; 