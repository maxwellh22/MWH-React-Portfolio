import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
    const [errors, setErrors] = useState({});
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleBlur = (field) => {
      const newErrors = { ...errors };
  
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      } else if (field === "email" && !validateEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      } else {
        delete newErrors[field];
      }
  
      setErrors(newErrors);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });

      if (errors[name]) {
        setErrors({ ...errors, [name]: "" });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
      if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
    }
};

return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur("message")}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;