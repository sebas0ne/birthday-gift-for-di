// src/App.jsx
import { useState, lazy, Suspense } from 'react';
import CountdownGate from './components/CountdownGate';
import FirstSection from './components/sections/FirstSection';
import SectionWrapper from './components/animations/SectionWrapper';
import './styles/main.scss';

// Lazy-loaded components
const Letter = lazy(() => import('./components/sections/Letter'));
const ThingsAboutYou = lazy(() => import('./components/sections/ThingsAboutYou'));
const MoviesFavorites = lazy(() => import('./components/sections/MoviesFavorites'));
const MessageFinal = lazy(() => import('./components/MessageFinal'));

// Lazy-loaded gallery sections
const FirstYearGallerySection = lazy(() => import('./components/sections/gallery/FirstYearGallerySection'));
const IaGallerySection = lazy(() => import('./components/sections/gallery/IaGallerySection'));
const RandomGallerySection = lazy(() => import('./components/sections/gallery/RandomGallerySection'));
const BeachGallerySection = lazy(() => import('./components/sections/gallery/BeachGallerySection'));
const SpecialDayGallerySection = lazy(() => import('./components/sections/gallery/SpecialDayGallerySection'));
const MyFavoritePhotosGallerySection = lazy(() => import('./components/sections/gallery/MyFavoritePhotosGallerySection'));

function App() {
  const [showContent, setShowContent] = useState(false);
  const birthdayDate = '2025-06-01T00:00:00';

  return (
    <div className="App">
      {!showContent && (
        <CountdownGate
          targetDate={birthdayDate}
          onComplete={() => setShowContent(true)}
        />
      )}

      {showContent && (
        <>
          <FirstSection />

          <Suspense fallback={<div className="loading">Cargando contenido...</div>}>
            <SectionWrapper>
              <FirstYearGallerySection />
            </SectionWrapper>

            <SectionWrapper>
              <ThingsAboutYou />
            </SectionWrapper>

            <SectionWrapper>
              <IaGallerySection />
            </SectionWrapper>

            <SectionWrapper>
              <BeachGallerySection />
            </SectionWrapper>

            <SectionWrapper>
              <SpecialDayGallerySection />
            </SectionWrapper>

            <SectionWrapper>
              <MyFavoritePhotosGallerySection />
            </SectionWrapper>

            <SectionWrapper>
              <Letter />
            </SectionWrapper>

            <SectionWrapper>
              <MoviesFavorites />
            </SectionWrapper>

            <SectionWrapper>
              <RandomGallerySection />
            </SectionWrapper>

            <SectionWrapper>
              <MessageFinal />
            </SectionWrapper>
          </Suspense>
        </>
      )}
    </div>
  );
}

export default App;
