import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      // Handle form submission (e.g., send to API)
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md mt-7">
      <h2 className="text-2xl font-semibold mb-1">Send us a Message</h2>
      <p className="mb-6 text-gray-600">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form 
      action="https://formspree.io/f/mldllqjq"
      method="POST"
      onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Full Name *</label>
            <input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2`}
              placeholder="Your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="flex-1">
            <label className="block mb-1 font-medium">Email Address *</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded px-4 py-2`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Subject *</label>
          <input
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full border ${
              errors.subject ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2`}
            placeholder="What is your message about?"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Message *</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`w-full border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2`}
            placeholder="Tell us more about your inquiry..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-medium py-3 rounded-full flex justify-center items-center gap-2 hover:opacity-90"
        >
          <span>✈️</span> Send Message
        </button>
      </form>
    </div>
  );
}
