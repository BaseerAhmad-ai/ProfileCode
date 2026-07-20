import { IoMenu } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";
import {  useTheme } from "../hooks/ThemeToggle";
import { useState } from "react";
import { MenueBar } from "./MenueBar";
export function Header() {
  const handleActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const linkRef = document.getElementsByTagName(
      "a"
    ) as HTMLCollectionOf<HTMLAnchorElement>;
    for (const a of linkRef) {
      a.classList.remove("border-b-2");
      a.classList.remove("text-green-600");
    }
    e.currentTarget.classList.add("border-b-2");
    e.currentTarget.classList.add("text-green-600");
  };
  const { theme, toggleTheme } = useTheme();
  const [show,setShow]=useState<boolean>(false)
  return (
    <>
    <header className="z-10 dark:bg-black fixed bg-white  w-full h-12 shadow-md">
      <nav className="flex items-center justify-around w-full h-full">
        <div className="flex items-center gap-1 p-1">
          <span className="text-green-500 text-xl">{"</>"}</span>
          <span className="text-xl [white-space:nowrap]"> Baseer Ahmad</span>
        </div>
        <ul className="md:flex hidden items-center sm:gap-4 lg:w-[40%] text-lg justify-evenly">
          <li>
            <a
              href="#home"
              className="nav-link"
              onClick={(e) => handleActive(e)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-link"
              onClick={(e) => handleActive(e)}
            >
              About
            </a>
          </li>
          <li className="hidden lg:block">
            <a
              href="#services"
              className="nav-link "
              onClick={(e) => handleActive(e)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="nav-link"
              onClick={(e) => handleActive(e)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="nav-link"
              onClick={(e) => handleActive(e)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-link"
              onClick={(e) => handleActive(e)}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex gap-7 items-center ">
          <div
            className={`rounded-full md:flex hidden border w-16 items-center px-1 h-8 bg-slate-200 ${
              theme ? "justify-end" : "justify-start"
            }`}
            onClick={toggleTheme}
          >
            <div className="size-6 rounded-full text-green-500 bg-white grid place-items-center">
              {theme==="dark" ? <FaRegMoon />: <IoSunnySharp />}
            </div>
          </div>
          <a
            href="#contact"
            className="md:grid hidden place-items-center text-lg rounded-md bg-green-500 text-white px-3 py-1"
          >
            Let's Talk
          </a>
        </div>
        <button onClick={()=>setShow((prev:boolean)=>!prev)} className={` md:hidden  h-2/3 w-8  grid place-items-center ${show?"text-lg":"text-2xl"} font-semibold`}>
          {!show?<IoMenu />:"X"}
        </button>
      </nav>
    </header>
    <MenueBar show={show} setShow={setShow}/>
    </>
  );
}
