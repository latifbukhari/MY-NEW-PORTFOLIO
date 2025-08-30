export default function Section({ id, title, subtitle, children }: { id: string, title: string, subtitle?: string, children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="mb-10">
          <p className="text-brand-300 uppercase tracking-wider text-xs">{subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
