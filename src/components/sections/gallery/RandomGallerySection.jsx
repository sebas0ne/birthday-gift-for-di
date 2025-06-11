// src/components/sections/RandomGallerySection.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gallery from "../../common/Gallery";
import '../../../styles/sections/SectionGallery.scss';

gsap.registerPlugin(ScrollTrigger);

const RandomGallerySection = () => {
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
      img: '/images/random-1.webp',
      caption: 'Nosotros y un filtro gracioso.',
    },
    {
      img: '/images/random-2.webp',
      caption: 'Playa y tu sonrisa.',
    },
    {
      img: '/images/random-3.webp',
      caption: 'Viendo tu peli favorita en Live Action',
    }
  ];

  return (
    <section className="galeria">
        <Gallery images={galleryItems} title={'FOTOS RANDOM'}/>
    </section>
  );
}

export default RandomGallerySection;
