import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import BentoGridCompo from "./BentoGridCompo";
import Experience from "./Experience";
import Blog from "./Blog";
import CanvasRevealEffectCompo from "./CanvasRevealEffectCompo";

const Hero = () => {
  const typeWriterText = [
    { text: "Hi," },
    { text: "I'm" },
    { text: "Monika," },
    { text: "a" },
    { text: "Full", className: "text-accent-blue" },
    { text: "Stack", className: "text-accent-blue" },
    { text: "Developer", className: "text-accent-blue" },
    { text: "&", className: "text-accent-blue" },
    { text: "Freelancer.", className: "text-accent-blue" },
  ];

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-secondary">
        <div className="text-center max-w-sm md:max-w-5xl">
          <p className="my-5 text-secondary font-mono text-md font-light">
            ~ <span className="text-accent-blue">/home</span>
          </p>

          <TypewriterEffect words={typeWriterText} />

          <p className="my-5 text-primary font-mono text-md font-medium text-center">
            $ whoami
          </p>

          {/* Option 1: Pixel-Painting Metaphor */}
          {/* <p className="my-5 text-primary font-mono text-md font-light text-center">
            I paint pixels into fast, sleek web apps —<br />
            mixing clean code with smooth UX.
          </p> */}

          {/* Option 3: Terminal Command Simplicity */}
          {/* <p className="my-5 text-primary font-mono text-md font-light text-center">
            I run commands to create quick web apps —<br />
            syncing tight code with easy UX.
          </p> */}

          {/* Option 5: Code as Art */}
          <p className="my-5 text-primary font-mono text-md font-light text-center">
            Building scalable, AI-powered applications —<br />
            with seamless user experiences.
          </p>
        </div>
      </div>
      <BentoGridCompo />
      <Projects />
      <Experience />
      <Blog />
      <CanvasRevealEffectCompo />
      <Contact />
    </>
  );
};

export default Hero;