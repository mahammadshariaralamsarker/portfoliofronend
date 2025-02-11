"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const skills = [
  "React.js & Next.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "Redux & Zustand",
  "Tailwind CSS & Bootstrap",
  "MongoDB & Mongoose",
  "Node.js & Express.js",
  "REST API & GraphQL",
  "Git & GitHub",
];

const Home = () => {
  return (
    <main className="container mx-auto px-6 my-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left - Text Content */}
        <div className="flex flex-col items-start text-left space-y-4 md:space-y-6">
          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl text-dark-heading dark:text-light-heading md:text-5xl xl:text-6xl font-bold"
          >
            Hi, 👋 <br /> My Name is
          </motion.h1>

          {/* Name with Gradient Effect */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          >
            Mahammad Shariar Alam Sarker
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl xl:text-5xl text-gray-700 dark:text-gray-400 font-semibold"
          >
            <span className="text-blue-500">MERN</span> Stack Developer
          </motion.h2>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-4"
          >
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className=" "
        >
          {/* Replace with your actual image */}
          <Image
            src="/profile.jpg"
            alt="Profile"
            className="  border-2 border-red-400   rounded-md"
            width={300}
            height={400}
          />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-dark-heading dark:text-light-heading mb-4">
          Skills
        </h2>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-gray-700 dark:text-gray-300"
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2 rounded-lg shadow-md text-black"
            >
              ✅ {skill}
            </motion.li>
          ))}
        </motion.ul>
      </section>
      <section className=" mt-8">

      <Link href="/login"  className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Admin Login</Link>
      </section>
    </main>
  );
};

export default Home;
