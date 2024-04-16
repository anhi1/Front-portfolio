import React from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex mt-8 items-center justify-center">
      <div className="w-full max-w-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 form-border shadow-md"
        >
          <h1 className="text-6xl font-bold mb-3">Contacto</h1>

          
        <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full px-4 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
            style={{ backgroundColor: '#EAEAEA' }}
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-red-500">Campo requerido</span>
          )}
        </div>
          
        <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full px-4 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            placeholder="Email"
            style={{ backgroundColor: '#EAEAEA' }}
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">email is required</p>}
        </div>  

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
          <textarea
            className="shadow appearance-none border rounded w-full px-4 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Mensaje"
            style={{ backgroundColor: '#EAEAEA' }}
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-red-500">Campo requerido</span>
          )}
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#2C2D30", borderRadius: "0.4rem"}}
            className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
