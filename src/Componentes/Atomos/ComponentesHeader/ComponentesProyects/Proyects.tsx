

const Projects = () => {
    return (
      <div className="grid grid-rows-4 grid-flow-col gap-2 text-white">
        <h2>My Projects</h2>
        <ul>
          <li>
            <a href="#">My Portfolio</a>
            <div className="bg-blue-500 p-4 rounded-lg">
              <h3>My Portfolio</h3>
              <p>This is my portfolio website.</p>
            </div>
          </li>
          <li>
            <a href="#">My Blog</a>
            <div className="bg-blue-500 p-4 rounded-lg ">
              <h3>My Blog</h3>
              <p>This is my blog.</p>
            </div>
          </li>
          <li>
            <a href="#">My GitHub Repository</a>
            <div className="bg-blue-500 p-4 rounded-lg">
              <h3>My GitHub Repository</h3>
              <p>This is my GitHub repository.</p>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Projects;