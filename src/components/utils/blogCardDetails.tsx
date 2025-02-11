"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogDetails = ({ blog }: { blog: any }) => { 
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Blog Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl font-extrabold text-gray-900 dark:text-black mb-6"
      >
        {blog.title}
      </motion.h1>

      {/* Blog Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-xl shadow-lg mb-8"
      >
        <Image
          alt={blog.title}
          src={blog.image} 
          width={1200}
          height={200}
          className="  max-h-screen   rounded-xl transition duration-300 ease-in-out transform hover:scale-110"
        />
      </motion.div>

      {/* Blog Category */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400"
      >
        {blog.category}
      </motion.div>

      {/* Blog Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-lg text-gray-700 dark:text-black leading-relaxed mb-6"
      >
        {blog.content}
      </motion.div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 flex justify-start"
      >
        <Link
          href="/blogs"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105"
        >
          Back to Blogs
        </Link>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
