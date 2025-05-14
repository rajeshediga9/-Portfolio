import React from "react";
import personImg from "../../assets/person2.png";

const Hero = () => {
  return (
    <>
      <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px]">
          <div>
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I'm Rajesh Goud
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
               🧑‍💻 Aspiring Frontend Developer | HTML 🧾 CSS 🎨 JavaScript ⚡ React ⚛️
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                "The student learns greatly, loves discipline, and submits projects. Is the wisdom we work for the glory of the future?"
              </p>
              <a
                href="mailto:rajeshts004@gmail.com"
                className="inline-block primary-btn !px-6"
              >
                Hire me
              </a>
            </div>
          </div>
          {/* image container */}
          <div>
            <img
              src={personImg}
              alt="Not found"
              className="w-full md:max-w-lg mx-auto"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
