import React, { useState, useEffect, useMemo } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import ScrollToHashElement from './components/ScrollToHashElement';
import Preloader from './components/Preloader';

// Sections
import Hero2 from './sections/Hero2';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './components/Footer';

// Pages (Lazy Loaded for performance)
const AllProjects = React.lazy(() => import('./pages/AllProjects'));
const AllCertificates = React.lazy(() => import('./pages/AllCertificates'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Page Transition Component
const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

function AppContent() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <Preloader onComplete={() => setIsLoading(false)} />

            <div
                className={`w-full min-h-screen bg-[#fffaf5] transition-opacity duration-1000 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <AnimatePresence mode="wait">
                    <React.Suspense fallback={<div className="min-h-screen w-full bg-[#fffaf5]" />}>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={
                                <PageWrapper>
                                    <main className="w-full relative z-10">
                                        <Hero2 />
                                        <About />
                                        <Skills />
                                        <Projects />
                                        <Certificates />
                                        <Contact />
                                        <Footer />
                                    </main>
                                </PageWrapper>
                            } />
                            <Route path="/projects" element={
                                <PageWrapper>
                                    <AllProjects />
                                </PageWrapper>
                            } />
                            <Route path="/certificates" element={
                                <PageWrapper>
                                    <AllCertificates />
                                </PageWrapper>
                            } />
                            <Route path="*" element={
                                <PageWrapper>
                                    <NotFound />
                                </PageWrapper>
                            } />
                        </Routes>
                    </React.Suspense>
                </AnimatePresence>
            </div>
        </>
    );
}

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Make lenis accessible globally for scrollTo functionality
        window.lenis = lenis;

        return () => {
            lenis.destroy();
            window.lenis = null;
        };
    }, []);

    return (
        <HelmetProvider>
            <Router>
                <ScrollToHashElement />
                <AppContent />
            </Router>
        </HelmetProvider>
    );
}

export default App;
