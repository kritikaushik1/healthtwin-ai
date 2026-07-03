import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import DigitalTwin from "../components/landing/DigitalTwin";
import AIFamilyDoctor from "../components/landing/AIFamilyDoctor";
import FuturePrediction from "../components/landing/FuturePrediction";
import Privacy from "../components/landing/Privacy";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import AskDrTwinCTA from "../components/landing/AskDrTwinCTA";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <DigitalTwin />
      <AIFamilyDoctor />
      <FuturePrediction />
      <Privacy />
      <Testimonials />
      <FAQ />
      <AskDrTwinCTA />
      <Footer />
    </>
  );
}