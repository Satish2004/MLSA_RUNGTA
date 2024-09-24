import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for Hero Section
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        backgroundImage: 'url("/images/rungta-campus.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6rem 0',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#FFFFFF' }}>
        Microsoft Learn Student Ambassadors - RCET
      </h1>
      <p style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#FFFFFF' }}>
        Empowering Students with Technology
      </p>
      <a href="#" style={{
        display: 'inline-block',
        padding: '1rem 2rem',
        backgroundColor: '#00A4EF',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}>
        Join the Program
      </a>
    </section>
  );
}
