import { React } from "react";
import './Modal.scss';

const Modal = ({ closeModal, Children }) => {
    return (
        <section className="modal-overlay">
            <div className="modal-content">
                <div className="header__modal">
                    <p>Añadir tarea</p>
                    <button className="close-modal-x" onClick={closeModal}>X</button>
                    {Children}
                </div>
                <form action="#" method="POST">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" required placeholder="Nombre"/>

                    <label >Descripción</label>
                    <input type="text" id="text" name="text" required placeholder="descripción"/>
                    <button className="modal__button-cancel" type="submit">Cancelar</button>
                    <button className="modal__button-add" type="submit">Guardar</button>
                    {/* añadir localstorage */}
                </form>
            </div>
        </section>
    );
};

export default Modal; 