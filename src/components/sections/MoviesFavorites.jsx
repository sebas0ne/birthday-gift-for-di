// src/components/MoviesFavorites.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MovieCarousel from '../animations/MovieCarousel';
import '../../styles/sections/MoviesFavorites.scss';

gsap.registerPlugin(ScrollTrigger);

function MoviesFavorites() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="rincon-favorito" ref={sectionRef}>
      <div style={{height: '940px', position: 'relative'}}>
        <MovieCarousel />
      </div>
    </section>
  );
}

export default MoviesFavorites;
