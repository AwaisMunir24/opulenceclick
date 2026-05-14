'use client'
import { useState } from 'react'

const services = [
  {
    num: '01',
    title: 'Link Building',
    desc: 'Precision-engineered backlink campaigns on DR 50+ domains. Guest posts, niche edits, digital PR — we build the link profile Google rewards.',
    features: ['Guest Post Outreach', 'Niche Edits', 'Digital PR', 'HARO Link Building', 'Broken Link Building'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'On-Page SEO',
    desc: 'Deep technical audits, content optimization, schema markup, Core Web Vitals — every ranking signal dialed to perfection.',
    features: ['Technical Audit', 'Keyword Mapping', 'Schema Markup', 'Core Web Vitals', 'Content Optimization'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Off-Page SEO',
    desc: 'Brand authority built beyond your website. Social signals, mentions, reviews, and entity building that creates holistic search dominance.',
    features: ['Brand Mentions', 'Social Signals', 'Review Management', 'Entity Building', 'Competitor Analysis'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'SEO Audits',
    desc: '360° website analysis exposing every technical flaw, content gap, and opportunity. A roadmap to rank #1 delivered in 48 hours.',
    features: ['Site Crawl Analysis', 'Competitor Gaps', 'Content Audit', 'Backlink Audit', 'Action Roadmap'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  return (
    <section style={{ padding: '120px 0', background: 'var(--black)', position: 'relative' }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '30%',
        height: '60%',
        background: 'radial-gradient(ellipse, rgba(200,169,110,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="services-grid">

          {/* Left: sticky header */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="section-label">What We Do</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 800, marginBottom: '24px' }}>
              Services That<br /><span className="gold-text">Move Rankings</span>
            </h2>
            <p style={{ color: 'rgba(248,247,242,0.55)', lineHeight: 1.8, marginBottom: '40px', fontWeight: 300, fontSize: '1.05rem' }}>
              Every service is engineered around one outcome: sustainable organic growth that compounds over time and outlasts algorithm updates.
            </p>

            {/* Service tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  style={{
                    background: activeService === i ? 'rgba(200,169,110,0.08)' : 'transparent',
                    border: 'none',
                    borderLeft: `2px solid ${activeService === i ? 'var(--gold)' : 'transparent'}`,
                    padding: '16px 20px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span style={{
                    fontFamily: 'Syne',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: activeService === i ? 'var(--gold)' : 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}>{s.num}</span>
                  <span style={{
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    color: activeService === i ? 'var(--white)' : 'var(--text-muted)',
                    fontSize: '1rem',
                  }}>{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: service cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {services.map((s, i) => (
              <div
                key={i}
                onClick={() => setActiveService(i)}
                style={{
                  background: activeService === i ? 'var(--navy)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${activeService === i ? 'rgba(200,169,110,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '2px',
                  padding: '32px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  transform: activeService === i ? 'translateX(0)' : 'translateX(0)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {activeService === i && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '120px',
                    height: '120px',
                    background: 'radial-gradient(circle, rgba(200,169,110,0.1) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }} />
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ color: activeService === i ? 'var(--gold)' : 'var(--text-muted)', transition: 'color 0.3s ease' }}>
                    {s.icon}
                  </div>
                  <span style={{
                    fontFamily: 'Syne',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: activeService === i ? 'var(--gold)' : 'var(--text-muted)',
                    letterSpacing: '0.1em',
                  }}>{s.num}</span>
                </div>

                <h3 style={{
                  fontFamily: 'Syne',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: activeService === i ? 'var(--white)' : 'rgba(248,247,242,0.7)',
                }}>{s.title}</h3>

                <p style={{
                  color: 'rgba(248,247,242,0.55)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  marginBottom: activeService === i ? '24px' : '0',
                  transition: 'all 0.3s ease',
                }}>{s.desc}</p>

                {activeService === i && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {s.features.map((f, j) => (
                      <span key={j} style={{
                        background: 'rgba(200,169,110,0.1)',
                        border: '1px solid rgba(200,169,110,0.2)',
                        color: 'var(--gold)',
                        padding: '4px 12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        fontFamily: 'DM Sans',
                        borderRadius: '2px',
                      }}>{f}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
