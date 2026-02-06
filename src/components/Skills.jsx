



// import laravel from '../assets/laravel.png';
// import framerMotion from '../assets/framer_motion.png';
// import vue from '../assets/vue.png';
// import react from '../assets/react.png';
// import tailwind from '../assets/tailwind.png';
// import firebase from '../assets/firebase.png';
// import supabase from '../assets/supabase.png';
// import vite from '../assets/vite.png';

// const Skills = ({ darkMode }) => {
//   const skills = [
//     { name: 'Laravel', icon: laravel, level: 95, color: 'from-orange-500 to-amber-500' },
//     { name: 'Framer Motion', icon: framerMotion, level: 95, color: 'from-blue-500 to-cyan-500' },
//     { name: 'Vue', icon: vue, level: 90, color: 'from-cyan-500 to-blue-500' },
//     { name: 'React', icon: react, level: 88, color: 'from-yellow-500 to-amber-500' },
//     { name: 'Tailwind CSS', icon: tailwind, level: 92, color: 'from-teal-500 to-cyan-500' },
//     { name: 'Firebase', icon: firebase, level: 92, color: 'from-green-500 to-emerald-500' },
//     { name: 'Supabase', icon: supabase, level: 75, color: 'from-blue-500 to-indigo-500' },
//     { name: 'Vite', icon: vite, level: 85, color: 'from-red-500 to-orange-500' },
//   ];

//   return (
//     <section
//       id="skills"
//       className="min-h-screen scroll-mt-28 py-20 relative"
//       style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
//     >
//       <div className="container mx-auto px-6">

//         {/* ===== HEADING ===== */}
//         <div className="text-center mb-16">
//           <h1
//             className="text-3xl sm:text-4xl font-bold mb-4"
//             style={{ color: darkMode ? 'white' : '#1f2937' }}
//           >
//             MY{' '}
//             <span
//               style={{
//                 background: 'linear-gradient(to right, #f97316, #f59e0b)',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//                 color: 'transparent',
//               }}
//             >
//               SKILLS
//             </span>
//           </h1>

//           <p
//             className="text-lg max-w-2xl mx-auto"
//             style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
//           >
//             Technologies and tools I use to build modern web applications.
//           </p>
//         </div>

//         {/* ===== SKILLS GRID ===== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//               style={{
//                 background: darkMode
//                   ? 'linear-gradient(to bottom right, #1f2937, #111827)'
//                   : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
//                 borderColor: darkMode ? '#374151' : '#e5e7eb',
//               }}
//             >
//               {/* ICON + NAME */}
//               <div className="flex items-center mb-6">
//                 <div
//                   className="w-14 h-14 rounded-xl p-3 flex items-center justify-center"
//                   style={{
//                     background: darkMode
//                       ? 'linear-gradient(to bottom right, #374151, #1f2937)'
//                       : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
//                   }}
//                 >
//                   <img
//                     src={skill.icon}
//                     alt={skill.name}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>

//                 <h3
//                   className="text-lg font-bold ml-4"
//                   style={{ color: darkMode ? 'white' : '#1f2937' }}
//                 >
//                   {skill.name}
//                 </h3>
//               </div>

//               {/* LEVEL */}
//               <div className="flex justify-between mb-2 text-sm">
//                 <span style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
//                   Proficiency
//                 </span>
//                 <span
//                   className="font-bold"
//                   style={{
//                     background: 'linear-gradient(to right, #f97316, #f59e0b)',
//                     WebkitBackgroundClip: 'text',
//                     backgroundClip: 'text',
//                     color: 'transparent',
//                   }}
//                 >
//                   {skill.level}%
//                 </span>
//               </div>

//               {/* PROGRESS BAR */}
//               <div
//                 className="w-full h-3 rounded-full overflow-hidden"
//                 style={{ backgroundColor: darkMode ? '#374151' : '#e5e7eb' }}
//               >
//                 <div
//                   className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
//                   style={{ width: `${skill.level}%` }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skills;









import laravel from '../assets/laravel.png';
import framerMotion from '../assets/framer_motion.png';
import vue from '../assets/vue.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import firebase from '../assets/firebase.png';
import supabase from '../assets/supabase.png';
import vite from '../assets/vite.png';

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'Laravel', icon: laravel, level: 95, color: 'from-orange-500 to-amber-500' },
    { name: 'Framer Motion', icon: framerMotion, level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Vue', icon: vue, level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'React', icon: react, level: 88, color: 'from-yellow-500 to-amber-500' },
    { name: 'Tailwind CSS', icon: tailwind, level: 92, color: 'from-teal-500 to-cyan-500' },
    { name: 'Firebase', icon: firebase, level: 92, color: 'from-green-500 to-emerald-500' },
    { name: 'Supabase', icon: supabase, level: 75, color: 'from-blue-500 to-indigo-500' },
    { name: 'Vite', icon: vite, level: 85, color: 'from-red-500 to-orange-500' },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen scroll-mt-28 py-20 overflow-hidden"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
    >
      <div className="container mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            MY{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              SKILLS
            </span>
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}
          >
            Technologies and tools I love working with.



          </p>
        </div>


        
                <br /> <br /><br /> <br />

        {/* ===== MARQUEE ===== */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="w-64 shrink-0 rounded-2xl p-6 border"
                style={{
                  background: darkMode
                    ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                    : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
                  borderColor: darkMode ? '#374151' : '#e5e7eb',
                }}
              >
                {/* ICON + NAME */}
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-xl p-2 flex items-center justify-center"
                    style={{
                      background: darkMode
                        ? 'linear-gradient(to bottom right, #374151, #1f2937)'
                        : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                    }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3
                    className="text-lg font-bold ml-3"
                    style={{ color: darkMode ? 'white' : '#1f2937' }}
                  >
                    {skill.name}
                  </h3>
                </div>

                {/* LEVEL */}
                <div className="flex justify-between mb-2 text-sm">
                  <span style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                    Proficiency
                  </span>
                  <span
                    className="font-bold"
                    style={{
                      background: 'linear-gradient(to right, #f97316, #f59e0b)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* BAR */}
                <div
                  className="w-full h-3 rounded-full overflow-hidden"
                  style={{ backgroundColor: darkMode ? '#374151' : '#e5e7eb' }}
                >
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* MARQUEE ANIMATION */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;

