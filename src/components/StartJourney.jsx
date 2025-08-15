import { useState } from 'react'

const StartJourney = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectTitle: '',
    objective: '',
    timeline: '',
    budget: '',
    link: '',
    bestTime: '',
    userType: 'brand'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        projectTitle: '',
        objective: '',
        timeline: '',
        budget: '',
        link: '',
        bestTime: '',
        userType: 'brand'
      })
    }, 3000)
  }

  const userTypes = [
    { id: 'brand', label: 'Brand/Agency', description: 'Looking for creative services' },
    { id: 'partner', label: 'Partner/Investor', description: 'Interested in partnerships' }
  ]

  if (submitted) {
    return (
      <section id="start-journey" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="text-6xl mb-6">✅</div>
              <h2 className="text-3xl font-bold text-black mb-4">
                Thank You!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We've received your message and will get back to you within 48 hours.
              </p>
              <div className="text-sm text-gray-500">
                We reply within 48 hours.
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="start-journey" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Start Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Begin the conversation; book a 20-minute creative call.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">
                Get Started
              </h3>

              {/* User Type Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  I am a:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {userTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, userType: type.id }))}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                        formData.userType === type.id
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 bg-white text-black hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{type.label}</div>
                      <div className={`text-sm mt-1 ${
                        formData.userType === type.id ? 'text-gray-200' : 'text-gray-500'
                      }`}>
                        {type.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    One-line Objective *
                  </label>
                  <textarea
                    name="objective"
                    value={formData.objective}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="12+ months">12+ months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget (optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $50k">Under $50k</option>
                      <option value="$50k - $100k">$50k - $100k</option>
                      <option value="$100k - $250k">$100k - $250k</option>
                      <option value="$250k - $500k">$250k - $500k</option>
                      <option value="$500k+">$500k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Link (optional)
                  </label>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    placeholder="https://..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Best time to talk
                  </label>
                  <select
                    name="bestTime"
                    value={formData.bestTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    <option value="">Select preferred time</option>
                    <option value="Morning (9AM-12PM)">Morning (9AM-12PM)</option>
                    <option value="Afternoon (12PM-5PM)">Afternoon (12PM-5PM)</option>
                    <option value="Evening (5PM-8PM)">Evening (5PM-8PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Begin the Conversation'}
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-black mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">20-Minute Discovery Call</h4>
                      <p className="text-gray-600 text-sm">We'll discuss your project goals and explore how we can help.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Custom Proposal</h4>
                      <p className="text-gray-600 text-sm">We'll create a tailored approach for your specific needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Project Kickoff</h4>
                      <p className="text-gray-600 text-sm">Once approved, we'll begin the creative journey together.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  For Investors & Partners
                </h3>
                <p className="text-gray-300 mb-6">
                  Request our investor/partner pack to learn about our IP portfolio and partnership opportunities.
                </p>
                <button className="btn-secondary bg-white text-black hover:bg-gray-100 w-full">
                  Request Investor/Partner Pack
                </button>
              </div>

              <div className="text-center text-sm text-gray-500">
                We reply within 48 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartJourney
