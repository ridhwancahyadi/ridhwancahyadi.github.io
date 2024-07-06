import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

function Hero() {
  return (
    <section className="container flex justify-center items-center relative h-screen ">
      <div className="text-center space-y-6 relative z-10 ">
        <main className="text-4xl md:text-5xl font-bold relative">
          <h1 className="text-[#d5d5d5] text-center relative">
            Hi, I'm <span className="inline bg-gradient-to-r from-[#8e44ad] to-[#3498db] text-transparent bg-clip-text">Ridhwan</span> a <br /> 
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Data Enthusiast<span className="inline bg-gradient-to-r from-[#8e44ad] to-[#3498db] text-transparent bg-clip-text">.</span>
            </span>
            <br />
          </h1>
          {/* Animations */}
          <img
            className="md:w-[100px] w-[60px] absolute md:top-[-40px] md:left-[10%] left-[8%] top-[-80px] z-[-1]"
            src="/TensorFlow.svg"
          />
          <img
            className="sm:block absolute md:top-[-50px] top-[-70px] md:right-[10%] right-[10%] z-[-1] md:w-[100px] w-[60px]"
            src="/Pandas.svg"
          />
          <img
            className="sm:block absolute md:left-[50px] md:bottom-[-150px] bottom-[-180px] md:w-[100px] w-[60px] z-[-1]"
            src="/Python.svg"
          />
          <img
            className=" absolute md:bottom-[-20px] top-[350px] md:left-[35%] left-[25%] w-[60px] z-[-1]"
            src="/Keras.svg"
          />
          <img
            className=" absolute right-[20px] md:bottom-[-180px] bottom-[-250px] md:w-[100px] w-[60px] z-[-1]"
            src="/NumPy.svg"
          />
        </main>

        <p className="md:text-xl text-lg text-muted-foreground md:w-7/12 mx-auto text-center">
          Dive into the world of data with me as I explore and build skills in data analysis, data science, and machine learning.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 space-x-2 text-white">
          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={` ${buttonVariants({
              variant: "custom3",
            })}`}
          >
            Github
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={` ${buttonVariants({
              variant: "custom2",
            })}`}
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
