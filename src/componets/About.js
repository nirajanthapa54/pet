import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper>
   
<br/><br/><br/><br/><br/><br/><br/>
<div className='title'>


 <center><h1>Our Services</h1></center>
</div>
<div className='para'>
  <h3>We provide a Wide Range of product and Services for pet such as food,toy,grooming
  supplies and veterinary care<br/>
we aim to meet of pet owners and ensure the health and happiness of their furry freinds.</h3>

</div>

  
<div className="container">
<div className="grid grid-three-column">
          <div className="services-1">
            <div className='images'>
            <img src='image/dog1.jpg' className='image'  height={300} width={400}
              alt="acc"/>
              </div> 
              <div className='title'>
              <h3>Dog Cat treatment</h3>
              </div>
             <p>some tablent are used to protect underscore to peak uunderstand.</p>
   
        <button type="button" class="btn btn-dark">View More</button>
          </div>

          <div className="services-2">
          <div className='images'>
            <img src='image/dog2.jpg' className='image'  height={300} width={400}
              alt="acc"/>
              </div> 
              <div className='title'>
              <h3>Dog Cat treatment</h3>
              </div>
             <p>some tablent are used to protect underscore to peak uunderstand.</p>
       
        <button type="button" class="btn btn-dark">View More</button>
            </div>

         
          <div className="services-3">
          <div className='images'>
            <img src='image/dog3.jpg' className='image'  height={300} width={400}
              alt="acc"/>
              </div> 
              <div className='title'>
              <h3>Dog Cat treatment</h3>
              </div>
             <p>some tablent are used to protect underscore to peak uunderstand.</p>
       
        <button type="button" class="btn btn-dark">View More</button>
          </div>
        </div>
        </div>
        <br/>
<br/>
<div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div className='images'>
            <img src='image/dog4.jpg' className='image'  height={300} width={400}
              alt="acc"/>
              </div> 
              <div className='title'>
              <h3>Dog Cat treatment</h3>
              </div>
             <p>our goal is to ensure pet welfare through home treatment and promt client response</p>
        
        <button type="button" class="btn btn-dark">View More</button>
          </div>

          <div className="services-2">
          <div className='images'>
            <img src='image/dog5.jpg' className='image'  height={300} width={400}
              alt="acc"/>
              </div> 
              <div className='title'>
              <h3>Dog Cat treatment</h3>
              </div>
             <p>some tablent are used to protect underscore to peak uunderstand.</p>
     
        <button type="button" class="btn btn-dark">View More</button>
            </div>

          <div className="services-3">
          <div className='images'>
            <img src='image/dog6.jpg' className='image'  height={300} width={400}
              alt="acc"/>
              </div> 
              <div className='title'>
              <h3>Dog Cat treatment</h3>
              </div>
             <p>some tablent are used to protect underscore to peak uunderstand.</p>
      
        <button type="button" class="btn btn-dark">View More</button>
          </div>
     
          
        </div>
<br/>
</div>


     
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;
  .grid {
    gap: 4rem;
  
  }
  .images{
    margin:0;
    padding:0;
  }
  .button2


{
	
	background-color: green;
	color: white;
	padding: 10px 15px;
	font-size: 15px;
	border-radius: 15px;
	text-decoration:none;
	
}

.grid grid-three-column
{
gap:2rem;
}
.button2:hover
{
	background: blue;
}
  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  background-color:#f2f2f2 ;
    text-align: center;
    border-radius: 2rem;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }
  .services-2 {
  
    background-color:#f2f2f2 ;
 
    
  }
  .title{
    font-size:bold;
  }
    .services-colum-2 {
      background: #E1D9D1 ;
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
     
      }
    
      .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
  p {
    font-size:20px;
    color:black;
    font-family:Nunito family;
      }

  
`;
export default About;