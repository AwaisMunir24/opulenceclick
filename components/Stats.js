'use client'

const stats = [
  { val: '10K+', label: 'Premium Links Built', icon: '🔗' },
  { val: '500+', label: 'Websites Ranked', icon: '📈' },
  { val: '200+', label: 'Niches Conquered', icon: '🎯' },
  { val: '98%', label: 'Client Retention Rate', icon: '⭐' },
]

export default function Stats() {
  return (
    <section style={{
      padding: '80px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'rgba(200,169,110,0.02)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
        }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '32px 24px',
              textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              position: 'relative',
            }} className="stat-item">
              <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{s.icon}</div>
              <div style={{
                fontFamily: 'Syne',
                fontSize: 'clamp(2rem, 3vw, 3rem)',
                fontWeight: 800,
                marginBottom: '8px',
                background: 'linear-gradient(135deg, #c8a96e, #e8d5a8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{s.val}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-item:nth-child(2) { border-right: none !important; }
          .stat-item:nth-child(1), .stat-item:nth-child(2) { border-bottom: 1px solid var(--border) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .stat-item { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          .stat-item:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  )
}
