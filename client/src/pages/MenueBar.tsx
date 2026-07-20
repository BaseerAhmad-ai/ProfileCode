import { IconType } from "react-icons";
import {
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiMail,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { useTheme } from "../hooks/ThemeToggle";
import { Icons } from "../Components/Icons";
export function MenueBar({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (a: boolean) => void;
}) {
  const { theme, toggleTheme } = useTheme();
  const sideBar: {
    txt: string;
    icon: IconType;
  }[] = [
    { txt: "home", icon: FiHome },
    { txt: "about", icon: FiUser },
    { txt: "services", icon: IoSettingsOutline },
    { txt: "projects", icon: FiFolder },
    { txt: "skills", icon: FiCode },
    { txt: "contact", icon: FiMail },
  ];
  return (
    <nav
      className={` ${
        show ? "block " : "hidden"
      }  pt-[clamp(2rem,10vw,3rem)] md:hidden min-[500px]:w-1/2 bg-white z-50 fixed left-0 bottom-0 border-r-2 px-4 flex flex-col justify-between w-3/4 h-[92%] rounded-r-lg`}
    >
      <div className="py-4 ">
        <div className="flex flex-col justify-evenly h-40 ">
          <div className="mb-2 bg-white border-black border-2 size-16 rounded-full grid place-items-center">
            <span className="text-2xl text-green-500">{"</>"}</span>
          </div>
          <h2 className="text-black font-semibold text-xl">Baseer Ahmad</h2>
          <p className="text-black">Full-Stack Devloper. </p>
          <hr className="mt-3 bg-slate-300" />
        </div>
        <ul className="gap-1 grid">
          {sideBar.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${item.txt}`}
                  onClick={() => setShow(false)}
                  className="text-xl border-black hover:border-s-2 hover:bg-green-100 text-black rounded capitalize w-full h-8 flex items-center gap-3 pl-1 py-2 "
                >
                  <span className="text-black ">{<item.icon />}</span>
                  {item.txt}
                </a>
              </li>
            );
          })}
          <li
            onClick={toggleTheme}
            className="text-xl border-black hover:border-s-2 hover:bg-green-100 text-black rounded capitalize w-full flex items-center gap-3 pl-1"
          >
            <span className=" text-black">
              {theme == "" ? <FiSun /> : <FiMoon />}
            </span>
            {theme == "" ? "Switch dark" : "Switch light"}
          </li>
        </ul>
      </div>
      <Icons />
    </nav>
  );
}
