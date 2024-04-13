import {useProjects} from "../context/ProjectsContext"
import { Link } from "react-router-dom";
export default function ProjectCard() {
  return (
    <div className="bg-white shadow rounded-lg max-w-md w-full p-10">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{project.title}</h1>
      </header>
      <p className="text-slate-500">{project.description}</p>
      <p className="text-slate-500">{project.stack}</p>

      
      <div className="flex gap-x-2 items-center">
          <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-500 text-indigo-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={() => {deleteProject(project._id)}}>
            delete
          </button>
          <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-500 text-indigo-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            <Link to={`/proyects/${project._id}`}>edit</Link>
          </button>
        </div>
    </div>
  )
}




