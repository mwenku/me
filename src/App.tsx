import { Route, Routes } from "react-router-dom";
import CustomCursor from "./components/cursor";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { NavBar } from "./components/navbar";

import { Companies } from "./components/companies";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { CommandMenu } from "./components/command-menu";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
            <CustomCursor />
            <NavBar />

            <main className="space-y-0">
              {" "}
              {/* Removed vertical spacing to control per-section */}
              <Home />
              <Companies />
              <Projects />
              <Contact />
            </main>
            <CommandMenu />

            <Footer />
          </div>
        }
      />
    </Routes>
  );
}
