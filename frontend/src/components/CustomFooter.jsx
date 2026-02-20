
const CustomFooter = () => {
  return (
    <footer className="bg-dark text-light mt-auto">
      <div className="container py-4">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-md">
            <div className="fw-semibold">Tepui Finanza</div>
            <div className="text-secondary small">
              Contenuto educativo. Nessuna consulenza finanziaria.
            </div>
          </div>
          <div className="col-12 col-md-auto">
            <ul className="nav justify-content-md-end">
              <li className="nav-item">
                <a className="nav-link px-2 text-secondary" href="/Impara">
                  Impara
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2 text-secondary" href="/Storie-di-Finanza">
                  Storie di Finanza
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2 text-secondary" href="/Indici">
                  Indici
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2 text-secondary" href="/calcolatrice">
                  Calcolatrice
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-2 text-secondary" href="/Risorse">
                  Risorse
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary my-3" />
      </div>
    </footer>
  );
}

export default CustomFooter