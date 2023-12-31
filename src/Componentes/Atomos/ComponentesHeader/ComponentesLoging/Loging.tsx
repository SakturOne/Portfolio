import React, { useState } from 'react';
import Footer from '../ComponentesFooter/Footer';

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar el código para enviar los datos de inicio de sesión al backend
    console.log(loginData);
    // Limpia el formulario después de enviar
    setLoginData({
      email: '',
      password: '',
    });
  };

  return (
    <>
    <div className="min-h-screen flex flex-col w-full p-0 sm:p-2 justify-between items-center bg-black">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-4xl leading-normal font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Inicio de sesión</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between ">
          <button
            type="submit"
            className="text-white bg-gradient-to-r h-full flex w-full flex-col from-cyan-500 to-blue-500 p-4 rounded-lg m-1 cursor-pointer hover:from-cyan-600 hover:to-blue-600 hover:scale-105"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
      <Footer/>
    </div>
    </>
  );
};

export default Login;
