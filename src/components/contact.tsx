import { useEffect, useState } from "react";
import { RESUME } from "../data/resume";
import { Arrow, SectionLabel, SocialLinks } from "./shared";

export function Contact() {
  const [copyNotice, setCopyNotice] = useState("");

  useEffect(() => {
    if (!copyNotice) return;
    const timeout = window.setTimeout(() => setCopyNotice(""), 4000);
    return () => window.clearTimeout(timeout);
  }, [copyNotice]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RESUME.contacts.email);
      setCopyNotice("Email copied.");
    } catch {
      setCopyNotice("Select and copy the email address.");
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="section-shell contact-shell">
        <SectionLabel number="08" title="Contact" />
        <div className="contact-topline"><span className="small-label">Open to opportunities</span><span className="contact-symbol" aria-hidden="true">✳</span></div>
        <h2 id="contact-heading" className="contact-title">Recruiting for<br /><span>a role?</span></h2>
        <div className="contact-bottom">
          <p>I am open to full-stack and backend engineering opportunities where operational ownership matters.</p>
          <div className="contact-links">
            <div className="contact-email-group">
              <div className="contact-email-row">
                <a href={`mailto:${RESUME.contacts.email}`} className="contact-email">{RESUME.contacts.email}</a>
                <button type="button" className="contact-copy-button" onClick={copyEmail}>{copyNotice === "Email copied." ? "Copied" : "Copy email"}</button>
              </div>
              <p className="contact-copy-notice" role="status">{copyNotice}</p>
            </div>
            <a href={RESUME.contacts.calendar} target="_blank" rel="noreferrer">Schedule a short call<Arrow /></a>
          </div>
        </div>
        <footer className="footer">
          <a href="#home" className="footer-wordmark" aria-label={`${RESUME.name}, back to top`}>
            <img src="/branding/logo-white.svg" alt="" width={52} height={52} className="footer-logo" />
            <span>{RESUME.name}</span>
          </a>
          <SocialLinks />
          <a href="#home" className="back-to-top">Back to top ↑</a>
          <span className="copyright">© {RESUME.name}. All rights reserved.</span>
        </footer>
      </div>
    </section>
  );
}
