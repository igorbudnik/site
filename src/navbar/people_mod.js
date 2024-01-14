import React from "react";
import './people.css'


const Modal = ({active, set, text1, text2}) => {

    return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => set(false)}>
        <div className="modal_content" onClick={e => e.stopPropagation()}>
        <div>
            <p>{text2}</p>
            <p>{text1}</p>
        </div>
        <div className="butt_people">
            <button onClick={() => set(false) }><b>Закрыть</b></button>
        </div>
        </div>

    </div>
    )}

export default Modal