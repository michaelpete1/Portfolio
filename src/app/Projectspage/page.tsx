import Image from "next/image";
import Navbar from "../components/navbar";

const projects = [
  {
    name: "FreeMedia",
    url: "https://freemedia.vercel.app/",
    imageSrc: "/freem.jpg",
  },
  {
    name: "Galaxy",
    url: "https://galaxy-ride.vercel.app/",
    imageSrc: "/galaxyride s.jpg",
  },
  {
    name: "Hometerrior",
    url: "https://hometeriorplace.vercel.app/",
    imageSrc: "/homet.png",
  },
  {
    name: "FreeMedia",
    url: "https://freemedia.vercel.app/",
    imageSrc: "/freemedia.jpg",
  },
    {
    name: "Accountant site",
    url: "https://accountant-pro.vercel.app/",
    imageSrc: "/accountant.jpg",
  },
   {
    name: "4nis site",
    url: "https://4nis.vercel.app/", 
    imageSrc: "/4nisport.jpg",
  },
 
];

// Tailwind delay classes for stagger animation
const delayClasses = ["delay-150", "delay-300", "delay-450", "delay-600"];

export default function ProjectsPage() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-12 text-center animate-fade-in-up">
          My Projects
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map(({ name, url, imageSrc }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 animate-fade-in-up ${delayClasses[i % delayClasses.length]}`}
            >
              <div className="relative w-full h-48 sm:h-40 lg:h-48">
                <Image
                  src={imageSrc}
                  alt={`${name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:brightness-90 transition-all duration-500"
                />
              </div>
              <div className="bg-black bg-opacity-70 p-4 text-center">
                <h2 className="text-xl font-semibold text-teal-300 group-hover:text-teal-400 transition-colors duration-300">
                  {name}
                </h2>
                <p className="mt-1 text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300 animate-text-fade-in">
                  Visit {name} Website
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
