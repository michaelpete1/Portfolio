import Image from "next/image";
import Navbar from "../components/navbar";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce marketplace for fashion and electronics.",
    image: "/projects/ecommerce.png",
  },
  {
    title: "Portfolio Website",
    description: "A sleek portfolio to showcase my work and skills.",
    image: "/projects/portfolio.png",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar /> {/* Navbar at the top */}
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-4">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
