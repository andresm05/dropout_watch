import { NavBar } from "../components/NavBar";
import { MainView } from "../components";

const Dashboard = () => {


  return (
    <div className="container-fluid">
      <NavBar page="Dashboard" />
      <h1 className="text-center mt-4 display-6 text-primary fw-bold">
        ¡Toma control!
      </h1>
      <h6 className="diplay-6 text-center">
        {" "}
        Hemos identificado variables clave que influyen en la deserción
        estudiantil
      </h6>
      <h6 className="text-center">
        Selecciona alguna de estas variables para crear combinaciones
        predecibles.
      </h6>
      <MainView />
      <h6 className="text-center text-primary fw-bold ">
        "Con esta herramienta, estarás un paso más cerca de comprender y abordar
        de manera efectiva el problema de la deserción estudiantil."{" "}
      </h6>
    </div>
  );
};

export { Dashboard };
