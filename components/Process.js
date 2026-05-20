'use client'
const steps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'We start with a comprehensive analysis of your current rankings, backlink profile, technical health, and competitor landscape.',
    duration: 'Day 1–2',
  },
  {
    num: '02',
    title: 'Strategy Blueprint',
    desc: 'Custom roadmap built specifically for your niche, goals, and budget. No templates, no cookie-cutter plans.',
    duration: 'Day 3–5',
  },
  {
    num: '03',
    title: 'Execution & Outreach',
    desc: 'Our team begins building links, optimizing pages, and implementing every item on the roadmap with daily tracking.',
    duration: 'Ongoing',
  },
  {
    num: '04',
    title: 'Audit & Growth Gap  ',
    desc: 'Monthly reports showing every movement. Rankings up? We double down. We adjust strategy dynamically based on data.',
    duration: 'Monthly',
  },
]

export default function Process() {
  return (
    <section style={{
      padding: '120px 0',
      background: 'var(--navy)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Right fade */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '40%',
        background: 'radial-gradient(ellipse at right center, rgba(200,169,110,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px' }}>
            Our Proven <span className="gold-text">4-Step Process</span>
          </h2>
          <p style={{ color: 'rgba(248,247,242,0.5)', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            Repeatable, transparent, data-driven. This process has ranked 500+ websites.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
          position: 'relative',
        }} className="process-grid">
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '12.5%',
            right: '12.5%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.4), transparent)',
          }} className="process-line" />

          {steps.map((step, i) => (
            <div key={i} style={{
              padding: '0 24px',
              borderRight: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
              position: 'relative',
            }} className="process-step">
              {/* Circle */}
              <div style={{
                width: '56px',
                height: '56px',
                border: '1px solid rgba(200,169,110,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px',
                position: 'relative',
                background: 'var(--navy)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                background: 'linear-gradient(135deg, rgba(200,169,110,0.15), rgba(200,169,110,0.05))',
              }}>
                <span style={{
                  fontFamily: 'Syne',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  color: 'var(--gold)',
                }}>{step.num}</span>
              </div>

              <div style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '12px',
              }}>{step.duration}</div>

              <h3 style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '1.1rem',
                marginBottom: '12px',
              }}>{step.title}</h3>

              <p style={{
                color: 'rgba(248,247,242,0.5)',
                fontSize: '0.88rem',
                lineHeight: 1.7,
                fontWeight: 300,
              }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .process-step { border-right: none !important; padding: 0 !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
