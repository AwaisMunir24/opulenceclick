'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '14px 0' : '22px 0',
        background: scrolled ? 'rgba(5,5,8,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,169,110,0.1)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
            <span style={{
              fontFamily: 'Syne',
              fontWeight: 800,
              fontSize: '1.3rem',
              letterSpacing: '-0.02em',
            }}>
              Rank<span className="gold-text">Forge</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-nav">
            {links.map(link => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: 'DM Sans',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: pathname === link.href ? 'var(--gold)' : 'rgba(248,247,242,0.7)',
                position: 'relative',
                transition: 'color 0.3s ease',
                paddingBottom: '4px',
              }}>
                {link.label}
                {pathname === link.href && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'var(--gold)',
                  }} />
                )}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>
              <span>Get Free Audit</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '4px',
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: 24,
                height: 2,
                background: menuOpen && i === 1 ? 'transparent' : 'var(--gold)',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                  menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                transition: 'all 0.3s ease',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(5,5,8,0.98)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {links.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: 'Syne',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: pathname === link.href ? 'var(--gold)' : 'var(--white)',
          }}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
          <span>Get Free Audit</span>
        </Link>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
