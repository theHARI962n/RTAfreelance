// import ParallaxCards from "../../Parallax.jsx";
import HeroSection from "./HeroSection.jsx";
import AboutSection from "./AboutSection.jsx";
import FeaturesSection from "./FeaturesSection.jsx";
import CoursesSection from "./CoursesSection.jsx";
import TestimonialsSection from "./TestimonialSection.jsx";
import FAQSection from "./FAQSection.jsx";
import ContactSection from "./ContactSection.jsx";
import StudentShowcase from "./StudentShowcase.jsx";
import Footer from "./FooterSection.jsx";


export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <StudentShowcase />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
