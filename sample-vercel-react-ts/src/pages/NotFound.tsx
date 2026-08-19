import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section page">
      <div className="container narrow center">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="lead">The page you requested does not exist.</p>
        <Link className="button primary" to="/">
          Back home
        </Link>
      </div>
    </section>
  )
}