"use client";

import Image from "next/image";
import Message_Sending_1 from "@/images/Message_Sending_1_.png"; // Ensure correct path
import { sendEmail } from "../utils/emailService"; // Import the function
import { useState } from "react";

const contactTemplateID = "template_sumgu7m"; // Replace with actual Contact template ID


export default function ContactPage() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  // Handle Input Change
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const response = await sendEmail(contactTemplateID, formData);

    setSuccess(response.message);
    if (response.success) {
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }

    setLoading(false);
  };
  
  return (
    <main className="bg-[#f5f4f3] w-full">
      {/* Contact Section */}
      <section className="py-28 px-6 max-w-7xl mx-auto flex flex-col items-center text-left">
        {/* Image Centered & Responsive */}
        <div className="w-full flex justify-center">
          <div className="w-80 md:w-96 lg:w-[400px] xl:w-[450px] mx-auto mb-8">
            <Image
              src={Message_Sending_1}
              alt="Contact Illustration"
              layout="responsive"
              width={450}
              height={300}
            />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-16 items-start">
          {/* Left Section - Contact Info */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Let’s Build Something <br />
              <span className="text-[#2C1907]">Great Together</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Have a project in mind? Looking for expert guidance on software
              development, AI, product design, or BCI solutions? We’d love to
              hear from you! Reach out to us, and let’s create something
              innovative together.
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-4 text-lg text-gray-800">
              <p>
                📍 <strong>Our Location</strong>
                <br />
                104 Dickens Avenue, Uxbridge United Kingdom, UB8 3DN
              </p>
              <p>
                📧 <strong>Email</strong>
                <br />
                <a
                  href="mailto:lawrenceattoh@ymail.com"
                  className="text-blue-700 hover:underline"
                >
                  support@mcattoh.com
                </a>
              </p>
              <p>
                📞 <strong>Phone</strong>
                <br />
                <a
                  href="tel:+442079460123"
                  className="text-blue-700 hover:underline"
                >
                  +44 7852744614
                </a>
              </p>
            </div>
          </div>

              {/* Right Section - Contact Form */}
              <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your first name" required className="w-full p-4 border border-gray-300 rounded-lg text-gray-900 focus:border-[#113162] focus:ring-[#113162] outline-none text-lg placeholder-gray-500" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your last name" required className="w-full p-4 border border-gray-300 rounded-lg text-gray-900 focus:border-[#113162] focus:ring-[#113162] outline-none text-lg placeholder-gray-500" />
              </div>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address" required className="w-full p-4 border border-gray-300 rounded-lg text-gray-900 focus:border-[#113162] focus:ring-[#113162] outline-none text-lg placeholder-gray-500" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="What would you like to build?" required className="w-full p-4 border border-gray-300 rounded-lg text-gray-900 h-32 focus:border-[#113162] focus:ring-[#113162] outline-none text-lg placeholder-gray-500"></textarea>
              <button type="submit" className="w-1/2 bg-[#113162] text-white py-4 rounded-full font-bold text-lg hover:bg-[#0d254c] transition-all duration-300">{loading ? "Sending..." : "Get in Touch"}</button>
            </form>

            {/* Success Message */}
            {success && <p className="mt-3 text-green-600 font-medium">{success}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}
