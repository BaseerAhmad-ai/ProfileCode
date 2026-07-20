import { FaGithub, FaLinkedinIn, FaMailBulk, FaWhatsapp } from "react-icons/fa";
export function Icons(){
    return  <section className=" mb-2 flex justify-evenly w-full gap-3">
    <a
      href="https://wa.me/9203703892252?text=Hello%20Baseer%2C%20!%20saw%20your%20portfolio%20and%20want%20to%20connect"
      target="_blank"
      rel="noopener noreferrer"
      title="whats app "
      className="link-ico size-10 text-2xl"
    >
      <FaWhatsapp />
    </a>
    <a
      href="https://github.com/BaseerAhmad"
      target="_blank"
      rel="noopener noreferrer"
      title="git hub"
      className="link-ico size-10 text-2xl"
    >
      <FaGithub />
    </a>
    <a
      href="mailto:baseer000ahmad@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Baseer%20Ahmad%2C"
      target="_blank"
      rel="noopener noreferrer"
      title="email"
      className="link-ico size-10 text-2xl"
    >
      <FaMailBulk />
    </a>
    <a
      href="https://linkedin.com/in/BaseerAhmad"
      target="_blank"
      rel="noopener noreferrer"
      title="linkedin"
      className="link-ico size-10 text-2xl"
    >
      <FaLinkedinIn />
    </a>
  </section>
}