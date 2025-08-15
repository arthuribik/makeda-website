import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import TwoPaths from './components/TwoPaths'
import WhatWeMake from './components/WhatWeMake'
import MakedaMethod from './components/MakedaMethod'
import Outcomes from './components/Outcomes'
import IpPartnerships from './components/IpPartnerships'
import TrustedBy from './components/TrustedBy'
import StartJourney from './components/StartJourney'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import logo from './assets/logo.png'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <img
            src={logo}
            alt="MAKEDA"
            className="h-16 mx-auto mb-4 filter brightness-0"
          />
          <div className="w-16 h-1 bg-black mx-auto animate-pulse"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TwoPaths />
      <WhatWeMake />
      <MakedaMethod />
      <Outcomes />
      <IpPartnerships />
      <TrustedBy />
      <StartJourney />
      <Footer />
    </div>
  )
}

export default App
