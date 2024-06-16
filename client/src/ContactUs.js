import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS file

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here if needed
    // For simplicity, we'll assume the form is always valid
    // You can add validation logic based on your requirements
  
    // Send the message (dummy implementation for demonstration)
    sendMessage(formData)
      .then(() => {
        setSuccessMessage('Message has been successfully sent.');
        setErrorMessage('');
        // Clear the form fields after successful submission
        setFormData({ name: '', email: '', message: '' });
        // Show the success message for 5 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      })
      .catch(() => {
        setSuccessMessage('');
        setErrorMessage('Failed to send message. Please try again later.');
      });
  };
  

  const sendMessage = async (data) => {
    // Dummy implementation of sending message (replace with actual API call)
    return new Promise((resolve, reject) => {
      // Simulate sending message with a delay
      setTimeout(() => {
        // Randomly decide if the message is sent successfully or fails
        const success = Math.random() < 0.8; // 80% success rate
        if (success) {
          resolve();
        } else {
          reject();
        }
      }, 1500); // Simulate delay of 1.5 seconds
    });
  };

  return (
    <div className="contact-background">
      <div className={`notification-bar ${successMessage ? 'success' : 'error'}`}>
        {successMessage || errorMessage}
      </div>
      <div className="contact-box">
        <h2 className="contact-title">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
