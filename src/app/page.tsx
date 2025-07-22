'use client';


import { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
// import '../app/globals.css';



import {
  FaEnvelope,
  FaLinkedin,
  // FaArrowRight,
  // FaGithub
  FaGithub,
} from "react-icons/fa";
// import PersonalProgressTimeline from "../components/PersonalProgressTimeline";
// import ExpandableCards from "../components/ExpandableCards";
import Index from "../components/index";
import Dashboard from "@/components/Dashboard";
// import ResumeButton from "../components/ResumeButton";
// import { EB_Garamond } from 'next/font/google';
// import { Typewriter } from "react-simple-typewriter";
// import { Frank_Ruhl_Libre } from 'next/font/google';
import { Raleway } from 'next/font/google';
// import { Inter } from 'next/font/google';
// import { Bebas_Neue } from 'next/font/google';

// const garamond = EB_Garamond({
//   subsets: ['latin'],
//   weight: ['400', '600', '700'], // choose weights you want
//   variable: '--font-garamond',
//   display: 'swap',
// });

// const frankRuhlLibre = Frank_Ruhl_Libre({
//   subsets: ['latin'],
//   weight: ['300', '400', '500'],
//   variable: '--font-frank',
// });

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
});

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-inter',
// });

// const bebasNeue = Bebas_Neue({
//   weight: ['400'],
//   subsets: ['latin'],
// });

// const iconVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.5,
//       ease: 'easeOut',
//     },
//   }),
// };

export default function Home() {
  const [activePanel, setActivePanel] = useState<"first" | "last" | null>(null);
  // const [isHovered, setIsHovered] = useState(false);
  // const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hoveredPanel, setHoveredPanel] = useState<"first" | "last" | null>(null);




  const handleClick = (panel: "first" | "last") => {
    setActivePanel(panel);
  };

  // useEffect(() => {
  //   setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  // }, []);

  // const getVideoSource = (): string | undefined =>  {
  //   if (hoveredPanel === "first") return "/videos/myvideo.mp4";
  //   if (hoveredPanel === "last") return "/videos/myvideo2.mp4";
  //   return undefined;
  // };

  const handleDownloadResume = () => {
    // Add your resume download logic here
    const link = document.createElement("a");
    link.href = "/Tanishaa_resume.pdf";
    link.download = "Tanishaa_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log('Downloading resume...');
  };


  

  return (

    
    <div className="min-h-screen w-screen relative text-center bg-white scroll-smooth absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100">
      {/* <main>
      <Hero />
    </main> */}
         {/* <a
          href="/resume.pdf"
          download
          className="relative overflow-hidden px-6 py-2 rounded-full border-2 border-cyan-600 text-black bg-white 
           font-medium text-sm sm:text-base shadow transition duration-300 ease-in-out
           before:absolute before:inset-0 before:bg-cyan-600 before:scale-x-0 before:origin-left 
           before:transition-transform before:duration-300 before:ease-in-out
           hover:before:scale-x-100 hover:text-white"

        >
          Download Resume
        </a>  */}
         {/* <ResumeButton /> */}

{/* <a
  href="/resume.pdf"
  download
  className="group relative inline-flex items-center overflow-hidden px-6 py-2 rounded-full border-2 border-cyan-600 text-black bg-white 
    font-medium text-sm sm:text-base shadow transition duration-300 ease-in-out"
>
  <span
    className="absolute inset-0 bg-cyan-600 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-in-out pointer-events-none z-0"
    aria-hidden="true"
  ></span>

  <span className="relative z-10 flex items-center space-x-2 transition-colors duration-300 ease-in-out group-hover:text-white">
    <span>Download Resume</span>
    <FaArrowRight className="text-black group-hover:text-white transition-colors duration-300 ease-in-out" />
  </span>
</a> */}

{!activePanel && (
<button
        onClick={handleDownloadResume}
        className="fixed top-8 right-8 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-cyan-700 hover:shadow-xl transition-all duration-300 z-40"
      >
        <Download size={18} />
        <span className="text-sm font-medium">Resume</span>
      </button>
)}
      
        
      
      {/* <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${isHovered ? 'opacity-40' : 'opacity-0'}`}
        src="/videos/myvideo.mp4" // Replace with your video path
        autoPlay
        loop
        muted
        playsInline
      /> */}

{/* {activePanel && isHovered && getVideoSource() && (
        <video
          key={getVideoSource()} // forces re-render when source changes
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 z-10 pointer-events-none ${isHovered ? 'opacity-40' : 'opacity-0'}`}
          src={getVideoSource()!}
          autoPlay
          loop
          muted
          playsInline
        />
      )} */}


  <video
    // key={hoveredPanel} // ensures re-render on panel switch
    className="absolute top-0 left-0 w-full h-full object-cover opacity-40 transition-opacity duration-500 z-0 pointer-events-none"
    src= "/videos/myvideo.mp4"
    autoPlay
    loop
    muted
    playsInline
  />






      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold space-y-4 transform -translate-x-2 sm:-translate-x-4 md:-translate-x-6">
      <motion.div
        //  onMouseEnter={() => {
        //   if (!isTouchDevice) {
        //     setIsHovered(true);
        //     setHoveredPanel("first");
        //   }
        // }}
        // onMouseLeave={() => {
        //   if (!isTouchDevice) {
        //     setIsHovered(false);
        //     setHoveredPanel(null);
        //   }
        // }}
        onMouseEnter={() => setHoveredPanel("first")}
        onMouseLeave={() => setHoveredPanel(null)}
        onClick={() => handleClick("first")}
          whileHover={{ x: -30 }} // shift left on hover (desktop)
  // animate={isHovered && isTouchDevice ? { x: -30 } : { x: 0 }} // shift left on tap (mobile)
  // transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="cursor-pointer text-cyan-700 hover:text-cyan-500 transition font-[Orpheus_Pro] -translate-x-2 sm:-translate-x-12 tracking-wide group"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleClick("first")}
        >
          Tanishaa
          <sup className="text-xs sm:text-base align-top text-gray-500 transition-all duration-200 group-hover:text-sm group-hover:sm:text-lg">
          {hoveredPanel === "first" ? "[curious human]" : "[personal]"} </sup>
          </motion.div>

        <motion.div
          // onMouseEnter={() => {
          //   if (!isTouchDevice) {
          //     setIsHovered(true);
          //     setHoveredPanel("last");
          //   }
          // }}
          // onMouseLeave={() => {
          //   if (!isTouchDevice) {
          //     setIsHovered(false);
          //     setHoveredPanel(null);
          //   }
          // }}
          onMouseEnter={() => setHoveredPanel("last")}
          onMouseLeave={() => setHoveredPanel(null)}
          onClick={() => handleClick("last")}
          whileHover={{ x: 30 }} // shift left on hover (desktop)
          className="cursor-pointer text-gray-900 hover:text-gray-700 transition font-[Twentieth_Century] translate-x-12 sm:translate-x-23 group"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleClick("last")}
        >
          Sinha
          <sup className="text-xs sm:text-base align-top text-gray-500 transition-all duration-200 group-hover:text-sm group-hover:sm:text-lg">{hoveredPanel==="last" ? "[bring ideas to life]" : "[professional]"}</sup>

        </motion.div>

{/*                
        <div 
          className={`absolute top-1/2 left-0 w-full h-px bg-slate-300 transition-opacity duration-300 z-10 ${
            hoveredPanel !== 'null' ? 'opacity-100' : 'opacity-0'
          }`} 
        >
      </div> */}

                  
          {/* <motion.div
            className="text-cyan-600 text-2xl mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <span>
              <Typewriter
                words={["Work In Progress – Click to know more"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            </motion.div> */}

        {/* <div className="flex space-x-6 mt-10 text-2xl sm:text-3xl text-gray-600">
          <a href="mailto:sinhatan2002@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/tansinha/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a> */}
          {/* <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a> */}
        {/* </div> */}

        {/* <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaGithub size={24} className="text-slate-700" />
              </a>
              <a
                href="https://linkedin.com/in/tansinha/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <FaLinkedin size={24} className="text-slate-700" />
              </a>
              <a href="mailto:sinhatan2002@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
              >
            <FaEnvelope size={24} className="text-slate-700"  />
          </a>
            </div> */}

<div className="flex justify-center gap-4 sm:gap-6 mt-8">
  {[
    {
      href: "https://github.com",
      icon: <FaGithub className="text-slate-700 transition-colors duration-300 group-hover:text-black" />,
    },
    {
      href: "https://linkedin.com/in/tansinha/",
      icon: <FaLinkedin className="text-slate-700 transition-colors duration-300 group-hover:text-[#0077B5]" />,
    },
    {
      href: "mailto:sinhatan2002@gmail.com",
      icon: <FaEnvelope className="text-slate-700 transition-colors duration-300 group-hover:text-red-500" />,
    },
  ].map(({ href, icon }, idx) => (
    <a
      key={idx}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 sm:p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transform transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500"
    >
      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center">
        {icon}
      </div>
    </a>
  ))}
</div>
        
      </div>  

    
      <AnimatePresence>
        {(activePanel === "first" || activePanel === "last") && (
          <motion.div
            key={activePanel}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 bottom-0 bg-gray-950 text-white z-30 p-6 sm:p-10 overflow-y-auto scroll-smooth"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setActivePanel(null)}
                className="text-white text-base px-5 py-1.5 rounded-full
                  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                  border border-gray-700/50
                  shadow-[2px_2px_6px_0_rgba(0,0,0,0.2),-2px_-2px_6px_0_rgba(255,255,255,0.05)]
                  hover:shadow-[inset_2px_2px_6px_0_rgba(0,0,0,0.2),inset_-2px_-2px_6px_0_rgba(255,255,255,0.05)]
                  transition-all duration-200 ease-in-out
                  hover:scale-[0.98]
                  hover:border-gray-600/50
                  focus:outline-none
                  active:scale-95"
              >
                Close
              </button>
            </div>
            

{activePanel === "first" && (
  <div>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="fixed inset-0 bg-gray-950 text-white z-30 overflow-y-auto scroll-smooth">

  
    {/* Left Section */}
    <div className="w-full h-screen ">
      {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Hi.
      </h1>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mb-4">
        This is me behind my resume.
      </h1>
      <br></br>
      <p className="mb-4 text-base sm:text-lg md:text-xl text-gray-300 text-justify">
        I love to work in spaces where you can <span className="text-cyan-400">identify </span>user problems , <span className="text-cyan-400">create </span> feasible solutions and <span className="text-cyan-400">reiterate </span> till it reaches an optimal point.
      </p>
      <p className="text-lg sm:text-lg md:text-xl text-gray-300 text-justify">
        My interests lie at the confluence of <span className="text-cyan-400">product , tech </span> and <span className="text-cyan-400">social welfare</span>
      </p>
      <br></br>
      <p className="text-lg sm:text-lg md:text-xl text-gray-300 text-justify">
        Born in Mumbai, brought up in Delhi and currently living in Bangalore, I have experienced being a part of the cosmopolitan city life always - with each of the three cities blending in their own local influence. Mumbai showed me humility , Delhi taught me to be thick skinned and Bangalore introduced me to an amazing arena of cool, like minded people.

      </p>
      <br></br>
      <p className="text-lg sm:text-lg md:text-xl text-gray-300 text-justify">
        An extremely shy , novel-engrossed kid growing up, I started to realise my strengths in high school and college; I was great at cracking council/scholarship interviews , I was a looked up leader at my college technical club , and I had a way of asking questions, analysing problems and people which helped me understand scenarios better.
        </p>
      <br></br>
      <p className="text-lg sm:text-lg md:text-xl text-gray-300 text-justify">
       I always wanted to explore the world of software since it blew my mind at how it made things like e-commerce , social media as well as financial services were available at just a tap. I wanted to understand how applications worked behind the scenes. Thus, I enrolled in a Computer Science degree, graduated four amazing years later and got my first corporate gig as a software engineer at a large american MNC.
    </p>
    <br></br>
      <p className="text-lg sm:text-lg md:text-xl text-gray-300 text-justify">
       So here I stand now - ready to explore , fail and learn henceforth
    </p>

    
      
      <div className="min-h-screen">
        <ExpandableCards />
      </div> */}
        {/* <button
        onClick={() => setActivePanel(null)}
        className="fixed top-6 right-6 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-colors"
      >
      <X className="w-5 h-5 text-slate-600" />
      </button> */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setActivePanel(null)}
                className="text-white text-base px-5 py-1.5 rounded-full
                  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                  border border-gray-700/50
                  shadow-[2px_2px_6px_0_rgba(0,0,0,0.2),-2px_-2px_6px_0_rgba(255,255,255,0.05)]
                  hover:shadow-[inset_2px_2px_6px_0_rgba(0,0,0,0.2),inset_-2px_-2px_6px_0_rgba(255,255,255,0.05)]
                  transition-all duration-200 ease-in-out
                  hover:scale-[0.98]
                  hover:border-gray-600/50
                  focus:outline-none
                  active:scale-95"
                  
              >
                Close
              </button>
            </div>

     <Index/>
       
      </div>


    {/* Right Section */}
    {/* <div className="w-full md:w-1/2">
      <div className="mb-12">
        {typeof PersonalProgressTimeline !== 'undefined' ? (
          <PersonalProgressTimeline />
        ) : (
          <div>Loading timeline...</div>
        )}
      </div>


    </div> */}
    
  </motion.div>
{/* 
    <div className="mt-12 px-4 sm:px-6 md:px-12 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-raleway font-light text-white mb-14">
        What we can connect over
      </h2>

      <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-y-8 justify-items-center">
  {[
    { icon: <FaCode />, label: 'Tech & Software' },
    { icon: <FaBullhorn />, label: 'Podcasts' },
    { icon: <FaHeartbeat />, label: 'Social welfare' },
    { icon: <FaLightbulb />, label: 'Product Ideas' },
    { icon: <FaBookReader />, label: 'Book Recs' },
    { icon: <FaMusic />, label: 'Singing' },
    { icon: <FaTableTennis />, label: 'TT' },
    { icon: <FaBroom />, label: 'Harry Potter' },
  ].map(({ icon, label }, i) => (
    <motion.div
      key={label}
      className="flex flex-col items-center text-white text-5xl"
      variants={iconVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={i}
    >
      <div className="mb-2">{icon}</div>
      <span className="text-base">{label}</span>
    </motion.div>
  ))}
</div>
      
    </div> */}



  </div>

  
)}





            {activePanel === "last" && (
              <div className="fixed inset-0 overflow-y-auto scroll-smooth z-50">
                <div className="absolute top-4 right-4">
              <button
                onClick={() => setActivePanel(null)}
                className="text-white text-base px-5 py-1.5 rounded-full
                  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                  border border-gray-700/50
                  shadow-[2px_2px_6px_0_rgba(0,0,0,0.2),-2px_-2px_6px_0_rgba(255,255,255,0.05)]
                  hover:shadow-[inset_2px_2px_6px_0_rgba(0,0,0,0.2),inset_-2px_-2px_6px_0_rgba(255,255,255,0.05)]
                  transition-all duration-200 ease-in-out
                  hover:scale-[0.98]
                  hover:border-gray-600/50
                  focus:outline-none
                  active:scale-95"
              >
                Close
              </button>
            </div>
              {/* <h1 className="text-6xl font-semibold mb-6">Tanishaa <span className="text-cyan-400 font-semibold">OS</span></h1>
                <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">A living, evolving product – continuously improving through feedback, experiments, and real-world testing.</p> */}

                {/* <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-4">KPI <span className="text-cyan-400">Dashboard</span></h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
                      <p className="text-3xl font-bold">50</p>
                      <p className="text-sm text-gray-400">Blogs Written (Tech/Non-Tech)</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
                      <p className="text-3xl font-bold">5</p>
                      <p className="text-sm text-gray-400">Projects Delivered</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow text-center">
                      <p className="text-3xl font-bold">4</p>
                      <p className="text-sm text-gray-400">Honors/Awards</p>
                    </div>
                  </div>
                </div> */}

                {/* <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-4">Product <span className="text-cyan-400">Specs</span></h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">CI/CD </div>
                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">Data Analysis</div>
                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">Test Automation</div>
                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">Next.js</div>

                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">.NET</div>
                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">GitLab</div>
                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">PlayWright</div>
                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">C++ / Python/ Java</div>


                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">SQL</div>
                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">Team Leadership</div>
                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">Product Thinking</div>
                    <div className="bg-gray-800 p-4 rounded-lg hover:scale-105 transition-transform">Coomunication and Management</div>




                  </div>
                </div> */}
{/* 
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-4">Feature <span className="text-cyan-400"> Comparison</span></h3>
                  <table className="table-auto w-full text-left border border-gray-700">
                    <thead>
                      <tr className="bg-gray-800">
                        <th className="px-4 py-2">Feature</th>
                        <th className="px-4 py-2">Tanishaa OS</th>
                        <th className="px-4 py-2">Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-700">
                        <td className="px-4 py-2">Authenticity with depth</td>
                        <td className="px-4 py-2">✅</td>
                        <td className="px-4 py-2">❌</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-4 py-2">Hybrid thinker</td>
                        <td className="px-4 py-2">✅</td>
                        <td className="px-4 py-2">⚠️</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-4 py-2">Growth focused mindset</td>
                        <td className="px-4 py-2">✅</td>
                        <td className="px-4 py-2">⚠️</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-4 py-2">Top notch communication</td>
                        <td className="px-4 py-2">✅</td>
                        <td className="px-4 py-2">❌</td>
                      </tr>
                      <tr className="border-t border-gray-700">
                        <td className="px-4 py-2">Empathy based leadership</td>
                        <td className="px-4 py-2">✅</td>
                        <td className="px-4 py-2">❌</td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}

                {/* <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-4">Bug Fixes & <span className="text-cyan-400">Improvements</span></h3>
                  <ul className="space-y-4">
                    <li className="bg-gray-800 p-4 rounded-lg shadow">
                      <strong>[Fix]</strong> Tendency to overextend into multiple goals at once — now working with clearer monthly focus
                    </li>
                    <li className="bg-gray-800 p-4 rounded-lg shadow">
                      <strong>[Improvement]</strong> Shifting slowly from lack of execution to strength of action
                    </li>
                    <li className="bg-gray-800 p-4 rounded-lg shadow">
                      <strong>[Improvement]</strong> implementing more analytical thinking approach rather than following intuition
                    </li>
                    <li className="bg-gray-800 p-4 rounded-lg shadow">
                      <strong>[Fix]</strong> Hesitation in personal branding — taking my first step through this portfolio website
                    </li>
                  </ul>
                </div> */}
                <Dashboard/>


                
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
