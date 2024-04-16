import { createContext, useState, useContext, useEffect } from "react";
import {  loginRequest, verityTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {// emgloba a otros
  
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

 

  const signin = async (user) => {
    try {
      console.log("Iniciando sesión con usuario:", user);
      const res = await loginRequest(user);
      console.log("Respuesta del servidor:", res);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const logout = () =>{
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const token = Cookies.get("token"); // Obtener el token de la cookie "token"
  
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }
  
      try {
        const res = await verityTokenRequest(token); // Pasar el token en lugar de cookies.token
        console.log(res);
        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }
  
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signin,
        logout,
        user,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
