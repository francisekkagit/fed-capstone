import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
        <Helmet>
            <title>Home | Little Lemon</title>
            <meta name='description' content='Little Lemon Restaurant Homepage'/>
        </Helmet>
        <div>Home</div>
    </>
  )
}

export default Home