import Image from "next/image";
import HeroIllustration from "@/images/Hero_Illustration.png"; // Ensure correct path

const Hero = () => {
  return (
    <section className="bg-[#F7F7F7] py-12 sm:py-16 md:py-24 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-[50%] lg:w-[45%] text-center md:text-left 
        mt-0 sm:mt-4 md:mt-10 lg:mt-0"> {/* Moved text lower on iPad */}
        
          <h1 className="text-[36px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.2] text-gray-900">
            Where Cutting-Edge <br />
            Technology Meets <br />
            <span className="text-[#8C6239]">Exceptional Design</span>
          </h1>
          <p className="mt-4 text-[16px] sm:text-[18px] md:text-[20px] text-gray-700 leading-[1.5]">
            We craft seamless, AI-powered solutions and BCI technology, blending
            innovation with functionality for founders and executives.
          </p>
          <div className="mt-5">
            <button className="px-6 py-3 bg-[#113162] text-white rounded-full text-[16px] sm:text-[18px] font-semibold shadow-md hover:bg-gray-800 transition-all">
              Let’s Build Together
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="w-full md:w-[50%] lg:w-[55%] flex justify-center md:justify-end">
          <Image
            src={HeroIllustration}
            alt="Illustration of a designer at work"
            width={650} // Adjusted for better responsiveness
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
