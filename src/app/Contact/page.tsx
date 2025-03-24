import Navbar from "../components/navbar";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative w-full text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      <section className="w-full h-screen flex flex-col items-center justify-center bg-black text-center px-6">
        <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg text-gray-300 max-w-lg">
          Feel free to reach out through any of the platforms below!
        </p>

        <div className="mt-8 space-y-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/2349156414335"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-600 px-6 py-3 rounded-md text-white font-medium hover:bg-green-700 transition"
          >
            <Phone size={20} /> WhatsApp: 09156414335
          </a>

          {/* Email */}
          <a
            href="mailto:michaelpet40@gmail.com"
            className="flex items-center gap-3 bg-blue-600 px-6 py-3 rounded-md text-white font-medium hover:bg-blue-700 transition"
          >
            <Mail size={20} /> Email: michaelpet40@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/chidiebere-onyekwere-3743b222b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-800 px-6 py-3 rounded-md text-white font-medium hover:bg-blue-900 transition"
          >
            <Linkedin size={20} /> LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/michaelpete1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-md text-white font-medium hover:bg-gray-900 transition"
          >
            <Github size={20} /> GitHub: @michaelpete1
          </a>
        </div>
      </section>
    </main>
  );
}
