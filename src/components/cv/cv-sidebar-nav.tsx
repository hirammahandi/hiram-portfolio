"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export function CvSidebarNav() {
  const [activeSection, setActiveSection] = useState("experience");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="hidden lg:block sticky top-24"
      aria-label="CV page navigation"
    >
      <ul className="space-y-1" role="list">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "flex items-center gap-3 text-sm font-medium transition-colors py-1.5",
                activeSection === id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "h-px transition-all",
                  activeSection === id
                    ? "w-8 bg-foreground"
                    : "w-4 bg-muted-foreground/40"
                )}
                aria-hidden="true"
              />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
