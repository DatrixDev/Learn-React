import { useState } from "react";
import "./Modal.scss"
function Modal() {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <>
            <button onClick={handleShowModal}>Click</button>
            {showModal && (
                <div className="modal">
                    <div className="modal__body">
                        <button className=".modal__close" onClick={handleCloseModal}>
                            Close
                        </button>
                        <div className="modal__content">
                            Nội dung...
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
export default Modal;