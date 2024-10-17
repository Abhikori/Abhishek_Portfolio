const Img_prop = ({ img, name }) => {
  return (
    <>
    <div className="">
      <div className="w-[100px] max-sm:w-[75px] h-[100px] max-sm:h-[75px] shadow-xl shadow-slate-300 dark:shadow-lg dark:shadow-blue-500/50 bg-gradient-to-bl from-[#ccc] to-[#eee] dark:from-[#051937] dark:to-[#222] rounded-full place-content-center grid translate-x-[100px] max-sm:translate-x-1 transition duration-700 hover:scale-125">
        <img src={img} alt="html" className="max-sm:h-[45px] h-[55px] " />
      </div>
      <p className="text-[#00040f] ml-10 mt-3 w-4/5 text-center dark:text-slate-300 capitalize tracking-widest max-sm:text-sm p-2">{name}</p>
      </div>
    </>
  );
};
export default Img_prop;
