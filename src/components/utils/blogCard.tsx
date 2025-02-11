'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <div className="flex justify-center">
      <motion.div
        key={blog._id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-2 border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 w-full max-w-md"
      >
        {/* Blog Image */}
        <div className="overflow-hidden rounded-md mb-4">
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={300}
            className="object-cover w-full h-full transition duration-300 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Blog Title */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-black mb-4">
          {blog.title}
        </h2>

        {/* Blog Content Snippet */}
        <p className="text-gray-700 dark:text-black mb-4 line-clamp-3">
          {blog.content}
        </p>

        {/* Blog Category */}
        <div className="mb-4">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {blog.category}
          </span>
        </div>

        {/* Read More Button */}
        <div className="flex justify-end">
          <Link
            href={`/blog/${blog._id}`}
            className="text-blue-600 hover:text-blue-800 font-medium py-2 px-4 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out"
          >
            Details
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogCard;
