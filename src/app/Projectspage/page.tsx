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
      <div className="relative z-10 max-w-7xl mx-auto px-2 py-8 sm:px-4 md:px-6 pt-24">
        <h1 className="text-5xl font-bold mb-10 text-center animate-bounce-in text-blue-700 drop-shadow-lg">
          My Projects
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map(({ name, url, imageSrc }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-xl border border-gray-800 bg-gray-900/80 overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-fade-in-up ${delayClasses[i % delayClasses.length]}`}
            >
              <div className="relative w-full h-44 sm:h-36 lg:h-44">
                <Image
                  src={imageSrc}
                  alt={`${name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:brightness-90 transition-all duration-500 rounded-t-xl"
                />
              </div>
              <div className="bg-black bg-opacity-60 p-3 text-center rounded-b-xl">
                <h2 className="text-lg font-semibold text-teal-300 group-hover:text-teal-400 transition-colors duration-300">
                  {name}
                </h2>
                <p className="mt-1 text-xs text-gray-300 group-hover:text-gray-100 transition-colors duration-300 animate-text-fade-in">
                  Visit {name} Website
                </p>
              </div>
            </a>
          ))}
        </div>
        <p className="text-base text-teal-200 mt-8 text-center animate-fade-in-up">
          Creativity and passion drive every project. Thank you for exploring my work—let's create something amazing together!
        </p>
      </div>
      <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gradient-to-tr from-teal-400 to-blue-400 shadow-lg animate-spin-slow z-20" />
    </main>
  );
}
