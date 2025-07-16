import { motion, AnimatePresence} from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export const HeroSection = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = ['developer', 'designer', 'creator', 'innovator'];

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
        <h1 className="text-6xl md:text-8xl text-slate-900 mb-6">
          <span className="font-bold">Hi</span>, this is me beyond my resume
        </h1>
        
        <div className="text-2xl md:text-3xl text-slate-600 font-medium mb-16">
          I'm a
          <span className="relative inline-flex w-32 justify-center overflow-hidden">
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

<AnimatePresence mode="wait">
    <motion.span
      key={titles[titleNumber]}
      className="absolute font-semibold text-sky-600"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      {titles[titleNumber]}
    </motion.span>
  </AnimatePresence>
          </span>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <ChevronDown className="w-8 h-8 text-sky-500 mx-auto" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};