import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full my-10 md:py-10 px-4 md:px-6 flex justify-center bg-background">
      <div className="absolute bottom-0 left-0 right-0 z-0 top-0 bg-[linear-gradient(to_right,#ddd_1px,transparent_1px),linear-gradient(to_bottom,#ddd_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="relative z-10 flex flex-col items-center space-y-6 text-white">
        <p className="text-sm py-2 px-4 border border-background/20 bg-accent/40 text-foreground backdrop-blur-lg rounded-full">
          Build Beautiful Websites — Fast & Efficiently ⚡
        </p>
        <h2 className="text-primary dark:text-indigo-500 font-special text-6xl sm:text-8xl">
          Designo
        </h2>
        <div className="relative w-full flex items-center justify-center">
          <Image
            src="/images/preview.png"
            alt="Designo Preview"
            width={1200}
            height={1200}
            className="w-full h-auto object-cover relative -top-7  rounded-t-2xl shadow-lg"
          />
          <div
            className="bottom-0 top-[30%] left-0 right-0 absolute z-10"
            style={{
              background:
                "linear-gradient(to top, var(--background), transparent)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
