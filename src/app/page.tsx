import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar"; // Updated import path

export default function Home() {
  return (
    <main className="relative w-full text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Background Image Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black">
        <Image
          src="/portbcgnd2.jpg"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          alt="Background"
        />

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to OnyekwereC portfolio site
          </h1>
          <p className="text-lg text-gray-300 max-w-lg mx-auto">
            Get to know me .
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <Link
              href="/Projects"
              className="bg-blue-600 px-6 py-3 rounded-md text-white font-medium hover:bg-blue-700 transition"
            >
              Explore Projects
            </Link>
            <Link
              href="/About"
              className="border border-white px-6 py-3 rounded-md text-white font-medium hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Beauty Section */}
      <section className="w-full py-20 px-6 bg-gray-100 text-black flex flex-col lg:flex-row items-center gap-10">
        {/* Image on Left */}
        <div className="lg:w-1/2 relative">
          <Image
            src="/portim1.jpg" // Change this to your actual image
            width={600}
            height={400}
            alt="Beauty Concept"
            className="rounded-lg object-cover opacity-50"
          />
        </div>

        {/* Text on Right */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">The Essence of Beauty</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Beauty is not just about appearance; it is about confidence,
            elegance, and the way we carry ourselves. It reflects our
            personality and emotions, making us stand out in every moment.
          </p>
        </div>
      </section>

      {/* Figma & Website Showcase Section */}
      <section className="w-full py-20 px-6 bg-white text-black">
        <h2 className="text-4xl font-bold text-center mb-10">Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Figma Designs */}
          <div className="flex flex-col items-center">
            <Image
              src="/figma.jpg"
              width={500}
              height={350}
              alt="Figma Design 1"
              className="rounded-lg shadow-lg object-cover"
            />
            <p className="text-center mt-3 text-lg">Figma Design 1</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/figma 2.jpg"
              width={500}
              height={350}
              alt="Figma Design 2"
              className="rounded-lg shadow-lg object-cover"
            />
            <p className="text-center mt-3 text-lg">Figma Design 2</p>
          </div>

          {/* Websites */}
          <div className="flex flex-col items-center">
            <Image
              src="/homeport.jpg"
              width={500}
              height={350}
              alt="Website 1"
              className="rounded-lg shadow-lg object-cover"
            />
            <p className="text-center mt-3 text-lg">Hometeriorplace 1</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/4nisport.jpg"
              width={500}
              height={350}
              alt="Website 2"
              className="rounded-lg shadow-lg object-cover"
            />
            <p className="text-center mt-3 text-lg">4nis Project 2</p>
          </div>
        </div>
      </section>
    </main>
  );
}
