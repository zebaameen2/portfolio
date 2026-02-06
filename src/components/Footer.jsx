// 






import React from 'react'
import { FaGithub, FaHeart, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t"
      style={{
        background: darkMode
          ? 'linear-gradient(to bottom, #000000, #111827)'
          : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
        borderColor: darkMode ? '#374151' : '#d1d5db'
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-orange-500 dark:text-white">
              Portfolio
            </h3>
            <p
              className="text-sm"
              style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
            >
              Full Stack Developer
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center
                  bg-[#374151] text-white dark:bg-[#f3f4f6] dark:text-[#374151]
                  hover:scale-110 transition-all
                  hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500
                  hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-center md:justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
              © {currentYear} Made with
              <FaHeart className="text-red-500 mx-1" />
              by
              <span className="text-[#f97316] font-semibold ml-1">
                Zeba Ameen
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
