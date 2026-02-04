import { useRef } from "react";
import { projects } from "./projects";

export const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="pb-24 container max-w-6xl mx-auto px-5">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Projects
        </h2>
        <div className="flex gap-2">
          {/* Optional: Add navigation buttons here if needed */}
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  link,
  techStack,
  image,
  index,
}: {
  title: string;
  description: string;
  link?: string;
  techStack?: string;
  image?: string;
  index: number;
}) => {
  return (
    <div
      className="group flex flex-col gap-4 animate-fade-in opacity-0 min-w-[300px] max-w-[350px] snap-center"
      style={{ animationDelay: `${index * 100 + 300}ms` }}
    >
      <div className="flex flex-col gap-3">
        {image && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="block w-full aspect-video rounded-lg overflow-hidden border border-border/50 transition-all hover:border-border relative"
          >
            <img
              src={image}
              alt={`${title} preview`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        )}

        <div className="flex flex-col gap-1">
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
            <span className="text-xs text-muted-foreground/50 font-mono line-clamp-1">
              {techStack}
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {description}
      </p>
    </div>
  );
};
