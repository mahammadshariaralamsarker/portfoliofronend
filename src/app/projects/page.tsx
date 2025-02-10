import ProjectCard from "@/components/utils/projectCard";

 
  

const HomeProject = async () => {
  const res = await fetch("http://localhost:5000/api/project");
  const data = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-6">
      {data?.data?.map((project:any) => 
       <ProjectCard key={project._id} project={project} />
      )}
    </div>
  );
};

export default HomeProject;
