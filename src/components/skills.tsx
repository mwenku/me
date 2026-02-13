import { RESUME } from "../data/resume";

export const Skills = () => {
  return (
    <div className="w-full max-w-2xl mt-8">
      <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
        Tech Arsenal
      </h2>
      <div className="flex flex-wrap gap-2">
        {RESUME.skills.map((skill, index) => (
          <div
            key={skill}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium animate-fade-in opacity-0"
            style={{ animationDelay: `${index * 50 + 200}ms` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
