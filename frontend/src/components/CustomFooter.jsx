import "./CustomFooter.css";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const CustomFooter = () => {
  return (
    <footer className="custom-footer mt-auto">
      <div className="container py-4">
        <div className="row g-4 align-items-center justify-content-between">
          <div className="col-12 col-lg-4 text-center text-lg-start">
            <div className="fw-bold text-light footer-brand">Tepui Finanza &reg;</div>
            <div className="small text-light opacity-75">
              Contenuto educativo. Nessuna consulenza finanziaria.
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="d-flex flex-wrap justify-content-center gap-3 footer-links">
              <a href="#" className="text-decoration-none">Condizioni</a>
              <a href="#" className="text-decoration-none">Termini</a>
              <a href="#" className="text-decoration-none">Privacy</a>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="d-flex justify-content-center justify-content-lg-end gap-3">
              <a href="#" className="footer-social" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="footer-social" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="footer-social" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="footer-social" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;