/* global React */
function Hero({ go }) {
  return (
    <section className="vp-hero" data-screen-label="01 Hero">
      <div className="vp-hero__bg" />
      <div className="vp-hero__inner">
        <div className="vp-hero__copy">
          <span className="vp-badge vp-badge--yellow">
            <span className="vp-stripe" /> Transporte vertical · indústria
          </span>
          <h1 className="vp-display">
            Peças que <br/>
            <span className="vp-yellow">não param</span>
          </h1>
          <p className="vp-hero__lede">
            Mais de <b>11 anos</b> abastecendo elevadores, escadas rolantes e esteiras com
            componentes técnicos. Estoque com mais de <b>4 mil peças</b> catalogadas, prontas para entrega.
          </p>
          <div className="vp-hero__actions">
            <button className="vp-btn vp-btn--primary" onClick={() => go('catalog')}>
              Acessar Catálogo
              <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
            </button>
            <button className="vp-btn vp-btn--outline-light" onClick={() => go('contato')}>
              Solicitar Orçamento
            </button>
          </div>

          <div className="vp-stats">
            <div><b>+11</b><span>anos de mercado</span></div>
            <div className="vp-stats__div" />
            <div><b>4.000+</b><span>peças em estoque</span></div>
            <div className="vp-stats__div" />
            <div><b>24h</b><span>resposta técnica</span></div>
          </div>
        </div>

        <div className="vp-hero__visual">
          <div className="vp-glass">
            <img src="../../assets/dashboard_mockup.webp" alt="Painel Vertical Parts" />
          </div>
          <div className="vp-floating vp-floating--top">
            <div className="vp-floating__ico vp-floating__ico--green">
              <i data-lucide="check" style={{ width: 18, height: 18 }}></i>
            </div>
            <div>
              <div className="vp-floating__lbl">Em estoque</div>
              <div className="vp-floating__val">4.231 SKUs</div>
            </div>
          </div>
          <div className="vp-floating vp-floating--bot">
            <div className="vp-floating__ico vp-floating__ico--yellow">
              <i data-lucide="package" style={{ width: 18, height: 18 }}></i>
            </div>
            <div>
              <div className="vp-floating__lbl">Pedidos hoje</div>
              <div className="vp-floating__val">+124</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
