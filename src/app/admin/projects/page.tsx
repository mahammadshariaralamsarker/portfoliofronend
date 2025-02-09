"use client";
import { useCreateProjectMutation, useDeleteProjectMutation, useGetProjectsQuery, useUpdateProjectMutation } from "@/redux/slice/projectSlice";
import { useState } from "react";
 
import { SubmitHandler, useForm } from "react-hook-form";

type TProjects = {
  _id: string; 
  image: string;
  description: string; 
};

const ProjectComponent = () => {
  const { data, error, isLoading } = useGetProjectsQuery(undefined);
  const [createProject] = useCreateProjectMutation();
  const [updateProject] = useUpdateProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();

  // Update Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProjects | null>(null);

  interface IFormInput {
  _id:string;
    image: string;
    description: string;
  }

  const { register, handleSubmit, setValue, reset } = useForm<IFormInput>();

  // Create Project Submission
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    createProject(data);
    console.log(data);
    reset();
  };

  // Open Update Modal
  const handleUpdateClick = (Project: TProjects) => {
    setSelectedProject(Project); 
    setValue("description", Project.description);
    setValue("image", Project.image); 
    setIsModalOpen(true);
  };

  // Handle Project Update
  const handleUpdateSubmit: SubmitHandler<IFormInput> = (updatedData) => {
    if (selectedProject) {
      updateProject({ id: selectedProject._id, updatedProject: updatedData });
      setIsModalOpen(false);
      reset();
    }
  };

  if (isLoading)
    return <p className="text-center text-lg text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500">Error loading Projects.</p>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto ">
      {/* Create Project Form */}
      <div className="  p-4 rounded-xl  ">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create a Project
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
           

          <div>
            <label className="block text-sm font-medium">description</label>
            <textarea
              {...register("description")}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Write description..."
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Project List */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          All Projects
        </h2>
        <ul className="space-y-4  gird grid-cols-2  ">
          {data?.data.map((Project: TProjects) => (
            <li
              key={Project._id}
              className="p-4 border border-gray-200 rounded-lg shadow-md bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {Project.description}
              </h3> 
             
              <div className="flex gap-4 mt-3 justify-between">
                <button
                  onClick={() => handleUpdateClick(Project)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteProject(Project._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Update Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Update Project</h2>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(handleUpdateSubmit)}
            >
               

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  {...register("description")}
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

export default ProjectComponent;
