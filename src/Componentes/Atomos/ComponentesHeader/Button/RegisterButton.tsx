import React from 'react';
import { Link } from 'react-router-dom';

const RegisterButton: React.FC = () => {
  return (
    <Link to="/register">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Registrarse
      </button>
    </Link>
  );
};

export default RegisterButton;
