import React, { useState } from 'react';
import axios from 'axios';
import backendURL from "../components/config";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      await axios.post(`${backendURL}/api/messages`, formData);
      setStatus('Message sent successfully!');
      setFormData({ first_name: '', last_name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Failed to send the message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className='contact-form-sections'>
      <div className='contact-form-column'>
      <label htmlFor="contact-form-label">Imię</label>
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="Imię"
        required
      />
      </div>
      <div className='contact-form-column'>
      <label htmlFor="contact-form-label">Nazwisko</label>
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Nazwisko"
        required
      />
      </div>
      </div>
      <div className='contact-form-sections'>
      <div className='contact-form-column'>
      <label htmlFor="contact-form-label">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Adres e-mail"
        required
      />
      </div>

      <div className='contact-form-column'>
      <label htmlFor="contact-form-label">Numer telefonu</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Numer telefonu"
        required
      />
      </div>
      </div>

      <div className='contact-form-sections'>
  <div className='contact-form-column full-width'>
    <label htmlFor="contact-form-label">Wiadomość</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Wpisz tutaj swoją wiadomość"
      required
    ></textarea>
  </div>
</div>

      <div className="quote-button-container">
      <button type="submit" className="quote-button-form">Wyślij wiadomość</button>
      {status && <p className="form-status">{status}</p>}
</div>


    </form>
    
  );
};

export default ContactForm;