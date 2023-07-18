

const Header = () => {
  return (
    // <header>
    //   <h1 className="text-5xl text-white ">Hola, soy Víctor y este es mi Portfolio</h1>
    //   <img src="src/assets/images/yo.jpg " width="w-1" height="w-1" />
     
    // </header>
    <header>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <h3 className="text-3xl text-white mr-8 mb-4">Hola, soy Víctor y este es mi Portfolio</h3>
      <img
        src="src/assets/images/yo.jpg"
        alt="Descripción de la imagen"
        style={{ width: '80px', height: '80px', marginTop: '1px', marginRight: '50px' }}
      />
    </div>
    {/* Resto del contenido del encabezado */}
  </header>

  );
  };

  export default Header;

