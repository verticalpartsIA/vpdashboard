/* global React */
const { useState } = React;

function Nav({ current, go }) {
  const links = [
    { id: 'home', label: 'Início' },
    { id: 'catalog', label: 'Catálogo' },
    { id: 'equipamentos', label: 'Equipamentos' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' },
  ];
  return (
    <nav className="vp-nav" data-screen-label="Top Nav">
      <div className="vp-nav__inner">
        <a className="vp-nav__brand" onClick={() => go('home')}>
          <img src="../../assets/logo-verticalparts-white.png" alt="Vertical Parts" />
        </a>
        <ul className="vp-nav__links">
          {links.map(l => (
            <li key={l.id}>
              <a
                className={current === l.id ? 'is-active' : ''}
                onClick={() => go(l.id)}
              >{l.label}</a>
            </li>
          ))}
        </ul>
        <a className="vp-btn vp-btn--primary vp-btn--sm" onClick={() => go('client')}>
          Área do Cliente
          <i data-lucide="arrow-right" style={{ width: 14, height: 14 }}></i>
        </a>
      </div>
    </nav>
  );
}

window.Nav = Nav;
