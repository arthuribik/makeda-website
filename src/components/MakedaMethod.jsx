const MakedaMethod = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      description: "We learn your audience, the context, and what you want to achieve.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "2", 
      title: "Concept",
      description: "We develop one sharp idea, ready to work on the right platform.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Produce", 
      description: "We bring it to life with cinematic craft, and plan its release or licensing.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section id="method" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            The Makeda Method
          </h2>
          <p className="text-2xl font-semibold text-gray-600 mb-4">
            Listen → Shape → Deliver
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven three-step process ensures every project reaches its full potential
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gray-300 z-0 transform -translate-y-1/2">
                    <div className="w-full h-full bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                  </div>
                )}

                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:bg-gray-50">
                  {/* Step number */}
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-black rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process visualization */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-sm font-semibold text-gray-600">Listen</span>
            <div className="w-8 h-0.5 bg-black"></div>
            <span className="text-sm font-semibold text-gray-600">Shape</span>
            <div className="w-8 h-0.5 bg-black"></div>
            <span className="text-sm font-semibold text-gray-600">Deliver</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Ready to experience the Makeda Method?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('start-journey')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary"
          >
            Begin Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default MakedaMethod
