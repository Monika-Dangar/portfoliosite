import React from "react";
import { workExperience } from "@/data";
import { TypewriterEffect } from "./ui/typewriter-effect";

const typeWriterText = [
    { text: "work", className: "text-primary" },
    { text: "experience", className: "text-accent-blue" },
];


const Experience = () => {
    return (
        <div className="py-20 w-full">
            <TypewriterEffect words={typeWriterText} />

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {[...workExperience].reverse().map((card) => (
                    <div
                        key={card.id}
                        className="flex-1 relative overflow-hidden rounded-3xl border border-gray-700 group hover:shadow-xl transition duration-200 shadow-none flex flex-col p-5 lg:p-10 gap-2 md:col-span-2"
                        style={{
                            backgroundColor: "#1A1E33",
                            backgroundImage:
                                "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)",
                        }}
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center gap-2 items-start">
                            {/* <img
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                className="lg:w-32 md:w-20 w-16"
                            /> */}
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold font-mono text-primary">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold font-sans text-secondary">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
