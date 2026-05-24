import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle } from "lucide-react";
const SOCIAL_LINKS = { linkedin: "https://www.linkedin.com/in/hassaan712/", github: "https://github.com/HassaanAwan786", email: "hassaanawan777@gmail.com" }; const MAILTO = "mailto:hassaanawan777@gmail.com";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const iStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: "14px",
    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff", fontSize: "0.9rem", outline: "none", transition: "all 0.3s",
  };

  const onF = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(0,212,255,0.4)";
    e.target.style.background = "rgba(0,212,255,0.04)";
    e.target.style.boxShadow = "0 0 20px rgba(0,212,255,0.08)";
  };
  const onB = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "rgba(255,255,255,0.08)";
    e.target.style.background = "rgba(255,255,255,0.03)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 relative overflow-hidden" style={{ background: "#070714" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.04), transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12" style={{ background: "linear-gradient(90deg, transparent, #00d4ff)" }} />
            <span className="font-hud" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#00d4ff", letterSpacing: "0.15em" }}>CONTACT</span>
            <div className="h-px w-8 sm:w-12" style={{ background: "linear-gradient(90deg, #00d4ff, transparent)" }} />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            style={{ fontSize: "clamp(1.6rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }} className="mb-3 sm:mb-4">
            Let's <span style={{ background: "linear-gradient(135deg,#00d4ff,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Work Together</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ fontSize: "clamp(0.88rem, 1.8vw, 1rem)", color: "#64748b", maxWidth: "500px", margin: "0 auto" }}>
            Whether you need a technical co-founder, a hands-on COO, or software engineering expertise — I'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2 space-y-4 sm:space-y-6">
            {[
              { icon: <Mail size={20} />, label: "Email", value: SOCIAL_LINKS.email, href: MAILTO, external: false },
              { icon: <Linkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/hassaan712", href: SOCIAL_LINKS.linkedin, external: true },
              { icon: <Github size={20} />, label: "GitHub", value: "github.com/HassaanAwan786", href: SOCIAL_LINKS.github, external: true },
              { icon: <MapPin size={20} />, label: "Location", value: "Pakistan", href: null, external: false },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)", color: "#00d4ff" }}>{item.icon}</div>
                <div className="min-w-0">
                  <div className="font-hud" style={{ fontSize: "0.65rem", color: "#475569", letterSpacing: "0.08em" }}>{item.label.toUpperCase()}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="block truncate"
                      style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.9rem)", color: "#e2e8f0", fontWeight: 500 }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.9rem)", color: "#e2e8f0", fontWeight: 500 }}>{item.value}</div>
                  )}
                </div>
              </div>))}
            <div>
              <p className="font-hud mb-3" style={{ fontSize: "0.7rem", color: "#475569", letterSpacing: "0.1em" }}>CONNECT_SOCIAL</p>
              <div className="flex gap-3">
                {[{ icon: <Linkedin size={18} />, label: "LinkedIn", href: SOCIAL_LINKS.linkedin, external: true },
                  { icon: <Github size={18} />, label: "GitHub", href: SOCIAL_LINKS.github, external: true },
                  { icon: <Mail size={18} />, label: "Email", href: MAILTO, external: false }].map((s) => (
                  <a key={s.label} href={s.href} {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} title={s.label}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#00d4ff"; e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                    {s.icon}
                  </a>))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-3">
            <div className="p-5 sm:p-8 rounded-3xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}>
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center h-60 sm:h-80 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6" style={{ background: "rgba(46,204,113,0.1)", border: "1px solid rgba(46,204,113,0.3)" }}>
                    <CheckCircle size={28} style={{ color: "#2ecc71" }} />
                  </div>
                  <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 700, color: "#fff" }} className="mb-3">Message Sent!</h3>
                  <p style={{ fontSize: "clamp(0.82rem, 1.5vw, 0.9rem)", color: "#64748b" }}>Thanks for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-5 sm:mt-6 px-6 py-2.5 rounded-xl" style={{ border: "1px solid rgba(0,212,255,0.2)", color: "#00d4ff", fontSize: "0.85rem", fontWeight: 600, background: "rgba(0,212,255,0.06)" }}>
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="font-hud block mb-1.5 sm:mb-2" style={{ fontSize: "0.7rem", color: "#64748b", letterSpacing: "0.08em" }}>NAME</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" style={iStyle} onFocus={onF} onBlur={onB} />
                    </div>
                    <div>
                      <label className="font-hud block mb-1.5 sm:mb-2" style={{ fontSize: "0.7rem", color: "#64748b", letterSpacing: "0.08em" }}>EMAIL</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={iStyle} onFocus={onF} onBlur={onB} />
                    </div>
                  </div>
                  <div>
                    <label className="font-hud block mb-1.5 sm:mb-2" style={{ fontSize: "0.7rem", color: "#64748b", letterSpacing: "0.08em" }}>SUBJECT</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?" style={iStyle} onFocus={onF} onBlur={onB} />
                  </div>
                  <div>
                    <label className="font-hud block mb-1.5 sm:mb-2" style={{ fontSize: "0.7rem", color: "#64748b", letterSpacing: "0.08em" }}>MESSAGE</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell me about your project..." style={{ ...iStyle, resize: "none" as const }} onFocus={onF as any} onBlur={onB as any} />
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 rounded-xl transition-all duration-300 hover:scale-[1.01] disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg,#00d4ff,#8b5cf6)", color: "#fff", fontSize: "clamp(0.88rem, 1.5vw, 0.95rem)", fontWeight: 600, boxShadow: "0 0 30px rgba(0,212,255,0.2)" }}>
                    {loading ? (<><div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />Sending...</>)
                      : (<><Send size={18} />Send Message</>)}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
