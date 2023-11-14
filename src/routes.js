// Importing React components for each route
import Home from "./pages/Home/Home";
import Config from "./pages/config/Config";
import AddProducts from "./pages/addproducts/AddProducts";
import Buyers from "./pages/buyers/Buyers";
import Reconciliation from "./pages/Reconciliation/Reconciliation";
import Report from "./pages/report/Report";
import Profile from "./scenes/profileDrawer/Profile";
import Messages from "./pages/messages/Messages";

// Array of route objects, each specifying a path and its corresponding React element
export const routes = [
  { path: "/", element: <Home /> },// Home page route
  { path: "/config", element: <Config /> },
  { path: "/addProduct", element: <AddProducts /> },
  { path: "/buyers", element: <Buyers /> },
  { path: "/admin", element: <Profile /> },
  { path: "/reconciliation", element: <Reconciliation />},
  { path: "/reports", element: <Report /> },
  { path: "/messages", element: <Messages /> },
];