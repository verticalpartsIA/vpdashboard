/* global React */
const { useState: useStateClient, useEffect: useEffectClient } = React;

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useStateClient('joao.silva@elevadores.com.br');
  const [pwd, setPwd] = useStateClient('••••••••');
  useEffectClient(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div className="vp-login" data-screen-label="04 Login">
      <div className="vp-login__bg" />
      <div className="vp-login__card">
        <div className="vp-login__logo">
          <img src="../../assets/logo-verticalparts-white.png" alt="Vertical Parts" />
        </div>
        <div className="vp-login__title">
          <span className="vp-eyebrow" style={{ color: '#F5C400' }}>Área do Cliente</span>
          <h1 className="vp-h2" style={{ color: '#fff', marginTop: 6 }}>VP CLICK</h1>
          <p style={{ color: '#A0A0A0', fontSize: 13, marginTop: 4 }}>Sistema de gerenciamento Vertical Parts</p>
        </div>
        <form onSubmit={e => { e.preventDefault(); onLogin(); }}>
          <label className="vp-login__lbl">Email</label>
          <input className="vp-login__input" value={email} onChange={e => setEmail(e.target.value)} />
          <label className="vp-login__lbl">Senha</label>
          <input className="vp-login__input" type="password" value={pwd} onChange={e => setPwd(e.target.value)} />
          <button className="vp-btn vp-btn--primary vp-btn--block" type="submit">Entrar</button>
          <a className="vp-login__forgot">Esqueci minha senha</a>
        </form>
        <div className="vp-login__foot">VerticalParts © 2026 · VP Click v2.0</div>
      </div>
    </div>
  );
}

function ClientArea({ go }) {
  useEffectClient(() => { window.lucide && window.lucide.createIcons(); });
  const orders = [
    { id: '#VP-2026-08821', date: '24 abr 2026', status: 'shipped', items: 4, total: 'R$ 8.420,00' },
    { id: '#VP-2026-08754', date: '21 abr 2026', status: 'processing', items: 2, total: 'R$ 1.890,00' },
    { id: '#VP-2026-08641', date: '17 abr 2026', status: 'delivered', items: 12, total: 'R$ 24.180,00' },
    { id: '#VP-2026-08503', date: '11 abr 2026', status: 'delivered', items: 1, total: 'R$ 540,00' },
  ];
  const statusMap = {
    shipped: { lbl: 'Em transporte', cls: 'low' },
    processing: { lbl: 'Em separação', cls: 'low' },
    delivered: { lbl: 'Entregue', cls: 'ok' },
  };
  return (
    <section className="vp-page" data-screen-label="05 Client Area">
      <div className="vp-client__head">
        <div>
          <span className="vp-eyebrow vp-eyebrow--accent">Olá, João</span>
          <h1 className="vp-h1" style={{ marginTop: 6 }}>Painel do Cliente</h1>
          <p className="vp-body" style={{ marginTop: 6, color: '#4A4A4A' }}>
            Manutenções Silva Ltda · CNPJ 12.345.678/0001-90
          </p>
        </div>
        <button className="vp-btn vp-btn--primary">
          <i data-lucide="plus" style={{ width: 16, height: 16 }}></i>
          Nova Requisição
        </button>
      </div>

      <div className="vp-kpi-row">
        <div className="vp-kpi">
          <span className="vp-eyebrow">Pedidos abertos</span>
          <b className="vp-tabular">06</b>
          <span className="vp-kpi__delta vp-kpi__delta--up">+2 esta semana</span>
        </div>
        <div className="vp-kpi">
          <span className="vp-eyebrow">A faturar</span>
          <b className="vp-tabular">R$ 18.420</b>
          <span className="vp-kpi__delta">Vencimento 30 abr</span>
        </div>
        <div className="vp-kpi">
          <span className="vp-eyebrow">Histórico 12 meses</span>
          <b className="vp-tabular">R$ 412k</b>
          <span className="vp-kpi__delta vp-kpi__delta--up">+18,4% vs ano anterior</span>
        </div>
        <div className="vp-kpi vp-kpi--accent">
          <span className="vp-eyebrow" style={{ color: '#000' }}>Crédito disponível</span>
          <b className="vp-tabular">R$ 50.000</b>
          <span className="vp-kpi__delta" style={{ color: '#000' }}>Linha pré-aprovada</span>
        </div>
      </div>

      <div className="vp-orders">
        <div className="vp-orders__head">
          <h2 className="vp-h3">Pedidos recentes</h2>
          <a className="vp-link">Ver todos →</a>
        </div>
        <table className="vp-table">
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Data</th>
              <th>Itens</th>
              <th>Total</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td className="vp-mono">{o.id}</td>
                <td>{o.date}</td>
                <td className="vp-tabular">{o.items}</td>
                <td className="vp-tabular" style={{ fontWeight: 700 }}>{o.total}</td>
                <td><span className={'vp-status vp-status--' + statusMap[o.status].cls}><span className="vp-dot" />{statusMap[o.status].lbl}</span></td>
                <td><a className="vp-link">Detalhes</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

window.LoginScreen = LoginScreen;
window.ClientArea = ClientArea;
