import React from 'react';
import './Navbar.css'
const Navbar = () => {
    function myFunction() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return (
        <div class="topnav" id="myTopnav">
    
  <a href="" style={{color:'#1bd54d',fontWeight:'bold',fontSize:'2rem'}}>AIRCNC</a>
  <div class="nav1">
    <a href="#home" class="">Host your home</a>
    <a href="#news">Host your experience</a>
    <a href="#contact">help</a>
    <a href="#about">Log in</a>
    <a href="" style={{background: 'linear-gradient(90deg, rgba(27,213,77,1) 16%, rgba(27,213,77,1) 83%, rgba(75,214,122,0.5606617647058824) 100%)'}}>Sign up</a>
   
  </div>
  <div class="line"></div>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
 


</div>
    );
};

export default Navbar;