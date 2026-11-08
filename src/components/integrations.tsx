import { useEffect, useRef, useState } from "react";
import { integrations } from "../data/integrations";
import { Arrow, SectionLabel } from "./shared";

export function Integrations() {
  const integrationsTrack = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(true);

  useEffect(() => {
    const container = integrationsTrack.current;
    if (!container) return;

    const updateScrollState = () => {
      setIsAtStart(container.scrollLeft <= 1);
      setIsAtEnd(container.scrollLeft + container.clientWidth >= container.scrollWidth - 1);
    };

    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollIntegrations = (direction: number) => {
    const container = integrationsTrack.current;
    if (!container) return;

    container.scrollBy({
      left: container.clientWidth * direction,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <section id="integrations" className="integrations section-shell" aria-labelledby="integrations-heading">
      <SectionLabel number="06" title="Integrations" />
      <div className="section-heading-row">
        <h2 id="integrations-heading">Built to work<br />together.</h2>
        <p className="section-introduction">Platforms I’ve worked with across payments, identity, automation, logistics, and analytics.</p>
      </div>
      <div id="integrations-track" className="integrations-track" ref={integrationsTrack} role="region" aria-label="Integration platforms" aria-describedby="integrations-scroll-hint" tabIndex={0}>
        {integrations.map((integration, index) => (
          <a className="integration-card" key={integration.name} href={integration.link} target="_blank" rel="noreferrer" aria-label={`${integration.name}: ${integration.category}`}>
            <span className="integration-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <span className={`integration-logo integration-logo-${integration.name.toLowerCase().replace(/\s+/g, "-")} ${integration.showName ? "integration-logo-with-name" : ""}`}>
              <img src={integration.logo} alt="" width="160" height="56" loading="lazy" />
              {integration.showName && <span>{integration.name}</span>}
            </span>
            <span className="integration-caption"><span>{integration.category}</span><Arrow /></span>
          </a>
        ))}
      </div>
      <div className="integration-controls">
        <p id="integrations-scroll-hint" className="integration-scroll-hint">Scroll to explore · {integrations.length} platforms</p>
        <div className="integration-navigation">
          <button type="button" className="integration-scroll-button integration-scroll-previous" aria-label="Previous integrations" aria-controls="integrations-track" disabled={isAtStart} onClick={() => scrollIntegrations(-1)}>
            <Arrow diagonal={false} />
          </button>
          <button type="button" className="integration-scroll-button" aria-label="Next integrations" aria-controls="integrations-track" disabled={isAtEnd} onClick={() => scrollIntegrations(1)}>
            <Arrow diagonal={false} />
          </button>
        </div>
      </div>
    </section>
  );
}
