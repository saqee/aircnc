import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {createPost} from '../../actions/posts'
import  './Book.css'
const Book = () => {
    const [postData,setpostData]=useState({
        title:'',
        price:0,
        location:''
    })

    const dispatch=useDispatch();
    const handleSubmit=()=>{
        dispatch(createPost(postData))
    }
    return (
        <div class="row">
        <div class="col-75">
          <div class="container">
            <form action="">
            
              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                  <label for="email"><i class="fa fa-envelope"></i> Email</label>
                  <input type="text" id="email" name="email" placeholder="john@example.com"/>
                  <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                  <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                  <label for="city"><i class="fa fa-institution"></i> City</label>
                  <input type="text" id="city" name="city" placeholder="New York"/>
      
                  <div class="row">
                    <div class="col-50">
                      <label for="state">State</label>
                      <input type="text" id="state" name="state" placeholder="NY"/>
                    </div>
                    <div class="col-50">
                      <label for="zip">Zip</label>
                      <input type="text" id="zip" name="zip" placeholder="10001"/>
                    </div>
                  </div>
                </div>
      
                <div class="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div class="icon-container">
                    <i class="fa fa-cc-visa" style={{"color":"navy"}}></i>
                    <i class="fa fa-cc-amex" style={{"color":"blue"}}></i>
                    <i class="fa fa-cc-mastercard" style={{"color":"red"}}></i>
                    <i class="fa fa-cc-discover" style={{"color":"orange"}}></i>
                  </div>
                  <label for="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                  <label for="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                  <label for="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
                  <div class="row">
                    <div class="col-50">
                      <label for="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                    </div>
                    <div class="col-50">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="352"/>
                    </div>
                  </div>
                </div>
                
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" class="btn"/>
            </form>
          </div>
        </div>
        <div class="col-25"><hr/>
            <h1>Booking Information</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
              <input type="text" onChange={(e)=>setpostData({...postData,
                  title:e.target.value
              })} placeholder="Title"/>
                          <label htmlFor="">Price</label>
              <input type="text" onChange={(e)=>setpostData({...postData,
                  price:e.target.value
              })} placeholder="Price"/>
            <label htmlFor="">Location</label>
<input type="text" onChange={(e)=>setpostData({...postData,
                  location:e.target.value
              })} placeholder="Location"/>
               <button>Submit</button>
            </form>
        </div>
      </div>


        
        
    );
};

export default Book;