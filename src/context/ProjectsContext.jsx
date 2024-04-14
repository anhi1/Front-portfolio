import { createContext, useContext, useState } from "react";
import { getProjectsRequest, createProjectRequest, deleteProjectRequest, getProjectRequest, updateProjectRequest } from '../api/projects'

const ProjectContext = createContext()

export const useProjects = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
};

export function ProjectProvider({children}){
  const [projects, setProjects]= useState([])

  const getProjects = async()=>{
    try {
     const res = await getProjectsRequest()
     setProjects(res.data);
    } catch (error) {
     console.error(error);
    }
    
   }
 
   const createProject = async (project) =>{
    const res = await createProjectRequest(project)
    console.log(res);
   }
 
   const deleteProject = async (id) => {
    try {
     const res = await deleteProjectRequest(id);
     if(res.status === 204) setProjects(Projects.filter(Project=>Project._id !== id )) //crea un arreglo nuevo
    } catch (error) {
     console.log(error);
    }
    
   };
 
   const getProject = async (id) => {
  try {
   const res = await getProjectRequest(id);
   return res.data;
  } catch (error) {
   console.error(error);
  }
 };
 
 const updateProject = async (id, project)=>{
  try {
   await updateProjectRequest(id, project)
  } catch (error) {
   console.error(error);
  }
 }
 
   return (
     <ProjectContext.Provider
       value={{
         projects,
         createProject,
         getProjects,
         deleteProject,
         getProject,
         updateProject,
       }}
     >
       {children}
     </ProjectContext.Provider>
   );
 }
 
