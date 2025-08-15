import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt="MAKEDA"
                className={`h-8 md:h-10 transition-all duration-300 ${
                  isScrolled ? 'filter invert' : 'filter brightness-0 invert'
                }`}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('what-we-make')}
              className="text-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              What We Make
            </button>
            <button 
              onClick={() => scrollToSection('method')}
              className="text-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              Method
            </button>
            <button 
              onClick={() => scrollToSection('partnerships')}
              className="text-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              Partnerships
            </button>
            <button 
              onClick={() => scrollToSection('start-journey')}
              className="btn-primary"
            >
              Start Journey
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('what-we-make')}
              className="block w-full text-left text-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              What We Make
            </button>
            <button 
              onClick={() => scrollToSection('method')}
              className="block w-full text-left text-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              Method
            </button>
            <button 
              onClick={() => scrollToSection('partnerships')}
              className="block w-full text-left text-black hover:text-gray-600 transition-colors duration-300 font-medium"
            >
              Partnerships
            </button>
            <button 
              onClick={() => scrollToSection('start-journey')}
              className="btn-primary w-full"
            >
              Start Journey
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
