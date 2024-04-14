import { useEffect } from "react";
import { useProjects } from "../context/ProjectsContext";

import ProjectCard from "../components/ProyectCard";

function ProjectsPage() {
  const { getProjects, projects } = useProjects(); //desestructuración de funciones

  useEffect(() => {
    getProjects();
  }, []);

  if(projects.length === 0 )return (<h1>No projects</h1>);

  return (
   <div className="flex justify-center items-center">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <ProjectCard task={project} key={project._id}/>
      ))}
    </div>
    </div>
    
  );
}

export default ProjectsPage;
