import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
  CPP,
  C,
  Java,
  Spring_Boot,
  Angular,
  Typescript,
  Postman,
  Docker,
  MySQL,
  MongoDB
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

   const imagedata=[
    {
      img:C,
      name:"C"
    },
    {
      img:CPP,
      name:"C++"
    },
    {
      img:Java,
      name:"Java"
    },
    {
      img:Python,
      name:"Python"
    },
    {
      img:HTML,
      name:"HTML"
    },
    {
      img:CSS,
      name:"CSS"
    },
    {
      img:Javascript,
      name:"Javascript"
    },
    {
      img:Typescript,
      name:"Typescript"
    },
    {
      img:Spring_Boot,
      name:"Spring Boot"
    },
    {
      img:react,
      name:"React"
    },
    {
      img:Angular,
      name:"Angular"
    },
    {
      img:Vite,
      name:"Vite"
    },
    {
      img:MySQL,
      name:"MySQL"
    },
    {
      img:MongoDB,
      name:"MongoDB"
    },
    {
      img:TailwindCSS,
      name:"TailwindCSS"
    },
    {
      img:Git,
      name:"Git"
    },
    {
      img:Github,
      name:"Github"
    },
    {
      img:Postman,
      name:"Postman"
    },
    {
      img:Docker,
      name:"Docker"
    },
   ]

  return (
    <>
      <section id="skills" className="p-5 mx-20 mb-10  font-['Poppins'] mt-20  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          Skills
        </h1>
        <div
          className="IMG grid place-content-center p-10 grid-cols-4 gap-10 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          {
            imagedata.map((data, index) => (
              <Image key={index} img={data.img} name={data.name}></Image>
            ))
          }
        </div>
      </section>
    </>
  );
};
export default Skills;
