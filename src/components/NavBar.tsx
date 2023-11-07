interface NavBarProps {
  page: string;
}

const NavBar = ({page}: NavBarProps) => {
  return (
    <nav className="navbar bg-body-tertiary ml-2">
      <div className="container">
        <div className="d-flex align-items-center">
          <img
            src="images\DropoutWatchLogo.png"
            alt="Logo"
            width="80"
            height="80"
            className="d-inline-block"
          />
          <h1 className="display-6 mx-2">Dropout</h1>
          <h1 className="mt-0 text-primary">Watch </h1>
          <h1 className="display-6 mx-2   ">{page}</h1>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
