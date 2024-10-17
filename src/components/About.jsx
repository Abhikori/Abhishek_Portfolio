import Lottie from "lottie-react";
import { Typewriter } from 'react-simple-typewriter'
import computer from "../assets/lottie/computer.json";
import animationData from "../assets/lottie/person-coding.json";


const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins']  max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 flex max-sm:flex-col justify-between max-sm:gap-10">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
              Abhishek Kori
              
            </span>

            <br />
          <div 
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-3xl text-white mb-4 font-medium lg:inline-block "
          >
            &nbsp;
            <Typewriter 
              words={["Frontend Developer", "Backend Developer", "Full Stack Developer"]}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>

            <p className="ABOUT h-[100px] text-xl max-sm:text-[15px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1">
              Programming enthusiast who often thinks about developing new 
              things for solving real world problems.
            </p>
          </div>


          <Lottie
            animationData={animationData}
            loop={true}
            className="max-w-[500px] shadow-xl rounded-xl border border-[#00040f] "
          />
        </div>
      </section>
    </>
  );
};
export default About;
