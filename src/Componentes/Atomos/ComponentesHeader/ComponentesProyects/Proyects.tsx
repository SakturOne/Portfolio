

const Projects = () => {
    return (
      <div className="flex justify-center items-up h-screen  text-white">
        
        
        <ul>
          <div className="flex justify-center items-center h-screen ">
          <li>
            <a href="#">My Portfolio</a>
            <div className="bg-blue-500 p-4 rounded-lg m-1">
              <h3>My Portfolio</h3>
              <p>This is my portfolio website.</p>
            </div>
          </li>
          <li>
            <a href="#">My Blog</a>
            <div className="bg-blue-500 p-4 rounded-lg m-1">
              <h3>My Blog</h3>
              <p>This is my blog.</p>
            </div>
          </li>
          <li>
            <a href="#">My GitHub Repository</a>
            <div className="bg-blue-500 p-4 rounded-lg m-1">
              <h3>My GitHub Repository</h3>
              <p>This is my GitHub repository.</p>
            </div>
          </li>
        </div>
      </ul>
    </div>
    );
  };
  
  export default Projects;