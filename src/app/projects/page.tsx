import ProjectCard from "@/components/utils/projectCard";
import { TProject } from "@/types";

const HomeProject = async () => {
  const res = await fetch(`${process.env.backendUrl}/project`);
  const data = await res.json();

  return (
    <main>
      <h1 className="text-3xl text-black font-bold text-center my-4">
        All Projects Here
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-6">
        {data?.data?.map((project: TProject) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </main>
  );
};

export default HomeProject;
