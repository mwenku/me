import { companies } from "../data/companies";
import { recommendations } from "../data/recommendations";
import { CompanyIdentity } from "./company-identity";
import { RecommendationCard } from "./recommendation-card";
import { Arrow, SectionLabel } from "./shared";

export function Experience() {
  const otherRecommendations = recommendations.filter((recommendation) => !recommendation.company);

  return (
    <section id="companies" className="experience section-shell">
      <SectionLabel number="02" title="Experience" />
      <div className="section-heading-row">
        <h2>From founding teams<br />to global companies.</h2>
        <span className="small-label">2020 — Present</span>
      </div>
      <div className="experience-list">
        {companies.map((company, index) => {
          const companyRecommendations = recommendations.filter((recommendation) => recommendation.company === company.name);

          return (
            <details className="experience-item" key={company.name} open={index === 0}>
              <summary>
                <span className="experience-index">0{index + 1}</span>
                <h3><CompanyIdentity name={company.name} logo={company.logo} />{companyRecommendations.length > 0 && <span className="recommendation-linkedin" role="img" aria-label="LinkedIn recommendation available">in</span>}</h3>
                <span className="experience-role">{company.role}</span>
                <span className="experience-period">{company.period}</span>
                <span className="expand-icon" aria-hidden="true" />
              </summary>
              <div className={`experience-content ${companyRecommendations.length > 0 ? "experience-content-with-recommendations" : ""}`}>
                <div className="experience-location">
                  <span>{company.location}</span>
                  {company.link && (
                    <a href={company.link} target="_blank" rel="noreferrer">Visit company <Arrow /></a>
                  )}
                </div>
                <div className="experience-description">
                  <p>{company.description}</p>
                  {company.projects && company.projects.length > 0 && (
                    <div className="company-projects">
                      {company.projects.map((project) => (
                        <article key={project.name}>
                          <div className="company-project-heading">
                            <h4>
                              {project.link ? (
                                <a href={project.link} target="_blank" rel="noreferrer"><CompanyIdentity name={project.name} logo={project.logo} /><Arrow /></a>
                              ) : <CompanyIdentity name={project.name} logo={project.logo} />}
                            </h4>
                            <span>{project.location}</span>
                          </div>
                          <p className="company-project-role">{project.role}</p>
                          <p>{project.description}</p>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
                {companyRecommendations.length > 0 && (
                  <aside className="company-recommendations" aria-label={`${company.name} recommendations`}>
                    {companyRecommendations.map((recommendation) => <RecommendationCard recommendation={recommendation} theme={company.recommendationTheme} key={recommendation.name} />)}
                  </aside>
                )}
              </div>
            </details>
          );
        })}
      </div>
      {otherRecommendations.length > 0 && (
        <div className="experience-recommendations" role="group" aria-label="More professional recommendations">
          <span className="small-label">More recommendations</span>
          <div className="experience-recommendations-grid">
            {otherRecommendations.map((recommendation) => <RecommendationCard recommendation={recommendation} key={recommendation.name} />)}
          </div>
        </div>
      )}
    </section>
  );
}
