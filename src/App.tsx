
import Header from "./Componentes/Atomos/ComponentesHeader/Header";
import About from "./Componentes/Atomos/ComponentesHeader/ComponentesAbout/About";
import Projects from "./Componentes/Atomos/ComponentesHeader/ComponentesProyects/Proyects";
import Footer from "./Componentes/Atomos/ComponentesHeader/ComponentesFooter/Footer";
import Login from "./Componentes/Atomos/ComponentesHeader/ComponentesLoging/Loging";








const App = () => {



  return (
    // <div className=" h-screen w-screen bg-black flex items-center flex-col justify-between ">
      <div className=" min-h-screen flex flex-col w-full p-2 justify-between items-center bg-black">
      <header className="flex w-full">
        <Login />
      </header>
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























