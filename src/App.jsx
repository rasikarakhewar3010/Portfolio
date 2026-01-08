import React, { useState } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToHashElement from './components/ScrollToHashElement';
import { HelmetProvider } from 'react-helmet-async';
import Preloader from './components/Preloader';
import Hero2 from './sections/Hero2';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';
import AllCertificates from './pages/AllCertificates';
import NotFound from './pages/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 4.0, // Maximum floatiness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.5,
      smoothTouch: false,
      touchMultiplier: 2.5,
      infinite: false,
      lerp: 0.01, // Ultra-slow catchup for maximum smoothness
      wheelMultiplier: 1.5, // Boosted to maintain control with low lerp
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToHashElement />
        <Preloader onComplete={() => setIsLoading(false)} />

        <div
          className={`transition-opacity duration-700 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <Routes>
            <Route path="/" element={
              <main className="w-full relative z-10">
                <Hero2 />
                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
                <Footer />
              </main>
            } />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/certificates" element={<AllCertificates />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
