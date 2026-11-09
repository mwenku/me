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
import { Contact } from "./components/contact";

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
                    <a href={`mailto:${RESUME.contacts.email}?subject=Resume%20request`} className="pill-button pill-button-secondary">Email for my résumé <Arrow /></a>
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

          <Contact />
        </div>
      </main>
      <CommandMenu />
    </>
  );
}
