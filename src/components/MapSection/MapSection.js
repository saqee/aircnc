import React from 'react';
import  './MapSection.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const MapSection = () => {
    const position = [51.505, -0.09]
    return (
        <div>
            
            <div class="topnav" id="myTopnav">
    
    <a href="" style={{color:'#1bd54d',fontWeight:'bold',fontSize:'2rem'}}>AIRCNC</a>
    <div class="nav1">
      <a href="#contact">help</a>
      <a href="#about">Log in</a>
      <a href="" style={{background: 'linear-gradient(90deg, rgba(27,213,77,1) 16%, rgba(27,213,77,1) 83%, rgba(75,214,122,0.5606617647058824) 100%)'}}>Sign up</a>
     
    </div>
    <div class="line"></div>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
  
  <div class="teamContainer1">
      
<div class="teamColumn1">

<div class="teamCard1">
<p>252 stays 13-17 guest</p>
 <h2>Stay in Dhaka Division</h2>
<div>
    <button>Cancellation</button>
    <button>Price</button>
    <button>Ac</button>
    <button>Phone Call</button>
</div>
</div>
<div class="teamCard1">


<img src="images/201916769776917542.jpg"/>
</div>
<div class="personContainer1" >
 <p>NightLife-Newyork</p>
 <h3>Discover NightCLub</h3>
 <p>3$ per Night</p>
 <a href="/book">Book</a>
 <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
</div>

<div class="teamCard1">

<img src="images/201916769776917542.jpg"/>
</div>
<div class="personContainer1" >
 <p>NightLife-Newyork</p>
 <h3>Discover NightCLub</h3>
 <p>3$ per Night</p>
 <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
</div>

<div class="teamCard1">

<img src="images/201916769776917542.jpg"/>
</div>
<div class="personContainer1" >
 <p>NightLife-Newyork</p>
 <h3>Discover NightCLub</h3>
 <p>3$ per Night</p>
 <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
</div>

</div>





<div className="mapsec">

<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</div>

</div>    


        </div>
    );
};

export default MapSection;