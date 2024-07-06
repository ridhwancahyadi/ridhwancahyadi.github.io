import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "../ui/button";


const Footer = () => {
    return (
        <div className="pb-5 ">
            <div className="max-w-4xl text-white w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center  border-t border-[#005066]">
        <p className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-sm font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2  inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width={26}
                  height={26}
                  alt="React"
                  title="React"
                />
                
              </span>
            </div>
          </div>
          <div className="mt-2 text-sm">
          &copy; 2024 {" "}
            <a
              href="https://github.com/ridhwancahyadi"
              className="text-[#269bbb] font-medium"
            >
             Ridhwan Cahyadi
            </a>
            . All rights reserved.
          </div>
        </p>
      </div>
      <div className="mt-8 text-center me-5 text-gray-400 sm:text-right sm:-mt-12">
         <a
              href="https://github.com/ridhwancahyadi"
              target="_blank"
              className={`border ${buttonVariants({ variant: "custom3" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5 " />
              View Source Code
            </a>
          
          
        
        <div/>
      </div>
      </div>
       
    )
}

export default Footer;