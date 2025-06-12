import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import CircularText from "../animations/CircularText";
import ScrollVelocity from '../animations/ScrollVelocity';
import '../../styles/sections/FirstSection.scss';

gsap.registerPlugin(ScrollTrigger);

function FirstSection() {
  const heroRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView || !heroRef.current) return;

    const ctx = gsap.context(() => {
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
    }, heroRef);

    return () => ctx.revert();
  }, [inView]);

  const textAnimation = ['MI AMOR *', 'MI VIDA *', 'MI CIELO *', 'MI NIÑA *', 'MI REINA *', 'MI PRINCESA *'];

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-content" ref={heroRef}>
        {inView && (
          <>
            <ScrollVelocity texts={textAnimation} velocity={100} className="custom-scroll-text" />
            <CircularText
              text="* MI AMOR * FELIZ CUMPLEAÑOS"
              onHover="pause"
              spinDuration={10}
              className="custom-class"
            />
            <ScrollVelocity texts={textAnimation} velocity={100} className="custom-scroll-text" />
          </>
        )}
      </div>
    </section>
  );
}

export default FirstSection;
