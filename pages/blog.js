import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  const posts = [
    { title: 'How I Got Started with Microsoft Learn', date: 'September 20, 2024', excerpt: 'An overview of my journey as a student ambassador...' },
    { title: 'Building Projects with Azure', date: 'September 10, 2024', excerpt: 'A guide to using Azure for deploying scalable applications...' }
    // Add more posts as needed
  ];

  return (
    <>
      <Navbar />
      <section style={{ padding: '2rem 0' }}>
        <h1 style={{ textAlign: 'center', color: '#003366' }}>Blog</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Read articles and insights from our student ambassadors and mentors.
        </p>
        <div style={{ textAlign: 'center' }}>
          {posts.map((post, index) => (
            <div key={index} style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '5px', maxWidth: '600px', margin: '1rem auto' }}>
              <h3>{post.title}</h3>
              <p><strong>Date:</strong> {post.date}</p>
              <p>{post.excerpt}</p>
              <a href="#" style={{ color: '#0099FF', textDecoration: 'none' }}>Read More</a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
