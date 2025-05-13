import { motion } from "framer-motion";
import Image from "next/image";

// export default function PersonalProgressTimeline() {
//   return (
//     <div className="w-full min-h-screen bg-black text-white px-6 py-6 overflow-hidden">
//       <h1 className="text-center text-3xl md:text-5xl font-bold mb-12 tracking-wide -mt-6">
//         Behind the <span className="text-cyan-700">Resume</span>
//       </h1>

//       <div className="relative w-full h-[100vh] md:h-[120vh] overflow-hidden">
//         <svg
//           viewBox="0 0 100 1000"
//           className="absolute w-full h-full left-1/2 transform -translate-x-1/2"
//           preserveAspectRatio="none"
//         >
//           <motion.path
//             d="M50,0 
//               C10,200 90,400 50,600 
//               C10,800 90,900 50,1000"
//             stroke="white"
//             strokeDasharray="2 8"
//             strokeWidth="1.2"
//             fill="transparent"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2.5, ease: "easeInOut" }}
//           />
//         </svg>
//         <div className="absolute top-[10%] left-[5%] md:left-[15%] text-white max-w-xs text-[13px] sm:text-[15px] md:text-[18px]">
//         <motion.div 
//     initial={{ x: -100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//   >
//           <div className="flex flex-col sm:flex-row items-center gap-2">
//             {/* <p className="mb-2 sm:mb-0">Currently working as a software engineer at Dell. After realising </p> */}
//           </div>
//           </motion.div>

//         </div>

//         {/* Icon + Text Sections */}
//         <div className="absolute top-[45%] left-[50%] md:left-[65%] text-white max-w-xs text-[13px] sm:text-[15px] md:text-[18px] text-right">
//         <motion.div 
//     initial={{ x: 100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//   >
//           <div className="flex items-center justify-end gap-2">
//             {/* <p> Took ownership, led things</p> */}
//             {/* <FaRocket className="text-cyan-600 text-lg sm:text-xl md:text-2xl" /> */}
//           </div>
//           </motion.div>
//         </div>

//         {/* FaRobot section */}
//         <div className="absolute top-[65%] left-[5%] md:left-[12%] text-white max-w-xs text-[13px] sm:text-[15px] md:text-[18px] tracking-wide">
//         <motion.div 
//     initial={{ x: -100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
//   >
//           <div className="flex items-center gap-2">
//             {/* <FaRobot className="text-cyan-600 text-lg sm:text-xl md:text-2xl" /> */}
//             {/* <p> I was the quiet kid who loved to read and follow each by-the-book rule in school. With a knack to solve logical problems and word puzzles, I got to see this in action when writing my first Visual Basic code, which made me inclined towards software. My creative side thrived in the form of writing  </p> */}
//           </div>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// }


// const timelineData = [
//   {
//     year: "2024-present",
//     title: "Software Engineer",
//     description: "Mostly debug, sometimes code , and learn how software is used to streamline businesses",
//   },
//   {
//     year: "2022",
//     title: "Built My First Fullstack App",
//     description: "Developed a project that automated college event registrations. Learned React, Node, and databases.",
//   },
//   {
//     year: "2023",
//     title: "Internship at Social Impact Startup",
//     description: "Worked at the intersection of tech and social good, contributing to rural health outreach tools.",
//   },
//   {
//     year: "2024",
//     title: "Launched My Personal Portfolio",
//     description: "Showcased my values and projects that blend product, tech, and social welfare.",
//   },
// ];

// export default function PersonalProgressTimeline() {
//   return (
//     <div className="relative w-full h-[100vh] md:h-[120vh] overflow-hidden">
//       <svg
//         viewBox="0 0 100 1000"
//         className="absolute w-full h-full left-1/2 transform -translate-x-1/2"
//         preserveAspectRatio="none"
//       >
//         <motion.path
//           d="M50,0 C10,200 90,400 50,600 C10,800 90,900 50,1000"
//           stroke="#06b6d4"
//           strokeDasharray="1.5 6"
//           strokeWidth="0.8"
//           fill="transparent"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 2.5, ease: "easeInOut" }}
//         />
//       </svg>

//       {timelineData.map((item, index) => {
//         const isLeft = index % 2 === 0;
//         return (
//           <div
//   key={index}
//   style={{ top: `${10 + index * 20}%` }}
//   className={`absolute ${isLeft ? "left-[5%] md:left-[12%] text-left" : "left-[50%] md:left-[65%] text-right"} text-white max-w-xs text-[13px] sm:text-[15px] md:text-[18px]`}
// >

//             <motion.div
//               initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 + index * 0.2, ease: "easeOut" }}
//             >
//               <div className="text-12px text-cyan-400 font-semibold mb-1">{item.year}</div>
//               <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{item.title}</h3>
//               <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
//             </motion.div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

const timelineData = [
  {
    year: "2023",
    title: "Stepped into software in corporate",
    description: "Got introduced to the world of stories, bugs, quick calls, TT and free goodies/trips"
  },
  {
    year: "2020",
    title: "Enrolled in a Computer Science degree",
    description: "Created lifetime memories, questioned Engg multiple times, got to know myself more than I might've wanted to",
  },
  {
    year: "2018",
    title: "Wrote my first piece of code",
    description: "School's AC computer lab- did a little Turtle programming, felt like on top of the world writing basic VB codes",
  },
  {
    year: "2015",
    title: "Saw myself as a future journalist/writer",
    description: "Left greasy fingerprints on books, wrote short stories/poems, ",
  },
];

export default function PersonalProgressTimeline() {
  return (
    <div className="relative w-full py-20 px-4 md:px-20">
      {/* SVG Curved Line */}
      <svg
        viewBox="0 0 100 1000"
        className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[80px] pointer-events-none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M50,0 C10,200 90,400 50,600 C10,800 90,900 50,1000"
          stroke="#06b6d4"
          strokeDasharray="1.5 6"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="flex flex-col gap-20 relative z-10">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-12`}
            >
              <motion.div
                initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                viewport={{ once: true }}
                className="p-8 w-full md:w-1/2 text-white"
              >
                <div className="text-cyan-400 font-semibold mb-1">{item.year}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


