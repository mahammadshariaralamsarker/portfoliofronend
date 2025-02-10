"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ project }:any) => {
  return (
    <div className="flex justify-center  ">
      <motion.div
        key={project._id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-2 border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 w-full  "
      >
        {/* Project Image */}
        <div className="overflow-hidden rounded-md mb-4">
          <Image
            width={300}
            height={300}
            alt={project.description}
            src={project.image}
            className="object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        {/* Project Title */}
        <h1 className="text-xl font-semibold text-gray-100 dark:text-black mb-4">
          {project.description}
        </h1>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
