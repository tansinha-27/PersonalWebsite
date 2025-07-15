
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { OriginStorySection } from '@/components/sections/OriginStorySection';
import { FormativeYearsSection } from '@/components/sections/FormativeYearsSection';
import { GoldenPhaseSection } from '@/components/sections/GoldenPhaseSection';
import { MeNowSection } from '@/components/sections/MeNowSection';
import { ConnectSection } from '@/components/sections/ConnectSection';

const sections = [
  { id: 'hero', component: HeroSection, title: 'Start' },
  { id: 'origin', component: OriginStorySection, title: 'Origin' },
  { id: 'formative', component: FormativeYearsSection, title: 'Learning' },
  { id: 'golden', component: GoldenPhaseSection, title: 'Growth' },
  { id: 'now', component: MeNowSection, title: 'Present' },
  { id: 'connect', component: ConnectSection, title: 'Connect' },
];

const Index = () => {
  console.log('Index component rendering');
  console.log('Sections:', sections);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const sectionIndex = Math.floor(scrollTop / containerHeight);
      const clampedIndex = Math.max(0, Math.min(sectionIndex, sections.length - 1));
      setCurrentSection(clampedIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Add any close logic here
  };

  const CurrentComponent = sections[currentSection]?.component || HeroSection;

  return (
    <div className="relative">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="fixed top-6 right-6 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-colors"
      >
        <X className="w-5 h-5 text-slate-600" />
      </button>

      {/* Timeline */}
      <div className="fixed left-10 top-1/2 -translate-y-1/2 z-40 space-y-4">
        {sections.map((section, index) => (
          <div key={section.id} className="flex items-center space-x-3">
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSection
                  ? 'bg-sky-500 scale-125'
                  : index < currentSection
                  ? 'bg-sky-300'
                  : 'bg-slate-300'
              }`}
            />
            <span
              className={`text-sm font-medium transition-colors duration-300 ${
                index === currentSection
                  ? 'text-sky-600'
                  : 'text-slate-500'
              }`}
            >
              {section.title}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll Container */}
      <div 
        ref={containerRef} 
        className="w-full h-screen overflow-y-scroll snap-y snap-mandatory"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {/* Individual sections for scrolling */}
        {sections.map((section, index) => {
          console.log(`Rendering section ${index}:`, section.id, section.component);
          return (
            <div
              key={section.id}
              className="h-screen snap-start bg-gradient-to-b from-slate-50 to-white relative"
            >
              <section.component />
            </div>
          );
        })}
      </div>

      {/* Hide scrollbar with CSS */}
      <style>{`
        [style*="scrollbarWidth"]::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </div>
  );
};

export default Index;
