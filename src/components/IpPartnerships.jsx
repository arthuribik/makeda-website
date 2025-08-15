import { useState } from 'react'

const IpPartnerships = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: "Urban Legends",
      format: "Documentary Series",
      stage: "Development",
      hook: "Exploring the hidden stories behind city myths",
      status: "Available for Co-Development",
      category: "documentary",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Digital Nomads",
      format: "Reality Series",
      stage: "Pre-Production",
      hook: "Following remote workers around the world",
      status: "Seeking Co-Production Partners",
      category: "reality",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Artisan Stories",
      format: "Branded Content",
      stage: "Production",
      hook: "Celebrating traditional craftsmanship",
      status: "Open for Brand Integration",
      category: "branded",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80"
    },
    {
      title: "Future Cities",
      format: "Animation Series",
      stage: "Concept",
      hook: "Imagining tomorrow's urban landscapes",
      status: "Ready for Licensing",
      category: "animation",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Hidden Gems",
      format: "Travel Show",
      stage: "Post-Production",
      hook: "Discovering off-the-beaten-path destinations",
      status: "Available for Distribution",
      category: "travel",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Tech Pioneers",
      format: "Interview Series",
      stage: "Development",
      hook: "Conversations with innovation leaders",
      status: "Seeking Streaming Partners",
      category: "interview",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'documentary', label: 'Documentary' },
    { id: 'reality', label: 'Reality' },
    { id: 'branded', label: 'Branded' },
    { id: 'animation', label: 'Animation' },
    { id: 'travel', label: 'Travel' },
    { id: 'interview', label: 'Interview' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="partnerships" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            IP & Partnerships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We run a tight slate of originals.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Options: co-development, co-production, licensing, and brand integrations.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.stage}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mb-2">
                    {project.format}
                  </p>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {project.hook}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-black">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 border-2 border-black rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Partnership options */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">
                Partnership Opportunities
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're looking to co-develop, co-produce, license, or integrate with our original content, we have flexible partnership models to suit your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-gray-700">Co-development partnerships</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-gray-700">Production financing</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-gray-700">Distribution licensing</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-gray-700">Brand integration opportunities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Partnership collaboration"
                className="w-full h-80 object-cover rounded-lg grayscale"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <button 
            onClick={() => scrollToSection('start-journey')}
            className="btn-primary"
          >
            Request the IP & Partner Pack
          </button>
        </div>
      </div>
    </section>
  )
}

export default IpPartnerships
