import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./CustomNavBar.css";

const CustomNavBar = () => {
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("tepui_token"));

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsAuth(!!localStorage.getItem("tepui_token"));
  }, [location.pathname]);

  useEffect(() => {
    const syncAuth = () => {
      setIsAuth(!!localStorage.getItem("tepui_token"));
    };

    window.addEventListener("auth-changed", syncAuth);

    return () => {
      window.removeEventListener("auth-changed", syncAuth);
    };
  }, []);

  const handleAuthClick = () => {
    if (isAuth) {
      localStorage.removeItem("tepui_token");
      setIsAuth(false);
      setOpen(false);
      window.dispatchEvent(new Event("auth-changed"));
      navigate("/");
      return;
    }

    setOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link
          className="title-navbar navbar-brand fw-bold"
          to="/"
          onClick={() => setOpen(false)}
        >
          Tepui <span>Finanza</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <Link className="nav-link" to="/Impara" onClick={() => setOpen(false)}>
                Impara
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Storie-dei-Mercati" onClick={() => setOpen(false)}>
                Storie dei Mercati
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Mercati" onClick={() => setOpen(false)}>
                Mercati
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Calcolatrice" onClick={() => setOpen(false)}>
                Calcolatrice
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Risorse" onClick={() => setOpen(false)}>
                Risorse
              </Link>
            </li>
            <li className="nav-item ms-lg-2">
              <button
                type="button"
                className="btn-login btn btn-outline-light btn-sm"
                onClick={handleAuthClick}
              >
                {isAuth ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavBar;
