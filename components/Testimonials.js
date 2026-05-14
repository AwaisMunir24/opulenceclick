'use client'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Marcus Whitfield',
    role: 'CEO, TechNova Inc.',
    avatar: 'MW',
    color: '#c8a96e',
    rating: 5,
    text: 'RankForge took our organic traffic from 3,000 to 47,000 monthly visitors in just 8 months. Their link building strategy is unlike anything we\'ve seen. Pure white-hat, completely sustainable. We rank #1 for our 3 main keywords now.',
    metric: '+1,467% Traffic',
  },
  {
    name: 'Sarah Chen',
    role: 'Marketing Director, Verdant Labs',
    avatar: 'SC',
    color: '#6eadc8',
    rating: 5,
    text: 'The on-page audit they delivered identified 84 critical issues we had no idea about. Within 60 days of implementation, our Core Web Vitals turned green and we jumped 40 positions for our primary keyword. Genuinely impressive.',
    metric: '+40 Positions',
  },
  {
    name: 'Jordan Rivers',
    role: 'Founder, Apex Consulting',
    avatar: 'JR',
    color: '#c86e8a',
    rating: 5,
    text: 'We\'ve hired 3 other SEO agencies before RankForge. None of them came close. The quality of links, the transparency of reporting, the speed of results — they\'ve completely transformed our online presence and revenue.',
    metric: '3x Revenue',
  },
  {
    name: 'Elena Vasquez',
    role: 'E-Commerce Lead, NordStyle',
    avatar: 'EV',
    color: '#6ec8a9',
    rating: 5,
    text: 'From 800 organic sessions to 28,000 per month in under a year. Their off-page strategy for our e-commerce store was meticulous. Every backlink was manually vetted. ROI has been absolutely extraordinary.',
    metric: '35x Sessions',
  },
  {
    name: 'David Okonkwo',
    role: 'CTO, Bridgepoint SaaS',
    avatar: 'DO',
    color: '#a96ec8',
    rating: 5,
    text: 'Technical SEO is where they truly shine. They found crawl budget issues, duplicate content problems, and canonicalization errors that were devastating our rankings. Fixed in 2 weeks, results visible in 30 days.',
    metric: '#1 SaaS Keyword',
  },
  {
    name: 'Priya Sharma',
    role: 'Growth Manager, FinFlow',
    avatar: 'PS',
    color: '#c8b46e',
    rating: 5,
    text: 'The digital PR and off-page work they did for our fintech startup earned us coverage in Forbes, TechCrunch, and 40+ industry publications. Our domain rating went from 12 to 61 in 6 months.',
    metric: 'DR 12 → 61',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  const go = (idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => { setActive(idx); setAnimating(false) }, 350)
  }

  useEffect(() => {
    const t = setInterval(() => go((active + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [active])

  const t = testimonials[active]
  const visible = [
    testimonials[(active - 1 + testimonials.length) % testimonials.length],
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
  ]

  return (
    <section style={{
      padding: '120px 0',
      background: 'linear-gradient(180deg, var(--navy) 0%, var(--black) 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative element */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Client Results</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '16px' }}>
            Words From Those<br /><span className="gold-text">Who Ranked</span>
          </h2>
          <p style={{ color: 'rgba(248,247,242,0.5)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            Over 200 businesses have transformed their search visibility with RankForge.
          </p>
        </div>

        {/* Main testimonial */}
        <div style={{
          maxWidth: '780px',
          margin: '0 auto 60px',
          background: 'var(--navy)',
          border: '1px solid rgba(200,169,110,0.2)',
          padding: '48px',
          position: 'relative',
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(10px)' : 'translateY(0)',
          transition: 'all 0.4s ease',
        }}>
          {/* Quote mark */}
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '32px',
            fontFamily: 'Syne',
            fontSize: '6rem',
            fontWeight: 800,
            color: 'rgba(200,169,110,0.08)',
            lineHeight: 1,
            userSelect: 'none',
          }}>"</div>

          {/* Stars */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={t.color}>
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
            ))}
          </div>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: 'rgba(248,247,242,0.8)',
            marginBottom: '32px',
            fontWeight: 300,
            fontStyle: 'italic',
          }}>"{t.text}"</p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${t.color}, ${t.color}66)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: 'var(--black)',
              }}>{t.avatar}</div>
              <div>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem' }}>{t.name}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</div>
              </div>
            </div>

            <div style={{
              background: 'rgba(200,169,110,0.1)',
              border: '1px solid rgba(200,169,110,0.3)',
              color: 'var(--gold)',
              padding: '8px 20px',
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '0.85rem',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
            }}>
              {t.metric}
            </div>
          </div>
        </div>

        {/* Thumbnail row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                background: i === active ? 'rgba(200,169,110,0.1)' : 'transparent',
                border: `1px solid ${i === active ? 'rgba(200,169,110,0.4)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '2px',
                padding: '12px 20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${item.color}, ${item.color}66)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '0.7rem',
                color: 'var(--black)',
              }}>{item.avatar}</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontFamily: 'Syne',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  color: i === active ? 'var(--white)' : 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}>{item.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
