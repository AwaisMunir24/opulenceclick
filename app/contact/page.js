"use client";
import { useState } from "react";

const services = [
  "Link Building",
  "On-Page SEO",
  "Off-Page SEO",
  "SEO Audit",
  "Full SEO Campaign",
  "Other",
];

const budgets = [
  "$500 – $1,000/mo",
  "$1,000 – $2,500/mo",
  "$2,500 – $5,000/mo",
  "$5,000+ /mo",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    service: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "160px 0 80px",
          background: "var(--black)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "-10%",
            transform: "translateY(-50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-label">Get In Touch</div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 800,
              marginBottom: "20px",
              letterSpacing: "-0.03em",
            }}
          >
            Let's Build Your
            <br />
            <span className="gold-text">Rankings Together</span>
          </h1>
          <p
            style={{
              color: "rgba(248,247,242,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              maxWidth: "480px",
              fontWeight: 300,
            }}
          >
            Tell us about your project. We'll review your website and respond
            with a tailored strategy within 24 hours.
          </p>
        </div>
      </section>

      {/* Main section */}
      <section style={{ padding: "0 0 120px", background: "var(--black)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "80px",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left info */}
            <div>
              {/* Contact cards */}
              {[
                {
                  icon: "✉️",
                  label: "Email Us",
                  val: "business@opulenceclick.com",
                  sub: "We reply within 2 hours",
                },
                // {
                //   icon: "📞",
                //   label: "Call Us",
                //   val: "+1 (646) 555-0199",
                //   sub: "Mon–Fri 9am–6pm EST",
                // },
                {
                  icon: "📍",
                  label: "Visit Us",
                  val: "Germany",
                  // sub: "By appointment only",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--navy)",
                    border: "1px solid var(--border)",
                    padding: "24px",
                    marginBottom: "16px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(200,169,110,0.3)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                >
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "Syne",
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginBottom: "2px",
                      }}
                    >
                      {c.val}
                    </div>
                    <div
                      style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                    >
                      {c.sub}
                    </div>
                  </div>
                </div>
              ))}

              {/* Guarantee */}
              <div
                style={{
                  background: "rgba(200,169,110,0.06)",
                  border: "1px solid rgba(200,169,110,0.2)",
                  padding: "24px",
                  marginTop: "32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "Syne",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--gold)",
                    marginBottom: "12px",
                  }}
                >
                  ✓ Our Guarantee
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {[
                    "Free audit delivered in 48 hours",
                    "Long-term contracts",
                    "Month-to-month flexibility",
                    "Full transparency, always",
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontSize: "0.88rem",
                        color: "rgba(248,247,242,0.7)",
                      }}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "rgba(200,169,110,0.2)",
                          border: "1px solid var(--gold)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#c8a96e"
                          strokeWidth="3"
                        >
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right form */}
            <div
              style={{
                background: "var(--navy)",
                border: "1px solid var(--border)",
                padding: "48px",
              }}
            >
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: "4rem", marginBottom: "20px" }}>
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "Syne",
                      fontWeight: 800,
                      fontSize: "1.8rem",
                      marginBottom: "12px",
                    }}
                  >
                    <span className="gold-text">Message Sent!</span>
                  </h3>
                  <p
                    style={{ color: "rgba(248,247,242,0.6)", lineHeight: 1.7 }}
                  >
                    We'll review your website and send a custom audit within 48
                    hours. Keep an eye on your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3
                    style={{
                      fontFamily: "Syne",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      marginBottom: "32px",
                    }}
                  >
                    Request Free SEO Audit
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                      marginBottom: "16px",
                    }}
                    className="form-row"
                  >
                    {[
                      {
                        key: "name",
                        label: "Full Name",
                        placeholder: "John Smith",
                        type: "text",
                      },
                      {
                        key: "email",
                        label: "Email Address",
                        placeholder: "john@company.com",
                        type: "email",
                      },
                    ].map((f) => (
                      <div key={f.key}>
                        <label
                          style={{
                            display: "block",
                            fontFamily: "DM Sans",
                            fontSize: "0.78rem",
                            fontWeight: 600,
                            color: "var(--text-muted)",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                          }}
                        >
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          required
                          placeholder={f.placeholder}
                          value={form[f.key]}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, [f.key]: e.target.value }))
                          }
                          style={{
                            width: "100%",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "var(--white)",
                            padding: "12px 16px",
                            fontFamily: "DM Sans",
                            fontSize: "0.9rem",
                            outline: "none",
                            transition: "border-color 0.3s ease",
                          }}
                          onFocus={(e) =>
                            (e.target.style.borderColor =
                              "rgba(200,169,110,0.5)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor =
                              "rgba(255,255,255,0.1)")
                          }
                        />
                      </div>
                    ))}
                  </div>

                  {/* Website */}
                  <div style={{ marginBottom: "16px" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "DM Sans",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      Website URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={form.website}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, website: e.target.value }))
                      }
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "var(--white)",
                        padding: "12px 16px",
                        fontFamily: "DM Sans",
                        fontSize: "0.9rem",
                        outline: "none",
                        transition: "border-color 0.3s ease",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(200,169,110,0.5)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                      }
                    />
                  </div>

                  {/* Service */}
                  <div style={{ marginBottom: "16px" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "DM Sans",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      Service Needed
                    </label>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                    >
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, service: s }))}
                          style={{
                            background:
                              form.service === s
                                ? "rgba(200,169,110,0.15)"
                                : "rgba(255,255,255,0.03)",
                            border: `1px solid ${form.service === s ? "rgba(200,169,110,0.5)" : "rgba(255,255,255,0.1)"}`,
                            color:
                              form.service === s
                                ? "var(--gold)"
                                : "var(--text-muted)",
                            padding: "8px 16px",
                            fontFamily: "DM Sans",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            borderRadius: "2px",
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div style={{ marginBottom: "16px" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "DM Sans",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      Monthly Budget
                    </label>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                    >
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, budget: b }))}
                          style={{
                            background:
                              form.budget === b
                                ? "rgba(200,169,110,0.15)"
                                : "rgba(255,255,255,0.03)",
                            border: `1px solid ${form.budget === b ? "rgba(200,169,110,0.5)" : "rgba(255,255,255,0.1)"}`,
                            color:
                              form.budget === b
                                ? "var(--gold)"
                                : "var(--text-muted)",
                            padding: "8px 16px",
                            fontFamily: "DM Sans",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            borderRadius: "2px",
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "28px" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "DM Sans",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                      }}
                    >
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="What keywords do you want to rank for? What's your timeline? Any context helps..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "var(--white)",
                        padding: "12px 16px",
                        fontFamily: "DM Sans",
                        fontSize: "0.9rem",
                        outline: "none",
                        resize: "vertical",
                        minHeight: "100px",
                        transition: "border-color 0.3s ease",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(200,169,110,0.5)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "18px",
                      fontSize: "1rem",
                      opacity: loading ? 0.7 : 1,
                    }}
                  >
                    <span>
                      {loading ? "Sending..." : "Send & Get Free Audit"}
                    </span>
                    {!loading && (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 560px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
