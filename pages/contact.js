import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section style={{ padding: '2rem 0' }}>
        <h1 style={{ textAlign: 'center', color: '#003366' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Have any questions or want to get involved? Reach out to us!
        </p>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
