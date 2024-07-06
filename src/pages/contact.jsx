import React from "react";

const Contact = () => {
    return (
        <div className="pt-36 relative w-full text-[#d5d5d5]">
     
      <img className=" absolute  lg:-top-[-50px] -top-[-30px] lg:left-[25%] left-[15%] z-[1] lg:w-[150px] w-[100px] md:w-[130px]" src="/curved-arrow.svg"  />
      <img className=" absolute lg:-bottom-[-50px] -bottom-[-20px] lg:right-[25%] right-[15%] z-[1] lg:w-[150px] md:w-[130px] w-[100px] rotate-180" src="/curved-arrow.svg" />
         
      <div className=" pb-40  flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline bg-gradient-to-r from-[#8e44ad] to-[#3498db] text-transparent bg-clip-text text-center md:w-full w-11/12">
        Have a Project in Mind?
        </h2>
        <p className="md:text-lg">Contact Me and Let's Make It Happen.</p>
       <div className="mt-12">
       <a
          href="mailto:ridhwancahyadi11@gmail.com"
          className="cursor-pointer font-bold 
        px-8 py-3 m-auto text-white border-2 rounded-full text-center border-[#00607a] hover:bg-[#00303d]/80"
        >
          Get in Touch
        </a>
       </div>
      </div>
    </div>
    )
}

export default Contact