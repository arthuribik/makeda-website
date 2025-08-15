import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const heroImages = [
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
    'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Slider */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt="Cinematic background"
                className="w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Nobody remembers the bland.
            <br />
            <span className="text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              They remember the <span className="text-white border-b-2 border-white line-height-1">story</span> 
              that felt like it was made just for them.
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
            At Makeda, we make brand films, documentaries, and original series that carry cultural depth and
            cinematic precision, the kind of work that lives in conversation long after the credits roll.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('start-journey')}
              className="btn-primary bg-white text-black hover:bg-gray-100 min-w-[200px]"
            >
              Begin the Conversation
            </button>
            <button 
              onClick={() => scrollToSection('what-we-make')}
              className="btn-secondary border-black text-white bg-black hover:bg-white hover:text-black min-w-[200px]"
            >
              See the Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
