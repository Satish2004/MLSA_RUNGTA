import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AmbassadorsList from '../components/AmbassadorsList';
import EventsList from '../components/EventsList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AmbassadorsList />
      <EventsList />
      <Footer />
    </>
  );
}
