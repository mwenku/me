import { RESUME } from "../data/resume";

export const NavBar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/90 via-background/50 to-transparent backdrop-blur-[2px] transition-all duration-300 pb-8">
      <div className="flex items-center justify-between container mx-auto px-5 h-16">
        <a href="/" className="group">
          <img src="/logo-name.svg" alt="welo" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Experience", "Projects"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item}
            </button>
          ))}
        </div>

        <a
          href={`mailto:${RESUME.contacts.email}`}
          className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};
