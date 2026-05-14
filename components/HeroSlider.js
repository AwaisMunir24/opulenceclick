'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    tag: 'Link Building Excellence',
    headline: 'Build Authority',
    highlight: 'That Ranks',
    sub: 'Premium white-hat link building from DR 50+ domains. We place your brand on the publications that matter, driving lasting authority and organic traffic.',
    stat1: { val: '10K+', label: 'Links Built' },
    stat2: { val: 'DR 70+', label: 'Avg Domain Rating' },
    stat3: { val: '98%', label: 'Client Retention' },
    accent: '#c8a96e',
    bg: 'radial-gradient(ellipse at 70% 50%, rgba(200,169,110,0.08) 0%, transparent 60%)',
  },
  {
    tag: 'On-Page SEO',
    headline: 'Optimize Every',
    highlight: 'Element Precisely',
    sub: 'Technical excellence meets content mastery. Our on-page SEO transforms your website into a search engine magnet with surgical precision.',
    stat1: { val: '300%', label: 'Avg Traffic Lift' },
    stat2: { val: '48hrs', label: 'Audit Delivery' },
    stat3: { val: '500+', label: 'Sites Optimized' },
    accent: '#6eadc8',
    bg: 'radial-gradient(ellipse at 30% 50%, rgba(110,173,200,0.08) 0%, transparent 60%)',
  },
  {
    tag: 'Off-Page SEO',
    headline: 'Dominate Your',
    highlight: 'Niche Online',
    sub: 'Brand mentions, digital PR, social signals — we orchestrate your entire off-page presence to build the kind of authority Google can\'t ignore.',
    stat1: { val: '#1', label: 'Rankings Achieved' },
    stat2: { val: '200+', label: 'Niches Mastered' },
    stat3: { val: '12M+', label: 'Organic Reach' },
    accent: '#c86e8a',
    bg: 'radial-gradient(ellipse at 50% 30%, rgba(200,110,138,0.08) 0%, transparent 60%)',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goTo = useCallback((idx) => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(idx)
      setTransitioning(false)
    }, 400)
  }, [transitioning])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--black)',
    }}>
      {/* Animated background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: slide.bg,
        transition: 'background 0.8s ease',
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Large number background */}
      <div style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        fontFamily: 'Syne',
        fontSize: 'clamp(160px, 25vw, 380px)',
        fontWeight: 800,
        color: 'rgba(200,169,110,0.03)',
        lineHeight: 1,
        userSelect: 'none',
        letterSpacing: '-0.05em',
      }}>
        {String(current + 1).padStart(2, '0')}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left content */}
          <div style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'translateY(20px)' : 'translateY(0)',
            transition: 'all 0.5s ease',
          }}>
            <div className="section-label" style={{ color: slide.accent, marginBottom: '24px' }}>
              <span style={{ width: 32, height: 1, background: slide.accent, display: 'block' }} />
              {slide.tag}
            </div>

            <h1 style={{
              fontSize: 'clamp(2.8rem, 5vw, 5rem)',
              fontWeight: 800,
              marginBottom: '8px',
              letterSpacing: '-0.03em',
            }}>
              {slide.headline}
            </h1>
            <h1 style={{
              fontSize: 'clamp(2.8rem, 5vw, 5rem)',
              fontWeight: 800,
              marginBottom: '28px',
              letterSpacing: '-0.03em',
              background: `linear-gradient(135deg, ${slide.accent} 0%, ${slide.accent}99 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {slide.highlight}
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: 'rgba(248,247,242,0.65)',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '480px',
              fontWeight: 300,
            }}>
              {slide.sub}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">
                <span>Start Ranking Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/projects" className="btn-outline">
                <span>View Results</span>
              </Link>
            </div>

            {/* Slide stats */}
            <div style={{
              display: 'flex',
              gap: '32px',
              marginTop: '56px',
              paddingTop: '40px',
              borderTop: '1px solid rgba(200,169,110,0.15)',
              flexWrap: 'wrap',
            }}>
              {[slide.stat1, slide.stat2, slide.stat3].map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: 'Syne',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: slide.accent,
                    letterSpacing: '-0.02em',
                  }}>{s.val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div style={{
            position: 'relative',
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'scale(0.95)' : 'scale(1)',
            transition: 'all 0.5s ease',
          }} className="hero-visual">
            <div style={{
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: '4px',
              background: 'var(--navy)',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Fake analytics dashboard */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '0.9rem' }}>Organic Traffic</span>
                  <span style={{
                    background: 'rgba(110,200,110,0.15)',
                    color: '#6ec86e',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}>↑ +247%</span>
                </div>

                {/* Chart bars */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '120px', marginBottom: '20px' }}>
                  {[35, 42, 38, 55, 48, 70, 65, 82, 78, 95, 88, 100].map((h, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                      <div style={{
                        height: `${h}%`,
                        background: i >= 9
                          ? `linear-gradient(to top, ${slide.accent}, ${slide.accent}88)`
                          : `linear-gradient(to top, rgba(200,169,110,0.2), rgba(200,169,110,0.05))`,
                        borderRadius: '3px 3px 0 0',
                        transition: 'height 0.3s ease',
                      }} />
                    </div>
                  ))}
                </div>

                {/* Metrics row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {[
                    { label: 'Keywords', val: '2,847', icon: '🎯' },
                    { label: 'Backlinks', val: '12.4K', icon: '🔗' },
                    { label: 'DR Score', val: '74', icon: '⭐' },
                  ].map((m, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(200,169,110,0.1)',
                      borderRadius: '6px',
                      padding: '12px',
                    }}>
                      <div style={{ fontSize: '1rem', marginBottom: '4px' }}>{m.icon}</div>
                      <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', color: slide.accent }}>{m.val}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: 'var(--gold)',
                color: 'var(--black)',
                padding: '8px 16px',
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '0.75rem',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                animation: 'glow 3s ease infinite',
              }}>
                LIVE RESULTS
              </div>
            </div>

            {/* Decorative corner */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              width: '80px',
              height: '80px',
              border: `2px solid ${slide.accent}`,
              borderBottom: 'none',
              borderLeft: 'none',
              opacity: 0.5,
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-16px',
              left: '-16px',
              width: '80px',
              height: '80px',
              border: `2px solid ${slide.accent}`,
              borderTop: 'none',
              borderRight: 'none',
              opacity: 0.5,
            }} />
          </div>
        </div>

        {/* Slide controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginTop: '60px',
        }}>
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 0',
                color: i === current ? s.accent : 'var(--text-muted)',
                transition: 'color 0.3s ease',
              }}
            >
              <div style={{
                width: i === current ? '40px' : '16px',
                height: '2px',
                background: i === current ? s.accent : 'currentColor',
                transition: 'width 0.4s ease',
              }} />
              {i === current && (
                <span style={{
                  fontFamily: 'DM Sans',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}
            </button>
          ))}

          <button onClick={next} style={{
            marginLeft: 'auto',
            background: 'none',
            border: '1px solid var(--border)',
            color: 'var(--gold)',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-visual { display: none; }
        }
      `}</style>
    </section>
  )
}
