import BackgroundImage from '../background/jut9.jpg'; // Adjust path as needed

export default function Hero() {
  return (
    <section className="relative text-center py-20 px-4 sm:py-28 sm:px-6 bg-white z-10">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none z-0"
        style={{ backgroundImage: `url(${BackgroundImage.src})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-[90%] sm:max-w-5xl mx-auto mt-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Revolutionizing Innovation with Software, AI, and BCI Solutions
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-xl sm:max-w-3xl mx-auto">
        We are a development, AI, and data science studio specializing in custom software, website, and mobile app development. Our expertise includes AI-driven solutions, machine learning models, computer vision, NLP, and Brain-Computer Interface (BCI) technology, empowering businesses with cutting-edge innovation.
        </p>
        <button className="mt-6 sm:mt-8 px-5 sm:px-6 py-2 sm:py-3 bg-[#113162] text-white rounded-full text-base sm:text-lg font-medium shadow-md hover:bg-gray-800 transition-all">
  LET&apos;S BUILD TOGETHER
</button>

      </div>
    </section>
  );
}
