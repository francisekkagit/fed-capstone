import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar/>
      <main style={{width:"100%"}}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout