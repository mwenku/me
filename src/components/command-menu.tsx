import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { RESUME } from "../data/resume";
import { navigation } from "../data/navigation";
import { Arrow } from "./shared";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (event.key !== "k" || (!event.metaKey && !event.ctrlKey)) return;
      event.preventDefault();
      setOpen((previousOpen) => !previousOpen);
    };

    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, []);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(""), 4000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const navigate = (section: string) => {
    window.location.hash = section;
    setOpen(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RESUME.contacts.email);
      setNotice("Email copied to clipboard.");
    } catch {
      setNotice(`Email: ${RESUME.contacts.email}`);
    }
    setOpen(false);
  };

  return (
    <>
      <button type="button" className="command-trigger" onClick={() => setOpen(true)} aria-label="Open command menu">
        Quick navigation <kbd>⌘ K</kbd>
      </button>
      <Command.Dialog open={open} onOpenChange={setOpen} label="Quick navigation" className="command-dialog">
        <div className="command-heading"><span>Quick navigation</span><button type="button" onClick={() => setOpen(false)} aria-label="Close command menu">Esc</button></div>
        <Command.Input autoFocus placeholder="Where would you like to go?" aria-label="Search commands" />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Explore">
            {navigation.map((item) => (
              <Command.Item key={item.section} onSelect={() => navigate(item.section)}>{item.title}<Arrow /></Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Connect">
            <Command.Item onSelect={() => { window.location.href = `mailto:${RESUME.contacts.email}`; setOpen(false); }}>Send Email<Arrow /></Command.Item>
            <Command.Item onSelect={copyEmail}>Copy Email<Arrow /></Command.Item>
            <Command.Item onSelect={() => { window.open(RESUME.contacts.calendar, "_blank", "noopener,noreferrer"); setOpen(false); }}>Schedule a chat<Arrow /></Command.Item>
            <Command.Item onSelect={() => { window.open(RESUME.contacts.github, "_blank", "noopener,noreferrer"); setOpen(false); }}>GitHub<Arrow /></Command.Item>
            <Command.Item onSelect={() => { window.open(RESUME.contacts.linkedin, "_blank", "noopener,noreferrer"); setOpen(false); }}>LinkedIn<Arrow /></Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
      <div className={`notice ${notice ? "notice-visible" : ""}`} role="status">{notice}</div>
    </>
  );
}
