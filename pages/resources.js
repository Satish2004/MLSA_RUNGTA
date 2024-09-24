import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Resources() {
  const resources = [
    { title: 'Microsoft Learn', url: 'https://docs.microsoft.com/learn/' },
    { title: 'GitHub Student Pack', url: 'https://education.github.com/pack' },
    { title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' }
    // Add more resources as needed
  ];

  return (
    <>
      <Navbar />
      <section style={{ padding: '2rem 0' }}>
        <h1 style={{ textAlign: 'center', color: '#003366' }}>Resources for Students</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Find the best learning materials to grow your skills in Microsoft technologies and beyond.
        </p>
        <div style={{ textAlign: 'center' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {resources.map((resource, index) => (
              <li key={index} style={{ margin: '1rem 0' }}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer" style={{ color: '#0099FF', fontSize: '1.2rem' }}>
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
