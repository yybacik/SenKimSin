import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    isim: '',
    email: '',
    mesaj: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS ayarları
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setFormData({
          isim: '',
          email: '',
          mesaj: ''
        });
        setError('');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setError('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      });
  };

  return (
    <div className="contact-page">
      <h1>İletişim</h1>
      <p>Bizimle iletişime geçmek için bu formu kullanabilirsiniz.</p>

      {submitted && <p className="success-message">Mesajınız başarıyla gönderildi!</p>}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="isim">İsim:</label>
        <input
          type="text"
          id="isim"
          name="isim"
          value={formData.isim}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mesaj">Mesaj:</label>
        <textarea
          id="mesaj"
          name="mesaj"
          value={formData.mesaj}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Contact;
