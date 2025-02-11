import BlogDetails from "@/components/utils/blogCardDetails";
import React from "react";

const dynamicBlog = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(`${process.env.backendUrl}/admin/blogs/${id}`);
  const data = await res.json();
  return (
    <div>
      <BlogDetails key={data._id} blog={data.data} />
    </div>
  );
};

export default dynamicBlog;
