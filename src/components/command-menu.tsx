import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { RESUME } from "../data/resume";

export const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 animate-fade-in opacity-0 delay-700 hidden lg:block">
        <p className="text-xs font-mono text-muted-foreground/40 bg-background/50 backdrop-blur-sm px-2 py-1 rounded border border-border/50">
          Press <span className="text-foreground">⌘K</span> to start
        </p>
      </div>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/20 backdrop-blur-[2px] p-4"
        onClick={(e: React.MouseEvent) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="w-full max-w-[640px] bg-card border border-border shadow-2xl rounded-xl overflow-hidden animate-fade-in ring-1 ring-black/5">
          <Command.Input
            className="w-full h-14 px-4 bg-transparent border-b border-border outline-none text-foreground placeholder-muted-foreground font-medium text-lg font-display"
            placeholder="Type a command or search..."
          />
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="General"
              className="text-xs font-medium text-muted-foreground px-2 py-1.5 mb-2 uppercase tracking-wider"
            >
              <Item
                onSelect={() => {
                  window.open(
                    RESUME.contacts.email
                      ? `mailto:${RESUME.contacts.email}`
                      : "",
                    "_self",
                  );
                  setOpen(false);
                }}
              >
                <span className="mr-2">✉️</span> Send Email
              </Item>
              <Item
                onSelect={() => {
                  navigator.clipboard.writeText(RESUME.contacts.email);
                  setOpen(false);
                  alert("Email copied to clipboard!");
                }}
              >
                <span className="mr-2">📋</span> Copy Email
              </Item>
              <Item
                onSelect={() => {
                  // Assuming resume is at /resume.pdf
                  window.open("/resume.pdf", "_blank");
                  setOpen(false);
                }}
              >
                <span className="mr-2">📄</span> Download Resume
              </Item>
            </Command.Group>

            <Command.Group
              heading="Social"
              className="text-xs font-medium text-muted-foreground px-2 py-1.5 mb-2 uppercase tracking-wider"
            >
              <Item
                onSelect={() => {
                  window.open(RESUME.contacts.github, "_blank");
                  setOpen(false);
                }}
              >
                <span className="mr-2">💻</span> GitHub
              </Item>
              <Item
                onSelect={() => {
                  window.open(RESUME.contacts.linkedin, "_blank");
                  setOpen(false);
                }}
              >
                <span className="mr-2">🔗</span> LinkedIn
              </Item>
            </Command.Group>

            <Command.Group
              heading="Navigation"
              className="text-xs font-medium text-muted-foreground px-2 py-1.5 mb-2 uppercase tracking-wider"
            >
              <Item
                onSelect={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
              >
                <span className="mr-2">🏠</span> Home
              </Item>
              <Item
                onSelect={() => {
                  document
                    .getElementById("companies")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
              >
                <span className="mr-2">💼</span> Experience
              </Item>
              <Item
                onSelect={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
              >
                <span className="mr-2">🚀</span> Projects
              </Item>
            </Command.Group>
          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
};

const Item = ({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect: () => void;
}) => {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center px-4 py-3 rounded-lg text-sm text-foreground aria-selected:bg-secondary aria-selected:text-primary cursor-pointer transition-colors"
    >
      {children}
    </Command.Item>
  );
};
