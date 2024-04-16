import React from "react"
import { useState } from "react"

export default function ProjectFormPage() {

  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setImage(file);
      } else {
        alert("Por favor selecciona un archivo de imagen.");
      }
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCursos, setSelectedCursos] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCursoSelection = (curso) => {
    if (selectedCursos.includes(curso)) {
      setSelectedCursos(selectedCursos.filter((c) => c !== curso));
    } else {
      setSelectedCursos([...selectedCursos, curso]);
    }
  };
  const cursos = [
    "React",
    "MongoDB",
    "Angular",
    "Node.js",
    "A-frame",
    "three.js",
  ];

  return (
    <div className="flex flex-col justify-between items-center mt-8">
      <div className="w-full max-w-xl ">
        <form className=" px-8 pt-6 pb-8 mb-4 form-border shadow-md">
          <h1 className="text-6xl font-bold mb-3">Proyecto</h1>

          <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Título</label>
          <input
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
            id="description"
            rows="3"
            placeholder="Description"
            className="w-full  text-black px-4 py-2 rounded-md"
            style={{ backgroundColor: '#EAEAEA' }}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="url" className="block text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            id="url"
            name="url"
            placeholder="URL"
            className="w-full  text-black px-4 py-2 rounded-md"
            style={{ backgroundColor: '#EAEAEA' }}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="images" className="block text-gray-700 text-sm font-bold mb-2">Subir imágenes</label>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full  text-black py-2 rounded-md "
          />
        </div>

         {/* STACK */}

          <div className="relative inline-block mb-4">
            <button
            style={{ backgroundColor: '#EAEAEA' }}
              onClick={toggleDropdown}
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black bg-silver-300 rounded-lg focus:ring-4 focus:outline-none"
            >
              Seleccionar Stack{" "}
              <svg
                className="w-5 h-6 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {cursos.map((curso, index) => (
                    <div
                      key={index}
                      onClick={() => handleCursoSelection(curso)}
                      className={`flex items-center p-2 rounded ${
                        selectedCursos.includes(curso)
                          ? "bg-gray-100 dark:bg-gray-600"
                          : "hover:bg-gray-100 dark:hover:bg-gray-600"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCursos.includes(curso)}
                        onChange={() => handleCursoSelection(curso)}
                        className="w-4 h-4  bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor={`checkbox-item-${index}`}
                        className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        {curso}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
