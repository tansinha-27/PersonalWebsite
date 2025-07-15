import { motion } from 'framer-motion';
import { useState } from 'react';
import { Coffee, Code, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const ConnectSection = () => {
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null);

  const pollOptions = [
    { id: 'tech', label: 'Latest tech adventures', icon: Code },
    { id: 'coffee', label: 'Coffee & creative processes', icon: Coffee },
    { id: 'future', label: 'Future project ideas', icon: Rocket },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center py-20 px-8 pr-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-700 mb-12 leading-relaxed max-w-2xl mx-auto">
            Beyond the code, I'm passionate about specialty coffee, sustainable technology, 
            and the intersection of design and engineering. Always excited to collaborate on 
            projects that push boundaries.
          </p>

          {/* Poll Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              What should we talk about first?
            </h3>
            <div className="grid gap-4 md:grid-cols-3 max-w-2xl mx-auto">
              {pollOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedPoll === option.id 
                      ? 'ring-2 ring-sky-500 bg-sky-50' 
                      : 'hover:bg-slate-50'
                  }`}
                  onClick={() => setSelectedPoll(option.id)}
                >
                  <option.icon className="w-8 h-8 text-sky-500 mx-auto mb-3" />
                  <p className="text-sm font-medium text-slate-700">{option.label}</p>
                </Card>
              ))}
            </div>
            {selectedPoll && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-sky-600 font-medium"
              >
                Great choice! Let's dive into that conversation.
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
