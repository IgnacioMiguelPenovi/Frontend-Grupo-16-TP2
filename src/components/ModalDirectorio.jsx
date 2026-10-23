import React from 'react';
import BuscadorPersonaje from './BuscadorPersonaje';

export default function ModalDirectorio({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
            {/* Detenemos la propagación para que al hacer clic dentro de la tarjeta no se cierre */}
            <div className="modal-card-springfield" onClick={(e) =>
                e.stopPropagation()}>
                <button
                    type="button"
                    className="btn-cerrar-modal"
                    onClick={onClose}
                    aria-label="Cerrar directorio"
                >
                    ✖
                </button>
                {/* Tu buscador con el JSON y la API */}
                <BuscadorPersonaje />
            </div>
        </div>
    );
}