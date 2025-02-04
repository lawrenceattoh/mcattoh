import Image from 'next/image';

import GoodForPeopleIcon from '../icons/HumanAgency/team.png';
import GoodForBusinessIcon from '../icons/HumanAgency/cooperation.png';
import GoodForLifeIcon from '../icons/HumanAgency/healthcare.png';
import PrettyImportantIcon from '../icons/HumanAgency/file.png';

import BackgroundImage from '../images/Glass_Background.jpg'; // Add your background image path


const humanAgencyItems = [
  {
    title: 'Good for people.',
    desc: "People don't want tech products manipulating them into doing things they don’t want to do.",
    icon: GoodForPeopleIcon,
  },
  {
    title: 'Good for business.',
    desc: 'Building products with human agency results in happier customers who stick around and refer their friends.',
    icon: GoodForBusinessIcon,
  },
  {
    title: 'Good for life.',
    desc: 'We increase agency not just through products but also by donating 5% of profits to charities.',
    icon: GoodForLifeIcon,
  },
  {
    title: 'Pretty Important.',
    desc: 'Future advances like Brain Machine Interfaces make tech with agency in mind crucial to our future.',
    icon: PrettyImportantIcon,
  },
];

const HumanAgency = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 group-hover:text-[#113162]">
  Let&apos;s talk human agency
</h2>
        <p className="text-gray-600 mt-2">
          We believe that technology should increase rather than decrease human agency.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-6 max-w-6xl mx-auto">
        {humanAgencyItems.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="flex justify-center">
              <Image 
                src={item.icon} 
                alt={item.title} 
                width={80} // Adjusted width dynamically
                height={80} // Adjusted height dynamically
                className="w-20" // Uses Tailwind for responsiveness
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-3">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-16 max-w-6xl mx-auto rounded-3xl shadow-lg overflow-hidden">
  {/* Background Image */}
  <Image 
    src={BackgroundImage} 
    alt="Rejoice Background" 
    layout="fill" 
    objectFit="cover"
    className="absolute inset-0 z-0"
  />

  {/* Dark Overlay for Readability */}
  <div className="absolute inset-0 bg-black bg-opacity-35 z-5"></div>

  {/* Content */}
  <div className="relative z-10 py-14 px-6 text-center text-white drop-shadow-lg">
    <h2 className="text-3xl font-bold">Rejoice. Help is Here.</h2>
    <p className="text-lg opacity-90 mt-3">
      Custom Solutions for Your Specific Needs.<br />Our Expert Team will Help You Succeed.
    </p>
    <button className="mt-6 bg-white text-[#113162] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300">
      GET IN TOUCH
    </button>
  </div>
</div>

    </section>
  );
};

export default HumanAgency;
