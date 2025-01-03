import React, { useState } from "react";
import "./Apply.css";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic, e.g., API call
    console.log("Form submitted:", formData);
  };

  return (
    <div className="apply-form-container">
      <h2>Apply for a Job</h2>
      <form action="https://formspree.io/f/mannlnjp" method="post" enctype="multipart/form-data" className="apply-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="attachment"
            
            onChange={handleFileChange}
            accept=".pdf, .doc, .docx"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Additional Comments</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Write a message (optional)"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="btn-apply">
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
