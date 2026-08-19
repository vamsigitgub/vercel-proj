import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/counter', label: 'Counter', end: false },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <NavLink to="/" className="brand">
          <span className="brand-mark">V</span>
          <span>Vercel Starter</span>
        </NavLink>

        <nav aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}