import styles from '../styles/ambassadors.module.css';


const AmbassadorsList = () => {
  const ambassadors = [
    { name: 'Sayan Karmakar', role: 'Main Lead Ambassador', img: '/images/ambassador1.jpg', github: '#', linkedin: '#', twitter: '#' },
    { name: 'Shubham Kumar', role: 'Tech Lead Ambassador', img: '/images/ambassador2.jpg', github: '#', linkedin: '#', twitter: '#' }
    // Add more ambassadors as needed
  ];

  return (
    <section className={styles.ambassadors}>
      <h2>Meet the Ambassadors</h2>
      <div className={styles.grid}>
        {ambassadors.map((ambassador, index) => (
          <div key={index} className={styles.ambassadorCard}>
            <img src={ambassador.img} alt={ambassador.name} />
            <h3>{ambassador.name}</h3>
            <p>{ambassador.role}</p>
            <div className={styles.socialLinks}>
              <a href={ambassador.github}>GitHub</a>
              <a href={ambassador.linkedin}>LinkedIn</a>
              <a href={ambassador.twitter}>Twitter</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmbassadorsList;
