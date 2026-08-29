import { NavLink } from 'react-router-dom';

const NAV = [
  { to: '/diagnostico', label: 'Diagnóstico' },
  { to: '/biblioteca', label: 'Biblioteca' },
  { to: '/calculadora', label: 'Calculadora' },
  { to: '/simulador', label: 'Simulador' },
  { to: '/app', label: 'App' },
  { to: '/conhecimento', label: 'Conhecimento' },
];

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="wrap topbar__inner">
        <NavLink to="/" className="brand" aria-label="ECOMNIX — página inicial">
          <span className="brand__mark" aria-hidden="true" />
          ECOMNIX
        </NavLink>
        <nav className="topbar__nav" aria-label="Navegação principal">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {n.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
