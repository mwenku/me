import { RESUME } from "../data/resume";

export const Education = () => {
  return (
    <section
      id="education"
      className="py-24 bg-secondary/5 border-t border-border/40"
    >
      <div className="container mx-auto px-5 max-w-5xl">
        <h2 className="text-4xl font-bold mb-16 text-center tracking-tight font-display">
          Education
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {RESUME.education.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border/50 p-8 pt-10 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors font-display tracking-tight leading-tight">
                    {edu.school}
                  </h3>
                  <p className="text-lg text-muted-foreground mt-3 font-medium">
                    {edu.degree}
                  </p>
                </div>
                <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.24 50.552 50.552 0 00-2.658.813m-15.482 0A50.55 50.55 0 0112 13.489a50.55 50.55 0 0112-4.402m-12 4.402l.005.005"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
