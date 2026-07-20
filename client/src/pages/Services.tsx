import { FaServer } from "react-icons/fa6";
import { Boll } from "../Components/Boll";
import { FaCode, FaLayerGroup, FaPlug } from "react-icons/fa";
import { IconType } from "react-icons";
export function Services() {
  const data: {
    title: string;
    description: string;
    icon: IconType;
  }[] = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React, Next.js and Tailwind CSS.    ",
      icon: FaCode,
    },
    {
      title: "Backend Development",
      description:
        "Creating robust and scalable REST APIs with Node.js, Express.js and MongoDB.",
      icon: FaServer,
    },
    {
      title: "Full-Stack Development",
      description:
        "End-to-end web application development with modren technologies and best practices.",
      icon: FaLayerGroup,
    },
    {
      title: "API Integration",
      description:
        "Integrating third-partyservices and payment gateways for smooth functionality.",
      icon: FaPlug,
    },
  ];
  return (
    <section id="services" className="h-auto pt-6 px-7 w-full min-[650px]:px-28 md:px-20 lg:px-28">
      <h2 className="text-3xl flex items-center gap-3 font-normal">
        <Boll /> What I Do
      </h2>
      <ul className=" items-stretch lg:mt-5 h-full flex flex-col justify-evenly  py-4 gap-5 md:flex-row">
        {data.map((item, index) => {
          return (
            <li key={index} className=" h-auto hover:scale-105 transition-all border bg-slate-50 shadow-sm px-1 py-4 rounded-sm flex items-center gap-12 md:flex-col md:items-start md:gap-1 max-md:px-3">
              <div className="text-2xl text-green-500 ">{<item.icon />}</div>
              <div className="lg:mt-3">
                <h2 className="text-lg font-semibold ">{item.title}</h2>
                <p className="flex-1 font-medium text-md">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
