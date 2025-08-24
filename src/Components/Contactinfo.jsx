import { useState } from "react";
import { Facebook, Linkedin, Instagram, PhoneIcon } from 'lucide-react';
import cocoa2 from "../assets/images/cocoa2.jpeg";



export default function ContactInfo() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.fullName) errors.fullName = "Name is required";
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.subject) errors.subject = "Subject is required";
    if (!values.message) errors.message = "Message is required";
    return errors;
  };

  //   const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate(formData);
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     setIsSubmitting(true);
  //     try {
  //       const response = await fetch("https://formspree.io/f/mldllqjq", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(formData),
  //       });

  //       if (response.ok) {
  //         alert("Message sent successfully!");
  //         setFormData({ fullName: "", email: "", subject: "", message: "" });
  //       } else {
  //         alert("Failed to send message. Try again later.");
  //       }
  //     } catch (err) {
  //       console.error("Form submission error:", err);
  //       alert("Something went wrong.");
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   }
  // };


  return (
    <div className="font-sans">
      {/* Contact Info Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
        <div className="bg-white p-6 rounded-lg shadow-xl w-64">
          <p className="text-lg font-medium text-gray-800">Address:</p>
          <p className="text-md text-gray-600">
            P.O. Box 2, Walewale Northern Region, Ghana.

          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-xl w-64">
          <p className="text-lg font-medium text-gray-800">Phone:</p>
          <p className="text-md text-gray-600"> +233 201397830 <br /> +233 242752362</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-xl w-64">
          <p className="text-lg font-medium text-gray-800">Email:</p>
          <p className="text-md text-gray-600">
            ephissheabutter@yahoo.com <br /> info@ephissheabutter.com </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-xl w-64">
          <p className="text-lg font-medium text-gray-800">Social Media:</p>
          <div className="text-sm text-gray-600 flex gap-5 mt-1">
            <a
              href="https://www.linkedin.com/in/ephis-shea-337030103/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-lg bg-blue-500 h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-blue-600 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
            >
              <Linkedin className="h-7 w-7 text-white" />
            </a>
            <a
              href="tel:+233242752362"
              aria-label="Call 024 275 2362"
              className="rounded-lg bg-green-400 h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-green-500 active:scale-95 transition focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              <PhoneIcon className="h-7 w-7 text-white" />
            </a>
            <p className="rounded-lg bg-pink-400 h-10 w-10 flex items-center justify-center cursor-pointer"><Instagram className="h-7 w-7 text-white " /></p>
          </div>
        </div>
      </div>

      {/* Map + Form */}
      <div className="flex flex-col md:flex-row gap-10 px-6 pb-16">
        <div className="flex-1 h-120 w-full rounded-lg flex items-center justify-center text-center text-gray-700 px-4 overflow-hidden">
          <img
            src={cocoa2}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>


        {/* Contact Form */}
        <div className="flex-1 bg-white rounded-lg p-6 shadow">
          <form
            action="https://formspree.io/f/mldllqjq"
            method="POST"
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
      {/* Google Map */}
      <section className="h-100 w-full">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12674323.123456789!2d-3.0000379!3d7.946527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9a7f1e...%3A0xsomehash!2sGhana!5e0!3m2!1sen!2sgh!4v1692160000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
