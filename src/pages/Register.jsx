import React from 'react'
import { Link } from 'react-router-dom'


export default function Register() {
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl font-bold">Register</h1>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
          placeholder="username"/>
        <input
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
          placeholder="Email"/>
        <input
          type="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
          placeholder="Password"/>
        <button type="submit" className="bg-indigo-500 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2">Register</button>
      </form>

      <p className="flex gap-x-2 justify-between">
        Ya tienes una cuenta?,{" "}
        <Link to="/login" className="text-sky-500">
          Login
        </Link>
      </p>
    </div>
    </div>
  )
}
