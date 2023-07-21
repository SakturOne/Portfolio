import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Enviar solicitud al servidor para verificar las credenciales
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row p-1 gap-3 flex flex-row sm:flex-row p-1 gap-3' >
            <input className='rounded-lg flex-1-lg border-solid border-2 border-blue-500'
                type="text"
                name="username"
                placeholder="Correo"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input className='rounded-lg flex-1 border-solid border-2 border-blue-500'
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Iniciar sesión" className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white flex-1' />
        </form>
    );
};

export default Login;