import React from 'react';
import './people.css'
import Map from './people_func_modal'
// import { useState } from 'react';
// import markers from '../places_new.json'

class Dogs extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {voland: props.list.slice(0, 5).map((x, i) => {{ return (<div key = {x + 1} id = 'books' className = {'books'+`${i + 1}`} >
    <img width={400} height={600}></img>
    <Map desc = {props.list.slice(0, 5)} ind = {i}/>
    </div>)}}),
    mim: props.list.slice(5, 7).map((x, i) => {{ return (<div key = {x + 5} id = 'books' className = {'books'+`${i + 7}`} >
    <img style={{left: '290px'}} width={400} height={600}></img>
    <Map desc = {props.list.slice(5, 7)} ind = {i}/>
    </div>)}}),
    mosc: props.list.slice(7, 15).map((x, i) => {{ return (<div key = {x + 8} id = 'books' className = {'books'+`${i + 9}`} >
    <img width={400} height={600}></img>
    <Map desc = {props.list.slice(7, 15)} ind = {i}/>
    </div>)}}),
    ier: props.list.slice(15, 22).map((x, i) => {{ return (<div key = {x + 8} id = 'books' className = {'books'+`${i + 18}`} >
    <img width={400} height={600}></img>
    <Map desc = {props.list.slice(15, 22)} ind = {i}/>
    </div>)}})
  };
  }

  render() {
    return (
      <div>
      <div key={6} className='people' id = 'frame_set'>
        <h1 className='h_1'>Сетевой график по пероснажам романа</h1>
      <iframe className='frame' width="1400" height="600"  src='https://voyant-tools.org/tool/Cirrus/?visible=25&corpus=e409ac9a4e38a9b9e54661c356cb0f27' allowFullScreen></iframe>
      <h1 className='h_1'>Сетевой график по пероснажам романа</h1>
      </div>
       <div key={5} className='people' id = 'frame_set'>
        
      <iframe className='frame'
        width="1400"
        height="800"
        src="https://ouestware.gitlab.io/retina/beta/#/embed/?url=https%3A%2F%2Fgist.githubusercontent.com%2FIgorBudnik%2Fead433289bc186313f07c39c5bf32a63%2Fraw%2Fc6e7eb36d019b4cbf4f3268311f228cac0a08bde%2Fnetwork-b350786f-534.gexf&n=%D0%9A%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D0%B5%D0%B2"
        frameBorder=""
        title="Retina"
        allowFullScreen
      ></iframe>
      <h1 className='h_1'>Персонажи романа</h1>
      </div>
      
      <div key={1} className='people'>
      
      <h1 className='h_peop'>Воланд и свита</h1>
        {this.state.voland}
      
      </div>
      <div key={2} className='people'>
        <h1 id = 'mim_left' className='h_peop' style={{left: '0px'}}>Мастер и Маргарита</h1>
      {this.state.mim}
     
    </div>
    <div key={3} className='people'>
    <h1 className='h_peop'>Москвичи</h1>
      {this.state.mosc}
    </div>
    <div key={4} className='people'>
    <h1 className='h_peop'>Ершалаим</h1>
      {this.state.ier}
    </div>
      </div>
    );
  }
}

export default Dogs
