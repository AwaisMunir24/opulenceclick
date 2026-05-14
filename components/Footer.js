'use client'
import Link from 'next/link'

const footerLinks = {
  Services: [
    { label: 'Link Building', href: '/' },
    { label: 'On-Page SEO', href: '/' },
    { label: 'Off-Page SEO', href: '/' },
    { label: 'SEO Audit', href: '/' },
    { label: 'Content Strategy', href: '/' },
  ],
  Company: [
    { label: 'About Us', href: '/' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Case Studies', href: '/projects' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/' },
  ],
  Resources: [
    { label: 'SEO Blog', href: '/' },
    { label: 'Free Tools', href: '/' },
    { label: 'Link Building Guide', href: '/' },
    { label: 'SEO Glossary', href: '/' },
    { label: 'FAQs', href: '/' },
  ],
}

const socials = [
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid var(--border)',
      padding: '80px 0 0',
    }}>
      <div className="container">
        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '60px',
          marginBottom: '64px',
        }} className="footer-grid">

          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: 36,
                height: 36,
                background: 'linear-gradient(135deg, #c8a96e, #9a7a45)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: '#050508', fontFamily: 'Syne', fontWeight: 800, fontSize: '0.85rem' }}>R</span>
              </div>
              <span style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em' }}>
                Rank<span className="gold-text">Forge</span>
              </span>
            </Link>

            <p style={{
              color: 'rgba(248,247,242,0.45)',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              marginBottom: '28px',
              fontWeight: 300,
            }}>
              Premium SEO services for businesses that want to dominate search. Link building, on-page, off-page — we do it all with elite precision.
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.3s ease',
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)'; e.currentTarget.style.background = 'rgba(200,169,110,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '20px',
              }}>{group}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} style={{
                      color: 'rgba(248,247,242,0.45)',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,242,0.45)'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div style={{
          padding: '28px 0',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          gap: '32px',
          flexWrap: 'wrap',
          marginBottom: '0',
        }}>
          {[
            { icon: '✉', val: 'hello@rankforge.io', label: 'Email' },
            { icon: '📍', val: 'New York, NY 10001', label: 'Office' },
            { icon: '📞', val: '+1 (646) 555-0199', label: 'Phone' },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1rem' }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>{c.label}</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(248,247,242,0.7)' }}>{c.val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: '24px 0',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ color: 'rgba(248,247,242,0.3)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} RankForge. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <Link key={l} href="/" style={{
                color: 'rgba(248,247,242,0.3)',
                fontSize: '0.8rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,242,0.3)'}
              >{l}</Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
