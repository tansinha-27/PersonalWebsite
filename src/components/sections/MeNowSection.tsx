import { motion } from 'framer-motion';

export const MeNowSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center py-20 px-8 pr-16 bg-slate-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Me Now
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Today, I bring a rare combination: deep technical expertise paired with genuine business 
              understanding. I write code that scales, lead teams that deliver, and approach every 
              challenge with both analytical rigor and creative thinking.
            </p>
            <p>
              My core values haven&apos;t changed since those early days of curiosity: build things that matter, 
              write code that lasts, and always be learning. Currently focused on modern web architectures, 
              AI integration, and creating developer experiences that spark joy.
            </p>
            <p>
              What I bring to the table: a systems thinker who can zoom out to strategy and zoom in to 
              implementation details, a technical leader who codes alongside the team, and someone who 
              believes the best technology serves humanity, not the other way around.
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
