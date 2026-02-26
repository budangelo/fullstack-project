import { Link } from "react-router-dom";


const StoriePage = () => {
  const stories = [
    {
      slug: "Dove nasce la Borsa",
      title: "Dove nasce la Borsa",
      text: "Quando pensiamo alla borsa valori immaginiamo grattacieli e schermi pieni di prezzi. In realtà, alcune delle sue radici più...",
      img: "/images/hero-bruxelles.png",
    },
    {
      slug: "Venezuela e materie prime: quando la finanza segue la geografia",
      title: "Venezuela e materie prime: quando la finanza segue la geografia",
      text: "Venezuela è spesso sotto i riflettori di Stati Uniti, Cina e Russia per un motivo semplice: materie prime strategiche, soprattutto...",
      img: "/images/hero-vzla.png",
    },
    {
      slug: "Quando Wall Street si fermò",
      title: "Quando Wall Street si fermò",
      text: "Tutto iniziò anni prima, quando i prezzi delle case salivano senza sosta e il credito era facile...",
      img: "/images/bear-market.png",
    },
    {
      slug: "Chi è Satoshi Nakamoto",
      title: "Chi è Satoshi Nakamoto?",
      text: "Chi l’ha inventato davvero? Perché un “file digitale” può valere così tanto? E soprattutto...",
      img: "/images/bitcoin.png",
    },
    {
      slug: "The Magnificent Seven",
      title: "The Magnificent Seven",
      text: "Perché il sistema monetario è cambiato e cosa significa oggi.",
      img: "/images/hero-poker.png",
    },
    {
      slug: "Jordan Belfort",
      title: "Jordan Belfort: il “Lupo” di Wall Street",
      text: "Metodo utilizzato era spesso il cosiddetto pump and dump: si promuoveva un...",
      img: "/images/sell-pen.png",
    },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="section-title h3 fw-bold mb-0 title-pg-custom text-light">Storie dei <span>Mercati</span></h2>
      </div>

      <div className="row g-4">
        {stories.map((s) => (
          <div className="col-12 col-sm-6 col-lg-4" key={s.slug}>
            <Link to={`/storie/${s.slug}`} className="text-decoration-none">
              <div className="card h-100 rounded-4 overflow-hidden bubble-card card-bubble-custom ">
                <img src={s.img} className="card-img-top" alt={s.title} />
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-2">{s.title}</h5>
                  <p className="card-text text-light  mb-0">{s.text}</p>
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
