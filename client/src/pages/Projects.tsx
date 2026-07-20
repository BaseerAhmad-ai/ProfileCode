import { Boll } from "../Components/Boll";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
export function Projects() {
  const [hidden, setHidden] = useState<boolean>(true);
  const data: {
    hidden: boolean;
    title: string;
    description: string;
    image: string;
    tags: string[];
    buttons: {
      name: string;
      link: string;
    }[];
  }[] = [
    {
      hidden: false,
      title: "E-Commerce Store",
      description:
        "A full-featured e-commerce plateform with admin dashbord, product management, payment integration and ordertracking system.",
      image: "/pro/e.png",
      tags: ["Express", "Next.js", "MongoDB"],
      buttons: [
        {
          name: "Live Demo",
          link: "#",
        },
        {
          name: "GitHub",
          link: "#",
        },
      ],
    },
    {
      hidden: false,
      title: "Social Media App",
      description:
        "Modern social plateform withreal-time chart, posts, stories, likes,comments and user profile managment.",
      image: "/pro/c.png",
      tags: ["Node.js", "Socket.io", "MongoDB"],
      buttons: [
        {
          name: "Live Demo",
          link: "#",
        },
        {
          name: "GitHub",
          link: "#",
        },
      ],
    },
    {
      hidden: false,
      title: "Projects Management",
      description:
        "Kanban style project management tool for teams. Manage tasks, deadlines, team collaboration and progress tracking.",
      image: "/pro/p.png",
      tags: ["Express", "Next.js", "JWT"],
      buttons: [
        {
          name: "Live Demo",
          link: "#",
        },
        {
          name: "GitHub",
          link: "#",
        },
      ],
    },
    {
      hidden,
      title: "Learning Management System",
      description:
        "Complete LMS plateform for online courses. Video lectures, Quizzes, progress tracking and certificate generation.",
      image: "/pro/l.png",
      tags: ["PostgreSQL", "Next.js", "Cloudinary"],
      buttons: [
        {
          name: "Live Demo",
          link: "#",
        },
        {
          name: "GitHub",
          link: "#",
        },
      ],
    },
    {
      hidden,
      title: "Hospital Management System",
      description:
        "End-to-end hospital mangement with patient records, doctor appointmnts, billing and inventory management.",
      image: "/pro/d.png",
      tags: ["Node.js", "Next.js", "Redux"],
      buttons: [
        {
          name: "Live Demo",
          link: "#",
        },
        {
          name: "GitHub",
          link: "#",
        },
      ],
    },
    {
      hidden,
      title: "AI powered SaaS Aplication",
      description:
        "AI SaaS plateform with GPT integration.Content generater, chatbots, analycics dashboard and subscribtion billing.",
      image: "/pro/a.png",
      tags: ["Next.js", "OpenAI", "Stripe"],
      buttons: [
        {
          name: "Live Demo",
          link: "#",
        },
        {
          name: "GitHub",
          link: "#",
        },
      ],
    },
  ];
  return (
    <section
      className="pt-2  px-7 w-full h-auto min-[650px]:px-28 md:px-20 lg:px-28  pb-7"
      id="projects"
    >
      <h3 className="text-3xl flex items-center gap-3 font-normal ">
        <Boll /> Featured Projects
      </h3>
      <ul className="mt-7 grid  grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-12">
        {data.map((item, index) => {
          return (
            <li
              key={index}
              className={`${
                item.hidden ? "hidden" : ""
              } py-3 px-2 hover:scale-105 transition-all shadow-sm bg-slate-50 border rounded-md overflow-hidden h-[370px]`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[40%] rounded-md"
              />
              <div className="mt-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-lg line-clamp-3">{item.description}</p>
                <div className="flex mt-2 items-center justify-evenly">
                  {item.tags.map((Elem, ind) => {
                    return (
                      <div
                        className="px-3 py-1 text-green-500 rounded-sm  border shadow-sm bg-white"
                        key={ind}
                      >
                        {Elem}
                      </div>
                    );
                  })}
                </div>
                <div className="flex mt-4 items-center justify-evenly">
                  {item.buttons.map((Btn, position) => {
                    return (
                      <a
                        href={Btn.link}
                        className={`flex items-center gap-2 px-2 py-1 rounded-full text-green-500 `}
                        key={position}
                      >
                        {Btn.name}
                        <FiExternalLink />
                      </a>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setHidden((prev) => !prev)}
        className={`${!hidden?"hidden":"block"} p-2 m-auto mt-12 border border-green-500 text-green-500 rounded-md text-green w-64 flex justify-center justify-items-center`}
      >
        View All Projects
      </div>
    </section>
  );
}
