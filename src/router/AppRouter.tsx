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
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </>
  )
);

export { AppRouter };
