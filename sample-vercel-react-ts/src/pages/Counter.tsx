import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="section page">
      <div className="container counter-layout">
        <div>
          <span className="eyebrow">Interactive example</span>
          <h1>TypeScript Counter</h1>
          <p className="lead">
            A tiny example showing React state with full TypeScript support.
          </p>
        </div>

        <div className="counter-card">
          <span className="counter-label">Current value</span>
          <output className="counter-value" aria-live="polite">
            {count}
          </output>
          <div className="counter-actions">
            <button className="button secondary" onClick={() => setCount(count - 1)}>
              −
            </button>
            <button className="button primary" onClick={() => setCount(0)}>
              Reset
            </button>
            <button className="button secondary" onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}