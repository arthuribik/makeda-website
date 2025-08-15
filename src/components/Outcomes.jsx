const Outcomes = () => {
  const outcomes = [
    {
      title: "Clear audience recognition and cultural relevance.",
      description: "Your story resonates with the right people at the right time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      stat: "95%",
      statLabel: "Audience Engagement"
    },
    {
      title: "Work that sparks conversation, organic reach, and platform traction.",
      description: "Content that naturally spreads and creates meaningful discussions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stat: "3x",
      statLabel: "Organic Reach"
    },
    {
      title: "Festival-calibre films and IP ready for licensing or co-production.",
      description: "Award-winning quality that opens doors to new opportunities.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      stat: "100%",
      statLabel: "Quality Standard"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Outcomes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you work with Makeda, you can expect results that go beyond the ordinary
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                  {outcome.icon}
                </div>

                {/* Stat */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">
                    {outcome.stat}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {outcome.statLabel}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {outcome.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {outcome.description}
                </p>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-black rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Visual representation */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">
                Measurable Impact
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our work doesn't just look good—it performs. We track and optimize for real business outcomes, ensuring your investment delivers measurable returns.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-gray-700">Increased brand awareness</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-gray-700">Higher engagement rates</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-gray-700">Improved conversion metrics</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Success metrics"
                className="w-full h-80 object-cover rounded-lg grayscale"
              />
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            Ready to achieve these outcomes for your brand?
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
            Start Achieving Results
          </button>
        </div>
      </div>
    </section>
  )
}

export default Outcomes
