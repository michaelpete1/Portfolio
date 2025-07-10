"use client";
import Navbar from "../components/navbar";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative w-full text-white bg-black min-h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      <section className="flex flex-col items-center justify-center text-center px-2 pt-24 min-h-[80vh]">
        <h1 className="text-5xl font-bold mb-4 animate-bounce-in text-blue-700 drop-shadow-lg">
          Contact Me
        </h1>
        <p className="text-lg text-gray-300 max-w-lg mb-2">
          Feel free to reach out through any of the platforms below or the form!
        </p>
        <p className="text-base text-green-300 mb-6 animate-fade-in-up">
          I value every message and look forward to connecting with you. Your ideas and feedback are always welcome!
        </p>
        <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-lg animate-spin-slow z-20" />
        {/* Card Layout */}
        <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-stretch justify-center mt-4 animate-fade-in">
          {/* Contact Links Card */}
          <div className="flex-1 bg-gray-900/80 rounded-2xl shadow-xl p-6 flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-bold text-teal-300 mb-4 flex items-center gap-2 justify-center"><MessageCircle className="w-6 h-6 text-teal-400" /> Get in Touch</h2>
            <a
              href="https://wa.me/2349156414335"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-teal-400 hover:from-green-700 hover:to-teal-500 text-white py-3 px-4 rounded-lg font-medium transition shadow-md"
            >
              <Phone className="w-5 h-5 text-green-200" /> WhatsApp: 09156414335
            </a>
            <a
              href="mailto:michaelpet40@gmail.com"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition shadow-md"
            >
              <Mail className="w-5 h-5 text-blue-200" /> Email: michaelpet40@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/chidiebere-onyekwere-3743b222b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-800 hover:bg-blue-900 text-white py-3 px-4 rounded-lg font-medium transition shadow-md"
            >
              <Linkedin className="w-5 h-5 text-blue-300" /> LinkedIn Profile
            </a>
            <a
              href="https://github.com/michaelpete1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-lg font-medium transition shadow-md"
            >
              <Github className="w-5 h-5 text-gray-300" /> GitHub: @michaelpete1
            </a>
          </div>
          {/* Contact Form Card */}
          <div className="flex-1 bg-gray-900/80 rounded-2xl shadow-xl p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-teal-300 mb-4 flex items-center gap-2 justify-center"><Mail className="w-6 h-6 text-teal-400" /> Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
