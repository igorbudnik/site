import React from "react";
import './modal.css'


const Modal = ({active, set, text1, text2, text3, url}) => {
    if (text2) {
    return (
    <div className={active ? 'modal_1 active' : 'modal_1'} onClick={() => set(false)}>
        <div className="modal_content_1" onClick={e => e.stopPropagation()}>
        <img src = {url} width={700} height={400}/>
            <span className="sp_text">{text1}</span>
            <span className="sp_text">{text2}</span>
            <span className="sp_text">{text3}</span>
        <div className="butt_modal">
            <button onClick={() => set(false)}>Close</button>
        </div>
        
        </div>

    </div>
    )}
    else {
    return (
        <div className={active ? 'modal_1 active' : 'modal_1'} onClick={() => set(false)}>
            <div className="modal_content_1" onClick={e => e.stopPropagation()}>
            <img src = {url} width={700} height={400}/>
                <span className="sp_text">{text1}</span>
            <div className="butt_modal">
                <button onClick={() => set(false)}>Close</button>
            </div>
            
            </div>
    
        </div>
        )
    }
}
export default Modal