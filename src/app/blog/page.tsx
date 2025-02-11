import BlogCard from "@/components/utils/blogCard";
import { TBlog } from "@/types";
import React from "react";

const blog = async () => {
  const res = await fetch(`${process.env.backendUrl}/admin/blogs`);
  const data = await res.json(); 
  return (
    <main>
      <h1 className="text-3xl text-black font-bold text-center my-4">
        All Blogs Here
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-6">
        {data?.data?.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </main>
  );
};

export default blog;
