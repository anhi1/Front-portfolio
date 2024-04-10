import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white flex justify-between py-5 px-10 mb-4">
      <ul className="flex gap-x-2">
        <li className="inline-flex items-center gap-x-2 text-sm font-medium rounded-lg">
          <Link to="/proyect">Proyectos</Link>
        </li>

        <li >
          <Link to="/about">Sobre mí</Link>
        </li>

        <li>
          <Link to="/contact">Contacto</Link>
        </li>

        <li>
          <Link to="/login">Admin</Link>
        </li>

        <li>
          <Link to="/add-proyect" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Agregar proyecto
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-indigo-500  text-indigo-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
