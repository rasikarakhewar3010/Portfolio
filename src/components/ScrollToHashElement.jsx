import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                if (window.lenis) {
                    window.lenis.scrollTo(element, { offset: 0, duration: 1.5 });
                } else {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        } else {
            if (window.lenis) {
                window.lenis.scrollTo(0, { duration: 1 });
            } else {
                window.scrollTo(0, 0);
            }
        }
    }, [location]);

    return null;
};

export default ScrollToHashElement;
