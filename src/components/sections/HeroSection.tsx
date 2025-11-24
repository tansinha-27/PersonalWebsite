import { motion } from 'framer-motion';
import { ChevronDown, Code, MicVocal, MapPinCheckIcon, Library, PenLine, Users, Circle } from 'lucide-react';
// import { useState, useEffect } from 'react';
import { X } from 'lucide-react';


export const HeroSection = () => {


  return (
    <motion.section
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center z-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
      >

        <h1 className="text-4xl sm:text-5xl md:text-7xl text-slate-900 mb-6 leading-tight">
          <b>hi,</b>  this is me beyond my resume
        </h1>

        <div className="text-xl sm:text-2xl md:text-3xl text-slate-600 font-medium mb-12 sm:mb-16">
          {/* I&apos;m a */} this is where my
          <span className="relative inline-flex w-20 justify-center items-end text-sky-600 " style={{ height: '2.5rem' }}> story
          </span>
          {/* &nbsp; */}
          ships.
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-8 sm:mt-16"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-sky-500 mx-auto" />
        </motion.div>

        <div className="absolute bottom-8 sm:bottom-14 left-1/2 transform -translate-x-1/2 z-20 w-full px-4">
          <p className="text-slate-600 font-medium text-sm sm:text-lg mb-4 text-center">things I like to do</p>
          {/* App Dock */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl sm:rounded-3xl px-4 py-3 sm:px-8 sm:py-4 shadow-lg max-w-full overflow-x-auto no-scrollbar">
            {[
              { icon: Code, name: 'VS Code', color: 'bg-blue-500', hoverText: 'build through code' },
              { icon: MicVocal, name: 'Figma', color: 'bg-gradient-to-br from-purple-500 to-pink-500', hoverText: 'jam music' },
              { icon: MapPinCheckIcon, name: 'Photos', color: 'bg-gradient-to-br from-yellow-400 to-orange-500', hoverText: 'travel for experience' },
              { icon: Library, name: 'Spotify', color: 'bg-green-500', hoverText: 'devour books' },
              { icon: PenLine, name: 'Safari', color: 'bg-blue-400', hoverText: 'pen down articles & blogs' },
              { icon: Circle, name: 'Terminal', color: 'bg-gray-800', hoverText: 'play table tennis' },
              { icon: Users, name: 'iPhone', color: 'bg-gray-600', hoverText: 'analyze people patterns' }
            ].map((app) => (
              <motion.div
                key={app.name}
                className="group relative flex-shrink-0"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-10 h-10 sm:w-14 sm:h-14 ${app.color} rounded-lg flex items-center justify-center cursor-pointer shadow-lg transition-all duration-200 group-hover:shadow-xl`}>
                  <app.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
                </div>

                {/* Hover Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:block">
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