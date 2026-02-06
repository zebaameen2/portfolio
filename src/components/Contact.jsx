import contactImg from '../assets/contact.png'

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f9fafb'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== HEADING ===== */}
        <div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          data-aos="fade-up"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            Let&apos;s discuss your project
          </p>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">

          {/* IMAGE */}
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
            />
          </div>

          {/* FORM */}
          <form
            data-aos="fade-left"
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            style={{
              background: darkMode
                ? 'linear-gradient(to right, #1f2937, #111827)'
                : 'linear-gradient(to right, #ffffff, #f9fafb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb'
            }}
          >
            {/* NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937'
                }}
              />

              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937'
                }}
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 mb-3 sm:mb-4 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937'
              }}
            />

            {/* MOBILE */}
            <input
              type="tel"
              placeholder="Mobile Number"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 mb-3 sm:mb-4 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937'
              }}
            />

            {/* MESSAGE */}
            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 mb-4 sm:mb-6 rounded-lg resize-none text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937'
              }}
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all"
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
