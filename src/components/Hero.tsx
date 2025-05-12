"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Hero = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);


  useEffect(() => {
    const loadVanta = async () => {
      const VANTA = (await require("vanta/dist/vanta.fog.min")).default;

      if (!vantaEffect && vantaRef.current) {
        setVantaEffect(
          VANTA({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0xffffff,
            midtoneColor: 0x66bed4,
            lowlightColor: 0x2a3f7a,
            baseColor: 0xedd7d7,
          })
        );
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="h-screen w-full flex items-center justify-center text-white relative"
    >
      
    </div>
  );
};

export default Hero;
