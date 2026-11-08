import { backendWork } from "../data/backend";
import { CompanyIdentity } from "./company-identity";
import { SectionLabel } from "./shared";

export function Backend() {
  return (
    <section id="backend" className="backend section-shell" aria-labelledby="backend-heading">
      <SectionLabel number="03" title="Backend development" />
      <div className="section-heading-row">
        <h2 id="backend-heading">Behind the<br />interface.</h2>
        <p className="section-introduction">The APIs, event-driven services and developer tools I’ve built, improved and maintained in production.</p>
      </div>
      <div className="backend-work">
        {backendWork.map((work, index) => (
          <article className="backend-story" key={work.id} aria-labelledby={`${work.id}-heading`}>
            <div className="backend-story-heading">
              <div className="backend-company"><span className="small-label">{String(index + 1).padStart(2, "0")}</span><CompanyIdentity name={work.company} logo={work.logo} /></div>
              <h3 id={`${work.id}-heading`}>{work.title}</h3>
              {work.technologies.length > 0 && <ul className="backend-technologies" aria-label={`${work.company} technologies`} role="list">{work.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}
            </div>
            <div className="backend-story-content">
              <p>{work.description}</p>
              <ul className="backend-capabilities">{work.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
              <p className="backend-result">{work.result}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
