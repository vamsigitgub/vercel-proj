const stack = [
  ['React', 'UI library'],
  ['TypeScript', 'Type-safe JavaScript'],
  ['Vite', 'Build tooling'],
  ['React Router', 'Client-side routing'],
  ['Vercel', 'Deployment platform'],
]

export default function About() {
  return (
    <section className="section page">
      <div className="container narrow">
        <span className="eyebrow">About</span>
        <h1>A simple foundation for your next app.</h1>
        <p className="lead">
          This example keeps the architecture intentionally small while
          demonstrating routing, reusable components, TypeScript, styling,
          and Vercel deployment.
        </p>

        <div className="stack-list">
          {stack.map(([name, description]) => (
            <div className="stack-item" key={name}>
              <strong>{name}</strong>
              <span>{description}</span>
            </div>
          ))}
        </div>

        <div className="callout">
          <strong>Tip:</strong> Replace the pages in <code>src/pages</code>,
          add your own components, and connect your API or backend as your
          project grows.
        </div>
      </div>
    </section>
  )
}