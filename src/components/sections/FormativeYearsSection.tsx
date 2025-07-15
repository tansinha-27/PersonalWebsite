import { motion } from 'framer-motion';

export const FormativeYearsSection = () => {
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
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Formative Years
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              University wasn't just about algorithms and data structures—it was about learning to think 
              systematically, to break down impossible problems into manageable pieces. My first real 
              build was embarrassingly basic, but it worked.
            </p>
            <p>
              Late nights in computer labs, debugging sessions that lasted until dawn, and that first 
              successful deployment. Each project taught me something new: the importance of clean code, 
              user experience, and the delicate balance between perfection and shipping.
            </p>
            <p>
              The learning curve was steep, but every challenge overcome became a foundation stone 
              for what came next.
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
