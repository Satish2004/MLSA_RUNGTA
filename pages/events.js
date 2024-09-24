import { useState } from 'react';
import Navbar from '../components/Navbar';
import EventsList from '../components/EventsList';
import Footer from '../components/Footer';

const eventsData = [
  { title: 'AI Workshop', date: '2024-10-01', type: 'Workshop' },
  { title: 'Hackathon 2024', date: '2024-09-15', type: 'Hackathon' },
];

export default function EventsPage() {
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All'
    ? eventsData
    : eventsData.filter(event => event.type === filter);

  return (
    
    <div>
        <Navbar />
      <h1 style={{ textAlign: 'center', color: '#003366' }}>Events</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Stay updated with the latest workshops, webinars, and events happening at RCET.
        </p>
      <div>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Workshop')}>Workshops</button>
        <button onClick={() => setFilter('Hackathon')}>Hackathons</button>
      </div>

      <div>
        {filteredEvents.map(event => (
          <div key={event.title}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.type}</p>
          </div>
        ))}
      </div>
      <EventsList />
        <Footer />
    </div>
  );
}
