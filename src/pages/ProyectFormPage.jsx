import React from 'react'

export default function ProyectFormPage() {
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <div className="w-full max-w-xs">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-2xl font-bold my-2">Proyecto</h1>
      
        <label htmlFor="title">Title</label>
        <input type="text"
        placeholder="Title"
        className="w-full bg-indigo-50 text-black px-4 py-2 rounded-md my-2"
        autoFocus
        />

        <label htmlFor="description">Descripción</label>
        <textarea rows="3" placeholder="Description"
        
        className="w-full bg-indigo-50 text-black px-4 py-2 rounded-md my-2"
        ></textarea>

        <label htmlFor="date">Date</label>
        <input type="date"
        className="w-full bg-indigo-50 text-black px-4 py-2 rounded-md my-2"
        />

        <button className="bg-indigo-500 hover:bg-indigo-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2">Save</button>
      </form>
    </div>
    </div>
     
  )
}
