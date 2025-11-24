'use client';


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import '../app/globals.css';


import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Index from "../components/index";
import Dashboard from "@/components/Dashboard";


export default function Home() {
  const [activePanel, setActivePanel] = useState<"first" | "last" | null>(null);

  const [hoveredPanel, setHoveredPanel] = useState<"first" | "last" | null>(null);




  const handleClick = (panel: "first" | "last") => {
    setActivePanel(panel);
  };



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


      {!activePanel && (
        <button
          onClick={handleDownloadResume}
          className="fixed top-8 right-8 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-cyan-700 hover:shadow-xl transition-all duration-300 z-40"
        >
          <Download size={18} />
          <span className="text-sm font-medium">Resume</span>
        </button>
      )}




      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40 transition-opacity duration-500 z-0 pointer-events-none"
        src="/videos/myvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />






      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold space-y-4 transform -translate-x-2 sm:-translate-x-4 md:-translate-x-6">
        <motion.div

          onMouseEnter={() => setHoveredPanel("first")}
          onMouseLeave={() => setHoveredPanel(null)}
          onClick={() => handleClick("first")}
          whileHover={{ x: -30 }} // shift left on hover (desktop)

          className="cursor-pointer text-cyan-700 hover:text-cyan-500 transition font-normal tracking-widest -translate-x-2 sm:-translate-x-12 tracking-wide group"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleClick("first")}
        >
          Tanishaa
          <sup className="text-xs sm:text-base align-top text-gray-500 transition-all duration-200 group-hover:text-sm group-hover:sm:text-lg">
            {hoveredPanel === "first" ? "[who I am]" : "[personal]"} </sup>
        </motion.div>

        <motion.div

          onMouseEnter={() => setHoveredPanel("last")}
          onMouseLeave={() => setHoveredPanel(null)}
          onClick={() => handleClick("last")}
          whileHover={{ x: 30 }} // shift left on hover (desktop)
          className="cursor-pointer text-gray-900 hover:text-gray-700 transition font-normal tracking-widest translate-x-12 sm:translate-x-23 group"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleClick("last")}
        >
          Sinha
          <sup className="text-xs sm:text-base align-top text-gray-500 transition-all duration-200 group-hover:text-sm group-hover:sm:text-lg">{hoveredPanel === "last" ? "[what I bring so far]" : "[professional]"}</sup>

        </motion.div>


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
              className="group p-3 sm:p-4 transform transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-2"
            >
              <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center">
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



            {activePanel === "first" && (
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="fixed inset-0 bg-gray-950 text-white z-30 overflow-y-auto scroll-smooth">


                  {/* Left Section */}
                  <div className="w-full h-screen ">

                    <Index />
                    <div className="absolute top-4 right-4 z-[60]">
                      <button
                        onClick={() => setActivePanel(null)}
                        className="
                  text-slate-600
                  transition-all duration-200 ease-in-out
                  hover:scale-105
                  active:scale-95
                "
                        aria-label="Close and return to homepage"
                      >
                        <X size={32} className="w-8 h-8" />
                      </button>
                    </div>

                  </div>



                </motion.div>



              </div>


            )}





            {activePanel === "last" && (
              <div className="fixed inset-0 overflow-y-auto scroll-smooth z-50"
                style={{
                  width: '100vw',
                  height: '100vh',
                  margin: '0',
                  padding: '0'
                }}>
                <div className="absolute top-4 right-4 z-50">
                  <button
                    onClick={() => setActivePanel(null)} // Make sure this function is available in your component
                    className="
          text-slate-600
          transition-all duration-200 ease-in-out
          hover:scale-105
          active:scale-95
        "
                    aria-label="Close and return to homepage"
                  >
                    <X size={32} className="w-8 h-8" />
                  </button>
                </div>

                <Dashboard />



              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
