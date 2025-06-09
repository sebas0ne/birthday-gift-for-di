// src/components/sections/MyFavoritePhotosGallerySection.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gallery from "../../common/Gallery";
import '../../../styles/sections/SectionGallery.scss';

gsap.registerPlugin(ScrollTrigger);

const MyFavoritePhotosGallerySection = () => {
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
      img: '/images/favoritephotos-1.jpg',
      caption: 'Tan buena sonrisa como el chifa que compartimos',
    },
    {
      img: '/images/favoritephotos-2.jpg',
      caption: 'Playa y tu sonrisa.',
    },
    {
      img: '/images/favoritephotos-3.jpg',
      caption: 'Viendo tu peli favorita en Live Action',
    },
    {
      img: '/images/favoritephotos-4.jpg',
      caption: 'Viendo tu peli favorita en Live Action',
    },
    {
      img: '/images/favoritephotos-5.jpg',
      caption: 'Viendo tu peli favorita en Live Action',
    },
    {
      img: '/images/favoritephotos-6.jpg',
      caption: 'Viendo tu peli favorita en Live Action',
    }
  ];

  return (
    <section className="galeria">
        <Gallery images={galleryItems} title={'MIS FOTOS FAVORITAS'}/>
    </section>
  );
}

export default MyFavoritePhotosGallerySection;
