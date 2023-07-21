

const Footer = () => {
  return (
    <footer className="h-20 w-full sm:w-[95%] mb-0 sm:mb-2 flex">
      <div className="bg-white rounded-none sm:rounded-lg shadow mt-4 p-0 sm:p-0 dark:bg-gray-600 w-full">
        <div className="w-full flex flex-col p-4">
          <span className="text-sm text-blue-500 sm:text-center dark:text-gray-400">Víctor Ponce © 2023 <a href="https://flowbite.com/" className="hover:underline"></a>
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-blue-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://www.linkedin.com/in/v%C3%ADctor-ponce-p%C3%A1ez-192948205/?originalSubdomain=es" className="mr-4 hover:underline md:mr-6 ">Linkedin</a>
            </li>
            <li>
              <a href="https://www.instagram.com/saktur/?hl=es" className="mr-4 hover:underline md:mr-6">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/victor.ponce.165/?locale=es_LA" className="mr-4 hover:underline md:mr-6">Facebook</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;