import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [selectedVariables, setSelectedVariables] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const navigator = useNavigate();
    const handleVariableClick = (variable: string) => {
        if (selectedVariables.includes(variable)) {
          setSelectedVariables(selectedVariables.filter((v) => v !== variable));
        } else {
          if (selectedVariables.length < 3) {
            setSelectedVariables([...selectedVariables, variable]);
          } else {
            setErrorMessage('¡No puedes seleccionar más de 3 variables!');
          }
        }
      };

      const handleCreateProfileClick = () => {
        if (selectedVariables.length >= 3) {

        navigator('/Profile');
        } else {
          setErrorMessage('¡Por favor selecciona tres  variables!');
        }
      };

  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary ml-2">
        <div className="container">
          <div className="d-flex align-items-center">
            <img
              src="src\images\DropoutWatchLogo.png"
              alt="Logo"
              width="80"
              height="80"
              className="d-inline-block"
            />
            <h1 className="display-6 mx-2">Dropout</h1>
            <h1 className="mt-0 text-primary">Watch </h1>
            <h1 className="display-6 mx-2   ">Dashboard
            </h1>
          </div>
        </div>
      </nav>
      <span></span>
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
      <span></span>
      <div className="card text-center   border-0   ">
        <div className="card display-6 border-0 mt-2">
          Creemos un perfil de un posible desertor
        </div>

        <div className="card-body"> 
          <p className="card-text text-danger">{errorMessage}</p>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button 
            className={`btn btn-light ${selectedVariables.includes('Carrera') ? 'btn btn-dark' : ''}`}
            type="button"
            onClick={() => handleVariableClick('Carrera')}>
              <img
                src="src/images/brain.png"
                alt="Icono"
                width="30"
                height="30"
                className="mr-1"
              />
              <span> Carrera universitaria</span>
            </button>
            <button className={`btn btn-light ${selectedVariables.includes('Semestre') ? 'btn btn-dark' : ''}`}
          type="button"
          onClick={() => handleVariableClick('Semestre')}>
              <span> Semestre</span>

              <img
                src="src/images/graduate.png"
                alt="Icono"
                width="30"
                height="30"
                className="mr-1"
              />
            </button>
            <button className={`btn btn-light ${selectedVariables.includes('Estrato') ? 'btn btn-dark' : ''}`}
          type="button"
          onClick={() => handleVariableClick('Estrato')}>
              <img
                src="src/images/school.png"
                alt="Icono"
                width="30"
                height="30"
                className="mr-1"
              />
              <span> Estrato social</span>
            </button>
            <button className={`btn btn-light ${selectedVariables.includes('Modalidad') ? 'btn btn-dark' : ''}`}
          type="button"
          onClick={() => handleVariableClick('Modalidad')}>
              <span> Modalidad </span>

              <img
                src="src/images/desk-and-chair.png"
                alt="Icono"
                width="30"
                height="30"
                className="mr-1"
              />
            </button>
          </div>
        </div>
        <div className="card text-body-secondary border-0">
          <button className="btn btn-light" type="button"  onClick={handleCreateProfileClick}>
            <img
              src="src/images/profile.png"
              alt="Icono"
              width="30"
              height="30"
            />
            <p>Crear perfil</p>
          </button>
        </div>
      </div>
      <h6 className="text-center text-primary fw-bold ">
        "Con esta herramienta, estarás un paso más cerca de comprender y abordar
        de manera efectiva el problema de la deserción estudiantil."{" "}
      </h6>
    </div>
  );
};

export { Dashboard };
