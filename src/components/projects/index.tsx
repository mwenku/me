import { projects } from "./projects";
import Icons from "../icons/linkedin";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 relative container mx-auto px-5"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-5">
        <div className="space-y-2">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] font-display">
            Selected Work
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold font-display tracking-tight">
            Featured Projects
          </h1>
        </div>

        <a
          href="https://github.com/mwelwankuta?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-muted-foreground hover:text-white transition-colors pb-1 border-b border-transparent hover:border-primary"
        >
          <span>View all repositories</span>
          <Icons
            icon="github"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

const Project: React.FC<{
  title: string;
  description: string;
  techStack: string;
  link: string;
  previews: { link: string; title: string }[];
  image: string;
  video?: string;
  index: number;
}> = ({
  title,
  description,
  techStack,
  link,
  previews,
  image,
  video,
  index,
}) => {
  return (
    <div
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)] hover:-translate-y-2"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Media Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-black/50 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

        {video ? (
          <div
            className="w-full h-full [&_iframe]:w-full [&_iframe]:h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            dangerouslySetInnerHTML={{ __html: video }}
          />
        ) : (
          image && (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          )
        )}

        {/* Project Links Overlay */}
        <div className="absolute top-4 right-4 z-20 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-primary/80 hover:border-primary text-white transition-all"
              title="View Code"
            >
              <Icons icon="github" className="w-5 h-5" />
            </a>
          )}
          {previews.map((preview) => (
            <a
              key={preview.link}
              href={preview.link}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all"
              title={preview.title}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 lg:p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
            {title}
          </h3>
          <p className="text-sm font-medium text-primary/80 font-mono tracking-tight">
            {techStack}
          </p>
        </div>

        <p className="text-muted-foreground leading-relaxed flex-grow text-sm lg:text-base line-clamp-4 group-hover:line-clamp-none transition-all duration-500 mb-6">
          {description}
        </p>

        {/* Footer/Action */}
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-muted-foreground/50 uppercase tracking-widest font-semibold">
            Project {index < 9 ? `0${index + 1}` : index + 1}
          </span>
          <a
            href={link}
            className="text-sm font-bold text-white flex items-center gap-2 group/link"
            target="_blank"
          >
            Details
            <svg
              className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
