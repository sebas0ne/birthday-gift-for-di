// src/components/sections/FirstSection.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CircularText from "../animations/CircularText";
import ScrollVelocity from '../animations/ScrollVelocity';
import '../../styles/sections/FirstSection.scss';

gsap.registerPlugin(ScrollTrigger);

function FirstSection() {
    const heroRef = useRef(null);
    useEffect(() => {
      gsap.to(heroRef.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, []);
  const textAnimation = ['MI AMOR *', 'MI VIDA *', 'MI CIELO *', 'MI NIÑA *', 'MI REINA *', 'MI PRINCESA *'];

  return (
    <section className="hero-section">
      <div className="hero-content" ref={heroRef}>
      <ScrollVelocity
        texts={textAnimation}
        velocity={100} 
        className="custom-scroll-text"
      />
        <CircularText
          text="* MI AMOR * FELIZ CUMPLEAÑOS"
          onHover="pause"
          spinDuration={10}
          className="custom-class"
         />
      <ScrollVelocity
        texts={textAnimation}
        velocity={100} 
        className="custom-scroll-text"
      />
      </div>
    </section>
  );
}

export default FirstSection;
