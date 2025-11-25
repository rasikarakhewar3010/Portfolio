import React from 'react';
import { Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0f172a] text-white py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-[#f7bea7] to-[#fcd6c7] bg-clip-text text-transparent">
                        Rasika Portfolio
                    </h3>
                    <p className="text-gray-400 mt-3 text-base max-w-xs mx-auto md:mx-0">
                        Building digital experiences with passion and precision.
                    </p>
                </div>

                <div className="flex gap-8">
                    {[
                        { Icon: Github, href: "https://github.com/rasikarakhewar3010", label: "GitHub" },
                        { Icon: Linkedin, href: "https://www.linkedin.com/in/rasika-rakhewar/", label: "LinkedIn" },
                        { Icon: Mail, href: "rasikarakhewar30102004@gmail.com", label: "Email" }
                    ].map(({ Icon, href, label }, index) => (
                        <a
                            key={index}
                            href={href}
                            aria-label={label}
                            className="group relative p-3 bg-white/5 rounded-full hover:bg-[#f7bea7]/20 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(240,179,131,0.5)]"
                        >
                            <Icon className="w-6 h-6 text-gray-300 group-hover:text-[#f7bea7] transition-colors duration-300" />
                        </a>
                    ))}
                </div>

                <div className="text-center md:text-right text-gray-500 text-sm font-medium">
                    <p>&copy; {new Date().getFullYear()} Rasika. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
