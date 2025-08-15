import { useState } from 'react'

const TwoPaths = () => {
  const [activeTab, setActiveTab] = useState('brands')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Two Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your journey with Makeda
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('brands')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'brands'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              Brands & Agencies
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'partners'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              Partners & Investors
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'brands' && (
            <div className="animate-fade-in">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-6">
                      Your audience is scrolling through 6,000 ads a day.
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      They'll skip you… unless you stop them with a story they feel in their bones.
                    </p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      We craft cinematic campaigns and brand films with one sharp creative lead from start to finish.
                    </p>
                    <button 
                      onClick={() => scrollToSection('start-journey')}
                      className="btn-primary"
                    >
                      Brief Us (20-min call)
                    </button>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                      alt="Brand collaboration"
                      className="w-full h-80 object-cover rounded-lg grayscale"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'partners' && (
            <div className="animate-fade-in">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-6">
                      The world is full of ideas. Only a few are worth sharing the screen.
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      We develop select in-house formats and series; ready for co-production, co-development, or
                      licensing.
                    </p>
                    <button 
                      onClick={() => scrollToSection('partnerships')}
                      className="btn-primary"
                    >
                      Discuss Partnerships
                    </button>
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                      alt="Partnership collaboration"
                      className="w-full h-80 object-cover rounded-lg grayscale"
                    />
                    <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TwoPaths
