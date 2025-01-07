import React from 'react'
import Hero from '../Component/Hero/Hero'
import Trending from '../Component/Trending/Trending'
import VContainer from '../Component/VContainer/video'
import Crypto from '../Component/Crypto/Crypto'
import Contact from '../Component/Contact/Contact'
import Navbar from '../Component/Navbar/Navbar'

const Home = () => {

  return (
    <div>
      <Navbar />
      <Hero  />
      <Trending />
      <VContainer />
      <Crypto />
      <Contact />
    </div>
  )
}

export default Home
