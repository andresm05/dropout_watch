/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDropouts } from "../hooks/useDropouts";
import { Traitors } from "../traitors/traitors.types";
import { Loadings } from "../helpers/Loadings";

const Profile = () => {
  const { getTraitors } = useDropouts();
  const [traitors, setTraitors] = useState<Traitors | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTraitors = async () => {
      const data = await getTraitors();
      if (data) {
        setTraitors(data);
        setIsLoading(false);
      }
    };
    loadTraitors();
  }, []);

  return (
    <div>
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
            <h1 className="display-6 mx-2   ">Profile</h1>
          </div>
        </div>
      </nav>

      {isLoading ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Loadings type="cylon" color="#0000FF" />
          <h1>NO CANCELES, LÚCHALA COMPA</h1>
        </div>
      ) : (
        <div className="card-group mx-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export { Profile };
