import "./HomePage.css";
import { downloadExcel } from "../services/api.js";
import { useNavigate } from "react-router-dom";

const RisorsePage = () => {
  const navigate = useNavigate();

  const handleDownload = async (fileKey) => {
    const token = localStorage.getItem("tepui_token");
    if (!token) return navigate("/login");
    await downloadExcel(fileKey);
  };

  const excelTools = [
    {
      title: "Budget Mensile 'Stipendio' (Excel)",
      text: "Template per gestire entrate, spese e categorie con totale automatico.",
      img: "/images/prova-excel.png",
      fileKey: "stipendio",
    },
    {
      title: "Patrimonio (Excel)",
      text: "Template per gestire un patrimonio.",
      img: "/images/prova-excel.png",
      fileKey: "patrimonio",
    },
  ];

  const books = [
    { title: "il metodo warren buffett", img: "https://m.media-amazon.com/images/I/71Q5WH3kRgL._AC_UF1000,1000_QL80_.jpg", url: "https://www.amazon.it/dp/8820362716/?bestFormat=true&k=il%20metodo%20warren%20buffett&ref_=nb_sb_ss_w_scx-ent-bk-ww_k2_1_12_de&crid=37KC73OIEKFNF&sprefix=warrend%20buffe" },
    { title: "A spasso per Wall Street.", img: "https://www.lafeltrinelli.it/images/9788836006199_0_0_536_0_75.jpg",
    url: "https://www.amazon.it/-/en/spasso-Street-segreti-investire-successo/dp/8836006183/ref=sr_1_1?crid=158CRE7CGQ0V&dib=eyJ2IjoiMSJ9.ZcdY-7L9gidyAtN8c7xWk9hBcBQnNeTUKTg_Vi1siTHMmu72_sfsCv1Mc0pGO77y5aRFxBE9OcjqE3a_NG7X9SvrVN_MkTfI5SX_q69B9symsgRnSHY0MArO70Ayg5WV.l22ARnRBNGK1GMSEjDB9HnnXfgkMXJ0zgXSKok42OZs&dib_tag=se&keywords=a+spasso+per+wall+street&qid=1771950393&s=books&sprefix=a+spasso+%2Cstripbooks%2C247&sr=1-1"},
    { title: "L'uomo più ricco di Babilonia", img: "https://m.media-amazon.com/images/I/71fe+8LgxML._AC_UF1000,1000_QL80_.jpg",
    url: "https://www.amazon.it/George-S-Clason-ebook/dp/B0G228H76V/ref=sr_1_1_sspa?crid=238KAHNMOWIJJ&dib=eyJ2IjoiMSJ9.D2CVrcbXl6lG_Oqrkq-ffHbvxc4Kk1L675vpvYRafwH2VFqtNQ9sEuA1hAmfAQhHQi4CgWMwPUqX0kr6JjGP8a6sJ_dNfsYnT3yJMDbFAmB2uBWGv9Ur5D8P2mnqW1DfcjFR7ceJDQZYbXTkm7N6Lwx1G64R4b7pTPhSLI3lU9pJfrG3TSJC3-dxkMYtsHfMfktKMMZPoL2j3OTG7nODU9FFxIHt0o3TBF9Ya2EYCmE.d6wgZTIGQtB6Gg9u1LlxosL0Q8EmjOhRdGHQ5J5Eodk&dib_tag=se&keywords=uomo+piu+ricco+della+babilonia&qid=1771950360&s=books&sprefix=uomo+piu+ricco+della+babiloni%2Cstripbooks%2C240&sr=1-1-spons&aref=cn5z7u5gHj&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" },
    { title: "passo avanti a Wall Street", img: "https://www.lafeltrinelli.it/images/9788836009367_0_0_536_0_75.jpg",
    url: "https://www.amazon.it/-/en/avanti-Street-segreti-strategie-guadagnare/dp/8836009360/ref=sr_1_1?crid=O6P3A8FX369W&dib=eyJ2IjoiMSJ9.84aqky-2rti0RprnoFp6QY3QYi7LtdVLjZXy9UujpM7DDrCrnBsegWCacUZGSFgUtnhLknYZbYOoGRYh0m-kdkd3VCYIjoxER2d7GYM_0cCoorRsK8QiikzM8YSn4RpuJdH-RetcnG8q7VutWf-XwIhdwhJ4hB6dMHo7v6H4QVZ-TWttNaOBQ7P04NEC5cVeyfkwtL3e9W2S7q7hrIk69Wlv9n-fZ2C67yHegJZFLhc.e7sG7suGcyaOC1sos-bJHnW7xJ55JKrDe-Arfzl7osY&dib_tag=se&keywords=peter+lynch&qid=1771950314&s=books&sprefix=peter+lync%2Cstripbooks%2C247&sr=1-1" },
    { title: "Il libretto rosso del Lupo di Wall Street", img: "https://m.media-amazon.com/images/I/81sEgqyWtmL._UF1000,1000_QL80_.jpg",
    url: "https://www.amazon.it/-/en/libretto-Street-segreti-successo-venditore/dp/8869875822/ref=sr_1_1?crid=1PXMWHSJ8CVB9&dib=eyJ2IjoiMSJ9.lp445IvT2n2ka_WhOjerdQJHtWaS_VE32hs5DClBh_KK2nF0Ov4ZPDUJizarUgG_gehTxdHD9x1QB9UrLKREl-DHVgqu1xjw3BdbqwzmRmFkl321_CcMyKFoEQylhH1fK7q9_t8XZhWXFpGW0WIH4WCnHMDCwC8M0MUjTR_4vXUxChVOpHEfoSFM2sbMYTpr255gZGsDJ6LcPkcHMpati2IOHq8hSo5BbAnZmXFvZNg._A3GPSWTw1TG02_-eJ8nFRRopBn7vEcljIJaTtPXcPw&dib_tag=se&keywords=jordan+belfort&qid=1771950439&s=books&sprefix=jorda+belfort%2Cstripbooks%2C236&sr=1-1" },
    { title: "Warren Buffett. Dentro la mente del migliore investitore al mondo", img: "https://m.media-amazon.com/images/I/71QclqZGvSL.jpg",
    url: "https://www.amazon.it/-/en/Warren-Buffett-Dentro-migliore-investitore/dp/8836000320/ref=sr_1_6?crid=Y4I6RJJQZIKM&dib=eyJ2IjoiMSJ9.P8zSTHz2yKJa9faBg_9Ym7TZ5gzXOhKrdnh6rr_J5LM3CjYVL7nSkcvzIUj89UgpNniegPw3hb041YSi2hX-36a0HZpPlOM1_iIlTxPp6y3I7LeR2Tz-rJ_UpdGoWdK3t4_n_8SiZHKjaaKVekItT_ZKiBmWhOk2zkVS9NKJupeZK0f5HY4dwypqWhqRCuVYLbgkE8wX1jWHaZP1X608V_AOS1u6LPLf19Bq5JG69Gk.tPNYotJiPiC-0gTcRmO4tzYvQiDcRWOXI7nm6-xv2y8&dib_tag=se&keywords=warren+buffett+libri&qid=1771950467&s=books&sprefix=warren+buffett+libr%2Cstripbooks%2C238&sr=1-6" },
    { title: "I principi per affrontare il nuovo ordine mondiale", img: "https://m.media-amazon.com/images/I/61PjSvWD6KL._AC_UF1000,1000_QL80_.jpg",
    url: "https://www.amazon.it/-/en/principi-affrontare-ordine-mondiale-trionfo/dp/8836020399/ref=sr_1_3?crid=JWDFVGBR8JJ9&dib=eyJ2IjoiMSJ9.mdFJM7k7i_L_7n6WRDBwSaluvVbplQgsWHL4YrWScxMj_pI80uU6an6xgJloAtlKW_e-peUjtiIUJ2bACLTSU7T_opijZf_xNQcmwLYSSBJYRJLdSHJY_4406TcDwlna1p7N9nDiMvmjFQr0Ow-g2Yuc1uJ5dhL0oirm_-WdZUuiq6yL3U3dI1N9hIEnozM9tMoIO--xGEH18uHZYZewEGp8WBPb9Mi4qJsH_D2nrZE.DFatpvwvrc_Z0nlPwKSicuzqY42pCuvbm0yqO4kn71E&dib_tag=se&keywords=ray+dalio&qid=1771950508&s=books&sprefix=ray+dalio%2Cstripbooks%2C241&sr=1-3" },
    { title: "il metodo wyckoff", img: "https://m.media-amazon.com/images/I/61qZ-7-76vL._AC_UF1000,1000_QL80_.jpg" ,
    url: "https://www.amazon.it/gp/aw/d/1709849975/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=7250434e9c46436b035c45b66c091074&hsa_cr_id=6466020470502&qid=1771950535&sr=1-2-e0fa1fdd-d857-4087-adda-5bd576b25987&aref=HLj1s7JQ21&ref_=sbx_s_sparkle_sbtcd_asin_1_img&pd_rd_w=jfnrf&content-id=amzn1.sym.636516f3-c12f-4ee4-89de-6ff484bac109%3Aamzn1.sym.636516f3-c12f-4ee4-89de-6ff484bac109&pf_rd_p=636516f3-c12f-4ee4-89de-6ff484bac109&pf_rd_r=2RZ2HXT4VKXR5F6N6TJF&pd_rd_wg=yZz2c&pd_rd_r=b137d1cb-bdc5-4848-a638-d28b876c61fe"},
  ];
  return (
    <section className="container my-5">
      <div className="mb-4">
        <h2 className="section-title fw-bold mb-1 title-pg-custom range-yellow">Risorse</h2>
        <p className="mb-0 text-light">Strumenti utili e libri consigliati.</p>
      </div>
      <div className="mb-5">
        <h3 className=" fw-bold mb-3 title-pg-custom range-yellow">Excel utili</h3>
        <div className="row g-4">
          {excelTools.map((t, i) => (
            <div className="col-12" key={i}>
              <div className="card rounded-4 overflow-hidden shadow-sm bubble-card">
                <div className="row g-0 align-items-stretch">
                  <div className="col-12 col-md-4">
                    <img src={t.img} className="img-fluid w-100 h-100 object-fit-cover" alt={t.title} />
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="card-body p-4 d-flex flex-column h-100">
                      <h4 className="h5 fw-bold mb-2">{t.title}</h4>
                      <p className="mb-4">{t.text}</p>
                      <button className="btn btn-warning btn-sm px-3 py-2 w-auto mt-auto align-self-start" onClick={() => handleDownload(t.fileKey)}>Scarica</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className=" fw-bold mb-4 mt-4 title-pg-custom range-yellow">Libri utili</h3>
        <div className="row g-4">
          {books.map((b, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={i}>
              <div className="card h-100 rounded-4 overflow-hidden shadow-sm bubble-card">
                <img src={b.img} className="card-img-top" alt={b.title} />
                <div className="card-body d-flex flex-column">
                  <h6 className="fw-bold mb-3">{b.title}</h6>
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-warning mt-auto w-100">
                      Compra
                  </a>
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
