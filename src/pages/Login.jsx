import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="w-full max-w-xs">
        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-4xl font-bold">Admin</h1>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="text-red-500">email is required</p>}
          
          <input
            type="password"
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
  );
}
