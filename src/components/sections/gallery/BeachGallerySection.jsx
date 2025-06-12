// src/components/sections/FirstYearGallerySection.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import Gallery from "../../common/Gallery";
import '../../../styles/sections/SectionGallerySecondary.scss';

gsap.registerPlugin(ScrollTrigger);

const BeachGallerySection = () => {
  const galleryContainerRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (!inView || !galleryContainerRef.current) return;

    const elements = galleryContainerRef.current.querySelectorAll('.galeria-item');

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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
  }, [inView]);

  const galleryItems = [
    {
      img: '/images/gallery/playa-6.webp',
      caption: 'La IA hizo estilo Disney nuestra foto favorita.',
    },
    {
      img: '/images/gallery/playa-4.webp',
      caption: 'La IA hizo estilo Disney nuestra foto favorita.',
    },
    {
      img: '/images/gallery/playa-5.webp',
      caption: 'La IA hizo estilo Disney nuestra foto favorita.',
    },
    {
      img: '/images/gallery/playa-1.webp',
      caption: 'La IA nos hizo parte del universo de HP.',
    },
    {
      img: '/images/gallery/playa-2.webp',
      caption: 'Juntos en la playa con estilo GTA, gracias IA.',
    },
    {
      img: '/images/gallery/playa-3.webp',
      caption: 'La IA hizo estilo Disney nuestra foto favorita.',
    },
  ];

  return (
    <section className="galeria" ref={ref}>
      {inView && (
        <div ref={galleryContainerRef}>
          <Gallery images={galleryItems} title={'EN LA PLAYITA'} />
        </div>
      )}
    </section>
  );
};

export default BeachGallerySection;
