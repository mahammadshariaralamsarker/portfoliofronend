"use client";
import { useState } from "react";
import {
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useGetBlogsQuery,
  useUpdateBlogMutation,
} from "@/redux/slice/admin.Slice";
import { SubmitHandler, useForm } from "react-hook-form";

type TBlogs = {
  _id: string;
  title: string;
  image: string;
  content: string;
  category: string;
  __v: number;
};

const BlogComponent = () => {
  const { data, error, isLoading } = useGetBlogsQuery(undefined);
  const [createBlog] = useCreateBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();

  // Update Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<TBlogs | null>(null);

  interface IFormInput {
    title: string;
    content: string;
    image: string;
    category: string;
  }

  const { register, handleSubmit, setValue, reset } = useForm<IFormInput>();

  // Create Blog Submission
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    createBlog(data); 
    reset();
  };

  // Open Update Modal
  const handleUpdateClick = (blog: TBlogs) => {
    setSelectedBlog(blog);
    setValue("title", blog.title);
    setValue("content", blog.content);
    setValue("image", blog.image);
    setValue("category", blog.category);
    setIsModalOpen(true);
  };

  // Handle Blog Update
  const handleUpdateSubmit: SubmitHandler<IFormInput> = (updatedData) => {
    if (selectedBlog) {
      updateBlog({ id: selectedBlog._id, updatedBlog: updatedData });
      setIsModalOpen(false);
      reset();
    }
  };

  if (isLoading)
    return <p className="text-center text-lg text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500">Error loading blogs.</p>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto ">
      {/* Create Blog Form */}
      <div className="  p-4 rounded-xl  ">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create a Post
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              {...register("title")}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Enter title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Content</label>
            <textarea
              {...register("content")}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Write content..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Image URL</label>
            <input
              type="text"
              {...register("image")}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Paste image URL"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              {...register("category")}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
            >
              <option value="web">Web</option>
              <option value="graphics">Graphics</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Blog List */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          All Blogs
        </h2>
        <ul className="space-y-4  gird grid-cols-2  ">
          {data?.data.map((blog: TBlogs) => (
            <li
              key={blog._id}
              className="p-4 border border-gray-200 rounded-lg shadow-md bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h3>
              <p className="text-gray-600">{blog.content}</p>
              <p className="text-sm font-medium text-blue-500">
                Category: {blog.category}
              </p>
              <div className="flex gap-4 mt-3 justify-between">
                <button
                  onClick={() => handleUpdateClick(blog)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteBlog(blog._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Update Blog Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Update Blog</h2>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(handleUpdateSubmit)}
            >
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  {...register("title")}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Content</label>
                <textarea
                  {...register("content")}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium">Image URL</label>
                <input
                  type="text"
                  {...register("image")}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Category</label>
                <select
                  {...register("category")}
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
                >
                  <option value="web">Web</option>
                  <option value="graphics">Graphics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogComponent;
