
import Header from "./Componentes/Atomos/ComponentesHeader/Header";
import About from "./Componentes/Atomos/ComponentesHeader/ComponentesAbout/About";
import Projects from "./Componentes/Atomos/ComponentesHeader/ComponentesProyects/Proyects";
import Footer from "./Componentes/Atomos/ComponentesHeader/ComponentesFooter/Footer";
import Login from "./Componentes/Atomos/ComponentesHeader/ComponentesLoging/Loging";




const App = () => {
  return (

    <main className="h-screen bg-black">

      <div className="rounded-lg" >
        <Login />
      </div>

      <div>
        <Header />
      </div>
      <div>
        <About />
      </div>

      <div>
        <Projects />
      </div>


      

      <div>
        <Footer />
      </div>
      {/* u contenido principal aquí */}

    </main>
  );
};

export default App;























