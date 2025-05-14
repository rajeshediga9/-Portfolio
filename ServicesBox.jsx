import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";

const Services = [
  {
    name: "Java Services",
    description:
      "I offer expert Java development services to help businesses build scalable, efficient, and reliable applications. From custom Java solutions to API integration and backend development, I provide tailored services that meet the unique needs of each project, all delivered by a dedicated developer with a strong focus on quality and performance.",
    image: "https://picsum.photos/200/300",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
 
  {
    name: "Web App Development",
    description:
      "I specialize in web development, creating responsive and user-friendly websites that offer seamless experiences across all devices. Whether it's building custom websites from scratch, implementing React components,I provide high-quality, scalable solutions that meet the needs of businesses and individual clients. Every project is crafted with attention to detail and a focus on performance and usability.",
    image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Security",
    description:
      "I offer comprehensive web and application security services to protect businesses from cyber threats and vulnerabilities. From conducting security audits and penetration testing to implementing secure coding practices and encryption, I ensure that your systems are fortified against potential breaches.",
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            style={{ backgroundImage: `url(${image})` }}
            className={`${bgColor} rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
