import "./HomePage.css";

const ImparaPage = () => {
  const lessons = [
    { title: "Offerta e domanda", text: "Quando qualcosa è scarsa ma molto richiesta, il prezzo tende a salire. Se l’offerta è limitata (come Bitcoin) e la domanda cresce, il valore può aumentare nel tempo." },
    { title: "Tassi d’interesse", text: "Quando i tassi salgono, prestiti e mutui costano di più e l’economia tende a rallentare. I mercati reagiscono perché cambia il “prezzo del denaro”." },
    { title: "Banca centrale", text: "La banca centrale gestisce tassi e liquidità per controllare inflazione e stabilità. Le sue decisioni influenzano risparmi, prestiti e l’umore dei mercati." },
    { title: "Liquidità", text: "La liquidità è la facilità con cui converti un asset in denaro, rapidamente e con poche perdite. Più un mercato è liquido, più è semplice comprare e vendere." },
    { title: "Spread", text: "È la differenza tra prezzo di acquisto e prezzo di vendita. Se lo spread è alto, ogni operazione ti costa di più, soprattutto nei mercati poco liquidi." },
    { title: "Market cap cripto", text: "Capitalizzazione = prezzo × monete in circolazione. Aiuta a capire la “dimensione” di una crypto: un prezzo basso non significa automaticamente che sia “economica”." },
    { title: "Halving di Bitcoin", text: "A intervalli regolari, la nuova emissione di Bitcoin si dimezza. Questo riduce l’offerta che entra sul mercato e spesso aumenta l’attenzione degli investitori." },
    { title: "Stablecoin", text: "Sono crypto progettate per restare stabili, spesso ancorate al dollaro. Utili per muoversi nel mondo cripto con meno volatilità rispetto a Bitcoin e altcoin." },
    { title: "Azioni", text: "Cosa rappresentano e perché il prezzo cambia." },
    { title: "Token vs Coin", text: "Una coin ha una blockchain propria (es. Bitcoin). Un token vive su una blockchain esistente (es. Ethereum). La differenza aiuta a capire dipendenze, costi e utilizzi." },
    { title: "ETF", text: "Strumenti che replicano indici e semplificano la diversificazione." },
    { title: "Orso e toro", text: "Mercato “toro” = prezzi in salita e fiducia. Mercato “orso” = prezzi in calo e cautela/paura. Capire la fase aiuta a gestire aspettative ed emozioni." },
    { title: "Cos’è un dividendo", text: "Parte degli utili distribuita agli azionisti (quando previsto)." },
    { title: "Capitalizzazione", text: "Quanto “vale” un’azienda in borsa: prezzo × azioni." },
    { title: "Volatilità", text: "Quanto e quanto velocemente cambia il prezzo nel tempo." },
    { title: "Orizzonte temporale", text: "Il tempo che hai davanti influenza le scelte e la strategia." },
    { title: "Correzione di mercato", text: "Un calo del 10–20% può essere normale durante un trend di crescita. Non è sempre un “crash”: spesso è una pausa che riduce gli eccessi." },
    { title: "Panico e FOMO", text: "La FOMO ti fa comprare tardi per paura di perdere il treno; il panico ti fa vendere nel momento peggiore. Una strategia scritta riduce le decisioni impulsive." },
    { title: "Stop loss (base)", text: "È un livello di prezzo in cui chiudi una posizione per limitare la perdita. È utile, ma non è magico: nei movimenti rapidi può essere eseguito peggio del previsto." },
    { title: "Recessione", text: "È un periodo di rallentamento economico: consumi e profitti scendono e la disoccupazione può salire. Spesso i mercati la “anticipano” prima dei dati ufficiali." },
    { title: "Rendimenti obbligazionari", text: "Quando i rendimenti salgono, i prezzi delle obbligazioni in genere scendono. È una relazione chiave: “sicuro” non significa “senza oscillazioni”." },
    { title: "Materie prime e inflazione", text: "Energia e cibo influenzano molti prezzi. Se petrolio e gas salgono, le aziende spesso spendono di più e l’inflazione può accelerare." },
    { title: "Oro: ruolo storico", text: "L’oro è spesso visto come bene “rifugio” nei periodi di incertezza. Non produce interessi, ma può reggere meglio quando fiducia e mercati vacillano." },
    { title: "Dollaro forte", text: "Quando il dollaro si rafforza, importazioni e debiti in dollari pesano di più per altri Paesi. Può influenzare materie prime e mercati globali." },
    { title: "Dati economici chiave", text: "Inflazione, occupazione e PIL muovono i mercati perché cambiano le aspettative sui tassi. Non serve memorizzare tutto: basta capire cosa misura ogni dato." },
  ];

  const isAuth = !!localStorage.getItem("tepui_token");
  const visibleLessons = isAuth ? lessons : lessons.slice(0, 10);

  return (
    <section className="container my-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="section-title h3 fw-bold mb-4 title-pg-custom text-light">
          Impara con le nostre <span>Pillole</span>
        </h2>
      </div>

      {!isAuth && (
        <p className="text-light small mb-4">
          Accedi con Google per vedere tutte le pillole.
        </p>
      )}

      <div className="row g-3">
        {visibleLessons.map((item, i) => (
          <div className="col-12 col-sm-6 col-lg-3" key={i}>
            <div className="card-bubble-custom bubble-card card h-100 rounded-3 shadow-sm">
              <div className="card-body">
                <h6 className="fw-semibold mb-2">{item.title}</h6>
                <p className="mb-0 text-light">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImparaPage;
