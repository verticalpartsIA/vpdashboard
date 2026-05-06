/* global React */
function Footer() {
  return (
    <footer className="vp-footer" data-screen-label="Footer">
      <div className="vp-footer__inner">
        <div className="vp-footer__brand">
          <img src="../../assets/logo-verticalparts-white.png" alt="Vertical Parts" />
          <p>Excelência em peças e componentes para transporte vertical. Indústria, manutenção e modernização.</p>
          <div className="vp-footer__contact vp-mono">
            <span><i data-lucide="phone" style={{ width: 14, height: 14 }}></i> +55 11 4000-1234</span>
            <span><i data-lucide="mail" style={{ width: 14, height: 14 }}></i> contato@verticalparts.com.br</span>
          </div>
        </div>
        <div>
          <h4>Produtos</h4>
          <ul><li><a>Elevadores</a></li><li><a>Escadas Rolantes</a></li><li><a>Esteiras</a></li><li><a>Modernização</a></li></ul>
        </div>
        <div>
          <h4>Empresa</h4>
          <ul><li><a>Sobre nós</a></li><li><a>Engenharia</a></li><li><a>Carreiras</a></li><li><a>Notícias</a></li></ul>
        </div>
        <div>
          <h4>Suporte</h4>
          <ul><li><a>Área do Cliente</a></li><li><a>Documentação técnica</a></li><li><a>Garantia</a></li><li><a>Contato</a></li></ul>
        </div>
      </div>
      <div className="vp-footer__bottom">
        <span>© 2026 Vertical Parts · Todos os direitos reservados.</span>
        <span className="vp-mono">CNPJ 11.222.333/0001-44</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
