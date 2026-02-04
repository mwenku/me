import { RESUME } from "../data/resume";

export const Home = () => {
  return (
    <section
      id="about"
      className="pt-32 pb-16 lg:pt-48 container max-w-4xl mx-auto px-5"
    >
      <div className="flex flex-col items-start animate-fade-in opacity-0 delay-100">
        <p className="text-base text-muted-foreground leading-relaxed mb-8 text-balance">
          {RESUME.summary}
        </p>

        <div className="flex items-center gap-4 text-sm font-medium">
          <a
            href={RESUME.contacts.github}
            target="_blank"
            rel="noreferrer"
            className="text-foreground border-b border-muted-foreground/30 hover:border-foreground transition-colors pb-0.5"
          >
            GitHub
          </a>
          <a
            href={RESUME.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-foreground border-b border-muted-foreground/30 hover:border-foreground transition-colors pb-0.5"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${RESUME.contacts.email}`}
            className="text-foreground border-b border-muted-foreground/30 hover:border-foreground transition-colors pb-0.5"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};
