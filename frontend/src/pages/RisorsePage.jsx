const RisorsePage = () => {
  const excelTools = [
    {
      title: "Budget Mensile (Excel)",
      text: "Template per gestire entrate, spese e categorie con totale automatico.",
      img: "/images/prova-excel.png",
    },
    {
      title: "Calcolatore Interesse Composto",
      text: "Simula crescita nel tempo con contributi periodici e rendimento stimato.",
      img: "/images/prova-excel.png",
    },
  ];
  const books = [
    { title: "Libro 1", img: "/images/prova-libro.png" },
    { title: "Libro 2", img: "/images/prova-libro.png" },
    { title: "Libro 3", img: "/images/prova-libro.png" },
    { title: "Libro 4", img: "/images/prova-libro.png" },
    { title: "Libro 5", img: "/images/prova-libro.png" },
    { title: "Libro 6", img: "/images/prova-libro.png" },
    { title: "Libro 7", img: "/images/prova-libro.png" },
    { title: "Libro 8", img: "/images/prova-libro.png" },
  ];
  return (
    <section className="container my-5">
      <div className="mb-4">
        <h2 className="section-title h3 fw-bold mb-1">Risorse</h2>
        <p className="text-muted mb-0">Strumenti utili e libri consigliati.</p>
      </div>
      <div className="mb-5">
        <h3 className="h5 fw-bold mb-3">Excel utili</h3>
        <div className="row g-4">
          {excelTools.map((t, i) => (
            <div className="col-12" key={i}>
              <div className="card rounded-4 overflow-hidden shadow-sm">
                <div className="row g-0 align-items-stretch">
                  <div className="col-12 col-md-4">
                    <img src={t.img} className="img-fluid w-100 h-100 object-fit-cover" alt={t.title} />
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="card-body p-4 d-flex flex-column h-100">
                      <h4 className="h5 fw-bold mb-2">{t.title}</h4>
                      <p className="text-muted mb-4">{t.text}</p>
                      <button className="btn btn-primary mt-auto align-self-start">Apri</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="h5 fw-bold mb-3">Libri utili</h3>
        <div className="row g-4">
          {books.map((b, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={i}>
              <div className="card h-100 rounded-4 overflow-hidden shadow-sm">
                <img src={b.img} className="card-img-top" alt={b.title} />
                <div className="card-body d-flex flex-column">
                  <h6 className="fw-bold mb-3">{b.title}</h6>
                  <button className="btn btn-outline-primary mt-auto w-100">Compra</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RisorsePage;
