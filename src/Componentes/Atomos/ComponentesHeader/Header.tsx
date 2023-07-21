import avatarImg from "../../../assets/images/yo.jpg"

const Header = () => {
  return (
    // <header>
    //   <h1 className="text-5xl text-white ">Hola, soy Víctor y este es mi Portfolio</h1>
    //   <img src="src/assets/images/yo.jpg " width="w-1" height="w-1" />

    // </header>
    <header className="flex justify-end flex-row w-full">
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

