import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css"

const Contact = () => {
  useEffect(() => {
    AOS.init({
          duration: 1500,
        });
  })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:aristaadewi8@gmail.com?subject=New%20Message%20from%20${
      formData.name
    }&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center bg-white">
      
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full max-w-lg lg:max-w-md"
        data-aos="fade-up"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="border-2 border-black rounded outline-none p-3"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-2 border-black rounded outline-none p-3"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="How can I help?"
          rows="5"
          required
          className="border-2 border-black rounded outline-none p-3"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-black text-white py-3 px-5 rounded font-bold hover:bg-gray-800 transition duration-200"
        >
          Get In Touch
        </button>
      </form>

      {/* Text Section */}
      <div className="mb-10 lg:mb-0 lg:ml-10 max-w-lg flex justify-center flex-col" data-aos="fade-up">
        <h1 className="font-bold text-4xl text-black leading-tight">
          Let&apos;s Start{" "}
          <span className="custom-outline text-transparent font-poppins">
            Conversation
          </span>{" "}
          With Me!
        </h1>
        <p className="mt-4 text-gray-600">
        As a junior front-end, I strive to make interfaces friendly and interactive, bridging academic knowledge with practical creativity while continuously developing my technical skills.
        </p>
        <div className="mt-5">
        <a
          href="https://wa.me/6281337057719"
          target="_blank"
          className="bg-black text-white flex items-center gap-3 justify-center py-3 px-5 rounded font-bold hover:bg-gray-800 transition duration-200"
        >
          <FaWhatsapp className="text-xl"/>
          Contact Me On WhatsApp
        </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
