import Lottie from "lottie-react";
import education from "../assets/lottie/education.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { DBGI, NIT_Trichy } from "../constants/Constant";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-20 mb-10 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
          Education
        </h1>

        <div
          className="EDUCATION flex justify-between"
          data-aos="fade-right"
        >
        <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f]"
          />
          <div className="w-1/2">
            <div className="border-[#00040f] shadow-xl  bg-[#e1e1e1] dark:bg-transparent  border rounded-xl  hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C] w-700px min-w-[700px] min-h-[200px] max-w-[800px] mt-[52px] p-7 max-sm:p-3">
              <div className="flex gap-5">
                <img
                  src={NIT_Trichy}
                  alt="NIT Trichy"
                  className="w-[90px] h-[90px]"
                />
              <div className=" flex flex-col gap-2 text-left">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-xl w-full h-[30px] tracking-wider ">
                  National Institute of Technology Tiruchirappalli
                </h1>
                <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                  Master of Computer Applications 
                </h3>
                <p className="text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">2021-2024</p>
                
              </div>
              </div>

            </div>
            <div className="border-[#00040f] shadow-xl  bg-[#e1e1e1] dark:bg-transparent border rounded-xl  hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C] w-700px min-w-[700px] min-h-[200px] max-w-[800px] mt-[52px] p-7 max-sm:p-3">
              <div className="flex gap-5">
                <img
                  src={DBGI}
                  alt="DBGI"
                  className="w-[90px] h-[90px]"
                />
              <div className="flex flex-col gap-2 text-left">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-xl w-full h-[60px] tracking-wider ">
                  Dev Bhumi School of Professional Studies Saharanpur
                </h1>

                <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                  Bachelor of Computer Applications
                </h3>
                <p className="text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">2018-2021</p>
                
              </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default Education;
