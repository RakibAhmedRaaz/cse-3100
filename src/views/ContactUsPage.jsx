import { useState } from 'react';
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <section className="container mt-5">
      <div className="text-center">
        <h2 className="display-4 mb-4">Contact Us</h2>
        <p className="lead text-muted">We'd love to hear from you! Fill out the form below to get in touch.</p>
      </div>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit} className="mx-auto p-4 shadow-lg rounded" style={{ maxWidth: '600px', backgroundColor: '#f9f9f9' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Enter your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      ) : (
        <div className="text-center mt-5">
          <h4 className="text-success">Thank you for reaching out!</h4>
          <p className="lead">We have received your message and will get back to you shortly.</p>
        </div>
      )}
    </section>
  );
}  