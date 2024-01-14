import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Map from './Map'
import Map_mim from './Map_mim'
import Navbar from './navbar/navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dogs from './navbar/people'
import Time from './navbar/time'
import markers from './places_moscow.json'
import markers_mim from './places_mim_in.json'
import people from './heroes.json'
import Accord from './accord/accord' 


class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.buttons_mim = markers_mim.map((x, i) => {
      return (
      <li>
      <button className = 'but_list' key = {i} onClick={() => this.tick_mim(x.geocode)}><b>{x.text}</b></button>
      </li>)
      
    })

    this.buttons = markers.map((x, i) => {
      return (
      <li>
      <button className = 'but_list' key = {i} onClick={() => this.tick(x.geocode)}><b>{x.text}</b></button>
      </li>)
      
    })
    this.state = {attr: markers[22].geocode, zoom: 13, err: true};
  }

  tick(new_attr) {
    console.log(new_attr)

    this.setState({
      attr: new_attr,
      zoom: 17,
      err: true
  })
  }

  tick_mim(new_attr) {
    console.log(new_attr)
    if (new_attr === 'mim') {
      this.setState({
        attr: [55.75295276763922, 37.60122557079774],
        zoom: 14,
        err: false,
    })
    }
    else {
    this.setState({
      attr: new_attr,
      zoom: 17,
      err: false,
  })
}
}

  zoom_15(new_attr) {
    console.log(new_attr)
    this.setState({
    err: true,
    })
    if (new_attr == 55.80069523833444, 37.615803007314916) {
      this.setState({
        attr: new_attr,
        zoom: 13,
    })
    }
    else {
    this.setState({
      attr: new_attr,
      zoom: 14,
  })
}
  }



  render() {
    console.log(this.state.attr);
    console.log(this.state.zoom);
    if (this.state.err === true) {
    return (
      <div key = {1} className='all'>
      <Accord list = {this.buttons}/>
      <div className='container'>
        <div key = {this.state.attr[0]} id ='container_map'>
        <Map x = {this.state.attr} new_zoom = {this.state.zoom}/>
        </div>
        <div id ='container_butt'>
          <h1 className='distr'>Районы Москвы</h1>
          <button className= 'walk_butt' onClick={() => this.zoom_15([55.75295276763922, 37.60122557079774])}><b>Центральный район</b></button>
          <button className= 'walk_butt' onClick={() => this.zoom_15([55.72255441671291, 37.53256191812707])}><b>МГУ</b></button>
          <button className= 'walk_butt' onClick={() => this.zoom_15([55.80069523833444, 37.615803007314916])}><b>Марьина Роща</b></button>
          <h1 style={{top: '520px'}} className='distr'>МиМ</h1>
          <button className= 'walk_butt1' onClick={() => this.tick_mim('mim')}><b>Места из романа</b></button>
        </div> 
      </div>
      </div>
    );
  }
  else {
    return (
      <div key = {2} className='all'>
      <Accord list = {this.buttons_mim}/>
      <div className='container'>
        <div key = {this.state.attr[0]} id ='container_map'>
        <Map_mim x = {this.state.attr} new_zoom = {this.state.zoom}/>
        </div>
        <div id ='container_butt'>
          <h1 className='distr'>Районы Москвы</h1>
          <button className= 'walk_butt' onClick={() => this.zoom_15([55.75295276763922, 37.60122557079774])}><b>Центральный район</b></button>
          <button className= 'walk_butt' onClick={() => this.zoom_15([55.72255441671291, 37.53256191812707])}><b>МГУ</b></button>
          <button className= 'walk_butt' onClick={() => this.zoom_15([55.80069523833444, 37.615803007314916])}><b>Марьина Роща</b></button>
          <h1 style={{top: '520px'}} className='distr'>МиМ</h1>
          <button className= 'walk_butt1' onClick={() => this.tick_mim('mim')}><b>Места из романа</b></button>
        </div> 
      </div>
      </div>
    );
  }
  }
}




const header = ReactDOM.createRoot(document.getElementById('head'));
header.render(
  <React.StrictMode>
    <div id ='center'>
    <div className="walk">
    <h1>Прогулка по М</h1>
    </div>
    <div className="mosc_mim">
    <h1 className="moscow">оскве</h1>
    <h1 className="mim">астеру и Маргарите</h1>
    </div>
    </div>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path ="/people" element={<Dogs list = {people}/>} />
      <Route path ="/timelines" element={<Time />} />
      <Route path ="/" element={<Clock/>} />
      </Routes>
      </BrowserRouter>
      {/* {/* <Clock/> */}
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
