"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

// Dynamically import Three.js scene to avoid SSR issues
const WireScene = dynamic(() => import("./three/WireScene"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const hudRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simple fade/slide in for title
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.5
            });

            // HUD staggering
            gsap.from(".hud-item", {
                x: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                delay: 1
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-void">
            {/* 3D Background */}
            <div className="canvas-container absolute top-0 left-0 w-full h-full z-0">
                <WireScene />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full flex items-center px-6 md:px-20 container mx-auto pointer-events-none">
                <div className="w-full max-w-4xl">
                    <h5 className="text-molten font-space uppercase tracking-[0.2em] mb-4 text-sm md:text-base">
                        Miki Wire Works Pvt Ltd
                    </h5>
                    <h1 ref={titleRef} className="text-5xl md:text-8xl font-oswald text-titanium leading-tight uppercase font-bold drop-shadow-2xl">
                        The Nervous System <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-titanium to-silver">
                            of Infrastructure
                        </span>
                    </h1>

                    <div className="mt-8 pointer-events-auto inline-block">
                        <button className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-molten/50 text-titanium hover:bg-molten/10 transition-all duration-300 backdrop-blur-sm rounded-none tracking-widest uppercase font-oswald">
                            Explore Solutions
                            <MoveRight className="w-5 h-5 text-molten group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Futuristic HUD Stats */}
            <div ref={hudRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-64 pr-10 flex flex-col gap-6 items-end z-20 pointer-events-none hidden md:flex">
                <div className="hud-item bg-gunmetal/30 backdrop-blur-md p-4 border-r-2 border-molten w-full text-right">
                    <span className="block text-xs text-silver tracking-widest uppercase mb-1">Revenue</span>
                    <span className="block text-2xl font-oswald text-titanium">₹242 Cr+</span>
                </div>
                <div className="hud-item bg-gunmetal/30 backdrop-blur-md p-4 border-r-2 border-titanium/30 w-full text-right">
                    <span className="block text-xs text-silver tracking-widest uppercase mb-1">Capacity</span>
                    <span className="block text-2xl font-oswald text-titanium">100k MT</span>
                    <span className="text-xs text-molten">Per Annum</span>
                </div>
                <div className="hud-item bg-gunmetal/30 backdrop-blur-md p-4 border-r-2 border-titanium/30 w-full text-right">
                    <span className="block text-xs text-silver tracking-widest uppercase mb-1">Railways Share</span>
                    <span className="block text-2xl font-oswald text-titanium">~20%</span>
                </div>
            </div>
        </section>
    );
}
