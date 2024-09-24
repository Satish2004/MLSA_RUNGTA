import styles from '../styles/contact.module.css';

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
