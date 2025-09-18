import { motion } from 'framer-motion';

export const OriginStorySection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center py-20 px-8 pr-16"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex justify-center"
          >
            <svg 
              width="400" 
              height="120" 
              viewBox="0 0 400 120" 
              className="text-cyan-500"
            >
              {/* Skyline Buildings */}
              <motion.path
                d="M0,100 L0,80 L20,80 L20,60 L40,60 L40,45 L60,45 L60,55 L80,55 L80,35 L100,35 L100,50 L120,50 L120,25 L140,25 L140,40 L160,40 L160,30 L180,30 L180,65 L200,65 L200,40 L220,40 L220,20 L240,20 L240,55 L260,55 L260,35 L280,35 L280,45 L300,45 L300,25 L320,25 L320,50 L340,50 L340,35 L360,35 L360,60 L380,60 L380,45 L400,45 L400,100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 3,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              />
              {/* Building windows */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 3 }}
              >
                <rect x="25" y="65" width="10" height="8" fill="currentColor" opacity="0.6" />
                <rect x="45" y="50" width="10" height="8" fill="currentColor" opacity="0.6" />
                <rect x="85" y="40" width="10" height="8" fill="currentColor" opacity="0.6" />
                <rect x="125" y="30" width="10" height="8" fill="currentColor" opacity="0.6" />
                <rect x="165" y="35" width="10" height="8" fill="currentColor" opacity="0.6" />
                <rect x="185" y="45" width="10" height="8" fill="currentColor" opacity="0.6" />
                <rect x="225" y="25" width="10" height="8" fill="currentColor" opacity="0.6" />
                <rect x="265" y="40" width="10" height="8" fill="currentColor" opacity="0.6" />
                <rect x="305" y="30" width="10" height="8" fill="currentColor" opacity="0.6" />
                <rect x="345" y="40" width="10" height="8" fill="currentColor" opacity="0.6" />
              </motion.g>
            </svg>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            the prototype phase.
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
            This phase was my early build — where inclinations took shape and values found their roots. I grew up in Delhi, surrounded by family, warmth, and the everyday cacophony that became my backdrop. In search of a fit,  I cycled through a plenty of classes — Kathak, skating, swimming, art, Kumon, tennis, western dance — (mostly unwillingly.) I was an introverted extrovert: choosing the library over games during substitution, yet cherishing time with friends greatly. 
            </p>
            <p>
            Confidence didn’t come easy; I iterated through versions of myself — the shy kid, the angsty teen, the star student, the self-conscious adolescent. Over time, I became functional in the ways that mattered. This prototype phase was where my core values solidified and maybe laid groundwork for my future desires.
            </p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-20 h-1 bg-sky-500 rounded mt-8"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
