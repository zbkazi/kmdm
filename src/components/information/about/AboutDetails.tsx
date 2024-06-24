import React from "react";

interface Section {
  title: string;
  content: string | string[];
}

interface AboutDetailsProps {
  data: {
    title: string;
    description: string;
    sections: Section[];
    conclusion: string;
  };
}

const AboutDetails: React.FC<AboutDetailsProps> = ({ data }) => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          {data.title}
        </h2>
        <p className="mt-4 text-lg text-gray-700">{data.description}</p>

        {data.sections.map((section, index) => (
          <div key={index} className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {section.title}
            </h3>
            {Array.isArray(section.content) ? (
              <ul className="list-disc list-inside text-gray-700">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">{section.content}</p>
            )}
          </div>
        ))}

        <p className="mt-8 text-lg text-gray-700">{data.conclusion}</p>
      </section>
    </div>
  );
};

export default AboutDetails;
