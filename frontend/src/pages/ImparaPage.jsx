
const ImparaPage = () => {
  const lessons = [
    { title: "Cos’è la finanza personale", text: "Le basi per gestire entrate, spese e obiettivi in modo semplice." },
    { title: "Entrate vs spese", text: "Capire dove vanno i soldi è il primo passo per migliorare." },
    { title: "Budget 50/30/20", text: "Un metodo pratico per distribuire le tue risorse ogni mese." },
    { title: "Fondo d’emergenza", text: "Perché serve e come costruirlo senza stress." },
    { title: "Inflazione", text: "Come riduce il potere d’acquisto e cosa significa per te." },
    { title: "Interesse composto", text: "Il concetto che fa crescere un capitale nel tempo." },
    { title: "Rischio e rendimento", text: "Più rendimento potenziale spesso significa più oscillazioni." },
    { title: "Diversificazione", text: "Non mettere tutte le uova nello stesso paniere." },
    { title: "Azioni", text: "Cosa rappresentano e perché il prezzo cambia." },
    { title: "Obbligazioni", text: "Prestare denaro a enti/aziende in cambio di interessi." },
    { title: "ETF", text: "Strumenti che replicano indici e semplificano la diversificazione." },
    { title: "Indice di mercato", text: "Un termometro che riassume l’andamento di un insieme di titoli." },
    { title: "Cos’è un dividendo", text: "Parte degli utili distribuita agli azionisti (quando previsto)." },
    { title: "Capitalizzazione", text: "Quanto “vale” un’azienda in borsa: prezzo × azioni." },
    { title: "Volatilità", text: "Quanto e quanto velocemente cambia il prezzo nel tempo." },
    { title: "Orizzonte temporale", text: "Il tempo che hai davanti influenza le scelte e la strategia." },
    { title: "Liquidità", text: "Quanto è facile convertire un investimento in cash." },
    { title: "Costi e commissioni", text: "Piccoli costi ripetuti possono pesare molto nel lungo periodo." },
    { title: "DCA (piano di accumulo)", text: "Investire a rate per ridurre l’impatto delle oscillazioni." },
    { title: "Psicologia e disciplina", text: "Decisioni emotive: il nemico numero uno della coerenza." },
  ];
  return (
    <section className="container my-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="section-title h3 fw-bold mb-0">Impara</h2>
      </div>
      <div className="row g-3">
        {lessons.map((item, i) => (
          <div className="col-12 col-sm-6 col-lg-3" key={i}>
            <div className="card h-100 rounded-3 shadow-sm">
              <div className="card-body">
                <h6 className="fw-semibold mb-2">{item.title}</h6>
                <p className="text-muted mb-0">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImparaPage;
