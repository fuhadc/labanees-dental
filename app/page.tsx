import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import FeatureGrid from '@/components/FeatureGrid';
import LocationContact from '@/components/LocationContact';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <FeatureGrid />
        <LocationContact />
        <GallerySection />
        <ReviewsSection />
        <Footer />
      </main>
    </>
  );
}
