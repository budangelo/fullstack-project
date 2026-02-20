import { Link } from "react-router-dom";

const StoriePage = () => {
  const stories = [
    {
      slug: "crisi-2008",
      title: "La crisi finanziaria del 2008",
      text: "Mutui subprime, banche, panico e cosa è cambiato dopo.",
      img: "/images/prova-card.png",
    },
    {
      slug: "dotcom-2000",
      title: "La bolla Dot-com",
      text: "Quando l’euforia per Internet ha spinto valutazioni fuori controllo.",
      img: "/images/prova-card.png",
    },
    {
      slug: "covid-2020",
      title: "Covid e mercati",
      text: "Crollo, stimoli, nuove abitudini e aziende che hanno beneficiato.",
      img: "/images/prova-card.png",
    },
    {
      slug: "inflazione-anni-70",
      title: "Inflazione anni ’70",
      text: "Energia, prezzi in salita e politiche monetarie più dure.",
      img: "/images/prova-card.png",
    },
    {
      slug: "gold-standard",
      title: "Fine del Gold Standard",
      text: "Perché il sistema monetario è cambiato e cosa significa oggi.",
      img: "/images/prova-card.png",
    },
    {
      slug: "black-monday-1987",
      title: "Black Monday (1987)",
      text: "Uno dei crolli più rapidi della storia: cosa successe davvero.",
      img: "/images/prova-card.png",
    },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="section-title h3 fw-bold mb-0">Storie</h2>
      </div>

      <div className="row g-4">
        {stories.map((s) => (
          <div className="col-12 col-sm-6 col-lg-4" key={s.slug}>
            <Link to={`/storie/${s.slug}`} className="text-decoration-none">
              <div className="card h-100 rounded-4 overflow-hidden">
                <img src={s.img} className="card-img-top" alt={s.title} />
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark mb-2">{s.title}</h5>
                  <p className="card-text text-muted mb-0">{s.text}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoriePage;
