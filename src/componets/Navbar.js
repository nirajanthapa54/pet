import React from 'react';

import { CiSearch } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const Navbar = () => {


  
  return (


    <ul className="nav">
    <li className="nav-item">
              <NavLink className="nav-link" style={{'color':'black','--hover-color':'blue','--hover-opacity':0.5}} exact to="/home">
             YOUR LOGO IS HERE
              </NavLink>
            </li>
  
  <li className="nav-item">
              <NavLink className="nav-link" style={{color:'black'}} exact to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{color:'black'}} exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  style={{color:'black'}}exact to="/service">
               Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{color:'black'}}  exact to="/breed">
            Breed
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{color:'black'}}  exact to="/shop">
               shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{color:'black'}}  exact to="/gallery">
              Gallery
              </NavLink>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
               
         <li className='nav-item'> 
         <div className='input-wrapper'>
          
          <input type="text" placeholder='Search .....' className='search' 
          />
          <span className='box'>
          <CiSearch id="search-icon"/></span>
           </div>
            </li>
         
</ul>




  );
 
}

export default Navbar;