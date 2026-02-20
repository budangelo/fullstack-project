import "./HomePage.css";
import { Link } from "react-router-dom";
import {useEffect} from "react";

const HomePage = () => {
  useEffect(() => {document.body.classList.add("home-bg")
    return () => document.body.classList.remove("home-bg")
      }, [])
      return (
        <>
          <div className="home-bg">
            <div className="homepage-title-container container p-3 p-m d-4">
              <h1 className="text-light fw-bold lh-1 mb-4 display-5">Uno spazio per comprendere <span>la finanza</span></h1>
              <h2 className="text-light fst-italic mt-4 fs-5 bg-dark bg-opacity-50 rounded-pill py-2 px-5 d-inline-block"><span>“Il miglior momento per investire era ieri, il prossimo migliore è domani”</span> -Warren Buffett </h2>
            </div>
            <div className="container py-5 pb-5 my-4">
              <div
                id="carouselExampleCaptions"
                className="carousel slide hero-carousel rounded-4 overflow-hidden shadow-sm "
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/hero-vzla.png" className="d-block w-100 hero-carousel-img" alt="image hero venezuelan oil" />
                    <div className="carousel-caption">
                      <div className="bg-dark bg-opacity-25 rounded-pill px-3 py-2 d-inline-block ">
                        <h5 className="mb-0 mb-md-1 fs-6 fs-md-5">Venezuela: un piccolo Paese con immense risorse naturali</h5>
                        <p className="mb-0 d-none d-md-block">Il Venezuela possiede alcune delle più grandi riserve di petrolio al mondo. Nel corso della storia, l’interesse internazionale verso queste risorse ha influenzato equilibri politici ed economici globali.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/hero-bruxelles.png" className="d-block w-100  hero-carousel-img" alt="image hero poker texas holdem" />
                    <div className="carousel-caption">
                      <div className="bg-dark bg-opacity-25 rounded-pill px-3 py-2 d-inline-block text-light">
                        <h5 className="mb-0 mb-md-1 fs-6 fs-md-5">La prima borsa valori nacque in Europa</h5>
                        <p className="mb-0 d-none d-md-block">Molti pensano che tutto sia iniziato a Wall Street, ma la prima borsa valori moderna nacque a Bruxelles, in Belgio, nel XVI secolo, segnando l’inizio dei mercati finanziari organizzati.</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="/images/hero-poker.png" className="d-block w-100 hero-carousel-img" alt="image hero bruxelles illustration" />
                    <div className="carousel-caption">
                      <div className="bg-dark bg-opacity-25 rounded-pill px-3 py-2 d-inline-block text-light">
                        <h5 className="mb-0 mb-md-1 fs-6 fs-md-5">The Magnificent Seven: l’era delle Big Tech</h5>
                        <p className="mb-0 d-none d-md-block">Negli ultimi anni, sette grandi aziende tecnologiche hanno guidato la crescita dei mercati americani.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <section className="container py-5">
              <div className="row g-5">
                <div className="col-12 col-lg-6">
                  <div className="card-home-page card h-100 rounded-4 shadow-sm">
                    <div className="card-body p-4 d-flex flex-column">
                      <h5 className="text-uppercase fw-bold display-6 mb-0">Momenti chiave della finanza</h5>
                      <ul className="list-unstyled py-5 d-grid gap-2 mb-4">
                        <li>• Eventi storici che hanno influenzato i mercati finanziari</li>
                        <li>• Come il COVID ha cambiato aziende come Netflix e Zoom</li>
                        <li>• La nascita della borsa valori e l’evoluzione dei mercati</li>
                        <li>• Crisi e momenti chiave spiegati in modo semplice</li>
                      </ul>
                      <button className="card-hp-btn btn btn-dark w-100 mt-auto">Esplora le storie →</button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card-home-page card h-100 rounded-4 shadow-sm position-relative">
                    <span className="badge text-bg-warning rounded-pill position-absolute top-0 start-50 translate-middle px-3 py-2">
                      New
                    </span>
                    <div className="card-body p-4 d-flex flex-column">
                      <h5 className="text-uppercase fw-bold display-6 mb-0">Calcolatrice di Interesse Composto📊</h5>
                      <ul className="list-unstyled d-grid py-5 gap-2 mb-4">
                        <li>•Scopri come può crescere il tuo capitale nel tempo grazie all’interesse composto.</li>
                        <li>• Simula rendimenti nel tempo (5, 10, 20 anni)</li>
                        <li>• Comprendi l’impatto del tempo sugli investimenti</li>
                      </ul>
                      <button className="card-hp-btn btn btn-dark w-100 mt-auto">Calcola ora →</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="container py-5 my-5">
              <div className="row g-3">
                <div className="col-12 col-sm-6 col-lg-3">
                  <Link to="/impara" className="text-decoration-none">
                  <div className="pill-card card h-100 rounded-3 overflow-hidden">
                    <img src="/images/prova-card.png" className="card-img-top" alt="Pillola 01" />
                    <div className="card-body">
                      <h6 className="card-title fw-semibold mb-2">Pillola 01</h6>
                      <p className="card-text text-muted mb-0">
                        Testo breve per introdurre un concetto base di finanza.
                      </p>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <Link to="/impara" className="text-decoration-none">
                  <div className="pill-card card h-100 rounded-3 overflow-hidden">
                    <img src="/images/prova-card.png" className="card-img-top" alt="Pillola 02" />
                    <div className="card-body">
                      <h6 className="card-title fw-semibold mb-2">Pillola 02</h6>
                      <p className="card-text text-muted mb-0">
                        Testo breve per introdurre un concetto base di finanza.
                      </p>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <Link to="/impara" className="text-decoration-none">
                  <div className="pill-card card h-100 rounded-3 overflow-hidden">
                    <img src="/images/prova-card.png" className="card-img-top" alt="Pillola 03" />
                    <div className="card-body">
                      <h6 className="card-title fw-semibold mb-2">Pillola 03</h6>
                      <p className="card-text text-muted mb-0">
                        Testo breve per introdurre un concetto base di finanza.
                      </p>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <Link to="/impara" className="text-decoration-none">
                  <div className="pill-card card h-100 rounded-3 overflow-hidden">
                    <img src="/images/prova-card.png" className="card-img-top" alt="Pillola 04" />
                    <div className="card-body">
                      <h6 className="card-title fw-semibold mb-2">Pillola 04</h6>
                      <p className="card-text text-muted mb-0">
                        Testo breve per introdurre un concetto base di finanza.
                      </p>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </section>
            <section className="container my-5">
              <div className=" row justify-content-center">
                <div className="col-12 col-lg-10">
                  <div className="NewLettercontainer p-4 p-md-5 rounded-4 shadow-sm border">
                    <div className="row align-items-center g-4">
                      <div className="col-12 col-md-7">
                        <h3 className="fw-bold mb-2">Iscriviti alla newsletter</h3>
                        <p className="text-muted mb-0">
                          Ricevi pillole di finanza, risorse utili e aggiornamenti sui contenuti.
                        </p>
                      </div>
                      <div className="col-12 col-md-5">
                        <form className="d-flex gap-2">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="La tua email"
                            aria-label="Email"
                          />
                          <button type="submit" className="btn btn-dark">
                            Iscriviti
                          </button>
                        </form>
                        <div className="form-text mt-2">
                          Niente spam. Puoi cancellarti quando vuoi.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="container my-5">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                  <div className="FeedbackContainer p-4 p-md-5 rounded-4 shadow-sm border">
                    <h3 className="fw-bold mb-2">Lascia un feedback</h3>
                    <p className="text-muted mb-4">
                      Aiutami a migliorare la piattaforma: dimmi cosa ti piace e cosa potrei fare meglio.
                    </p>
                    <form>
                      <div className="row g-3">
                        <div className="col-12 col-md-6">
                          <label className="form-label">Nome</label>
                          <input type="text" className="form-control" placeholder="Il tuo nome" />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" placeholder="La tua email" />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Valutazione</label>
                          <select className="form-select" defaultValue="">
                            <option value="" disabled>
                              Seleziona una valutazione
                            </option>
                            <option value="5">5 - Ottimo⭐️⭐️⭐️⭐️⭐️</option>
                            <option value="4">4 - Buono😎👍🏻</option>
                            <option value="3">3 - Ok🤔</option>
                            <option value="2">2 - Da migliorare🥱</option>
                            <option value="1">1 - Scarso🫣</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="form-label">Commento</label>
                          <textarea
                            className="form-control"
                            rows="4"
                            placeholder="Scrivi qui il tuo commento..."
                          ></textarea>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                          <button type="submit" className="btn btn-dark px-4">
                            Invia
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
    </>
  );
};

export default HomePage;
