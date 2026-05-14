'use client'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    client: 'TechNova Inc.',
    niche: 'B2B SaaS',
    duration: '8 months',
    result: '+1,467%',
    resultLabel: 'Organic Traffic',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    tags: ['Link Building', 'On-Page SEO'],
    color: '#c8a96e',
  },
  {
    id: 2,
    client: 'NordStyle',
    niche: 'E-Commerce',
    duration: '11 months',
    result: '35x',
    resultLabel: 'Organic Sessions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    tags: ['Off-Page SEO', 'Technical SEO'],
    color: '#6eadc8',
  },
  {
    id: 3,
    client: 'FinFlow',
    niche: 'FinTech',
    duration: '6 months',
    result: 'DR 12→61',
    resultLabel: 'Domain Authority',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    tags: ['Digital PR', 'Link Building'],
    color: '#c86e8a',
  },
]

export default function FeaturedProjects() {
  return (
    <section style={{
      padding: '120px 0',
      background: 'var(--black)',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div className="section-label">Proven Results</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 800 }}>
              Featured <span className="gold-text">Case Studies</span>
            </h2>
          </div>
          <Link href="/projects" className="btn-outline">
            <span>All Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="proj-grid">
          {projects.map((p, i) => (
            <div key={i} style={{
              background: 'var(--navy)',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              transition: 'transform 0.4s ease, border-color 0.4s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(200,169,110,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              {/* Image */}
              <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={p.image}
                  alt={p.client}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `linear-gradient(to bottom, transparent 40%, ${p.color}33 100%)`,
                }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(5,5,8,0.85)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${p.color}55`,
                  padding: '6px 14px',
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: p.color,
                }}>{p.niche}</div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.1rem', marginBottom: '8px' }}>{p.client}</h3>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'rgba(200,169,110,0.08)',
                      border: '1px solid rgba(200,169,110,0.15)',
                      color: 'var(--text-muted)',
                      padding: '3px 10px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      borderRadius: '2px',
                    }}>{tag}</span>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border)',
                }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Result</div>
                    <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.3rem', color: p.color }}>{p.result}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{p.resultLabel}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '2px' }}>Duration</div>
                    <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.9rem' }}>{p.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
