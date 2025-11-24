import { HeroLanding } from "@/components/ui/hero-1";

export default function Hero() {
  // Example with all customization props
  const heroProps = {
    // Logo and branding
    logo: {
      src: "/logo/Logo_For_R_____2_-removebg-preview.png",
      alt: "Acme Corp Logo",
      companyName: "Acme Corp"
    },
    
    // Navigation
    navigation: [
      { name: 'Solutions', href: '/solutions' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Resources', href: '/resources' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],

    
    // Hero content
    title: "Rasika Rakhewar",
    description: "Full-Stack Developer | AI-ML Entusiass",
    
  

    
    // Styling options
    titleSize: "large",
    gradientColors: {
      from: "oklch(0.7 0.15 280)",  // Purple
      to: "oklch(0.6 0.2 320)"      // Magenta
    },
    
    // Additional customization
    className: "min-h-screen"
  };

  return (
    <div>
      <HeroLanding {...heroProps} />
    </div>
  );
}
