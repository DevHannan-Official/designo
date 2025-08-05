import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full pt-36 flex items-center justify-center bg-background">
      <div className="absolute bottom-0 left-0 right-0 z-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="relative z-10 flex flex-col items-center space-y-6 text-white">
        <p className="text-sm py-2 px-4 border border-background/20 bg-black/40 backdrop-blur-lg rounded-full">
          Build Beautiful Websites — Fast ⚡
        </p>
        <h2 className="text-primary font-special text-8xl">Designo</h2>
        <Image
          src="/images/preview.png"
          alt="Designo Preview"
          width={1000}
          height={800}
          className="w-full h-auto object-cover relative -top-7 rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
