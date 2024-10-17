import Project_prop from "./Project_prop.jsx";
import {
  NIT_Trichy,
  Game,
  ShopEase,
  Document_Vault,
  Region
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaJava } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiD3Dotjs,
  SiTypescript
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="ShopEase"
            para="Shop Ease website created with Java and Angular"
            img={ShopEase}
            link="https://github.com/Abhikori/ShopEase"
            github_link="https://github.com/Abhikori/ShopEase"
            Java={
              <Tooltip title="Java" arrow>
                <IconButton>
                  <FaJava className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            Typescript={
              <Tooltip title="TypeScript" arrow>
                <IconButton>
                  <SiTypescript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            Angular={
              <Tooltip title="Angular" arrow>
                <IconButton>
                  <SiAngular className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            MySQL={
              <Tooltip title="MySQL" arrow>
                <IconButton>
                  <SiMysql className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Document Vault"
            para="Document Vault created with React and Node.js"
            img={Document_Vault}
            link="https://github.com/Abhikori/Document_Vault"
            github_link="https://github.com/Abhikori/Document_Vault"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            nodejs={
              <Tooltip title="Node" arrow>
                <IconButton>
                  <DiNodejs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            express={
              <Tooltip title="Express" arrow>
                <IconButton>
                  <SiExpress className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mongodb={
              <Tooltip title="MongoDB" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            html5={
              <Tooltip title="HTML5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Game of Life"
            para="Game of Life created with HTML, CSS and JavaScript"
            img={Game}
            link="https://abhikori.github.io/Game_of_Life/"
            github_link="https://github.com/Abhikori/Game_of_Life"
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Region Scholastic System"
            para="Region Scholastic System created with HTML, CSS, JavaScript and D3.js"
            img={Region}
            link="https://abhikori.github.io/Region_Scholastic_System/"
            github_link="https://github.com/Abhikori/Region_Scholastic_System"
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            d3={
              <Tooltip title="D3.js" arrow>
                <IconButton>
                  <SiD3Dotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Exam Registration System"
            para="Exam Registration System created with PHP and MySQL"
            img={NIT_Trichy}
            link="https://github.com/Abhikori/Exam-Registeration"
            github_link="https://github.com/Abhikori/Exam-Registeration"
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            javascript={
              <Tooltip title="JavaScript" arrow>
                <IconButton>
                  <SiJavascript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            php={
              <Tooltip title="PHP" arrow>
                <IconButton>
                  <SiPhp className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            MySQL={
              <Tooltip title="MySQL" arrow>
                <IconButton>
                  <SiMysql className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
