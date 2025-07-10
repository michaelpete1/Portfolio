'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const showcaseImages = [
    { src: '/figma.jpg', title: 'Figma Design 1' },
    { src: '/figma 2.jpg', title: 'Figma Design 2' },
    { src: '/homeport.jpg', title: 'Hometeriorplace 1' },
    { src: '/4nisport.jpg', title: '4nis Project 2' },
  ];

  const moreProjectImages = [
    { src: '/accountant.jpg', title: 'Brand Identity Work' },
    { src: '/freemedia.jpg', title: 'Elegant Product UI' },
    { src: '/galaxyride2.png', title: 'Mobile UX Flow' },
    { src: '/galaxyride.jpg', title: 'galaxy ride' },
  ];

  return (
    <main className="relative w-full text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        <Image
          src="/portimg1.jpg"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
          alt="Background"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl font-bold mb-4 animate-bounce-in drop-shadow-lg text-blue-700">
            Welcome to OnyekwereC portfolio site
          </h1>
          <p className="text-lg text-gray-300 max-w-lg mx-auto">Get to know me.</p>

          <motion.div
            className="mt-6 flex space-x-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link
              href="/Projectspage"
              className="bg-gradient-to-r from-blue-600 to-teal-400 px-6 py-3 rounded-md text-white font-medium shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-teal-500 transition-transform transform hover:scale-105 animate-wiggle"
            >
              Explore Projects
            </Link>
            <Link
              href="/About"
              className="border border-blue-600 px-6 py-3 rounded-md text-blue-700 font-medium bg-white hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
        <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-teal-300 shadow-lg animate-spin-slow z-20" />
      </section>

      {/* Beauty Section */}
      <section className="w-full py-20 px-6 bg-gray-100 text-black flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/portim3.jpg"
            width={600}
            height={400}
            alt="Beauty Concept"
            className="rounded-lg object-cover opacity-70 hover:opacity-100 transition duration-500"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">The Essence of Beauty</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Beauty is not just about appearance; it is about confidence, elegance,
            and the way we carry ourselves. It reflects our personality and
            emotions, making us stand out in every moment.
          </p>
        </motion.div>
      </section>

      {/* Showcase Section */}
      <section className="w-full py-20 px-6 bg-white text-black">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Showcase
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {showcaseImages.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImg(item.src)}
            >
              <div className="w-full max-w-[500px] aspect-[4/3] relative rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center mt-3 text-lg">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Projects Section */}
      <section className="w-full py-20 px-6 bg-gray-100 text-black">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          More Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {moreProjectImages.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImg(item.src)}
            >
              <div className="w-full max-w-[500px] aspect-[4/3] relative rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center mt-3 text-lg">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className="relative w-full max-w-3xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="Enlarged"
                width={1200}
                height={800}
                className="rounded-lg object-contain"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-md"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
