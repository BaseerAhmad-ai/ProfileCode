import { Icons } from "../Components/Icons";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <main id="home" className="pt-12 md:pt-20 px-7 w-full h-auto md:flex min-[650px]:px-28 md:px-20 lg:px-28 lg:h-dvh">
      <section className="mt-8 md:w-1/2 lg:w-1/2 flex justify-center flex-col">
        <div className="text-green-500 text-lg text-start">
          FULL-STACK WEB DEVELOPER
        </div>
        <h1 className="text-4xl font-medium mt-5 min-[1100px]:mt-10">
          Building Modern Web Experiences That{" "}
          <span className="text-green-500"> Drive Results</span>
        </h1>
        <p className="my-5 text-xl font-medium lg:my-8">
          I help startups and businesses build fast, scalable, and
          high-performance web applications using React, Next.js, Node.js and
          MongoDB.
        </p>
        <div className="flex w-full gap-6 min-[1100px]:mt-10">
          <a
            href="#projects"
            className="text-lg font-medium rounded-sm w-1/2 bg-green-500 text-white grid place-items-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="text-lg font-medium rounded-sm w-1/3 p-1 border grid place-items-center"
          >
            Let's Talk
          </a>
        </div>
        <div className="w-[60%]  mt-7 mb-10 lg:mt-10">
          <Icons />
        </div>
      </section>

      <section className="flex justify-center my-5 relative md:w-1/2 lg:items-center">
        <div className="absolute top-[-30px] right-0 sm:right-20 md:right-0 lg:right-24 min-[1100px]:top-9 w-[150px] h-[150px] -z-10">
          <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-green-500/40 blur-[60px] rounded-full"></div>
          <motion.div
            className="absolute inset-0 "
            style={{
              backgroundImage: `radial-gradient(circle, rgba(34,197,94,0.4) 2px, transparent 2px)`,
              backgroundSize: "15px 15px",
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <img
          className="w-2/3 sm:w-1/2 md:w-2/3 lg:w-1/2 min-[500px]:h-[350px] aspect-[2/3] min-[600px]:h1-[430px] h-72 shadow-c rounded-lg shadow-green-300 relative -z-10"
          src="/images/file_000000003c94720b9da5cf818440a3ea.jpg"
          alt="My image"
        />
      </section>
    </main>
  );
}
