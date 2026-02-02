import { projects } from "./projects";

export const Projects = () => {
  return (
    <section id="projects" className="pb-24 container max-w-2xl mx-auto px-5">
      <h2 className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
        Projects
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectRow = ({
  title,
  description,
  link,
  techStack,
  index,
}: {
  title: string;
  description: string;
  link?: string;
  techStack?: string;
  index: number;
}) => {
  return (
    <div
      className="group flex flex-col items-start gap-2 animate-fade-in opacity-0"
      style={{ animationDelay: `${index * 100 + 300}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full">
        <h3 className="text-base font-medium text-foreground">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:underline decoration-muted-foreground/50 underline-offset-4"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {techStack && (
          <span className="text-sm text-muted-foreground/50 font-mono shrink-0">
            {techStack}
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
  );
};
