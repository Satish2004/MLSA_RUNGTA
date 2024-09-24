import styles from '../styles/events.module.css';

const EventsList = () => {
  const events = [
    { title: 'Web Development Workshop', date: 'September 25, 2024', description: 'Learn the basics of web development.', type: 'Workshop' },
    { title: 'AI/ML Webinar', date: 'October 10, 2024', description: 'Explore the world of AI/ML.', type: 'Webinar' }
    // Add more events as needed
  ];

  return (
    <section className={styles.events}>
      <h2>Upcoming Events</h2>
      <div className={styles.eventGrid}>
        {events.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p>{event.description}</p>
            <span className={styles.eventType}>{event.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsList;
