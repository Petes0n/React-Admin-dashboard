// Importing React components for each route
import Home from "./pages/Home/Home";
import Config from "./pages/config/Config";
import AddProducts from "./pages/addproducts/AddProducts";
import Buyers from "./pages/buyers/Buyers";
import Reconciliation from "./pages/Reconciliation/Reconciliation";
import Report from "./pages/report/Report";
import Messages from "./pages/messages/Messages";
import Single from "./pages/userInfo/SingleUser";
import Login from "./pages/login/Login";


// Array of route objects, each specifying a path and its corresponding React element
export const routes = [
  { path: "/", element: <Home /> },// Home page route
  { path: "/config", element: <Config /> },
  { path: "/addProduct", element: <AddProducts /> },
  { path: "/buyers", element: <Buyers /> },
  { path: "/reconciliation", element: <Reconciliation />},
  { path: "/reports", element: <Report /> },
  { path: "/messages", element: <Messages /> },
  { path: "/single/user/info", element: <Single /> },
  { path: "/login", element: <Login /> },
];
