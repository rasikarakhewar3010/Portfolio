import React from 'react';
import { HeroParallax } from '../components/ui/hero-parallax';
import certificatesData from '../data/certificates.json';
import AnimatedButton from '../components/ui/AnimatedButton';
import { Link } from 'react-router-dom';

const Certificates = () => {
    return (
        <section id="certificates" className="relative w-full bg-[#fffaf5]">
            <HeroParallax products={certificatesData} />
            <div className="flex justify-center mt-12 relative z-10">
                <Link to="/certificates">
                    <AnimatedButton text="View All Certificates" />
                </Link>
            </div>
        </section>
    );
};

export default Certificates;
