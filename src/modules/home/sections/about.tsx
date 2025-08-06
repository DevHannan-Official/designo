import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="my-8 sm:my-16">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 py-16 mt-16">
        <h2 className="text-3xl sm:text-4xl text-center">About</h2>
        <p className="mt-3 text-sm text-muted-foreground text-center w-full">
          Designo is a modern, full-stack website builder tailored for
          developers, designers, and businesses. With intuitive design tools, a
          powerful drag-and-drop editor, and a comprehensive dashboard of
          features, Designo empowers you to bring your digital presence to life
          fast, flexible, and without limits.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
