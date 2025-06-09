// src/components/sections/ThingsAboutYou.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from "../animations/BlurText";
import '../../styles/sections/ThingsAboutYou.scss';

gsap.registerPlugin(ScrollTrigger);

function ThingsAboutYou() {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const listThingsAboutYou = [
    'Tu sonrisa que ilumina mis días.',
    'Tu voz suave que me calma.',
    'Cómo disfrutas un café helado.',
    'Tu amor por los tulipanes.',
    'La manera en que me miras.',
    'Tu pasión por las películas románticas.',
    'El aroma a vainilla que te encanta.',
    'Tu ternura infinita.',
    'Cómo me haces sentir amado cada día.',
    'Tu capacidad de hacer especial lo cotidiano.',
  ];

  return (
    <section className="things-about-you">
      <h2>10 cosas que amo de ti</h2>
      <ul className="things-about-you-list">
        {listThingsAboutYou.map((item, index) => (
          <li
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="things-about-you-list-item"
          >
            <span className="number">{index + 1}.</span>
            <BlurText
            text={item}
            delay={150}
            animateBy="words"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ThingsAboutYou;
