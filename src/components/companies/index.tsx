import { companies } from "../../data/companies";
import { LinkIcon } from "../icons/link";

export const Companies = () => {
  return (
    <section id="companies" className="pb-24 container max-w-4xl mx-auto px-5">
      <h2 className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
        Experience
      </h2>

      <div className="flex flex-col gap-8">
        {companies.map((company, index) => (
          <CompanyRow key={company.name} {...company} index={index} />
        ))}
      </div>
    </section>
  );
};

const CompanyRow = ({
  name,
  role,
  description,
  link,
  period,
  location,
  projects,
  index,
}: {
  name: string;
  role: string;
  description: string;
  link?: string;
  period?: string;
  location?: string;
  projects?: {
    name: string;
    role: string;
    description: string;
    link?: string;
    period?: string;
    location?: string;
  }[];
  index: number;
}) => {
  return (
    <div
      className="group flex flex-col items-start gap-2 animate-fade-in opacity-0"
      style={{ animationDelay: `${index * 100 + 200}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full">
        <div className="flex items-baseline gap-2">
          <h3 className="text-base font-medium text-foreground">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline decoration-muted-foreground/50 underline-offset-4 flex items-center gap-1"
              >
                {name}
                <LinkIcon className="h-3 w-3" />
              </a>
            ) : (
              name
            )}
          </h3>
          <span className="text-sm text-muted-foreground">— {role}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground/50 font-mono shrink-0">
          {location && <span>{location}</span>}
          {period && <span>{period}</span>}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
        {description}
      </p>

      {projects && projects.length > 0 && (
        <div className="flex flex-col gap-6 mt-4 pl-4 border-l border-border/50 w-full">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between w-full">
                <div className="flex items-baseline gap-2">
                  <h4 className="text-sm font-medium text-foreground">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline decoration-muted-foreground/50 underline-offset-4 flex items-center gap-1"
                      >
                        {project.name}
                        <LinkIcon className="h-3 w-3" />
                      </a>
                    ) : (
                      project.name
                    )}
                  </h4>
                  <span className="text-xs text-muted-foreground">
                    — {project.role}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground/50 font-mono shrink-0">
                  {project.location && <span>{project.location}</span>}
                  {project.period && <span>{project.period}</span>}
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
