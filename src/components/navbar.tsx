import { useEffect, useState } from "react";
import { navigation } from "../data/navigation";
import { RESUME } from "../data/resume";
import { Arrow } from "./shared";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 80);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <a href="#home" className="wordmark" aria-label="Home" onClick={() => setMenuOpen(false)}>
        <img src="/branding/logo-black.svg" alt="" width={44} height={44} className="wordmark-logo" />
      </a>
      <nav aria-label="Primary" className="desktop-navigation">
        {navigation.map((item) => item.primary && <a href={`#${item.section}`} key={item.title}>{item.title}</a>)}
      </nav>
      <a href={RESUME.contacts.calendar} className="header-contact" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Schedule a chat <Arrow /></a>
      <button
        type="button"
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile">
          {navigation.map((item, index) => (
            <a href={`#${item.section}`} key={item.title} onClick={() => setMenuOpen(false)}>
              <span className="navigation-index">{String(index + 1).padStart(2, "0")}</span>{item.title}<Arrow />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
