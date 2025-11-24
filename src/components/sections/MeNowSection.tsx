import { motion } from 'framer-motion';

export const MeNowSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center py-12 px-4 sm:py-20 sm:px-8 sm:pr-16 bg-slate-50"
    >
      <div className="max-w-4xl mx-auto w-full">
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
            className="mb-8 sm:mb-12 flex justify-center items-center"
          >
            <svg
              viewBox="0 0 400 120"
              className="text-cyan-500 w-full max-w-[300px] sm:max-w-[400px] h-auto"
            >
              {/* Laptop with lightbulb */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.path
                  d="M30,70 L80,70 L85,80 L25,80 Z M35,50 L75,50 L75,70 L35,70 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                />
                {/* Lightbulb */}
                <motion.circle
                  cx="55"
                  cy="55"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                />
                <motion.path
                  d="M48,55 L62,55 M52,52 L58,52 M52,58 L58,58"
                  stroke="currentColor"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 2 }}
                />
              </motion.g>

              {/* Stack of items */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <motion.path
                  d="M120,75 L160,75 L160,80 L120,80 Z M125,70 L155,70 L155,75 L125,75 Z M130,65 L150,65 L150,70 L130,70 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 3 }}
                />
              </motion.g>

              {/* Magnifying glass */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 3.5 }}
              >
                <motion.circle
                  cx="200"
                  cy="65"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 4 }}
                />
                <motion.path
                  d="M210,75 L220,85"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 4.5 }}
                />
              </motion.g>

              {/* Microphone */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 4.5 }}
              >
                <motion.path
                  d="M270,50 L270,70 M260,70 Q260,80 270,80 Q280,80 280,70 M275,85 L275,90 L265,90"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 5 }}
                />
                <motion.path
                  d="M265,50 L275,50 L275,65 L265,65 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 5.5 }}
                />
              </motion.g>

            </svg>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 sm:mb-8">
            the scaling phase.
          </h2>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed text-justify sm:text-left">
            <p>
              Today, I bring a combination of technical depth paired with genuine business curiosity. I love solving problems where both worlds meet — approaching every challenge with analytical rigor and creative imagination.
              My core values haven’t changed since those early prototypes: build things that matter, write code with purpose, and always be learning.
            </p>
            <p>
              Right now, I’m focused on modern web architectures, AI integration, and designing experiences that spark joy and personalization.What I bring to the table: reliability, scalability, and creativity — traits that evolve with every version.
            </p>
            {/* <p>
              What I bring to the table: a systems thinker who can zoom out to strategy and zoom in to 
              implementation details, a technical leader who codes alongside the team, and someone who 
              believes the best technology serves humanity, not the other way around.
            </p> */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-16 h-1 sm:w-20 bg-sky-500 rounded mt-6 sm:mt-8"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
