import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section className="error-section">
      <div className="container error-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist or has been moved.
          Please check the URL or return to the homepage.
        </p>

        <div className="btn-group">
          <NavLink to="/">
            <button>Go Home</button>
          </NavLink>

          <NavLink to="/contact">
                     <button className="learn">Report Problem</button>
                     </NavLink>
        </div>
      </div>
    </section>
  );
};