
import Header from "./Componentes/Atomos/ComponentesHeader/Header";
import About from "./Componentes/Atomos/ComponentesHeader/ComponentesAbout/About";
import Projects from "./Componentes/Atomos/ComponentesHeader/ComponentesProyects/Proyects";
import Footer from "./Componentes/Atomos/ComponentesHeader/ComponentesFooter/Footer";

const App = () => {
  return (

    <main className="h-screen bg-black">
      <div>
        <Header />

        <Projects/>
        <About/>
        <Footer/>
        
        {/* u contenido principal aquí */}

      </div>

    </main>


);
};

export default App;







