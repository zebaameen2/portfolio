

























// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
// import project1 from '../assets/project1.png'
// import project2 from '../assets/project2.png'
// import project3 from '../assets/project3.png'

// const Projects = ({ darkMode }) => {
//   const projects = [
//     {
//       id: 1,
//       title: 'E-Commerce Platform',
//       desc: 'A modern e-commerce app with cart, payments and auth.',
//       image: project1,
//       tags: ['React', 'Node.js', 'Supabase'],
//       code: '#',
//       demo: '#'
//     },
//     {
//       id: 2,
//       title: 'Fitness Tracker App',
//       desc: 'Track workouts, calories and daily fitness goals.',
//       image: project2,
//       tags: ['React', 'API', 'Tailwind'],
//       code: '#',
//       demo: '#'
//     },
//     {
//       id: 3,
//       title: 'Content Generator',
//       desc: 'AI powered content generator for blogs & captions.',
//       image: project3,
//       tags: ['React', 'OpenAI', 'CSS'],
//       code: '#',
//       demo: '#'
//     }
//   ]

//   return (
//     <section
//       id="projects"
//       className="py-24"
//       style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
//     >
//       <div className="container mx-auto px-4">

//         {/* HEADING */}
//         <div
//           className="text-center mb-14"
//           data-aos="fade-up"
//         >
//           <h2
//             className="text-3xl sm:text-4xl font-bold mb-3"
//             style={{ color: darkMode ? 'white' : '#1f2937' }}
//           >
//             My{' '}
//             <span
//               style={{
//                 background: 'linear-gradient(to right, #f97316, #f59e0b)',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//                 color: 'transparent'
//               }}
//             >
//               Projects
//             </span>
//           </h2>

//           <p
//             className="max-w-xl mx-auto"
//             style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
//           >
//             A showcase of my recent work
//           </p>
//         </div>

//         {/* PROJECTS GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               className="rounded-xl border overflow-hidden hover:scale-[1.02] transition-transform"
//               style={{
//                 background: darkMode
//                   ? 'linear-gradient(to right, #1f2937, #111827)'
//                   : 'white',
//                 borderColor: darkMode ? '#374151' : '#e5e7eb'
//               }}
//             >
//               {/* IMAGE */}
//               <div className="h-40 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-4">
//                 <h3
//                   className="text-lg font-bold mb-2"
//                   style={{ color: darkMode ? 'white' : '#1f2937' }}
//                 >
//                   {project.title}
//                 </h3>

//                 <p
//                   className="text-sm mb-3"
//                   style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
//                 >
//                   {project.desc}
//                 </p>

//                 {/* TAGS */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 text-xs rounded-full"
//                       style={{
//                         backgroundColor: darkMode ? '#374151' : '#f3f4f6',
//                         color: darkMode ? '#d1d5db' : '#374151'
//                       }}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* BUTTONS */}
//                 <div className="flex gap-3">
//                   <a
//                     href={project.code}
//                     className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg"
//                     style={{
//                       backgroundColor: darkMode ? '#374151' : '#f3f4f6',
//                       color: darkMode ? 'white' : '#111827'
//                     }}
//                   >
//                     <FaGithub />
//                     Code
//                   </a>

//                   <a
//                     href={project.demo}
//                     className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg"
//                     style={{
//                       backgroundColor: '#f97316',
//                       color: 'white'
//                     }}
//                   >
//                     <FaExternalLinkAlt />
//                     Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div 
//         className='text-center mt-10 '>
//            <a
//                     href={project.demo}
//                     className="inline-flex items-center  font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all
//                       "
//                     style={{
//                       backgroundColor: '#f97316',
//                       color: 'white'
//                     }}
//                   >
//                     <FaGithub/>
//                     <span>View All Projects</span>
//                     <FaExternalLinkAlt className='text-sm' />
//                     Demo
//                   </a>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Projects















import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      desc: 'A modern e-commerce app with cart, payments and auth.',
      image: project1,
      tags: ['React', 'Node.js', 'Supabase'],
      code: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Fitness Tracker App',
      desc: 'Track workouts, calories and daily fitness goals.',
      image: project2,
      tags: ['React', 'API', 'Tailwind'],
      code: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Content Generator',
      desc: 'AI powered content generator for blogs & captions.',
      image: project3,
      tags: ['React', 'OpenAI', 'CSS'],
      code: '#',
      demo: '#'
    }
  ]

  return (
    <section
      id="projects"
      className="py-24"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
    >
      <div className="container mx-auto px-4">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            A showcase of my recent work
          </p>
        </div>

        {/* ===== PROJECT CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-xl border overflow-hidden transition-transform hover:scale-[1.02]"
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'white',
                borderColor: darkMode ? '#374151' : '#e5e7eb'
              }}
            >
              {/* IMAGE */}
              <div className="h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                >
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#374151'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <a
                    href={project.code}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg"
                    style={{
                      backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                      color: darkMode ? 'white' : '#111827'
                    }}
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg"
                    style={{
                      backgroundColor: '#f97316',
                      color: 'white'
                    }}
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== VIEW ALL BUTTON ===== */}
        <div className="text-center mt-14">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold rounded-full text-white hover:shadow-lg hover:shadow-orange-500/40 transition-all"
            style={{ backgroundColor: '#f97316' }}
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects

