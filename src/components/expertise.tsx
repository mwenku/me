import { expertiseGroups } from "../data/engineering";
import { SectionLabel } from "./shared";

export function Expertise() {
  return (
    <section id="skills" className="expertise section-shell" aria-labelledby="expertise-heading">
      <SectionLabel number="07" title="Expertise" />
      <div className="section-heading-row">
        <h2 id="expertise-heading">Tools in context.</h2>
        <p className="section-introduction">The technologies I work with, and the kinds of problems I use them to solve.</p>
      </div>
      <div className="expertise-grid">
        {expertiseGroups.map((group) => (
          <article className="expertise-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skills-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
