"use client";
import Image from "next/image";
import Navbar from "../components/navbar";

export default function AboutPage() {
  return (
    <main
      role="main"
      className="relative w-full min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Content */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 md:px-16 bg-black/60 backdrop-blur-sm">
        {/* Profile Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center items-center animate-fade-in-up duration-1000 delay-200">
          <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/accnt3.png"
              width={400}
              height={400}
              alt="Chidi Onyekwere"
              className="object-cover"
              priority // profile image loads fast
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 animate-fade-in-up duration-1000 delay-500 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 animate-bounce-in text-blue-700 drop-shadow-lg">
            About Me
          </h1>

          <p className="text-lg leading-relaxed">
            Hi, I am{" "}
            <span className="font-semibold text-teal-400 animate-wiggle">
              Chidi Onyekwere
            </span>
            , a creative{" "}
            <span className="text-blue-400 font-semibold">Front-End Developer</span>{" "}
            and{" "}
            <span className="text-blue-400 font-semibold">Figma Designer</span>.
          </p>

          <p className="text-base leading-loose">
            I graduated from{" "}
            <span className="font-semibold text-white/90">Veritas University</span>{" "}
            with a BSc in Computer Science and earned certifications from{" "}
            <span className="font-semibold text-white/90">Cisco</span>, including{" "}
            <span className="text-blue-400 font-semibold">Python Programming</span>{" "}
            and{" "}
            <span className="text-blue-400 font-semibold">CyberOps</span>.
            During my final year, I explored AI creativity with a{" "}
            <span className="font-semibold">text-to-image generation</span> project.
          </p>

          <p className="text-base leading-loose">
            At{" "}
            <span className="font-semibold">NNPC subsidiary NPSC</span>, I helped
            design a web app, improving UI and functionality. Later, at{" "}
            <span className="font-semibold">3NIS Place</span>, I led teams as a{" "}
            <span className="text-blue-400 font-semibold">Project Manager</span> and{" "}
            <span className="text-blue-400 font-semibold">Social Media Manager</span>,
            focusing on branding and team coordination.
          </p>

          <div className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Skills & Technologies</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-sm md:text-base">
              <li className="transition-all duration-300 hover:translate-x-1">
                💻 Front-End (React, Next.js, Tailwind CSS)
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                🎨 UI/UX Design (Figma, Adobe XD)
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                🧠 AI & Text-to-Image Generation
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                📈 Project Management & Branding
              </li>
              <li className="transition-all duration-300 hover:translate-x-1">
                🎓 Cisco Certified: Python, CyberOps
              </li>
            </ul>
          </div>
          <p className="text-base text-blue-200 mt-8 animate-fade-in-up">
            Every journey is unique—thank you for being part of mine. Let's keep building, learning, and inspiring each other!
          </p>
        </div>
      </section>
      <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-teal-300 shadow-lg animate-spin-slow z-20" />
    </main>
  );
}
