"use client";

import Image from "next/image";
import GoodForPeopleIcon from "@/images/GoodForPeople_HumanAgency.png";
import GoodForBusinessIcon from "@/images/GoodForBusiness_HumanAgency.png";
import GoodForLifeIcon from "@/images/GoodForLife_HumanAgency.png";
import PrettyImportantIcon from "@/images/PrettyImportant_HumanAgency.png";

const humanAgencyItems = [
  {
    title: "Good for people.",
    desc: "People don't want tech products manipulating them into doing things they don’t want to do.",
    icon: GoodForPeopleIcon,
  },
  {
    title: "Good for business.",
    desc: "Building products with human agency results in happier customers who stick around and refer their friends.",
    icon: GoodForBusinessIcon,
  },
  {
    title: "Good for life.",
    desc: "We increase agency not just through products but also by donating 5% of profits to charities.",
    icon: GoodForLifeIcon,
  },
  {
    title: "Pretty Important.",
    desc: "Future advances like Brain Machine Interfaces make tech with agency in mind crucial to our future.",
    icon: PrettyImportantIcon,
  },
];

export default function HumanAgency() {
  return (
    <section className="bg-[#F7F7F7] py-20 px-6">
      {/* Title & Description */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3D2C19]">
          Empowering Human Agency <br /> Through Technology
        </h2>
        <p className="text-gray-700 mt-3 text-lg">
          We believe technology should empower, not replace, human agency.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {humanAgencyItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Icon */}
            <div className="w-16 h-16 flex-shrink-0">
              <Image src={item.icon} alt={item.title} width={64} height={64} />
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-semibold text-[#3D2C19]">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
