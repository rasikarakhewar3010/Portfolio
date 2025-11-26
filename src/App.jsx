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




function App() {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
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
              <main className="w-full overflow-hidden relative z-10">
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

          </Routes>
        </div>

      </Router>
    </HelmetProvider>
  );
}

export default App;
