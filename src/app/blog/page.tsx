import BlogCard from '@/components/utils/blogCard';
import React from 'react';

const blog =async () => {
  const res = await fetch("http://localhost:5000/api/admin/blogs");
  const data = await res.json();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-6">
    {data?.data?.map((blog:any) => 
     <BlogCard key={blog._id} blog={blog} />
    )}
  </div>
  );
};

export default blog ;