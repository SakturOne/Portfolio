import { useNavigate } from "react-router-dom";


const Projects = () => {

  const navigate = useNavigate();

  return (
    <div className="justify-center items-up text-white  bg-black flex w-full">
      <ul className="flex flex-col sm:flex-row w-full p-2 justify-center items-center gap-2">
        <li className="flex w-full h-24">
          <div onClick={() => navigate("/tiempo")} className="bg-gradient-to-r h-full flex w-full flex-col from-cyan-500 to-blue-500 p-4 rounded-lg m-1 cursor-pointer hover:from-cyan-600 hover:to-blue-600 hover:scale-105">
            {/* <h3>My Blog</h3> */}
            <h2 className="text-xl font-semibold">My Portfolio</h2>
            <p>This is my portfolio website.</p>
          </div>
        </li>

        <li className="flex w-full h-24">
          <div onClick={() => navigate("/tiempo")} className="bg-gradient-to-r h-full flex w-full flex-col from-cyan-500 to-blue-500 p-4 rounded-lg m-1 cursor-pointer hover:from-cyan-600 hover:to-blue-600 hover:scale-105">
            {/* <h3>My Blog</h3> */}
            <h2 className="text-xl font-semibold">Tiempo</h2>
            <p>Averigua que tiempo hace en tú ciudad.</p>
          </div>
        </li>

        <li className="flex w-full h-24">
          <div onClick={() => navigate("/tiempo")} className="bg-gradient-to-r h-full flex w-full flex-col from-cyan-500 to-blue-500 p-4 rounded-lg m-1 cursor-pointer hover:from-cyan-600 hover:to-blue-600 hover:scale-105">
            {/* <h3>My Blog</h3> */}
            <h2 className="text-xl font-semibold">My GitHub</h2>
            <p>This is my GitHub repository.</p>
          </div>
        </li>
      </ul>
    </div>
  );


};

export default Projects;