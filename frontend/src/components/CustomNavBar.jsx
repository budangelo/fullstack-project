import { useState } from "react"
import "./CustomNavBar.css"

const CustomNavBar = () => {
    const [open, setOpen] = useState(false);
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="title-navbar navbar-brand fw-bold" href="./">
            Tepui <span>Finanza</span>
          </a>
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
                <a className="nav-link" href="/Impara">
                  Impara
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Storie-dei-Mercati">
                  Storie dei Mercati
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Mercati">
                  Mercati
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Calcolatrice">
                  Calcolatrice
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Risorse">
                  Risorse
                </a>
              </li>
              <li className="nav-item ms-lg-2">
                <a className="btn-login btn btn-outline-light btn-sm" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default CustomNavBar;
