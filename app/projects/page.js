'use client'
import { useState } from 'react'
import Link from 'next/link'

const allProjects = [
  {
    id: 1,
    client: 'TechNova Inc.',
    niche: 'B2B SaaS',
    service: 'Link Building',
    duration: '8 months',
    result: '+1,467%',
    resultLabel: 'Organic Traffic',
    from: '3,200',
    to: '50,000',
    metric: 'Monthly Visitors',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
    tags: ['Link Building', 'On-Page SEO'],
    color: '#c8a96e',
    dr: '71',
    links: '847',
    keywords: '2,341',
    desc: 'Comprehensive link building and on-page optimization for a B2B SaaS platform. We secured placements on 200+ industry publications and optimized 140 pages.',
  },
  {
    id: 2,
    client: 'NordStyle',
    niche: 'E-Commerce',
    service: 'Off-Page SEO',
    duration: '11 months',
    result: '35x',
    resultLabel: 'Organic Sessions',
    from: '800',
    to: '28,000',
    metric: 'Monthly Sessions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    tags: ['Off-Page SEO', 'Technical SEO'],
    color: '#6eadc8',
    dr: '58',
    links: '1,240',
    keywords: '4,890',
    desc: 'Full technical SEO overhaul combined with aggressive off-page strategy for a Scandinavian fashion e-commerce brand entering the US market.',
  },
  {
    id: 3,
    client: 'FinFlow',
    niche: 'FinTech',
    service: 'Digital PR',
    duration: '6 months',
    result: 'DR 12→61',
    resultLabel: 'Domain Authority',
    from: '12',
    to: '61',
    metric: 'Domain Rating',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80',
    tags: ['Digital PR', 'Link Building'],
    color: '#c86e8a',
    dr: '61',
    links: '432',
    keywords: '1,204',
    desc: 'Digital PR campaign targeting top-tier financial publications for a Series-A fintech startup. Coverage in Forbes, TechCrunch, and 40+ industry outlets.',
  },
  {
    id: 4,
    client: 'Apex Consulting',
    niche: 'Consulting',
    service: 'On-Page SEO',
    duration: '5 months',
    result: '#1',
    resultLabel: 'Primary Keyword',
    from: 'Pg. 4',
    to: '#1',
    metric: 'SERP Position',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80',
    tags: ['On-Page SEO', 'Content Strategy'],
    color: '#6ec8a9',
    dr: '64',
    links: '621',
    keywords: '3,102',
    desc: 'On-page SEO and content strategy for a management consulting firm. Targeted 45 high-value informational keywords with comprehensive content hubs.',
  },
  {
    id: 5,
    client: 'Bridgepoint SaaS',
    niche: 'Technology',
    service: 'Technical SEO',
    duration: '3 months',
    result: '300%',
    resultLabel: 'Crawl Efficiency',
    from: '120ms',
    to: '28ms',
    metric: 'Page Speed',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
    tags: ['Technical SEO', 'Core Web Vitals'],
    color: '#a96ec8',
    dr: '55',
    links: '389',
    keywords: '1,876',
    desc: 'Deep technical audit uncovering 84 critical issues. Fixed crawl budget waste, duplicate content, and Core Web Vitals that were tanking their rankings.',
  },
  {
    id: 6,
    client: 'Verdant Labs',
    niche: 'Health & Wellness',
    service: 'Full SEO',
    duration: '14 months',
    result: '12K→180K',
    resultLabel: 'Monthly Visitors',
    from: '12,000',
    to: '180,000',
    metric: 'Monthly Visitors',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80',
    tags: ['Link Building', 'On-Page SEO', 'Off-Page SEO'],
    color: '#c8b46e',
    dr: '76',
    links: '2,140',
    keywords: '8,450',
    desc: 'Full 360° SEO engagement for a health tech company. Every service in our arsenal deployed. Now generating $2.4M in attributable organic revenue annually.',
  },
]

const filters = ['All', 'Link Building', 'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Digital PR']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.tags.some(t => t === activeFilter))

  return (
    <>
      {/* Hero */}
      <section style={{
        padding: '160px 0 100px',
        background: 'var(--black)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(200,169,110,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px' }}>Case Studies</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-0.03em' }}>
            Results We've<br /><span className="gold-text">Engineered</span>
          </h1>
          <p style={{ color: 'rgba(248,247,242,0.55)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto', fontWeight: 300 }}>
            Real clients. Real rankings. Real revenue. Every case study shows the exact strategy, timeline, and results achieved.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: 'var(--navy)', borderBottom: '1px solid var(--border)', padding: '0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: `2px solid ${activeFilter === f ? 'var(--gold)' : 'transparent'}`,
                  color: activeFilter === f ? 'var(--gold)' : 'var(--text-muted)',
                  padding: '20px 24px',
                  fontFamily: 'DM Sans',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.02em',
                }}
              >{f}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section style={{ padding: '80px 0 120px', background: 'var(--black)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }} className="all-proj-grid">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                style={{
                  background: 'var(--navy)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = `${p.color}55` }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                {/* Image */}
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={p.image} alt={p.client} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to bottom, rgba(5,5,8,0.1) 0%, rgba(5,5,8,0.7) 100%)`,
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(248,247,242,0.6)', marginBottom: '4px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.niche}</div>
                      <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.2rem' }}>{p.client}</div>
                    </div>
                    <div style={{
                      background: p.color,
                      color: 'var(--black)',
                      padding: '6px 12px',
                      fontFamily: 'Syne',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                    }}>{p.result}</div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '24px' }}>
                  <p style={{ color: 'rgba(248,247,242,0.55)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '20px', fontWeight: 300 }}>
                    {p.desc}
                  </p>

                  {/* Mini metrics */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
                    {[
                      { label: 'DR', val: p.dr },
                      { label: 'Links', val: p.links },
                      { label: 'Keywords', val: p.keywords },
                    ].map((m, j) => (
                      <div key={j} style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid var(--border)',
                        padding: '10px',
                        textAlign: 'center',
                        borderRadius: '2px',
                      }}>
                        <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.95rem', color: p.color }}>{m.val}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{
                        background: 'rgba(200,169,110,0.08)',
                        border: '1px solid rgba(200,169,110,0.15)',
                        color: 'var(--gold)',
                        padding: '3px 10px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        borderRadius: '2px',
                      }}>{tag}</span>
                    ))}
                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center' }}>{p.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5,5,8,0.92)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--navy)',
              border: `1px solid ${selectedProject.color}44`,
              maxWidth: '680px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            <img src={selectedProject.image} alt={selectedProject.client} style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(5,5,8,0.8)',
                border: '1px solid var(--border)',
                color: 'var(--white)',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.2rem',
              }}
            >×</button>

            <div style={{ padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', letterSpacing: '0.1em' }}>{selectedProject.niche} · {selectedProject.duration}</div>
                  <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.8rem' }}>{selectedProject.client}</h2>
                </div>
                <div style={{
                  background: selectedProject.color,
                  color: 'var(--black)',
                  padding: '10px 20px',
                  fontFamily: 'Syne',
                  fontWeight: 800,
                  fontSize: '1rem',
                  clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                }}>{selectedProject.result} {selectedProject.resultLabel}</div>
              </div>

              <p style={{ color: 'rgba(248,247,242,0.65)', lineHeight: 1.8, marginBottom: '28px', fontWeight: 300 }}>{selectedProject.desc}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                {[
                  { label: 'Domain Rating', val: selectedProject.dr },
                  { label: 'Links Built', val: selectedProject.links },
                  { label: 'Keywords Ranked', val: selectedProject.keywords },
                ].map((m, j) => (
                  <div key={j} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                    padding: '20px',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.5rem', color: selectedProject.color, marginBottom: '4px' }}>{m.val}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setSelectedProject(null)}>
                <span>Get Similar Results</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 900px) {
          .all-proj-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .all-proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
