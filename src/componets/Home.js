import 'react-slideshow-image/dist/styles.css';
import './Column.css';

import React from 'react';

import { CgChevronRight } from 'react-icons/cg';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Slide } from 'react-slideshow-image';

import About from './About';
import Collection from './Collection';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '750px',
  width:'100%'
}
const slideImages = [
  {
    url: 'image/header.jpg',
    caption: 'we provide tthe best care to our furry freinds'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

const Home = () => {
    return (

<div><div className="slide-container">
      <center>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span className='spanstyle'>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
        </center>
      </div>



      <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
          <img src ="image/column.png" alt="images" height={600} width={700} className="card-media"/>
          </div>
       
          {/* product dAta  */}
          <div className="product-data">
            <h1 style={{color:'black'}}>About Us</h1>
         
        
            <p className="product-data-title">
          
             Pet House & Animal Clinic was established with moto to provide qualitaive and afordable animal 
             health care service to your doorstep.
            </p>
          <br/><br/>
            <div>
            <p className='para'> <IoMdCheckmarkCircleOutline className='check'/> Comprehensive</p>

            <p className='para'><IoMdCheckmarkCircleOutline className='check'/> Professional</p>
            <p className='para'><IoMdCheckmarkCircleOutline className='check'/> Compassionate veterinary service</p>
            </div>
            <br/>
         
            <button type="button" className="button">Contact &nbsp; &nbsp; &nbsp; <CgChevronRight className='arrows'/></button>
          </div>
        </div>

         <About/>

<Collection/>
        </div>
    )
}
export default Home;