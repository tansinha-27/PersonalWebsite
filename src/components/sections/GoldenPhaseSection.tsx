import { motion } from 'framer-motion';

export const GoldenPhaseSection = () => {
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
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
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
              width="350" 
              height="120" 
              viewBox="0 0 350 120" 
              className="text-cyan-500"
            >
              {/* Curved path connecting two locations */}
              <motion.path
                d="M100,70 Q175,30 250,70"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 2,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              />
              
              {/* First location pin */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.5 }}
              >
                <motion.path
                  d="M100,70 Q95,65 95,60 Q95,55 100,50 Q105,55 105,60 Q105,65 100,70 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 3 }}
                />
                <motion.circle
                  cx="100"
                  cy="57"
                  r="2"
                  fill="currentColor"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 3.5 }}
                />
              </motion.g>
              
              {/* Second location pin */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 3.2 }}
              >
                <motion.path
                  d="M250,70 Q245,65 245,60 Q245,55 250,50 Q255,55 255,60 Q255,65 250,70 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 3.7 }}
                />
                <motion.circle
                  cx="250"
                  cy="57"
                  r="2"
                  fill="currentColor"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 4.2 }}
                />
              </motion.g>
            </svg>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Golden Phase
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              The breakthrough moment: leading a team that built something people actually loved and used. 
              Scaling from hundreds to thousands of users, each feature decision carrying real weight, 
              real impact on real lives.
            </p>
            <p>
              Key wins included architecting systems that could handle massive growth, mentoring junior 
              developers who became leaders themselves, and that one project that got featured in industry 
              publications. Not just for the technical achievement, but for solving a genuine human problem.
            </p>
            <p>
              This phase taught me that great technology isn&apos;t about complexity—it&apos;s about clarity, 
              reliability, and the seamless experience that makes users forget they&apos;re using technology at all.
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
