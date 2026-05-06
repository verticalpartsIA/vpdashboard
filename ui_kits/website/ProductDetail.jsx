/* global React */
const { useEffect: useEffectProd } = React;

function ProductDetail({ product, go }) {
  useEffectProd(() => { window.lucide && window.lucide.createIcons(); });
  if (!product) { go('catalog'); return null; }
  const p = product;
  return (
    <section className="vp-page" data-screen-label="03 Product Detail">
      <div className="vp-crumb">
        <a onClick={() => go('home')}>início</a>
        <span>/</span>
        <a onClick={() => go('catalog')}>catálogo</a>
        <span>/</span>
        <span className="is-current">{p.cat.toLowerCase()}</span>
      </div>

      <div className="vp-detail">
        <div className="vp-detail__media">
          <div className="vp-detail__hero">
            <i data-lucide="cog" style={{ width: 140, height: 140, color: '#808080' }}></i>
            <span className={'vp-status vp-status--' + p.status}>
              <span className="vp-dot" />
              {p.status === 'ok' ? 'Em estoque' : p.status === 'low' ? 'Reposição' : 'Esgotado'}
            </span>
          </div>
          <div className="vp-detail__thumbs">
            {[0,1,2,3].map(i => (
              <div key={i} className={'vp-detail__thumb ' + (i===0?'is-active':'')}>
                <i data-lucide="cog" style={{ width: 28, height: 28, color: '#A0A0A0' }}></i>
              </div>
            ))}
          </div>
        </div>

        <div className="vp-detail__info">
          <span className="vp-eyebrow vp-eyebrow--accent">{p.cat}</span>
          <h1 className="vp-h1" style={{ marginTop: 8 }}>{p.name}</h1>
          <div className="vp-mono" style={{ color: '#808080', marginTop: 10 }}>SKU {p.sku}</div>

          <div className="vp-detail__price">
            <span className="vp-eyebrow">A partir de</span>
            <div className="vp-detail__price-val">{p.price}</div>
          </div>

          <div className="vp-spec">
            <div><span className="vp-eyebrow">Compatibilidade</span><b>{p.equip}</b></div>
            <div><span className="vp-eyebrow">Estoque atual</span><b className="vp-mono">{p.stock} unidades</b></div>
            <div><span className="vp-eyebrow">Garantia</span><b>12 meses</b></div>
            <div><span className="vp-eyebrow">Entrega</span><b>2–5 dias úteis</b></div>
          </div>

          <div className="vp-detail__cta">
            <button className="vp-btn vp-btn--primary">
              Solicitar Orçamento
              <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
            </button>
            <button className="vp-btn vp-btn--outline">
              <i data-lucide="phone" style={{ width: 16, height: 16 }}></i>
              Falar com Engenharia
            </button>
          </div>

          <div className="vp-tech">
            <span className="vp-eyebrow">Especificação técnica</span>
            <ul>
              <li><span>Material</span><span>Aço galvanizado · borracha vulcanizada</span></li>
              <li><span>Tensão nominal</span><span className="vp-mono">24V DC</span></li>
              <li><span>Diâmetro</span><span className="vp-mono">⌀ 30 mm</span></li>
              <li><span>Grau de proteção</span><span className="vp-mono">IP54</span></li>
              <li><span>Norma</span><span>NBR NM 207 · EN 115-1</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ProductDetail = ProductDetail;
