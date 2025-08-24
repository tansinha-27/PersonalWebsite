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
{/* 
<motion.svg
  width="100%"
  height="120"
  viewBox="0 0 500 120"
  xmlns="http://www.w3.org/2000/svg"
>
  
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
      duration: 4,
      delay: 0.3,
      ease: "easeInOut",
    }}
  />

  
  <motion.path
    d="M450,20 L450,90"
    stroke="#00BFE8"
    strokeWidth="8"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.1 }}
  />


  <motion.path
    d="M445,90 L445,90 L450,100 Z"
    fill="#444"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 1 }}
  />

 
  <motion.path
    d="M450,88 L446,94 L454,94 Z"
    fill="#C49E60"
    stroke="currentColor"
    strokeWidth="1"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 1.1 }}
  />

  
  <motion.circle
    cx="450"
    cy="10"
    r="7"
    fill="none"
    stroke="#00BFE8"
    strokeWidth="2"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 1.5 }}
  />

  
  <motion.path
    d="M442,18 L458,18 M442,14 L458,14"
    stroke="#00BFE8"
    strokeWidth="2"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 2 }}
  />
</motion.svg> */}

          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Formative Years
          </h2>
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              University wasn&apos;t just about algorithms and data structures—it was about learning to think 
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
