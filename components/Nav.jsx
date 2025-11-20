export default function Nav() {
  const links = [
    { href: '#intro', label: 'Inicio' },
    { href: '#cronologia', label: 'Cronolog?a' },
    { href: '#tecnologia', label: 'Tecnolog?a' },
    { href: '#riesgos', label: 'Riesgos' },
    { href: '#ficcion', label: 'Ficci?n vs Realidad' },
    { href: '#faq', label: 'FAQ' }
  ];

  return (
    <nav className="nav">
      <div className="navInner">
        <div className="brand">
          Marte<span className="brandAccent">?</span>Humano
        </div>
        <div className="navLinks">
          {links.map((l) => (
            <a key={l.href} className="navLink" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

