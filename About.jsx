import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white dark:bg-slate-800 dark:text-white"
      >
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="relative font-bold">
              <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
                ABOUT
              </div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
               ✨ About me
              </h1>
            </div>
            <div className="text-slate-500">
              <p>
                I’m an aspiring Frontend and Java Developer passionate about building responsive web interfaces and user-friendly UIs. I specialize in using React components to create dynamic applications with smooth animations, CRUD functionality. I’m continuously learning and refining my skills to craft engaging digital experiences that work seamlessly across devices.
              </p>{" "}
              <br />
              <p>
                
              </p>
              <div>
                <a href="https://drive.google.com/file/d/1EjucaytSe2Zze1_9Xy33deTX4PmTVgGV/view?usp=drivesdk" className="primary-btn inline-block my-6 mr-6">
                  {" "}
                  Download Resume
                </a>
                <a href="tel:+91 9182012566" className="outline-btn inline-block ">
                  {" "}
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
