import React, { useState } from 'react'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className='navbar'>
      <picture>
        <source srcSet='/LL_logo_m.png' className='logo-m' media='(max-width: 640px)'/>
        <img src='/LL_Logo.jpg' alt='Little Lemon Logo'/>
      </picture>
      
      <div className='navLinks'>
        <a href='/'>Home</a>
        <a href='/'>Menu</a>
        <a href='/table-reservation'>Reservations</a>
      </div>
      <div className='navLinksMobile'>
        <button onClick={(e) => setShowMobileMenu(!showMobileMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={showMobileMenu ? "M6 18 18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>
        {showMobileMenu &&
        <div className='navLinksMobileDD'>
          <a href='/'>Home</a>
          <a href='/'>Menu</a>
          <a href='/table-reservation'>Reservations</a>
        </div>}
      </div>
    </nav>
  )
}

export default Navbar