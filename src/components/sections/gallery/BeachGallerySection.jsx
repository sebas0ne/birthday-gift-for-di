// src/components/sections/FirstYearGallerySection.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gallery from "../../common/Gallery";
import '../../../styles/sections/SectionGallerySecondary.scss';

gsap.registerPlugin(ScrollTrigger);

const BeachGallerySection = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el) => {
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
  }, []);

  const galleryItems = [
    {
      img: '/images/playa-6.webp',
      caption: 'La IA hizo estilo Disney nuestra foto favorita.',
    },
    {
      img: '/images/playa-4.webp',
      caption: 'La IA hizo estilo Disney nuestra foto favorita.',
    },
    {
      img: '/images/playa-5.webp',
      caption: 'La IA hizo estilo Disney nuestra foto favorita.',
    },
    {
      img: '/images/playa-1.webp',
      caption: 'La IA nos hizo parte del universo de HP.',
    },
    {
      img: '/images/playa-2.webp',
      caption: 'Juntos en la playa con estilo GTA, gracias IA.',
    },
    {
      img: '/images/playa-3.webp',
      caption: 'La IA hizo estilo Disney nuestra foto favorita.',
    },
  ];

  return (
    <section className="galeria">
        <Gallery images={galleryItems} title={'EN LA PLAYITA'}/>
    </section>
  );
}

export default BeachGallerySection;
