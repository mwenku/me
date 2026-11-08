import { RESUME } from "../data/resume";

export function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="arrow-icon">
      {diagonal ? (
        <path d="M5 19 19 5M5 5h14v14" />
      ) : (
        <path d="M4 12h16m-7-7 7 7-7 7" />
      )}
    </svg>
  );
}

export function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="section-label">
      <span className="section-number">( {number} )</span>
      <span>{title}</span>
    </div>
  );
}

export function SocialLinks() {
  return (
    <div className="social-links">
      <a href={RESUME.contacts.github} target="_blank" rel="noreferrer">
        GitHub <Arrow />
      </a>
      <a href={RESUME.contacts.linkedin} target="_blank" rel="noreferrer">
        LinkedIn <Arrow />
      </a>
      <a href={`mailto:${RESUME.contacts.email}`}>
        Email <Arrow />
      </a>
    </div>
  );
}
