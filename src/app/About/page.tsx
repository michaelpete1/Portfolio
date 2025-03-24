import Image from "next/image";
import Navbar from "../components/navbar";

export default function AboutPage() {
  return (
    <main className="relative w-full text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/portimg2.jpg" // Change this to your actual background image
          fill
          className="object-cover opacity-70"
          alt="Background"
        />
      </div>

      <h1 className="relative text-5xl font-bold text-center mb-6 z-10">
        About Me
      </h1>

      <div className="relative flex flex-col lg:flex-row items-center gap-12 z-10">
        {/* Left - Image */}
        <div className="lg:w-1/2">
          <Image
            src="/about-me.jpg" // Change this to your actual image
            width={500}
            height={500}
            alt="Chidi Onyekwere"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right - Text Content */}
        <div className="lg:w-1/2">
          <p className="text-lg leading-relaxed">
            Hi, I am <span className="font-semibold">Chidi Onyekwere</span>, a
            passionate
            <span className="text-blue-400 font-semibold">
              {" "}
              Front-End Developer{" "}
            </span>{" "}
            and
            <span className="text-blue-400 font-semibold"> Figma Designer</span>
            .
          </p>

          <p className="mt-4">
            I graduated from{" "}
            <span className="font-semibold">Veritas University</span> with a BSc
            in Computer Science and hold certifications from{" "}
            <span className="font-semibold">Cisco</span>. During my final year,
            I worked on a{" "}
            <span className="font-semibold">text-to-image generation</span>{" "}
            project, exploring AI-driven creativity. While interning at{" "}
            <span className="font-semibold">NNPC subsidiary NPSC</span>, I
            contributed to designing a **web application**, refining both UI and
            functionality.
          </p>

          <p className="mt-4">
            My experience goes beyond development—at{" "}
            <span className="font-semibold">3NIS Place</span>, I served as a
            <span className="text-blue-400 font-semibold">
              {" "}
              Project Manager
            </span>{" "}
            and{" "}
            <span className="text-blue-400 font-semibold">
              {" "}
              Social Media Manager
            </span>
            , handling team coordination, branding, and marketing strategies.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>⚡ Front-End Development (React, Next.js, Tailwind CSS)</li>
              <li>⚡ UI/UX Design (Figma, Adobe XD)</li>
              <li>⚡ AI & Text-to-Image Generation</li>
              <li>⚡ Project Management & Social Media Branding</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
