import React from 'react';
import './Main.css'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const Main = () => {
  
    return (
       
<div class="maindiv">
<div className="sidebar">
    <p style={{fontWeight:'bold'}}>Where do you want to go</p>
    <form action="">
    <TextField
          id="standard-full-width"
          label="Location"
          placeholder="Add City"
          margin="normal"
          
          InputLabelProps={{
            shrink: true,
          }}
          style={{width:'300px',marginLeft:"10px",fontSize:"2rem", border:"1px solid #ddd" ,boxShadow:'10px 10px 8px white'}}
        />
        <p>Choose a date</p>
        <div style={{display:'flex' ,width:'300px',marginLeft:'10px' , border:"1px solid #ddd" ,boxShadow:'10px 10px 8px white'}}>
            <input type="date" style={{width:'100%' ,height:'60px' ,border:'none'}} name="" id=""/> 
           <span style={{color:'red', marginTop:'20px',marginLeft:'5px', marginRight:'5px'}}>To</span> <input type="date" style={{width:'100%',border:'none' ,height:'60px'}} name="" id=""/>
        </div>
      <TextField
          id="standard-full-width"
         
          placeholder="Guest"
          label="2 Adults 1 Child"
          margin="normal"
          
          InputLabelProps={{
            shrink: true,
          }}
          style={{width:'300px',marginLeft:"10px", border:"1px solid #ddd" ,boxShadow:'10px 10px 8px white'}}
        />
        <div style={{  height:'200px',boxShadow:'10px 10px 8px white'}}>

        
        <div style={{display:'flex' ,justifyContent:'space-between', marginLeft:'10px' , border:"1px solid #ddd" ,boxShadow:'10px 10px 8px white'}}>
        <p>Adults</p>
         
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
        </div>
        <div style={{display:'flex' ,justifyContent:'space-between', marginLeft:'10px' , border:"1px solid #ddd" ,boxShadow:'10px 10px 8px white'}}>
        <p>Babies</p>
         
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
        </div>
        <div style={{display:'flex' ,justifyContent:'space-between', marginLeft:'10px' , border:"1px solid #ddd" ,boxShadow:'10px 10px 8px white'}}>
        <p>Childs</p>
         
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
        </div>
        </div>
    </form>
    <a href="/mappage" style={{float:"right",border:'1px solid #1bd54d',fontSize:'20px', marginBottom:'15px',textDecoration:'none',color:'#1bd54d'}}>Apply</a><br/>
    <button style={{background: 'linear-gradient(90deg, rgba(27,213,77,1) 16%, rgba(27,213,77,1) 83%, rgba(75,214,122,0.5606617647058824) 100%)', width:'250px',height:'50px',borderRadius:'10px', marginTop:'10px'}}>Search</button>
</div>
<h1 style={{placeItems:"flex-start", marginLeft:"20px", display:"flex", marginTop: "80px"}}>Experience</h1>
<div class="teamContainer">
      
<div class="teamColumn">

<div class="teamCard">

<img src="images/201916769776917542.jpg"/>
<div class="personContainer">
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
</div>
<div class="teamColumn">
<div class="teamCard">
<img src="images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg"/>
<div class="personContainer">
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
</div>
<div class="teamColumn">
<div class="teamCard">
<img src="images/photo-1522708323590-d24dbb6b0267.jpeg"/>
<div class="personContainer">
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
</div>
<div class="teamColumn">
    <div class="teamCard">
    <img src="images/photo-1522708323590-d24dbb6b0267.jpeg"/>
    <div class="personContainer">
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
    </div>
</div>
<h1 style={{placeItems:"flex-start", marginLeft:"20px", display:"flex", marginTop: "80px"}}>Homes</h1>
<div class="teamContainer">
    
<div class="teamColumn">
<div class="teamCard">
<img src="images/201916769776917542.jpg" />
<div class="personContainer">
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
</div>
<div class="teamColumn">
<div class="teamCard">
<img src="images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg"/>
<div class="personContainer">
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
</div>
<div class="teamColumn">
<div class="teamCard">
<img src="images/photo-1522708323590-d24dbb6b0267.jpeg"/>
<div class="personContainer">
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
</div>
<div class="teamColumn">
    <div class="teamCard">
    <img src="images/photo-1522708323590-d24dbb6b0267.jpeg"/>
    <div class="personContainer">
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
    </div>
</div>
</div>






    


    );
};

export default Main;