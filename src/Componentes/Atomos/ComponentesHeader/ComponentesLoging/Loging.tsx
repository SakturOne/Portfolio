import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Enviar solicitud al servidor para verificar las credenciales
    };

    return (
        <div>
        <form onSubmit={handleSubmit} >
            <input className='rounded-lg m-2 border-solid border-2 border-blue-500'
                type="text"
                name="username"
                placeholder="Uusuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input className='rounded-lg m-2 border-solid border-2 border-blue-500'
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Iniciar sesión" className='color bg-blue-500 rounded-lg text-white m-2' />
        </form>
        </div>
    );
};

export default Login;