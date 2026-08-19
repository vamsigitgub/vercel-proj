import { Link } from 'react-router-dom'

const features = [
  {
    icon: '⚡',
    title: 'Fast',
    text: 'Powered by Vite for a fast development and production build experience.',
  },
  {
    icon: '◈',
    title: 'Type Safe',
    text: 'Built with TypeScript so your components and application logic stay predictable.',
  },
  {
    icon: '▲',
    title: 'Vercel Ready',
    text: 'Includes a Vercel configuration for client-side routing and simple deployment.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">React + TypeScript starter</div>
          <h1>Build something great.</h1>
          <p className="hero-copy">
            A clean, production-ready starting point for a React application
            that you can deploy to Vercel in minutes.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/counter">
              Try the counter
            </Link>
            <Link className="button secondary" to="/about">
              Explore the project
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Included</span>
            <h2>Everything you need to start</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}