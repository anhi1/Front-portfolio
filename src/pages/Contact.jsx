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
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-2xl font-bold">Contacto</h1>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="text-red-500">Campo requerido</span>
          )}

          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">email is required</p>}

          <textarea
            className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-2"
            placeholder="Mensaje"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-red-500">Campo requerido</span>
          )}

          <button
            type="submit"
            className="bg-indigo-500 w-full hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
