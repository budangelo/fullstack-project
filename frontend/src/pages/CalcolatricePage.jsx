import { useMemo, useState } from "react";
import "./HomePage.css";

const Calcolatrice = () => {
  const CAPITAL_MIN = 0;
  const CAPITAL_MAX = 1000000;
  const CAPITAL_STEP = 1000;

  const MONTHLY_MIN = 0;
  const MONTHLY_MAX = 100000;
  const MONTHLY_STEP = 100;

  const YEARS_MIN = 1;
  const YEARS_MAX = 60;
  const YEARS_STEP = 1;

  const RATE_MIN = 0;
  const RATE_MAX = 15;
  const RATE_STEP = 0.1;

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const [initialCapital, setInitialCapital] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [years, setYears] = useState(10);
  const [annualRate, setAnnualRate] = useState(7);

  const currency = useMemo(
    () => new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }),
    []
  );

  const results = useMemo(() => {
    const months = years * 12;
    const monthlyRate = (annualRate / 100) / 12;

    let balance = initialCapital;

    for (let i = 0; i < months; i++) {
      balance = balance * (1 + monthlyRate) + monthlyContribution;
    }

    const totalContributed = initialCapital + monthlyContribution * months;
    const growth = balance - totalContributed;

    return {
      finalAmount: balance,
      totalContributed,
      growth,
      months,
    };
  }, [initialCapital, monthlyContribution, years, annualRate]);

  const onNumberChange = (setter, min, max, isInt = false) => (e) => {
    const raw = e.target.value;
    if (raw === "") {
      setter(min);
      return;
    }
    const parsed = isInt ? parseInt(raw, 10) : parseFloat(raw);
    if (Number.isNaN(parsed)) return;
    setter(clamp(parsed, min, max));
  };

  const onRangeChange = (setter, min, max, isInt = false) => (e) => {
    const parsed = isInt ? parseInt(e.target.value, 10) : parseFloat(e.target.value);
    if (Number.isNaN(parsed)) return;
    setter(clamp(parsed, min, max));
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <div className="card rounded-4 shadow-sm border overflow-hidden bubble-card ">
            <div className="card-body p-4 p-md-5">
              <div className="mb-4">
                <h2 className="h3 fw-bold mb-1 title-pg-custom">Calcolatrice</h2>
                <p className="mb-0 bubble-card-p">
                  Simulazione con capitalizzazione mensile e contributo mensile.
                </p>
              </div>
              <div className="row g-5">
                <div className="col-12 col-lg-7">
                  <div className="mb-4">
                    <label className="form-label">Capitale iniziale (€)</label>
                    <input
                      className="form-control w-50"
                      type="number"
                      min={CAPITAL_MIN}
                      max={CAPITAL_MAX}
                      step={CAPITAL_STEP}
                      value={initialCapital}
                      onChange={onNumberChange(setInitialCapital, CAPITAL_MIN, CAPITAL_MAX)}
                    />
                    <input
                      className="form-range mt-2 range-yellow"
                      type="range"
                      min={CAPITAL_MIN}
                      max={CAPITAL_MAX}
                      step={CAPITAL_STEP}
                      value={initialCapital}
                      onChange={onRangeChange(setInitialCapital, CAPITAL_MIN, CAPITAL_MAX)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Contributo mensile (€)</label>
                    <input
                      className="form-control w-50"
                      type="number"
                      min={MONTHLY_MIN}
                      max={MONTHLY_MAX}
                      step={MONTHLY_STEP}
                      value={monthlyContribution}
                      onChange={onNumberChange(setMonthlyContribution, MONTHLY_MIN, MONTHLY_MAX)}
                    />
                    <input
                      className="form-range mt-2"
                      type="range"
                      min={MONTHLY_MIN}
                      max={MONTHLY_MAX}
                      step={MONTHLY_STEP}
                      value={monthlyContribution}
                      onChange={onRangeChange(setMonthlyContribution, MONTHLY_MIN, MONTHLY_MAX)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Anni</label>
                    <input
                      className="form-control w-50"
                      type="number"
                      min={YEARS_MIN}
                      max={YEARS_MAX}
                      step={YEARS_STEP}
                      value={years}
                      onChange={onNumberChange(setYears, YEARS_MIN, YEARS_MAX, true)}
                    />
                    <input
                      className="form-range mt-2"
                      type="range"
                      min={YEARS_MIN}
                      max={YEARS_MAX}
                      step={YEARS_STEP}
                      value={years}
                      onChange={onRangeChange(setYears, YEARS_MIN, YEARS_MAX, true)}
                    />
                  </div>
                  <div className="mb-0">
                    <label className="form-label">Rendimento annuo (%)</label>
                    <input
                      className="form-control w-50"
                      type="number"
                      min={RATE_MIN}
                      max={RATE_MAX}
                      step={RATE_STEP}
                      value={annualRate}
                      onChange={onNumberChange(setAnnualRate, RATE_MIN, RATE_MAX)}
                    />
                    <input
                      className="form-range mt-2"
                      type="range"
                      min={RATE_MIN}
                      max={RATE_MAX}
                      step={RATE_STEP}
                      value={annualRate}
                      onChange={onRangeChange(setAnnualRate, RATE_MIN, RATE_MAX)}
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="d-grid gap-3">
                    <div className="card rounded-4 border">
                      <div className="card-body p-4">
                        <div className="text-muted small mb-1">Valore finale stimato</div>
                        <div className="h3 fw-bold mb-0">{currency.format(results.finalAmount)}</div>
                      </div>
                    </div>
                    <div className="card rounded-4 border">
                      <div className="card-body p-4">
                        <div className="text-muted small mb-1">Totale versato</div>
                        <div className="h4 fw-bold mb-0">{currency.format(results.totalContributed)}</div>
                      </div>
                    </div>
                    <div className="card rounded-4 border">
                      <div className="card-body p-4">
                        <div className="text-muted small mb-1">Crescita (interessi)</div>
                        <div className="h4 fw-bold mb-0">{currency.format(results.growth)}</div>
                      </div>
                    </div>
                    <div className="text-muted small">
                      Periodo: {results.months} mesi · Capitalizzazione: mensile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calcolatrice;
