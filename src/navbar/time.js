import React from 'react';
import './time.css'
// import { WebView } from 'react-native-webview'


const Time = () =>{
  return (
    <div className='timeline'>
        <div key = {1} className='lines'>
            <center><h1 className='name_line'>Таймлайн Москвы в романе "Мастер и Маргарита"</h1></center>
            <iframe className='frame' width="1500" height="600" src="https://time.graphics/embed?v=1&id=872311" frameborder="0" allowFullScreen></iframe>
            
        </div>
        <br></br>
        <div key = {2} className='lines'>
            <center><h1 className='name_line'>Таймлайн Ершалаима в романе "Мастер и Маргарита"</h1></center>
            <iframe className='frame' width="1500" height="600" src="https://time.graphics/embed?v=1&id=872316" frameborder="0" allowFullScreen></iframe>
        </div>

    </div>
  );
}
export default Time;