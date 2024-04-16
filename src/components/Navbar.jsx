import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white flex flex-col md:flex-row justify-between py-5 px-10">
      <Link
        to={isAuthenticated ? "/projects" : "/"}
        className="flex flex-col md:flex-row md:gap-x-4 mb-2"
      >
        <img
          className="inline-flex items-center"
          src="public/logo.svg"
          style={{ width: "100px", height: "auto" }}
          alt="logo"
        />
      </Link>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="md:hidden absolute right-0 top-0 p-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <ul
        className={`${isOpen ? "" : "hidden"} md:flex flex-col md:flex-row gap-x-2 md:gap-x-4`}>
        
        {isAuthenticated? (
          <>
            <li className="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg mb-2">
              <Link to="/projects">Proyectos</Link>
            </li>
            <br></br>
            <li>
              
            <Link
                to="/add-project"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mb-2"
              >
                Agregar proyecto
            </Link>


            </li>
            <li>
              <Link
                to="/"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mb-2"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
          

            <li className="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg mb-2">
              <Link to="/contact">Contacto</Link>
            </li><br></br>
            <li className="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg mb-2">
              <Link to="/about">Sobre mí</Link>
            </li>
            <li>
              <Link
                to="/login"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-500 text-indigo-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/Register"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-500 text-indigo-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
