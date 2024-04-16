
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ObjetoDos from "./ObjetoDos";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {signin, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(()=>{
    if(isAuthenticated) navigate('/projects')
   }, [isAuthenticated]);

  return (
    <>
<div className="absolute top-30 left-20 md:top-20 md:left-100 mt-20">
    <div className="flex mt-8 items-center justify-center">
      <div className="w-full max-w-xs">
        <form onSubmit={onSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4 form-border shadow-md">
          <h1 className="text-4xl font-bold">Admin</h1>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
            placeholder="Email"
            style={{ backgroundColor: '#EAEAEA' }}
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">email is required</p>}
          
          <input
            type="password"
            style={{ backgroundColor: '#EAEAEA' }}
            {...register("password", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
            placeholder="Password"
          />
          {errors.password && (<p className="text-red-500">password is required</p>)}

          <button
            type="submit"
            style={{ backgroundColor: "#2C2D30", borderRadius: "0.4rem"}}
            className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2">
            Enviar
          </button>
        </form>
        
      </div>
      
    </div>
    </div>
    <ObjetoDos/>
    </>
  );
}
