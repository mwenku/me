import { reportingTechnologies, reportingWork } from "../data/reporting";
import { CompanyIdentity } from "./company-identity";
import { Arrow, SectionLabel } from "./shared";

export function Reporting() {
  return (
    <section id="reporting" className="reporting section-shell" aria-labelledby="reporting-heading">
      <SectionLabel number="04" title="Reporting & data" />
      <div className="section-heading-row">
        <h2 id="reporting-heading">Making data<br />useful.</h2>
        <p className="section-introduction">Time saved, work automated and operating costs reduced—with the context behind each result.</p>
      </div>
      <div className="reporting-technologies">
        <span className="small-label" id="reporting-technologies-label">Tools I use</span>
        <ul aria-labelledby="reporting-technologies-label" role="list">
          {reportingTechnologies.map((technology) => <li key={technology.name}><img src={technology.logo} alt="" width={24} height={24} loading="lazy" /><span>{technology.name}</span></li>)}
        </ul>
      </div>
      <div className="reporting-board">
        {reportingWork.map((work, index) => (
          <article className="reporting-story" key={work.id} aria-labelledby={`${work.id}-heading`}>
            <div className="reporting-story-copy">
              <div className="reporting-company"><span>{String(index + 1).padStart(2, "0")}</span><CompanyIdentity name={work.company} logo={work.logo} /></div>
              <h3 id={`${work.id}-heading`}>{work.title}</h3>
              <p>{work.description}</p>
            </div>
            <div className="reporting-delivery">
              {index === 0 ? (
                <div className="reporting-path" aria-label="Reporting pipeline">
                  <div><span className="small-label">From</span><p>{work.source}</p></div>
                  <Arrow diagonal={false} />
                  <div><span className="small-label">To</span><p>{work.output}</p></div>
                </div>
              ) : (
                <div className="reporting-metric">
                  <div className="reporting-metric-context">
                    <span className="small-label">{work.metricContext}</span>
                    {work.before && <><span className="reporting-metric-before">{work.before}</span><Arrow diagonal={false} /></>}
                  </div>
                  <strong>{work.metric}{work.metricUnit && <span className="reporting-metric-unit">{work.metricUnit}</span>}</strong>
                  <span>{work.metricLabel}</span>
                </div>
              )}
              <p className="reporting-result">{work.result}</p>
            </div>
          </article>
        ))}
      </div>
      <a href="#integrations" className="reporting-platforms">Explore the platforms I’ve worked with<Arrow diagonal={false} /></a>
    </section>
  );
}
