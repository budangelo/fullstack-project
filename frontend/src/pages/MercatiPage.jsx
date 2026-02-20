import { useEffect, useMemo, useRef, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const MercatiPage = () => {
  const API_KEY = import.meta.env.VITE_TWELVE_API_KEY;
  const instruments = useMemo(
    () => [
      { id: "sp500", label: "S&P 500 (SPY)", symbol: "SPY", category: "Indici" },
      { id: "aapl", label: "Apple", symbol: "AAPL", category: "Azioni" },
      { id: "tsla", label: "Tesla", symbol: "TSLA", category: "Azioni" },
      { id: "btc", label: "Bitcoin", symbol: "BTC/USD", exchange: "Binance", category: "Crypto" },
      { id: "gold", label: "Oro", symbol: "XAU/USD", exchange: "COMMODITY", category: "Commodities" },
      { id: "wti", label: "Petrolio (WTI)", symbol: "WTI/USD", exchange: "COMMODITY", category: "Commodities" },
    ],
    []
  );
  const categories = useMemo(() => ["Tutti", "Indici", "Azioni", "Crypto", "Commodities"], []);
  const [activeCategory, setActiveCategory] = useState("Tutti");
  const [selectedId, setSelectedId] = useState(instruments[0].id);
  const [quote, setQuote] = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [quoteError, setQuoteError] = useState("");
  const [series, setSeries] = useState([]);
  const [seriesLoading, setSeriesLoading] = useState(false);
  const [seriesError, setSeriesError] = useState("");
  const quoteCacheRef = useRef({});
  const seriesCacheRef = useRef({});
  const filtered = useMemo(() => {
    if (activeCategory === "Tutti") return instruments;
    return instruments.filter((i) => i.category === activeCategory)
  }, [activeCategory, instruments]);
  useEffect(() => {
    if (!filtered.some((x) => x.id === selectedId) && filtered.length) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId])

  const selected = useMemo(() => instruments.find((i) => i.id === selectedId), [instruments, selectedId])
  const buildQuoteUrl = (instrument) => {
    const base = "https://api.twelvedata.com/quote";
    const params = new URLSearchParams({ symbol: instrument.symbol, apikey: API_KEY || "" })
    if (instrument.exchange) params.set("exchange", instrument.exchange);
    return `${base}?${params.toString()}`;
  }

  const buildTimeSeriesUrl = (instrument) => {
    const base = "https://api.twelvedata.com/time_series";
    const sym = instrument.exchange ? `${instrument.exchange}:${instrument.symbol}` : instrument.symbol;
    const params = new URLSearchParams({
      symbol: sym,
      interval: "1day",
      outputsize: "90",
      apikey: API_KEY || "",
    });
    return `${base}?${params.toString()}`;
  };

  useEffect(() => {
    const run = async () => {
      if (!API_KEY) {
        setQuoteError("Manca VITE_TWELVE_API_KEY nel file .env (riavvia npm run dev).");
        setQuote(null);
        return;
      }
      if (!selected) return;
      const cacheKey = selected.id;
      const cached = quoteCacheRef.current[cacheKey];
      if (cached && Date.now() - cached.ts < 55_000) {
        setQuote(cached.data);
        setQuoteError("");
        return;
      }
      setQuoteLoading(true);
      setQuoteError("");

      try {
        const res = await fetch(buildQuoteUrl(selected));
        const data = await res.json();

        if (data?.status === "error") {
          setQuote(null);
          setQuoteError(data?.message || "Errore API Twelve Data");
        } else {
          quoteCacheRef.current[cacheKey] = { data, ts: Date.now() };
          setQuote(data);
        }
      } catch {
        setQuote(null);
        setQuoteError("Fetch fallito (possibile CORS o rete).");
      } finally {
        setQuoteLoading(false);
      }
    };

    run();
  }, [selectedId, API_KEY, selected]);

  useEffect(() => {
    const run = async () => {
      if (!API_KEY) {
        setSeriesError("Manca VITE_TWELVE_API_KEY nel file .env (riavvia npm run dev).");
        setSeries([]);
        return;
      }
      if (!selected) return;

      const cacheKey = selected.id;
      const cached = seriesCacheRef.current[cacheKey];
      if (cached && Date.now() - cached.ts < 5 * 60_000) {
        setSeries(cached.data);
        setSeriesError("");
        return;
      }

      setSeriesLoading(true);
      setSeriesError("");

      try {
        const res = await fetch(buildTimeSeriesUrl(selected));
        const data = await res.json();

        if (data?.status === "error") {
          setSeries([]);
          setSeriesError(data?.message || "Errore time_series");
        } else {
          const values = Array.isArray(data?.values) ? data.values : [];
          const mapped = values
            .map((v) => ({
              date: v.datetime,
              close: Number(v.close),
            }))
            .filter((p) => Number.isFinite(p.close))
            .reverse();

          seriesCacheRef.current[cacheKey] = { data: mapped, ts: Date.now() };
          setSeries(mapped);
        }
      } catch {
        setSeries([]);
        setSeriesError("Fetch time_series fallito (possibile CORS o rete).");
      } finally {
        setSeriesLoading(false);
      }
    };
    const t = setTimeout(run, 800);
    return () => clearTimeout(t);
  }, [selectedId, API_KEY, selected]);

  const fmtMoney = (value, currency) => {
    const n = Number(value);
    if (!Number.isFinite(n)) return "—";
    try {
      return new Intl.NumberFormat("it-IT", { style: "currency", currency: currency || "USD" }).format(n);
    } catch {
      return new Intl.NumberFormat("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
    }
  };

  const fmtNum = (value) => {
    const n = Number(value);
    if (!Number.isFinite(n)) return "—";
    return new Intl.NumberFormat("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
  };

  const price = quote?.close ?? quote?.price ?? quote?.last;
  const change = quote?.change;
  const percent = quote?.percent_change;
  const updated = quote?.datetime || (quote?.timestamp ? new Date(quote.timestamp * 1000).toLocaleString("it-IT") : "—");
  const currency = quote?.currency;

  return (
    <div className="container my-4">
      <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
        <div>
          <h1 className="section-title h3 fw-bold mb-1">Mercati</h1>
          <p className="text-muted mb-0">Quotazione + grafico (ultimi 90 giorni).</p>
        </div>

        <div className="d-flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`btn btn-sm ${activeCategory === c ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-4">
          <div className="row g-3">
            {filtered.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-lg-12">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedId(item.id)}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedId(item.id)}
                  className={`card h-100 rounded-4 ${
                    selectedId === item.id ? "border border-primary shadow-sm" : "border shadow-sm"
                  }`}
                >
                  <div className="card-body d-flex align-items-center justify-content-between">
                    <div>
                      <div className="fw-semibold">{item.label}</div>
                      <div className="text-muted small">
                        {item.symbol}
                        {item.exchange ? ` · ${item.exchange}` : ""}
                      </div>
                    </div>
                    <span className="badge text-bg-light">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="card rounded-4 shadow-sm">
            <div className="card-body p-4">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2 mb-3">
                <div>
                  <div className="text-muted small">Selezionato</div>
                  <div className="h4 fw-bold mb-0">{selected?.label}</div>
                  <div className="text-muted">
                    {selected?.symbol}
                    {selected?.exchange ? ` · ${selected.exchange}` : ""}
                  </div>
                </div>
                <div className="d-flex gap-2">
                  {quoteLoading && <span className="badge text-bg-secondary">Quote</span>}
                  {seriesLoading && <span className="badge text-bg-secondary">Grafico</span>}
                  {(quoteError || seriesError) && <span className="badge text-bg-danger">Errore</span>}
                  {!quoteLoading && !seriesLoading && !quoteError && !seriesError && quote && <span className="badge text-bg-success">OK</span>}
                </div>
              </div>
              {quoteError && <div className="alert alert-danger mb-3">{quoteError}</div>}
              <div className="row g-3 mb-4">
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded-4 border">
                    <div className="text-muted small">Prezzo</div>
                    <div className="h5 fw-bold mb-0">{quote ? fmtMoney(price, currency) : "—"}</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded-4 border">
                    <div className="text-muted small">Variazione</div>
                    <div className="h5 fw-bold mb-0">{quote ? `${fmtNum(change)} (${fmtNum(percent)}%)` : "—"}</div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded-4 border">
                    <div className="text-muted small">Aggiornato</div>
                    <div className="h6 mb-0">{quote ? updated : "—"}</div>
                  </div>
                </div>
              </div>
              {seriesError && <div className="alert alert-warning mb-3">{seriesError}</div>}
              <div className="p-3 rounded-4 border">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="fw-semibold">Grafico (close)</div>
                  <div className="text-muted small">{series.length ? `${series.length} punti` : "—"}</div>
                </div>
                <div style={{ width: "100%", height: 260 }}>
                  <ResponsiveContainer>
                    <LineChart data={series}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" hide />
                      <YAxis domain={["auto", "auto"]} width={60} tickFormatter={(v) => fmtNum(v)} />
                      <Tooltip
                        formatter={(v) => fmtMoney(v, currency)}
                        labelFormatter={(l) => `Data: ${l}`}
                      />
                      <Line type="monotone" dataKey="close" dot={false} strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              {quote && <div className="text-muted small mt-3">Fonte: Twelve Data · Market open: {String(quote.is_market_open)}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MercatiPage;
