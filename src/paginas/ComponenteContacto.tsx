import React, { useState } from 'react';
import Footer from '../Componentes/Atomos/ComponentesHeader/ComponentesFooter/Footer';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar el código para enviar el formulario a tu correo electrónico
    console.log(formData);
    // Limpia el formulario después de enviar
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div className="min-h-screen flex flex-col w-full p-2 justify-between items-center bg-black">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded w-full max-w-md mx-auto p-4">
          <h2 className="text-4xl leading-normal font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Contacto</h2>
          <h4 className='mt-0 text-s'>¿Que puedo hacer por ti?</h4>

          <div className="mb-4 mt-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Mensaje:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between text-white">
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg m-1 cursor-pointer hover:from-cyan-600 hover:to-blue-600 hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>

  );
};

export default Contacto;
