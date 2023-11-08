import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages";
import {Dashboard} from "../pages";
import {Profile} from "../pages";


const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="Profile/:selectedVariables" element={<Profile />} />
{/* <Route path="contacts" element={<div>Contacts</div>} /> */}

    </>
  )
  );

export { AppRouter };
