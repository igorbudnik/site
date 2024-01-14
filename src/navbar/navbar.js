import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'


const Navbar = () =>{
  return (
  <div className='navbar'>

      <Link className='inner' to='/'><span className='inner_text'>Карта</span>
        </Link>


      <Link className='inner' to="/people"><span className='inner_text'>Персонажи</span></Link>


      <Link  className='inner' to="/timelines"><span className='inner_text'>Таймлайны</span></Link>

  </div>
  );
}
export default Navbar;