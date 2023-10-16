import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" errorElement={<Navigate to={"/"} />}>
        <Route index element={<Home />} />
        {/* <Route path="contacts" element={<div>Contacts</div>} /> */}
      </Route>
    </>
  )
);

export { AppRouter };
