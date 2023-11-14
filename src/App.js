// Importing necessary components from React and react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Importing the array of routes from the routes file
import { routes } from "./routes";
import './styles/global.scss';
// Importing the Navbar component
import Navbar from "./components/navbar/Navbar";


// Functional component representing the main application
function App() {
  return (
     // Main container for the entire application
    <div className="main">
      <div className='container'></div>
      <div className='contentContainer'>
         {/* BrowserRouter to enable routing 
         check this site to read more about react Browser router
         https://reactrouter.com/en/main/router-components/browser-router
         */}
        <BrowserRouter>
        <Navbar />
        {/* Routes component for defining application routes */}
          <Routes>
             {/* Mapping over the routes array and creating Route components */}
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;


