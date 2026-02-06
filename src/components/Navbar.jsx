import { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ]

  const lightColors = {
    navBg: 'bg-linear-to-br from-orange-200 to-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-800',
    textHover: 'hover:text-orange-500',
    textActive: 'text-orange-600',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  }

  const darkColors = {
    navBg: 'bg-linear-to-br from-gray-700 to-black',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textHover: 'hover:text-orange-400',
    textActive: 'text-orange-400',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  }

  const colors = darkMode ? darkColors : lightColors

  const handleNavClick = (name) => {
    setActiveSection(name.toLowerCase())
    setIsMenuOpen(false)
  }

  return (
    <div className="fixed top-0 w-full flex justify-center z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-10">

          {/* LOGO */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-bold ${colors.textPrimary}`}
          >
            Portfolio<span className="text-orange-500">.</span>
          </motion.a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : `${colors.textSecondary} ${colors.textHover}`
                  }`}
                >
                  {item.name}
                </motion.span>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r ${colors.indicator} rounded-full`}
                  />
                )}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-3">
            {/* DARK MODE */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* HIRE ME */}
            <a
              href="#contact"
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md`}
            >
              Hire Me
            </a>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={`mt-3 lg:hidden rounded-xl backdrop-blur-lg shadow-lg ${
              darkMode ? 'bg-gray-900/95' : 'bg-white/95'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="block px-4 py-3 text-center"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block mx-4 mb-4 py-3 text-center rounded-lg bg-linear-to-r ${colors.button} text-white`}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </motion.nav>
    </div>
  )
}

export default Navbar

