import HeroSection from '@/_components/HeroSection'
import React from 'react'
import About from '@/_components/About'
import College from '@/_components/College'
import Venue from '@/_components/Venue'
const Home = () => {
  return (
    <div>
        <HeroSection />
        <About />
        <College />
        <Venue />
    </div>
  )
}

export default Home