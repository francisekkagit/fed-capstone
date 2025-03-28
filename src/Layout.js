import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/layout-specific/Navbar";
import Footer from "./components/layout-specific/Footer";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout