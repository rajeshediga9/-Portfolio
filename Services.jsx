import React from "react";
import ServicesBox from "./ServicesBox.jsx";

const Services = () => {
  return (
    <>
      <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
        <div className="container flex flex-col items-center">
          <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
            Services
          </h1>
          <p className="text-slate-500 text-center md:w-[50%] mx-auto">
          "I offer a range of services designed to help businesses streamline operations, enhance productivity, and deliver innovative solutions, including web development, custom software design, and API integration, all provided by a dedicated individual with a passion for technology and problem-solving."
          </p>
        </div>
        {/* services Card */}
        <div>
          <ServicesBox />
        </div>
      </section>
    </>
  );
};

export default Services;
