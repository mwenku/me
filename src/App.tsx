import { useEffect } from "react";
import { RESUME } from "./data/resume";
import { NavBar } from "./components/navbar";
import { Experience } from "./components/experience";
import { Backend } from "./components/backend";
import { Projects } from "./components/projects";
import { Integrations } from "./components/integrations";
import { Reporting } from "./components/reporting";
import { Expertise } from "./components/expertise";
import { CommandMenu } from "./components/command-menu";
import { Arrow, SectionLabel, SocialLinks } from "./components/shared";
import { Availability } from "./components/availability";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section-shell, .contact");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.06 });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <NavBar />
      <main id="home">
        <div className="page-content">
          <div className="hero">
            <section id="about" className="introduction section-shell is-visible" aria-labelledby="introduction-title">
              <div className="introduction-topline">
                <SectionLabel number="01" title="About" />
                <span className="small-label">{RESUME.name} · {RESUME.title}</span>
              </div>
              <div className="introduction-layout">
                <h1 id="introduction-title">Building products<br /><span>&amp; scaling systems.</span></h1>
                <div className="introduction-bottom">
                  <p>{RESUME.summary}</p>
                  <div className="introduction-primary-actions">
                    <a href="#projects" className="pill-button">Explore my work <Arrow /></a>
                    <a href={RESUME.resumeUrl} className="pill-button pill-button-secondary" download>Download my résumé <Arrow diagonal={false} /></a>
                  </div>
                </div>
                <div className="introduction-links">
                  <a href="#companies" className="introduction-recommendations">Read recommendations<Arrow /></a>
                  <SocialLinks />
                </div>
              </div>
              <Availability />
            </section>
          </div>

          <Experience />
          <Backend />
          <Reporting />
          <Projects />
          <Integrations />
          <Expertise />

          <section id="contact" className="contact" aria-labelledby="contact-heading">
            <div className="section-shell contact-shell">
              <SectionLabel number="08" title="Contact" />
              <div className="contact-topline"><span className="small-label">Have something in mind?</span><span className="contact-symbol" aria-hidden="true">✳</span></div>
              <h2 id="contact-heading"><a href={`mailto:${RESUME.contacts.email}`} className="contact-title">Let’s work<br /><span>together.</span><Arrow /></a></h2>
              <div className="contact-bottom">
                <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className="contact-links">
                  <a href={RESUME.contacts.calendar} target="_blank" rel="noreferrer">Schedule a chat<Arrow /></a>
                  <a href={`mailto:${RESUME.contacts.email}`}>{RESUME.contacts.email}<Arrow /></a>
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
        </div>
      </main>
      <CommandMenu />
    </>
  );
}
