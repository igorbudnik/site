import '../styles.css'
import 'leaflet/dist/leaflet.css'
import Modal from './people_mod'
import { useState } from 'react';
  
function Map({ind, desc}) {
    const [modalActive, setActive] = useState(false)
    if (desc[ind].name === 'Мастер' || desc[ind].name === 'Маргарита') {
        console.log(desc[ind]);
    return (
        <div className="container_map">
            <button className = 'pops_butt' style={{left: '300px'}} onClick={() => setActive(true) & localStorage.setItem('desc', desc[ind].desc) & localStorage.setItem('summ', desc[ind].summ)}><b>{desc[ind].name}</b></button>
            <Modal active = {modalActive} set = {setActive} text1 = {localStorage.getItem('desc')} text2 = {localStorage.getItem('summ')}/>
        </div>  
)
    }
    else {
    return (
        <div className="container_map">
            <button className = 'pops_butt' style={{left: '40px'}} onClick={() => setActive(true) & localStorage.setItem('desc', desc[ind].desc) & localStorage.setItem('summ', desc[ind].summ)}><b>{desc[ind].name}</b></button>
            <Modal active = {modalActive} set = {setActive} text1 = {localStorage.getItem('desc')} text2 = {localStorage.getItem('summ')}/>
        </div>  
)
    }
}
export default Map

// function Map({name, desc}) {
//     const [modalActive, setActive] = useState(false)
//     return (
//         <div className="container_map">
//             <button className = 'pop_butt' onClick={() => setActive(true) & localStorage.setItem('text_pers', desc)}><b>{name}</b></button>
//             <Modal active = {modalActive} set = {setActive} text1 = {localStorage.getItem('text_pers')}/>
//         </div>  
// )

// }
// export default Map