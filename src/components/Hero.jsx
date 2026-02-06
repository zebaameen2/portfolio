












import { Mail, DownloadIcon } from 'lucide-react';
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import youtube from '../assets/youtube.png'
import telegram from '../assets/telegram.png'
import hero from '../assets/hero.png'
import realHero from "../assets/realHero.png";
import CV from '../assets/CV.pdf'
import hi from '../assets/hi.png'

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: instagram, alt: 'instagram', link: 'https://instagram.com/yourusername' ,   glow: 'hover:drop-shadow-[0_0_12px_#f97316]' },
    { icon: github, alt: 'github', link: 'https://github.com/zebaameen2' ,glow:  'hover:drop-shadow-[0_0_12px_#f97316]'},

    { icon: youtube, alt: 'youtube', link: 'https://youtube.com/@yourchannel', glow:  'hover:drop-shadow-[0_0_12px_#f97316]'},

    { icon: telegram, alt: 'telegram', link: 'https://t.me/9205622721',glow:  'hover:drop-shadow-[0_0_12px_#f97316]' },
  ];

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: `text-white border-2 border-orange-500 hover:bg-orange-600`,
    decorativeCricle: 'bg-orange-500 opacity-10'
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: `text-gray-800 border-2 border-orange-500 hover:bg-orange-600 hover:text-white`,
    decorativeCricle: 'bg-orange-400 opacity-20'
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-16 py-14 flex-col lg:flex-row items-center justify-between lg:mt-14">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 sm:mb-7 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos-delay={400 + index * 100}
                  className={`transform transition-all duration-300 hover:scale-110 ${social.glow}`}
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                      darkMode ? 'brightness-0 invert opacity-90' : 'grayscale opacity-70'
                    } hover:grayscale-0 hover:opacity-100`}
                  />
                </a>
              ))}
            </div>

            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm Zeba Ameen !
            </h1>

            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
            I’m a passionate Frontend & Full Stack Developer who loves building modern, responsive and user-friendly web experiences. I focus on clean code, smooth animations, and turning ideas into functional, beautiful websites.


            </p>

            {/* BUTTONS */}
            <div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <a href={CV} download className="w-full sm:w-auto">
                <button className="w-full inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 py-3 px-6 sm:px-8 rounded-full font-semibold transition-all">
                  <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download CV
                </button>
              </a>

              <a href="#contact" className="w-full sm:w-auto">
                <button className={`w-full inline-flex items-center ${theme.buttonSecondary} py-3 px-6 sm:px-8 rounded-full font-semibold transition-all`}>
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div
            className="lg:w-1/2 w-full max-w-lg lg:max-w-2xl mt-8 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full perspective group">
              <div className="relative w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <img
                  src={hero}
                  alt="hero"
                  className="w-full h-auto object-cover backface-hidden"
                />
                <img
                  src={realHero}
                  alt="real"
                  className="absolute inset-0 w-full h-full object-cover rotate-y-180 backface-hidden"
                />
              </div>

              <img
                src={hi}
                alt="hi"
                className="absolute top-3 sm:top-10 left-6 sm:left-22 w-22 h-22 sm:w-44 sm:h-24 animate-bounce z-10"
              />
            </div>
          </div>

        </div>

        {/* DECORATIVE CIRCLE */}
        <div
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCricle}
          rounded-full blur-3xl animate-pulse hidden sm:block`}
        />
      </section>
    </div>
  );
};

export default Hero;










// import { Mail, DownloadIcon } from 'lucide-react'
// import instagram from '../assets/instagram.png'
// import github from '../assets/github.png'
// import youtube from '../assets/youtube.png'
// import telegram from '../assets/telegram.png'
// import hero from '../assets/hero.png'
// import realHero from "../assets/realHero.png"
// import CV from '../assets/CV.pdf'
// import hi from '../assets/hi.png'

// const Hero = ({ darkMode }) => {

//   const socialIcons = [
//     {
//       icon: instagram,
//       alt: 'Instagram',
//       link: 'https://www.instagram.com/YOUR_USERNAME',
//       color: 'hover:drop-shadow-[0_0_12px_#E1306C]'
//     },
//     {
//       icon: github,
//       alt: 'GitHub',
//       link: 'https://github.com/YOUR_USERNAME',
//       color: 'hover:drop-shadow-[0_0_12px_#ffffff]'
//     },
//     {
//       icon: youtube,
//       alt: 'YouTube',
//       link: 'https://www.youtube.com/@YOUR_CHANNEL',
//       color: 'hover:drop-shadow-[0_0_12px_#FF0000]'
//     },
//     {
//       icon: telegram,
//       alt: 'Telegram',
//       link: 'https://t.me/YOUR_USERNAME',
//       color: 'hover:drop-shadow-[0_0_12px_#229ED9]'
//     },
//   ]

//   const theme = {
//     textPrimary: darkMode ? 'text-white' : 'text-gray-900',
//     textSecondary: darkMode ? 'text-gray-300' : 'text-gray-700',
//     iconBase: darkMode
//       ? 'brightness-0 invert opacity-90'
//       : 'grayscale opacity-70',
//   }

//   return (
//     <div className="relative min-h-screen flex flex-col overflow-hidden">

//       <section
//         id="home"
//         className="container mx-auto px-4 sm:px-8 lg:px-16 pt-32 pb-16
//         flex flex-col lg:flex-row items-center justify-between"
//       >

//         {/* LEFT CONTENT */}
//         <div className="lg:w-1/2 w-full text-center lg:text-left">

//           {/* SOCIAL ICONS */}
//           <div className="flex justify-center lg:justify-start gap-5 mb-8">
//             {socialIcons.map((item, i) => (
//               <a
//                 key={i}
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`transform transition-all duration-300 hover:scale-110 ${item.color}`}
//               >
//                 <img
//                   src={item.icon}
//                   alt={item.alt}
//                   className={`w-9 h-9 sm:w-10 sm:h-10 
//                   transition-all duration-300
//                   ${theme.iconBase}
//                   hover:grayscale-0 hover:opacity-100`}
//                 />
//               </a>
//             ))}
//           </div>

//           {/* TEXT */}
//           <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${theme.textPrimary}`}>
//             Hi, I'm <span className="text-orange-500">Zeba Ameen</span>
//           </h1>

//           <p className={`max-w-lg mx-auto lg:mx-0 mb-8 ${theme.textSecondary}`}>
//             I build modern, responsive and animated web experiences using
//             React, Tailwind & modern tools.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <a href={CV} download>
//               <button className="inline-flex items-center gap-2 px-8 py-3
//               rounded-full font-semibold text-white
//               bg-linear-to-r from-orange-500 to-amber-500
//               hover:shadow-[0_0_40px_rgba(255,165,0,0.7)]
//               transition-all">
//                 <DownloadIcon size={18} />
//                 Download CV
//               </button>
//             </a>

//             <a href="#contact">
//               <button
//                 className={`inline-flex items-center gap-2 px-8 py-3
//                 rounded-full font-semibold border-2 border-orange-500
//                 transition-all
//                 ${darkMode
//                     ? 'text-white hover:bg-orange-600'
//                     : 'text-gray-900 hover:bg-orange-500 hover:text-white'
//                   }`}>
//                 <Mail size={18} />
//                 Contact Me
//               </button>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="lg:w-1/2 w-full mt-14 lg:mt-0 flex justify-center">
//           <div className="relative w-4/5 sm:w-3/4 lg:w-full perspective group">

//             <div className="relative w-full transition-transform duration-700
//               transform-style-preserve-3d group-hover:rotate-y-180">

//               <img
//                 src={hero}
//                 alt="hero"
//                 className="w-full backface-hidden rounded-xl"
//               />

//               <img
//                 src={realHero}
//                 alt="real"
//                 className="absolute inset-0 w-full h-full
//                 rotate-y-180 backface-hidden rounded-xl"
//               />
//             </div>

//             <img
//               src={hi}
//               alt="hi"
//               className="absolute top-6 left-6 w-28 animate-bounce z-10"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Hero


