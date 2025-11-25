import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            // Optional: Scroll to top if no hash
            // window.scrollTo(0, 0);
        }
    }, [location]);

    return null;
};

export default ScrollToHashElement;
