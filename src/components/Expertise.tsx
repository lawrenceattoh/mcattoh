const Expertise = () => {
    return (
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">We really know our stuff</h2>
        </div>
  
        <div className="grid md:grid-cols-3 gap-6 mt-10 px-6 max-w-6xl mx-auto">
          {[
            { title: "Product Design", items: ["Idea Generation", "Market Research", "Concept Development", "Prototyping", "Testing and Validation"] },
            { title: "Software Development", items: ["Requirements Gathering", "Implementation", "Testing", "Version Control", "Security"] },
            { title: "QA Testing", items: ["Test Planning", "Test Execution", "Defect Reporting", "Performance Testing", "User Acceptance Testing"] },
          ].map((section, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Expertise;
  