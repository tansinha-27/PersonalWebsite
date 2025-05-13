"use client";

// import { useEffect, useRef, useState } from "react";

// export default function ExpandableCards() {
//   const [expandedCard, setExpandedCard] = useState<number | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const cardData = [
//     {
//       title: "Things I am proud of.",
//       details:
//         "These workshops offer deep dives into building performant web apps with hands-on mentorship and real-world projects.",
//       align: "left",
//       transform: "translate(-6rem, -3rem)",
//     },
//     {
//       title: "Things I am not proud of.",
//       details:
//         "Each session is interactive and focuses on real-world debugging, optimization, and design best practices.",
//       align: "right",
//       transform: "translate(6rem, -1rem)",
//     },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(event.target as Node)
//       ) {
//         setExpandedCard(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div
//       className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center gap-20 p-6"
//       ref={containerRef}
//     >
//       {cardData.map((card, index) => {
//         const isExpanded = expandedCard === index;
//         const isLeft = card.align === "left";

//         return (
//           <div
//             key={index}
//             className={`relative w-full md:w-4/5 flex ${
//               isLeft ? "justify-start" : "justify-end"
//             }`}
//             style={{ transform: card.transform }}
//           >
//             <div
//               onClick={() =>
//                 setExpandedCard(isExpanded ? null : index)
//               }
//               className={`
//                 group cursor-pointer overflow-hidden
//                 transition-all duration-700 ease-in-out
//                 bg-black/40 border-white/30 backdrop-blur-md text-white
//                 hover:bg-white/20 
//                 border-[2px] rounded-xl p-6 h-56 origin-center
//                 shadow-[0_10px_40px_rgba(0,0,0,0.6)]
//                 flex items-end
//                 ${isExpanded ? "w-[660px] scale-95 animate-expand-bounce" : "w-96 scale-100"}
//               `}
//             >
//               <div className="flex w-full justify-between items-end transition-all duration-500 ease-in-out">
//                 <h2
//                   className={`
//                     text-xl font-semibold transition-colors duration-500
//                     group-hover:text-cyan-600
//                   `}
//                 >
//                   {card.title}
//                 </h2>

//                 {isExpanded && (
//                   <p className="font-raleway text-sm ml-6 max-w-[60%] text-white">
//                     {card.details}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }


import React, { useState } from 'react';

const Card: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'none' | 'top' | 'bottom'>('none');

  const handleTopClick = () => {
    setActiveSection(activeSection === 'top' ? 'none' : 'top');
  };

  const handleBottomClick = () => {
    setActiveSection(activeSection === 'bottom' ? 'none' : 'bottom');
  };

  return (
    <div className="relative w-full max-w-lg mx-auto h-[550px] rounded-3xl overflow-hidden mt-16 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      {/* Top section */}
      <div
        onClick={handleTopClick}
        className={`absolute top-0 left-0 w-full bg-gray-700 text-white px-6 py-6 cursor-pointer transition-all duration-500 ease-in-out
          ${activeSection === 'top' ? 'h-full z-20' : activeSection === 'bottom' ? 'h-0 z-10' : 'h-1/2 z-10'}
        `}
      >
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-semibold mb-6">Things which I am proud of</h2>
          {activeSection === 'top' && (
            <ul className="list-disc list-inside space-y-3 text-white text-base flex-grow overflow-y-auto pr-2">
              <li>Bagged a Day-1 placement offer on-campus</li>
              <li>Got interviewed by Ruskin Bond and Chetan Bhagat when I was 11 . (big W)</li>
              <li>Received 1 lac rupees talent scholarship in the seventh grade</li>
              <li>Became House Captain within a few months of joining</li>
              <li>Qualified every year for second level math/science olympiads</li>
              <li>Moved to compeletely new cities for my college and work</li>
            </ul>
          )}
        </div>
      </div>

      {/* Divider line */}
      {activeSection === 'none' && (
        <div className="absolute top-1/2 left-0 w-full border-t border-cyan-600 z-10" />
      )}

      {/* Bottom section */}
      <div
        onClick={handleBottomClick}
        className={`absolute bottom-0 left-0 w-full bg-gray-800 text-cyan-400 px-6 py-6 cursor-pointer transition-all duration-500 ease-in-out
          ${activeSection === 'bottom' ? 'h-full z-20' : activeSection === 'top' ? 'h-0 z-10' : 'h-1/2 z-10'}
        `}
      >
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-semibold mb-6">Things which shaped me</h2>
          {activeSection === 'bottom' && (
            <ul className="list-disc list-inside space-y-3 text-white text-base flex-grow overflow-y-auto pr-2">
              <li>Struggled immensely through competitive exams</li>
              <li>Failed to build a deeply technical profile in college</li>
              <li>Extremely reserved in public forums , classes and friend groups</li>
              <li>Hesitated to apply for global academic opportunites due to cost</li>
              <li>Lack of investment in a side hustle/passion project before corporate</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
