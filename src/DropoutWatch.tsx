import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

const DropoutWatch = () => {
  return (
    <RouterProvider router={AppRouter}/>
  );
};

export { DropoutWatch };
