const TrustedBy = () => {
  const clients = [
    { name: "Netflix", logo: "NETFLIX" },
    { name: "Amazon", logo: "AMAZON" },
    { name: "Disney", logo: "DISNEY" },
    { name: "HBO", logo: "HBO" },
    { name: "BBC", logo: "BBC" },
    { name: "Nike", logo: "NIKE" },
    { name: "Apple", logo: "APPLE" },
    { name: "Google", logo: "GOOGLE" }
  ]

  const festivals = [
    { 
      name: "Sundance", 
      year: "2024", 
      badge: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      name: "Cannes", 
      year: "2023", 
      badge: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: "Tribeca", 
      year: "2024", 
      badge: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    { 
      name: "SXSW", 
      year: "2023", 
      badge: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
        </svg>
      )
    },
    { 
      name: "Berlin", 
      year: "2024", 
      badge: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      name: "Venice", 
      year: "2023", 
      badge: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Trusted By
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Featured in leading festivals and trusted by global brands
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black text-center mb-12">
            Clients & Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="group flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">
                    {client.logo}
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Festival Badges */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black text-center mb-12">
            Festival Recognition
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {festivals.map((festival, index) => (
              <div 
                key={index}
                className="group text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-black mb-3 group-hover:scale-110 transition-transform duration-300">
                  {festival.badge}
                </div>
                <div className="font-bold text-black group-hover:text-gray-700 transition-colors duration-300">
                  {festival.name}
                </div>
                <div className="text-sm text-gray-500">
                  {festival.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-black mb-8 leading-relaxed">
              Makeda consistently delivers work that not only meets but exceeds our creative expectations. Their storytelling approach has transformed how we connect with our audience.
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
                JD
              </div>
              <div className="text-left">
                <div className="font-semibold text-black">Jane Doe</div>
                <div className="text-gray-600">Creative Director, Global Brand</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">25+</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-black mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
