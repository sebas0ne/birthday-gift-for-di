// src/components/sections/MyFavoritePhotosGallerySection.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import Gallery from "../../common/Gallery";
import '../../../styles/sections/SectionGallery.scss';

gsap.registerPlugin(ScrollTrigger);

const MyFavoritePhotosGallerySection = () => {
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
      img: '/images/gallery/favoritephotos-1.webp',
      caption: 'Tan buena sonrisa como el chifa que compartimos',
    },
    {
      img: '/images/gallery/favoritephotos-2.webp',
      caption: 'Playa y tu sonrisa.',
    },
    {
      img: '/images/gallery/favoritephotos-3.webp',
      caption: 'Viendo tu peli favorita en Live Action',
    },
    {
      img: '/images/gallery/favoritephotos-4.webp',
      caption: 'Viendo tu peli favorita en Live Action',
    },
    {
      img: '/images/gallery/favoritephotos-5.webp',
      caption: 'Viendo tu peli favorita en Live Action',
    },
    {
      img: '/images/gallery/favoritephotos-6.webp',
      caption: 'Viendo tu peli favorita en Live Action',
    }
  ];

  return (
    <section className="galeria" ref={ref}>
      {inView && (
        <div ref={galleryContainerRef}>
          <Gallery images={galleryItems} title={'MIS FOTOS FAVORITAS'} />
        </div>
      )}
    </section>
  );
};

export default MyFavoritePhotosGallerySection;
