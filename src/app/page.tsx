import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import FeaturedService from '../components/FeaturedService';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedService />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
