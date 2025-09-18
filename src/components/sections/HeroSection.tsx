import { motion, AnimatePresence} from 'framer-motion';
import { ChevronDown, Code , MicVocal ,MapPinCheckIcon, Library ,PenLine, Users , Circle } from 'lucide-react';
import { useState, useEffect } from 'react';

export const HeroSection = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = ['story', 'designer', 'creator'];

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center z-10 px-8"
      >
        
        <h1 className="text-6xl md:text-7xl text-slate-900 mb-6">
          <span className="font-bold">hi</span>, this is me beyond my resume
        </h1>
        
        <div className="text-2xl md:text-3xl text-slate-600 font-medium mb-16">
          {/* I&apos;m a */} this is where my
          <span className="relative inline-flex w-20 justify-center items-end text-sky-600 " style={{ height: '2.5rem' }}> story
            {/* {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute font-semibold text-sky-600"
                initial={{ opacity: 0, y: "-100" }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : {
                        y: titleNumber > index ? -150 : 150,
                        opacity: 0,
                      }
                }
              >
                {title}
              </motion.span>
            ))} */}

{/* <AnimatePresence mode="wait">
    <motion.span
      key={titles[titleNumber]}
      className="absolute font-semibold text-sky-600"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 8 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      style={{ lineHeight: '1.25' }}

    >
      {titles[titleNumber]}
    </motion.span>
  </AnimatePresence> */}
          </span>
          {/* &nbsp; */}
          ships.
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <ChevronDown className="w-8 h-8 text-sky-500 mx-auto" />
        </motion.div>

        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 z-20">
        <p className="text-slate-600 font-medium text-sm mb-4 text-center">things I like to do</p>
                {/* App Dock */}
                <div className="flex items-center gap-18 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl px-8 py-4 shadow-lg">
          {[
            { icon: Code, name: 'VS Code', color: 'bg-blue-500', hoverText: 'build through code' },
            { icon: MicVocal, name: 'Figma', color: 'bg-gradient-to-br from-purple-500 to-pink-500', hoverText: 'jam music' },
            { icon: MapPinCheckIcon, name: 'Photos', color: 'bg-gradient-to-br from-yellow-400 to-orange-500', hoverText: 'travel for experience' },
            { icon: Library, name: 'Spotify', color: 'bg-green-500', hoverText: 'devour books' },
            { icon: PenLine, name: 'Safari', color: 'bg-blue-400', hoverText: 'pen down articles & blogs' },
            { icon: Circle, name: 'Terminal', color: 'bg-gray-800', hoverText: 'play table tennis' },
            { icon: Users, name: 'iPhone', color: 'bg-gray-600', hoverText: 'analyze people patterns' }
          ].map((app, index) => (
            <motion.div
              key={app.name}
              className="group relative"
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-14 h-14 ${app.color} rounded-lg flex items-center justify-center cursor-pointer shadow-lg transition-all duration-200 group-hover:shadow-xl`}>
                <app.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              
              {/* Hover Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {app.hoverText}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
        
      {/* </motion.div> */}
      </motion.div>
    </motion.section>
  );
};