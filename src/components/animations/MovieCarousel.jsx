// src/components/animations/MovieCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import ScrollVelocity from '../../components/animations/ScrollVelocity';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import '../../styles/animations/MovieCarousel.scss';

const pathImage = '/images/movies/';
const movies = [
    { content: "1. Barbie", image: `${pathImage}Barbie.webp` },
    { content: "2. Escabe bajo fuego", image: `${pathImage}Escape.webp` },
    { content: "3. Gran Turismo", image: `${pathImage}gran_turismo.webp` },
    { content: "4. Dobles de acción", image: `${pathImage}doble_accion.webp` },
    { content: "5. Los indestructibles 4", image: `${pathImage}indestrucibles.webp`},
    { content: "6. Los increibles", image: `${pathImage}losincreibles.webp` },
    { content: "7. Toy Story", image: `${pathImage}toyStory.webp` },
    { content: "8. Sin Aire", image: `${pathImage}sinaire.webp` },
    { content: "9. Five Night at Freddy's", image: `${pathImage}FiveNightsatFreddys.webp`},
    { content: "10. Coco", image: `${pathImage}Coco.webp` },
    { content: "11. El Justiciero: Capítulo Final", image: `${pathImage}Eljusticiero.webp` },
    { content: "12. Los Juegos del hambre: Balada de pájaron cantores y serpientes", image: `${pathImage}juegosdelhambre.webp` },
    { content: "13. Wish: El poder de los deseos", image: `${pathImage}Wish.webp` },
    { content: "14. Hipnosis: Arma invisible", image: `${pathImage}Hipnosis.webp` },
    { content: "15. Wonka", image: `${pathImage}Wonka.webp` },
    { content: "16. Venganza silenciosa", image: `${pathImage}VenganzaSilenciosa.webp` },
    { content: "17. Viernes negro", image: `${pathImage}ViernesNegro.webp` },
    { content: "18. Aquaman 2: El reino perdido", image: `${pathImage}Aquaman.webp` },
    { content: "19. Hojas de Otoño", image: `${pathImage}HojasDeOtoño.webp` },
    { content: "20. El juego de la muerte", image: `${pathImage}ElJuegoDeLaMuerte.webp` },
    { content: "21. Muerto de risa", image: `${pathImage}MuertoDeRisa.webp` },
    { content: "22. Con todo menos contigo", image: `${pathImage}ConTodosMenosContigo.webp` },
    { content: "23. Beekeeper: sentencia de muerte", image: `${pathImage}Beekeeper.webp` },
    { content: "24. Pobres criaturas", image: `${pathImage}PobresCriaturas.webp`},
    { content: "25. Vidas pasadas", image: `${pathImage}VidasPasadas.webp`},
    { content: "26. Cuando asecha la maldad", image: `${pathImage}CuandoAcechaLaMaldad.webp`},
    { content: "27. Madame web", image: `${pathImage}MadameWeb.webp`},
    { content: "28. Demon Slayer: To the hasher training", image: `${pathImage}DemonSlayer.webp`},
    { content: "29. Red", image: `${pathImage}Red.webp`},
    { content: "30. Ferrari", image: `${pathImage}Ferrari.webp`},
    { content: "31. Garra de hierro", image: `${pathImage}GarraDeHierro.webp`},
    { content: "32. Sleep: El mal no duerme", image: `${pathImage}Sleep.webp`},
    { content: "33. Kung fu panda 4", image: `${pathImage}KungFuPanda4.webp`},
    { content: "34. Alicia en el país de las pesadillas", image: `${pathImage}Alicia.webp`},
    { content: "35. Godzilla y Kong: El nuevo imperio", image: `${pathImage}GodzillaYKong.webp`},
    { content: "36. Arthur", image: `${pathImage}Arthur.webp`},
    { content: "37. Ghostbusters: apocalipsis fantasma", image: `${pathImage}Ghostbusters.webp`},
    { content: "38. Back to black", image: `${pathImage}BackToBlack.webp`},
    { content: "39. Profesión peligro", image: `${pathImage}ProfesionPeligro.webp`},
    { content: "40. Vaguito", image: `${pathImage}Vaguito.webp`},
    { content: "41. Desafiantes", image: `${pathImage}Desafiantes.webp`},
    { content: "42. Guerra civil", image: `${pathImage}GuerraCivil.webp`},
    { content: "43. Lazos de vida", image: `${pathImage}LazosDeVida.webp`},
    { content: "44. Gardfield: Fuera de casa", image: `${pathImage}Garfield.webp`},
    { content: "45. Amigos imaginario", image: `${pathImage}AmigosImaginarios.webp`},
    { content: "46. Los extraños: Capitulo 1", image: `${pathImage}LosExtraños.webp`},
    { content: "47. Furiosa: De la saga Mad Max", image: `${pathImage}Furiosa.webp`},
    { content: "48: Harry Potter y el prisionero de Azkabam", image: `${pathImage}HarryPotter-Prisionero.webp`},
    { content: "49: Hachiko 2: Siempre a tu lado", image: `${pathImage}Hachiko.webp`},
    { content: "50: Bad boys: Hasta la muerte", image: `${pathImage}BadBoys.webp`},
    { content: "51: Monkey Man: El despertar de la bestia", image: `${pathImage}Monkeyman.webp`},
    { content: "52: Intensamente 2", image: `${pathImage}Intensamente2.webp`},
    { content: "53: Un lugar en silencio: Día uno", image: `${pathImage}UnLugarEnSilencio.webp`},
    { content: "54: Deadpool & Wolverine", image: `${pathImage}deadpoolywolverine.webp`},
    { content: "55: De noche con el diablo" , image: `${pathImage}noche-diablo.webp`},
    { content: "56: Tornados", image: `${pathImage}tornados.webp`},
    { content: "57: Cómplices del engaño" , image: `${pathImage}complice.webp`},
    { content: "58: Romper el circulo", image: `${pathImage}romper-circulo.webp`},
    { content: "59: La trampa", image: `${pathImage}la-trampa.webp`},
    { content: "60: Harry Potter y la piedra filosofal", image: `${pathImage}harrypotter-piedra.webp`},
    { content: "61: Longlegs: Coleccionista de almas", image: `${pathImage}longless.webp`},
    { content: "62: Sherk 2", image: `${pathImage}sherk-2.webp`},
    { content: "63: Coraline", image: `${pathImage}coraline.webp`},
    { content: "64: Parpadea 2 veces", image: `${pathImage}parpadea2veces.webp`},
    { content: "65: Exhuma: La tumba del diablo", image: `${pathImage}exhuma.webp`},
    { content: "66: No hables con extraños", image: `${pathImage}nohables.webp`},
    { content: "67: La sustancia", image: `${pathImage}la-sustancia.webp`},
    { content: "68: Sonrie 2", image: `${pathImage}sonrie-2.webp`},
    { content: "69: Venom: El ultimo baile", image: `${pathImage}venom.webp`},
    { content: "70: El tiempo que tenemos", image: `${pathImage}tiempo-que-tenemos.webp`},
    { content: "71: Gladiador II", image: `${pathImage}gladiador-2.webp`},
    { content: "71: Wicked", image: `${pathImage}wicked.webp`},
    { content: "73: Kraven el cazador", image: `${pathImage}kraven.webp`},
    { content: "74: Mufasa el rey león", image: `${pathImage}mufasa.webp`},
    { content: "75: Interestelar", image: `${pathImage}Interstellar.webp`},
    { content: "76: El robo perfecto: Pantera", image: `${pathImage}robo-perfecto-pantera.webp`},
    { content: "77: Compañera perfecta", image: `${pathImage}compañera-perfecta.webp`},
    { content: "78: Cónclave", image: `${pathImage}conclave.webp`},
    { content: "79: Blanca Nieves", image: `${pathImage}blanca-nieves.webp`},
    { content: "80: Rescate implacable", image: `${pathImage}rescate-implacable.webp`},
    { content: "81: El amateur: Operación Venganza", image: `${pathImage}amateur.webp`},
    { content: "82: Pecadores", image: `${pathImage}los-pecadores.webp`},
    { content: "83: Thunderbolts", image: `${pathImage}thunderbolts.webp`},
    { content: "84: Karate Kid Leyendas", image: `${pathImage}karate-kids-legends.webp`},
    { content: "85: Destino final: Lazos de Sangre", image: `${pathImage}destino-final.webp`},
    { content: "86: Mission Impossible Sentencia final", image: `${pathImage}mission-impossible.webp`},
    { content: "87: Encerrado", image: `${pathImage}encerrado.webp`},
    { content: "88: Bailarina", image: `${pathImage}bailarina.webp`},
  ];

export default function MovieCarousel() {
  return (
    <div className="movie-carousel-container">
      <ScrollVelocity
        texts={['* PELICULAS QUE']}
        velocity={100} 
        className="custom-scroll-text"
      />
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}

        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="movie-carousel"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="movie-slide">
            <img
              src={movie.image}
              alt={movie.content}
              loading="lazy"
              className="movie-poster"
            />
             <div className="carrusel-caption">{movie.content}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ScrollVelocity
        texts={['VIMOS EN EL CINE *']}
        velocity={100} 
        className="custom-scroll-text"
      />
    </div>
  );
}
