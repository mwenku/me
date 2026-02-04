import { RESUME } from "../data/resume";
import { ArrowRightIcon } from "./icons/arrow-right";

export const Contact = () => {
  return (
    <section id="contact" className="pb-24 container max-w-2xl mx-auto px-5">
      <h2 className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
        Contact
      </h2>

      <div
        className="flex flex-col gap-6 animate-fade-in opacity-0"
        style={{ animationDelay: "200ms" }}
      >
        <h3 className="text-xl font-medium text-foreground">
          Let's work together
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl text-balance">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`mailto:${RESUME.contacts.email}`}
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-muted-foreground transition-colors group"
          >
            Get in touch
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="hidden sm:block text-muted-foreground/30">•</span>
          <a
            href={`tel:${RESUME.contacts.phone}`}
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-muted-foreground transition-colors"
          >
            {RESUME.contacts.phone}
          </a>
          <span className="hidden sm:block text-muted-foreground/30">•</span>
          <a
            href={`https://wa.me/${RESUME.contacts.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-muted-foreground transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
