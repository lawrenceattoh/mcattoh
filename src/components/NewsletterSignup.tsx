"use client";

import { useState } from "react";
import Image from "next/image";
import Message_Sending_1 from "@/images/Message_Sending_1_.png"; // Ensure correct path
import { sendEmail } from "../utils/emailService"; // Import the function

const newsletterTemplateID = "template_85q4jaq"; // Use your actual EmailJS template ID

export default function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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

    // Ensure all form fields are passed
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };

    const response = await sendEmail(newsletterTemplateID, templateParams);

    setSuccess(response.message);
    if (response.success) {
      setFormData({ firstName: "", lastName: "", email: "" });
    }

    setLoading(false);
  };

  return (
    <section className="bg-white py-16 px-6"> {/* White background applied */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={Message_Sending_1}
            alt="Newsletter Illustration"
            width={500}
            height={350}
            className="object-contain"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B]">Mcattoh Newsletter</h2>
          <p className="text-[#4A4A4A] mt-3 text-lg">
            Don’t worry, your email is secure with us. We will use it to share the latest updates straight to your inbox!
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            {/* First Name & Last Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="text-[#1B1B1B] font-medium text-lg">
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#113162] focus:ring focus:ring-[#11316240] text-lg text-[#1B1B1B] placeholder-gray-500"
                  placeholder="Your first name"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[#1B1B1B] font-medium text-lg">
                  Last Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#113162] focus:ring focus:ring-[#11316240] text-lg text-[#1B1B1B] placeholder-gray-500"
                  placeholder="Your last name"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="mt-4">
              <label className="text-[#1B1B1B] font-medium text-lg">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#113162] focus:ring focus:ring-[#11316240] text-lg text-[#1B1B1B] placeholder-gray-500"
                placeholder="Your email address"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full md:w-auto bg-[#113162] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#0d2852] transition-all duration-300 text-lg"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {/* Success Message */}
            {success && (
              <p className="mt-3 text-green-600 font-medium">{success}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
