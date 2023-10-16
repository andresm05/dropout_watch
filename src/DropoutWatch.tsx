import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

const DropoutWatch = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export { DropoutWatch };
