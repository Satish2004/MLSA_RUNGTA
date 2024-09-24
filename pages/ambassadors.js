import Navbar from '../components/Navbar';
import AmbassadorsList from '../components/AmbassadorsList';
import Footer from '../components/Footer';

export default function Ambassadors() {
  return (
    <>
      <Navbar />
      <section style={{ padding: '2rem 0' }}>
        <h1 style={{ textAlign: 'center', color: '#003366' }}>Meet Our Ambassadors</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Here are the students leading the way with Microsoft technologies at RCET.
        </p>
        <AmbassadorsList />
      </section>
      <Footer />
    </>
  );
}
