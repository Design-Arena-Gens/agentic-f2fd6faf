export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section anchor">
      <div className="container">
        <h2 className="sectionTitle">{title}</h2>
        <div className="muted" style={{ marginBottom: 10 }}>
          ? {title}
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
          <div className="card" style={{ gridColumn: 'span 12' }}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

