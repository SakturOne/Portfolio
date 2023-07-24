import React, { useState } from 'react';
import Footer from '../Componentes/Atomos/ComponentesHeader/ComponentesFooter/Footer';

const Conversor: React.FC = () => {
  const [euros, setEuros] = useState<number | ''>('');
  const [pesetas, setPesetas] = useState<number | ''>('');

  const handleEurosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEuros(value !== '' ? parseFloat(value) : '');
    setPesetas(value !== '' ? parseFloat(value) * 166.386 : '');
  };

  const handlePesetasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPesetas(value !== '' ? parseFloat(value) : '');
    setEuros(value !== '' ? parseFloat(value) / 166.386 : '');
  };

  return (
    
    <div className="min-h-screen flex flex-col w-full p-0 sm:p-2 justify-between items-center bg-black">
      <div className="shadow-md rounded px-8 py-6 bg-gradient-to-r   flex-col bg-white ">
        <h2 className="text-4xl leading-normal font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Conversor de Monedas</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="euros">
            Euros:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="euros"
            type="number"
            value={euros}
            onChange={handleEurosChange}
            placeholder="Introduce la cantidad en euros"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pesetas">
            Pesetas:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pesetas"
            type="number"
            value={pesetas}
            onChange={handlePesetasChange}
            placeholder="Introduce la cantidad en pesetas"
          />
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Conversor;
