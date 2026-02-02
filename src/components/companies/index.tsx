import { companies } from "../../data/companies";

export const Companies = () => {
  return (
    <section id="companies" className="pb-24 container max-w-2xl mx-auto px-5">
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
  index,
}: {
  name: string;
  role: string;
  description: string;
  link?: string;
  period?: string;
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
                className="hover:underline decoration-muted-foreground/50 underline-offset-4"
              >
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
          <span className="text-sm text-muted-foreground">— {role}</span>
        </div>
        {period && (
          <span className="text-sm text-muted-foreground/50 font-mono shrink-0">
            {period.split(" - ")[0]}
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
  );
};
