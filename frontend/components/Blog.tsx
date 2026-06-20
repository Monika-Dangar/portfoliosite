"use client";
import React, { useEffect, useState } from "react";
import { blogs } from "@/data";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { FaLocationArrow, FaMedium } from "react-icons/fa6";

const typeWriterText = [
    { text: "my", className: "text-primary" },
    { text: "writeups", className: "text-accent-blue" },
];

const Blog = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <section id="blogs" className="py-20 bg-secondary font-mono">
            <TypewriterEffect words={typeWriterText} />

            <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10 max-w-5xl mx-auto px-4">
                {blogs.map((blog) => (
                    <a
                        key={blog.id}
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 relative overflow-hidden rounded-3xl border border-gray-700 group hover:border-accent-blue hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col p-6 lg:p-8 justify-between min-h-[250px]"
                        style={{
                            backgroundColor: "#1A1E33",
                            backgroundImage:
                                "linear-gradient(135deg, rgba(56, 189, 248, 0.05) 0%, rgba(167, 139, 250, 0.05) 100%)",
                        }}
                    >
                        <div>
                            {/* Card Header Tag */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/10 text-accent-blue">
                                    <FaMedium className="text-sm" />
                                    Medium Article
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-start text-xl md:text-2xl font-bold font-mono text-primary group-hover:text-accent-blue transition-colors duration-200 line-clamp-2">
                                {blog.title}
                            </h1>

                            {/* Description */}
                            <p className="text-start text-secondary mt-3 font-medium font-sans text-sm md:text-base line-clamp-3 leading-relaxed">
                                {blog.des}
                            </p>
                        </div>

                        {/* Read Article Link */}
                        <div className="flex items-center text-accent-purple font-mono font-semibold mt-6 text-sm group-hover:text-accent-blue transition-colors duration-200">
                            <span>Read Article</span>
                            <FaLocationArrow className="ms-2 text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Blog;
