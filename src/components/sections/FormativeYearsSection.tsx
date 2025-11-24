import { motion } from 'framer-motion';

export const FormativeYearsSection = () => {
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
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 flex justify-center"
          >
            <svg
              viewBox="0 0 350 120"
              className="text-cyan-500 w-full max-w-[300px] sm:max-w-[350px] h-auto"
            >
              <motion.path
                d="M250,20 L250,80"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              <motion.path
                d="M250,80 L245,90 L255,90 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.3 }}
              />

              <motion.circle
                cx="250"
                cy="15"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.8 }}
              />

              <motion.path
                d="M242,25 L258,25 M242,20 L258,20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 2.3 }}
              />

              <motion.path
                d="M50,90 Q100,40 150,60 Q200,80 250,90 Q300,100 350,85 Q400,70 450,90"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2.5,
                  delay: 2.8,
                  ease: "easeInOut"
                }}
              />
            </svg>


          </motion.div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 sm:mb-8">
            the launch phase.          </h2>
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed text-justify sm:text-left">
            <p>
              This was the moment I shipped myself into the real world. Education turned into career choices, ideas became execution, and uncertainty met reality. College was my production environment — part testing ground, part playground. I leaned into opportunities-leading clubs, brainstorming startup ideas, testing paths like DSA and research (and quickly realizing they weren’t my cup of tea). I built memories to last a lifetime, and lived through every high and low: I laughed, I cried, I thrived.
            </p>
            {/* <p> I particapted in various clubs, tried my hand to hardcore DSA, explore technical writing, ideated on building a content platform, </p> */}
            <p>
              The most valuable discovery from this phase was my inclination toward leadership and how much I enjoy building a brand. Safe to say, will always remain some of the best years of my entire lifecycle.
            </p>
            {/* <p>
              
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
