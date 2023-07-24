import { useNavigate } from "react-router-dom";
import avatarImg from "../../../assets/images/yo.jpg"

const Header = () => {
  const navigate = useNavigate();

  
  return (
    // <header>
    //   <h1 className="text-5xl text-white ">Hola, soy Víctor y este es mi Portfolio</h1>
    //   <img src="src/assets/images/yo.jpg " width="w-1" height="w-1" />

    // </header>
    <header className="flex items-center justify-between ">
       <div className="text-center w-24 h-6bg-gradient-to-r h-full flex  flex-col from-cyan-500 to-blue-500 p-1 rounded-lg m-1 cursor-pointer hover:from-cyan-600 hover:to-blue-600 hover:scale-105  ">
              <div onClick={() => navigate("/Loging")} className="bg-gradient-to-r h-full flex w-full flex-col bg-indigo-500 p-1 rounded-full m-1 cursor-pointer text-white hover:scale-105">
                <h2 className="text-base font-semibold">Accede</h2>
              </div>


              <div onClick={() => navigate("/registro")} className="bg-gradient-to-r h-full flex w-full flex-col bg-indigo-500 p-1 rounded-full m-1 cursor-pointer text-white hover:scale-105">
                <h2 className=" font-semibold">Registro</h2>
              </div>
            </div>
      <div className="w-full sm:w-4/6 flex p-2 justify-center items-center text-center gap-2">
        <h1 className="text-3xl leading-normal font-semibold text-transparent bg-clip-text text-white">
          Hola, soy{' '}
          <span className=" text-4xl leading-normal font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Víctor</span>
          {' '}y este es mi Portfolio
        </h1>
        {/* <h1 className=" text-4xl  leading-normal font-extrabold text-transparent  bg-clip-text text-white">Hola, soy </h1>
        <h1 className=" text-4xl  leading-normal font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Víctor</h1>
        <h1 className=" text-4xl  leading-normal font-extrabold text-transparent  bg-clip-text text-white">y este es mi Portfolio</h1> */}
        {/* <h1 className=" text-4xl  leading-normal font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Hola, soy</h1>
        <h1> Víctor </h1>
        <h1>y este es mi Portfolio</h1> */}
        <img src={avatarImg} alt="Descripción de la imagen" className="h-24 aspect-square transition-transform transform hover:scale-125 "/>
      </div>
      {/* Resto del contenido del encabezado */}
    </header>

  );
};

export default Header;

