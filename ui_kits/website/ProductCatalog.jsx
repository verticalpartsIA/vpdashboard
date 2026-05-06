/* global React */
const { useState: useStateCat, useEffect: useEffectCat } = React;

const PRODUCTS = [
  { sku: 'VP-ESC-9821-A', name: 'Corrimão de Borracha 30mm', cat: 'Escada Rolante', price: 'R$ 1.240,00', stock: 142, status: 'ok', equip: 'Otis · Schindler · Atlas' },
  { sku: 'VP-ELV-1240-B', name: 'Cabo de Aço 8mm Galvanizado', cat: 'Elevador', price: 'R$ 3.890,00', stock: 38, status: 'low', equip: 'ThyssenKrupp · Atlas' },
  { sku: 'VP-ESC-3320-A', name: 'Degrau Alumínio Anti-derrapante', cat: 'Escada Rolante', price: 'R$ 2.450,00', stock: 0, status: 'out', equip: 'Otis · Schindler' },
  { sku: 'VP-ELV-7782-C', name: 'Botoeira Cabine LED Inox', cat: 'Elevador', price: 'R$ 890,00', stock: 220, status: 'ok', equip: 'Universal' },
  { sku: 'VP-EST-5510-A', name: 'Rolete Polia 120mm', cat: 'Esteira', price: 'R$ 540,00', stock: 84, status: 'ok', equip: 'Mitsubishi · ThyssenKrupp' },
  { sku: 'VP-ELV-9001-D', name: 'Painel de Comando 24V DC', cat: 'Elevador', price: 'R$ 5.620,00', stock: 12, status: 'low', equip: 'Atlas · Schindler' },
  { sku: 'VP-ESC-6612-B', name: 'Sensor Óptico de Segurança', cat: 'Escada Rolante', price: 'R$ 1.180,00', stock: 96, status: 'ok', equip: 'Otis' },
  { sku: 'VP-ELV-2244-A', name: 'Motor Tração 7.5kW Trifásico', cat: 'Elevador', price: 'R$ 18.400,00', stock: 5, status: 'low', equip: 'Atlas' },
];

function ProductCatalog({ go }) {
  const [cat, setCat] = useStateCat('Todos');
  const [q, setQ] = useStateCat('');
  const cats = ['Todos', 'Elevador', 'Escada Rolante', 'Esteira'];

  const filtered = PRODUCTS.filter(p =>
    (cat === 'Todos' || p.cat === cat) &&
    (q === '' || (p.name + p.sku).toLowerCase().includes(q.toLowerCase()))
  );

  useEffectCat(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <section className="vp-page" data-screen-label="02 Catalog">
      <div className="vp-page__head">
        <span className="vp-eyebrow vp-eyebrow--accent">Catálogo Industrial · 4.231 SKUs</span>
        <h1 className="vp-h1">Componentes Verticais</h1>
        <p className="vp-body" style={{ maxWidth: 640 }}>
          Filtre por equipamento, busque por SKU ou navegue pelas categorias. Disponibilidade verificada em tempo real.
        </p>
      </div>

      <div className="vp-toolbar">
        <div className="vp-search">
          <i data-lucide="search" style={{ width: 16, height: 16 }}></i>
          <input
            placeholder="Buscar por SKU ou nome da peça…"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>
        <div className="vp-tabs">
          {cats.map(c => (
            <button
              key={c}
              className={'vp-tab ' + (cat === c ? 'is-active' : '')}
              onClick={() => setCat(c)}
            >{c}</button>
          ))}
        </div>
      </div>

      <div className="vp-grid">
        {filtered.map(p => (
          <article className="vp-product" key={p.sku} onClick={() => go('product', p)}>
            <div className="vp-product__thumb">
              <i data-lucide="cog" style={{ width: 56, height: 56, color: '#808080' }}></i>
              <span className={'vp-status vp-status--' + p.status}>
                <span className="vp-dot" />
                {p.status === 'ok' ? 'Em estoque' : p.status === 'low' ? 'Reposição' : 'Esgotado'}
              </span>
            </div>
            <div className="vp-product__body">
              <span className="vp-eyebrow">{p.cat}</span>
              <h3 className="vp-h4">{p.name}</h3>
              <div className="vp-product__meta vp-mono">{p.sku}</div>
              <div className="vp-product__compat">{p.equip}</div>
              <div className="vp-product__foot">
                <span className="vp-product__price">{p.price}</span>
                <span className="vp-product__cta">Ver detalhes <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i></span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
window.ProductCatalog = ProductCatalog;
window.PRODUCTS = PRODUCTS;
