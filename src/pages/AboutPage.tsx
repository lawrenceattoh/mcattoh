"use client";

import Image from "next/image";
import LawrenceAttoh from "../images/Lawrence_Attoh_Ceo.jpg";
import ZohaibShaikh from "../images/Zohaib_Shaikh_Lead_Developer.jpg";
import WhyChooseUsImage from "../images/whychooseus.png";

const teamMembers = [
  {
    name: "Lawrence Attoh",
    role: "Founder & CEO",
    description:
      "Visionary leader with expertise in AI, software, and business strategy.",
    img: LawrenceAttoh,
  },
  {
    name: "Zohaib Shaikh",
    role: "Lead Software Engineer & AI Specialist",
    description:
      "Expert in AI and full-stack development, driving technical innovation.",
    img: ZohaibShaikh,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white w-full">
      {/* Hero Section */}
      {/* <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Innovating at the <br />
            <span className="text-[#2C1907]">Intersection of Technology</span> and Human Experience
          </h1>
          <p className="text-lg text-[#442F0D] mt-6 leading-relaxed">
            At McAttoh, we specialize in Software Development, Data Science, Product Design,
            and Brain-Computer Interface (BCI) solutions, helping businesses turn ideas into reality.
          </p>
        </div>
      </section> */}

      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Innovating at the <br />
            <span className="text-[#2C1907]">
              Intersection of Technology
            </span>{" "}
            and Human Experience
          </h1>
          <p className="text-lg text-[#442F0D] mt-6 leading-relaxed">
            At McAttoh, we specialize in Software Development, Data Science,
            Product Design, and AI-powered Healthcare Solutions - including
            early detection models for diseases like cancer and diabetes -
            helping businesses turn ideas into reality.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src={WhyChooseUsImage}
            alt="Why Choose Us"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Why Choose Us?
          </h2>
          <ul className="mt-6 space-y-4 text-lg text-[#442F0D]">
            <li>
              ✔ <strong>User-Centric Approach</strong> – We prioritize
              intuitive, functional, and scalable designs.
            </li>
            <li>
              ✔ <strong>Future-Ready Solutions</strong> – Leveraging AI, BCI,
              and advanced tech to stay ahead.
            </li>
            <li>
              ✔ <strong>Collaborative Partnership</strong> – Your vision + our
              expertise = extraordinary results.
            </li>
            <li>
              ✔ <strong>Proven Impact</strong> – A portfolio of successful
              projects across industries.
            </li>
          </ul>
          <p className="mt-4 text-[#442F0D]">
            Let’s build something groundbreaking together. 🚀
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full bg-[#FCFBFA]">
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Meet the Leadership Team
          </h2>
          <p className="text-lg text-gray-600 text-center mt-2">
            A diverse team of innovators, engineers, and strategists shaping the
            future of technology.
          </p>

          <div className="mt-10 grid gap-8 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md rounded-xl overflow-hidden max-w-[280px] mx-auto transition-transform transform hover:scale-105 hover:shadow-lg border border-gray-200"
              >
                {/* Team Image */}
                <div className="w-full h-[300px]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={280}
                    height={300}
                    className="w-full h-full object-cover object-[center_1%] rounded-t-xl"
                  />
                </div>

                {/* Text Content */}
                <div className="bg-white p-4 text-center">
                  <h3 className="text-base font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#442F0D]">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mt-1 text-xs leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
