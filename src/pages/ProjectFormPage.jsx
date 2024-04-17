import { useForm } from "react-hook-form";
import { useProjects } from "../context/ProjectsContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect} from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc);


function ProjectFormPage() {

  const { register, handleSubmit, setValue} = useForm(); // metodos:  set value, ...
  const {createProject, getProject, updateProject} = useProjects();
  const navigate = useNavigate();
  const params = useParams();

  
  useEffect(()=>{
    async function  loadProject() {
       if(params.id){
         const project = await getProject(params.id);
         console.log(project);
         setValue('title', project.title)
         setValue('description', project.description)
         setValue("date", dayjs(project.date).utc().format('YYYY-MM-DD'));

       }
     }
     loadProject()
   },[])
 
   const onSubmit = handleSubmit((data)=>{
     const dataValid = {
       ...data,
       date: data.date? dayjs.utc(data.date).format(): dayjs.utc().format(),

     };
 
     if(params.id){
       updateProject(params.id, {
       ...data,
       date: dayjs.utc(data.date).format()

     }); 
     }else{
       createProject({
       ...data,
       date: dayjs.utc(data.date).format()

     });
   }
     navigate('/projects');
   });

  return (
    <div className="flex flex-col justify-between items-center mt-8">
      <div className="w-full max-w-xl ">
        <form onSubmit={onSubmit}  className=" px-8 pt-6 pb-8 mb-4 form-border shadow-md">
          <h1 className="text-6xl font-bold mb-3">Proyecto</h1>

          <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Título</label>
          <input
          {...register("title")}
            type="text"
            id="title"
            placeholder="Title"
            className="w-full text-black px-4 py-2 rounded-md"
            autoFocus
            style={{ backgroundColor: '#EAEAEA' }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
          <textarea
          {...register("description")}
            id="description"
            rows="3"
            placeholder="Description"
            className="w-full  text-black px-4 py-2 rounded-md"
            style={{ backgroundColor: '#EAEAEA' }}
          ></textarea>
        </div>

        <div className="mb-4">
        <label htmlFor="date">Date</label>
        <input type="date" {...register('date')}
        className="w-full bg-indigo-50 text-black px-4 py-2 rounded-md my-2"
        />
        </div>

          
        <div>
          <button type="submit"
          style={{ backgroundColor: "#2C2D30", borderRadius: "0.4rem"}}
          className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2">
            Guardar
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProjectFormPage;