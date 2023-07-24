
import Header from "./Componentes/Atomos/ComponentesHeader/Header";
import About from "./Componentes/Atomos/ComponentesHeader/ComponentesAbout/About";
import Projects from "./Componentes/Atomos/ComponentesHeader/ComponentesProyects/Proyects";
import Footer from "./Componentes/Atomos/ComponentesHeader/ComponentesFooter/Footer";





const App = () => {

  return (
    // <div className=" h-screen w-screen bg-black flex items-center flex-col justify-between ">
    <div className=" min-h-screen flex flex-col w-full p-0 sm:p-2 justify-between items-center bg-black">
      
      <main className="h-[calc(100%-24rem)] flex flex-col w-full bg-black">
        <Header />
        <About />
        <Projects />

      </main>
      <Footer />
      {/* u contenido principal aquí */}
    </div>
  );
};

export default App;























