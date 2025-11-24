import { motion } from 'framer-motion';
import { useState } from 'react';
import { Wand, BrainCog, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const ConnectSection = () => {
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null);

  const pollOptions = [
    { id: 'tech', label: 'Was Harry really the hero, or just a plot device while Hermione did all the work?', icon: Wand },
    { id: 'coffee', label: 'Should AI become more human or should humans act less robotic?', icon: BrainCog },
    { id: 'future', label: 'What’s one conspiracy theory which blew your mind?', icon: Rocket },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center py-12 px-4 sm:py-20 sm:px-8 sm:pr-16"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 sm:mb-8">
            reach out.        </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto">
            I would love to know more into topics like business, psychology,consumer tech, fitness, or anything we might have in common. Always up for meeting new people — whether it’s to swap ideas, brainstorm, or just vent.          </p>

          {/* Poll Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-6">
              What should we talk about first?
            </h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto">
              {pollOptions.map((option) => (
                <Card
                  key={option.id}
                  className={`p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${selectedPoll === option.id
                      ? 'ring-2 ring-sky-500 bg-sky-50'
                      : 'hover:bg-slate-50'
                    }`}
                  onClick={() => setSelectedPoll(option.id)}
                >
                  <option.icon className="w-6 h-6 sm:w-8 sm:h-8 text-sky-500 mx-auto mb-3" />
                  <p className="text-xs sm:text-sm font-medium text-slate-700">{option.label}</p>
                </Card>
              ))}
            </div>
            {selectedPoll && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-sky-600 font-medium text-sm sm:text-base"
              >
                Great choice! Let&apos;s dive into that conversation.
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
