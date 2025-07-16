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
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Origin Story
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              It started with a broken computer and an insatiable curiosity. While other kids played outside, 
              I was dismantling electronics, fascinated by the intricate dance of circuits and code that 
              brought machines to life.
            </p>
            <p>
              That pivotal moment came at age 12 when I successfully fixed our family computer—not just 
              hardware, but diving deep into the software that made it tick. The rush of problem-solving, 
              the satisfaction of creation, the endless possibilities ahead. That&apos;s when I knew.
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
