import Image from "next/image";
import Navbar from "../components/navbar";

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/portimg2.jpg" // Ensure this image exists in `public/`
          fill
          className="object-cover opacity-70"
          alt="Background"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 bg-black/50 z-10">
        {/* Left - Profile Image */}
        <div className="lg:w-1/2">
          <Image
            src="/portim1.jpg" // Replace this with an actual profile picture
            width={500}
            height={500}
            alt="Chidi Onyekwere"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            Hi, I am <span className="font-semibold">Chidi Onyekwere</span>, a
            passionate{" "}
            <span className="text-blue-400 font-semibold">
              Front-End Developer
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
            and
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
