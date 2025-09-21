
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { OriginStorySection } from '@/components/sections/OriginStorySection';
import { FormativeYearsSection } from '@/components/sections/FormativeYearsSection';
// import { GoldenPhaseSection } from '@/components/sections/GoldenPhaseSection';
import { MeNowSection } from '@/components/sections/MeNowSection';
import { ConnectSection } from '@/components/sections/ConnectSection';

const sections = [
  { id: 'hero', component: HeroSection, title: 'Start' },
  { id: 'origin', component: OriginStorySection, title: 'Origin' },
  { id: 'formative', component: FormativeYearsSection, title: 'Learning' },
  // { id: 'golden', component: GoldenPhaseSection, title: 'Growth' },
  { id: 'now', component: MeNowSection, title: 'Present' },
  { id: 'connect', component: ConnectSection, title: 'Connect' },
];

const Index = () => {
  console.log('Index component rendering');
  const [activePanel, setActivePanel] = useState(true); 
  console.log('Sections:', sections);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
//   const [setIsClosing] = useState(false);
// RESPONSIVE: Add state to track mobile/desktop view
const [isMobile, setIsMobile] = useState(false);

 // RESPONSIVE: Effect to handle window resize and detect mobile screens
 useEffect(() => {
  const checkScreenSize = () => {
    // Consider screens smaller than 768px as mobile (md breakpoint)
    setIsMobile(window.innerWidth < 768);
  };

  // Check initial screen size
  checkScreenSize();

  // Listen for window resize events
  window.addEventListener('resize', checkScreenSize);
  return () => window.removeEventListener('resize', checkScreenSize);
}, []);
  
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

//   const handleClose = () => {
//     setIsClosing(true);
//     // Add any close logic here
//   };
// RESPONSIVE: Function to scroll to specific section (useful for mobile navigation)
const scrollToSection = (index: number) => {
  const container = containerRef.current;
  if (!container) return;
  
  const sectionHeight = container.clientHeight;
  container.scrollTo({
    top: index * sectionHeight,
    behavior: 'smooth'
  });
};

//   const CurrentComponent = sections[currentSection]?.component || HeroSection;

  return (
    <div className="fixed inset-0 bg-slate-900 z-50">
      {activePanel && (
        <HeroSection onClose={() => setActivePanel(false)} />
      )}
      {/* Close Button */}
      {/* <button
        onClick={() => setActivePanel(null)}
        className="fixed top-6 right-6 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-colors"
      >
        <X className="w-5 h-5 text-slate-600" />
      </button> */}
      

      {/* Timeline */}
      {/* <div className="fixed left-10 top-1/2 -translate-y-1/2 z-40 space-y-4">
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
      </div> */}

      {/* RESPONSIVE: Timeline - Hidden on mobile, repositioned on tablet */}
      <div className={`
        fixed z-40 space-y-4 transition-all duration-300
        ${isMobile 
          ? 'hidden' // Hide on mobile completely
          : 'left-4 md:left-10 top-1/2 -translate-y-1/2' // Responsive positioning
        }
      `}>
        {sections.map((section, index) => (
          <div 
            key={section.id} 
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection(index)} // RESPONSIVE: Make timeline clickable
          >
            <div
              className={`
                w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300
                ${index === currentSection
                  ? 'bg-sky-500 scale-125'
                  : index < currentSection
                  ? 'bg-sky-300'
                  : 'bg-slate-300'
                }
              `}
            />
            <span
              className={`
                text-xs md:text-sm font-medium transition-colors duration-300
                ${index === currentSection
                  ? 'text-sky-600'
                  : 'text-slate-500'
                }
              `}
            >
              {section.title}
            </span>
          </div>
        ))}
      </div>

      {/* RESPONSIVE: Mobile Navigation Bar - Only visible on mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-t border-slate-200 px-4 py-2">
          <div className="flex justify-between items-center max-w-sm mx-auto">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className={`
                  flex-1 text-center py-2 px-1 rounded-md transition-all duration-300
                  ${index === currentSection
                    ? 'bg-sky-100 text-sky-600'
                    : 'text-slate-500 hover:text-slate-700'
                  }
                `}
              >
                {/* RESPONSIVE: Show dots on very small screens, text on larger mobile screens */}
                <div className="flex flex-col items-center space-y-1">
                  <div
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${index === currentSection
                        ? 'bg-sky-500'
                        : index < currentSection
                        ? 'bg-sky-300'
                        : 'bg-slate-300'
                      }
                    `}
                  />
                  <span className="text-xs font-medium truncate w-full">
                    {section.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Scroll Container */}
      {/* <div 
        ref={containerRef} 
        className="fixed inset-0 overflow-y-scroll snap-y snap-mandatory"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
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
      </div> */}

<div 
    
        ref={containerRef} 
        className={`
          fixed inset-0 overflow-y-scroll snap-y snap-mandatory
          ${isMobile ? 'pb-16' : ''} // Add bottom padding on mobile for navigation bar
        `}
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {/* RESPONSIVE: Individual sections with responsive styling */}
        {sections.map((section, index) => {
          console.log(`Rendering section ${index}:`, section.id, section.component);
          return (
            <div
              key={section.id}
              className={`
                h-screen snap-start relative bg-slate-900
                ${isMobile 
                  ? 'bg-gradient-to-b from-slate-50 to-white' // Mobile gradient
                  : 'bg-gradient-to-br from-slate-50 via-white to-slate-50' // Desktop gradient
                }
              `}
            >
              {/* RESPONSIVE: Section wrapper with responsive padding and margins */}
              <div className={`
                h-full w-full
                ${isMobile 
                  // ? 'px-4 py-6' // Mobile: smaller padding
                  // : 'px-8 py-8 md:px-12 lg:px-16' // Desktop: responsive padding
                }
              `}>
                <section.component />
              </div>
            </div>
          );
        })}
      </div>

      {/* Hide scrollbar with CSS */}
      <style>{`

        body {
          overflow: hidden;
        }

        /* Hide scrollbar on all browsers */
        [style*="scrollbarWidth"]::-webkit-scrollbar {
          display: none;
        }
        
        /* RESPONSIVE: Ensure smooth scrolling on mobile devices */
        @media (max-width: 767px) {
          .snap-y {
            scroll-snap-type: y mandatory;
            -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
          }
          
          .snap-start {
            scroll-snap-align: start;
            scroll-snap-stop: always; /* Force stop at each section on mobile */
          }
        }
        
        /* RESPONSIVE: Optimize for tablet screens */
        @media (min-width: 768px) and (max-width: 1024px) {
          .snap-y {
            scroll-snap-type: y proximity; /* Less strict snapping on tablets */
          }
        }
        
        /* RESPONSIVE: Ensure proper viewport height on mobile browsers */
        @supports (-webkit-touch-callout: none) {
          .h-screen {
            height: 100vh;
            height: -webkit-fill-available;
          }
        }
      `}</style>

    </div>
  );
};

export default Index;
