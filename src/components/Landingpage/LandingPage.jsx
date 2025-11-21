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
import { motion } from "framer-motion";
import { pageVariants } from "../../animations.js";

export default function LandingPage() {
  return (
    <motion.div
      className="font-sans text-gray-800"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <StudentShowcase />
      <FAQSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
}