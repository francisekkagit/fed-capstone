import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const specials = [
    {
      name: "Greek Salad",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "12.99",
      src: "/special1.jpg"
    },
    {
      name: "Bruchetta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "5.99",
      src: "/special2.jpg"
    },
    {
      name: "Pasta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "24.99",
      src: "/special3.jpg"
    },
  ]
  return (
    <>
        <Helmet>
            <title>Home | Little Lemon</title>
            <meta name='description' content='Little Lemon Restaurant Homepage'/>
        </Helmet>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

          <div className='home-hero'>
            <div className='home-hero-container'>
              <div className='home-hero-text'>
                <div>
                  <h1>Little Lemon</h1>
                  <h2>Chicago</h2>
                </div>
                <p style={{maxWidth:"260px", fontSize:"20px"}}>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <a href='/table-reservation' className='primary-btn'>Reserve a Table</a>
              </div>
              <img src='/hero_pic.jpg' alt='Hero_Pic'/>
            </div>
          </div>

          <div className='home-specials'>
            <div className='home-specials-1'>
              <h2>This weeks specials!</h2>
              <a href='/' className='primary-btn'>Order Online</a>
            </div>
            <div className='home-specials-2'>
              {specials.map(special => (
                <div key={special.name} className='home-specials-2-card'>
                  <img src={special.src} alt={special.name}/>
                  <div className='home-specials-2-card-text'>
                    <div className='home-specials-2-card-heading'>
                      <p style={{fontWeight:"bold"}}>{special.name}</p>
                      <p style={{color:"#ff7400"}}>${special.price}</p>
                    </div>
                    <p>{special.description}</p>
                    <p style={{marginTop:"24px"}}>Order a delivery</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  )
}

export default Home