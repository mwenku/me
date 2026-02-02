import { RESUME } from "../data/resume";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-5">
        <div
          className="text-center mb-20 animate-fade-in opacity-0"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight font-display">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable systems and solving complex problems across the
            globe.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 -translate-x-1/2"></div>

          {/* Mobile Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>

          <div className="space-y-20 lg:space-y-0">
            {RESUME.experience.map((job, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center justify-between group ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 top-0 w-4 h-4 rounded-full border-[3px] border-background bg-primary shadow-[0_0_0_4px_rgba(249,115,22,0.2)] z-10 -translate-x-[calc(50%-0.5px)] lg:-translate-x-1/2 group-hover:scale-125 transition-transform duration-300"></div>

                  {/* Content Side (Role, Company, Date) */}
                  <div
                    className={`w-full lg:w-5/12 pl-20 lg:pl-0 ${isEven ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}
                  >
                    <div className="flex flex-col items-start lg:items-end group">
                      <div
                        className={`flex items-center gap-2 mb-2 ${isEven ? "lg:flex-row-reverse" : ""}`}
                      >
                        <h3 className="text-3xl font-bold text-foreground font-display">
                          {job.company}
                        </h3>
                        {job.link && (
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-5 h-5"
                            >
                              <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                              <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                            </svg>
                          </a>
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-primary mb-4 font-display">
                        {job.role}
                      </h4>

                      <div
                        className={`flex flex-col gap-2 text-muted-foreground font-medium ${isEven ? "lg:items-end" : "lg:items-start"}`}
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                            />
                          </svg>
                          {job.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description Card Side */}
                  <div
                    className={`w-full lg:w-5/12 pl-20 lg:pl-0 mt-8 lg:mt-0 ${isEven ? "lg:pl-16" : "lg:pr-16"}`}
                  >
                    <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 relative group/card">
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description[0]}
                      </p>

                      {/* Optional: Show more items on hover or keeping it clean as per image reference which usually shows a paragraph */}
                      {job.description.length > 1 && (
                        <ul className="mt-4 space-y-2">
                          {job.description.slice(1).map((desc, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground/80"
                            >
                              <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0"></span>
                              {desc}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
