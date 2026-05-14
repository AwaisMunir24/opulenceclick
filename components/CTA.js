'use client'
import Link from 'next/link'

export default function CTA() {
  return (
    <section style={{
      padding: '120px 0',
      background: 'var(--navy)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Ready To Rank?</div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
            fontWeight: 800,
            marginBottom: '24px',
            letterSpacing: '-0.03em',
          }}>
            Get Your Free<br />
            <span className="gold-text">SEO Audit Today</span>
          </h2>

          <p style={{
            color: 'rgba(248,247,242,0.55)',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            marginBottom: '48px',
            fontWeight: 300,
          }}>
            We'll analyze your website, identify the exact gaps holding you back, and outline a clear path to page 1. Zero obligations, complete transparency.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ padding: '18px 40px', fontSize: '1rem' }}>
              <span>Claim Free Audit</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/projects" className="btn-outline" style={{ padding: '17px 40px', fontSize: '1rem' }}>
              <span>See Case Studies</span>
            </Link>
          </div>

          <p style={{ marginTop: '24px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            ✓ No credit card required &nbsp; ✓ Delivered in 48 hours &nbsp; ✓ 100% free
          </p>
        </div>
      </div>
    </section>
  )
}
