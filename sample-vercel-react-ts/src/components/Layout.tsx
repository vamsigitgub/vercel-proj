import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>React + TypeScript + Vite</span>
          <span>Ready for Vercel</span>
        </div>
      </footer>
    </div>
  )
}