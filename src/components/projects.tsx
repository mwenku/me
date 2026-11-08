import projects from "../data/projects.json";
import { RESUME } from "../data/resume";
import { projectDetails } from "../data/project-details";
import { Arrow, SectionLabel } from "./shared";

export function Projects() {
  return (
    <section id="projects" className="projects section-shell">
      <SectionLabel number="05" title="Projects" />
      <div className="section-heading-row">
        <h2>A few things<br />I’ve put into the world.</h2>
        <a href={RESUME.contacts.github} className="text-link" target="_blank" rel="noreferrer">
          More on GitHub <Arrow />
        </a>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => {
          const projectDetail = projectDetails[project.title];

          return (
            <article className={`project-card project-${index + 1}`} key={project.title}>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-image-link" aria-label={`Visit ${project.title}`}>
                <div className="project-artboard">
                  <span className="project-number">0{index + 1} / {String(projects.length).padStart(2, "0")}</span>
                  <div className="project-image-frame">
                    <div className="browser-chrome" aria-hidden="true"><span /><span /><span /></div>
                    <img src={project.image} alt={`${project.title} preview`} loading="lazy" width="1200" height="640" />
                  </div>
                  <span className="project-open"><Arrow /></span>
                  <span className="project-domain">{new URL(project.link).hostname.replace("www.", "")}</span>
                </div>
              </a>
              <div className="project-heading">
                <h3><a href={project.link} target="_blank" rel="noreferrer">{project.title}</a></h3>
                <span className="project-preview-label">{project.previews[0].title}<Arrow /></span>
              </div>
              {projectDetail && <p className="project-category">{projectDetail.category}</p>}
              <p className="project-description">{project.description}</p>
              {project.techStack && <p className="project-stack">{project.techStack}</p>}
              {projectDetail && (
                <details className="project-details">
                  <summary><span>Read the project story</span><span className="expand-icon" aria-hidden="true" /></summary>
                  <dl className="story-facts">
                    <div><dt>The problem</dt><dd>{projectDetail.problem}</dd></div>
                    <div><dt>What I built</dt><dd>{projectDetail.contribution}</dd></div>
                    {projectDetail.decision && <div><dt>A product decision</dt><dd>{projectDetail.decision}</dd></div>}
                  </dl>
                  <a className="project-proof" href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} ${project.previews[0].title}`}>
                    Visit {project.previews[0].title}<Arrow />
                  </a>
                </details>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
