import { useState } from "react";

const Home = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="container">
      <a className="navbar-brand" href="#">
        <img
          src="src\images\DropoutWatchLogo.png"
          alt="Bootstrap"
          width="180"
          height="180"
          className="mx-auto d-block mt-5"
        />
      </a>
      <h1 className="text-center">
        <span
          className="display-2"
          style={{ color: hovered ? 'white' : 'black' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
         Dropout
        </span>
        <span> </span> 
        <span
          style={{ color: 'black' }} 
          className="text-xl"
        >
          Watch
        </span>
      </h1>
      <h1 className="text-center mt-5">
        <span> </span>
        <span>
          Prevention
          <button className="btn btn-primary" style={{ border: '2px solid black', background: 'transparent', color:"black", margin: '20px', fontFamily:'revert'}}>
            Begins with
          </button>

          prediction
        </span>
        </h1>
    </div>
    
  );
};

export { Home };

