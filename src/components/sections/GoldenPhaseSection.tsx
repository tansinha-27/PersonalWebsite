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
