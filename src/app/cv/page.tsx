import { Metadata } from "next";
import { CvHero } from "@/components/cv/cv-hero";
import { CvSidebarNav } from "@/components/cv/cv-sidebar-nav";
import { ExperienceTimeline } from "@/components/cv/experience-timeline";
import { SkillsGrid } from "@/components/cv/skills-grid";
import { EducationLanguages } from "@/components/cv/education-languages";

export const metadata: Metadata = {
  title: "CV | Hiram Hernández Peña - Full Stack Developer",
  description:
    "Curriculum Vitae of Hiram Hernández Peña. Full Stack Developer with 5+ years of experience in React, Next.js, Node.js, TypeScript, and AWS.",
};

export default function CvPage() {
  return (
    <>
      <CvHero />

      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex gap-16">
          {/* Sticky sidebar navigation */}
          <aside className="hidden lg:block w-36 flex-shrink-0">
            <CvSidebarNav />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 space-y-16">
            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24" aria-labelledby="experience-heading">
              <div className="space-y-2 mb-8">
                <h2
                  id="experience-heading"
                  className="text-2xl font-bold tracking-tight text-foreground"
                >
                  Professional Experience
                </h2>
                <p className="text-sm text-muted-foreground">
                  Over 5 years building web applications across multiple industries.
                </p>
              </div>
              <ExperienceTimeline />
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-mt-24" aria-labelledby="skills-heading">
              <div className="space-y-2 mb-8">
                <h2
                  id="skills-heading"
                  className="text-2xl font-bold tracking-tight text-foreground"
                >
                  Technical Skills
                </h2>
                <p className="text-sm text-muted-foreground">
                  Technologies and tools I work with daily.
                </p>
              </div>
              <SkillsGrid />
            </section>

            {/* Education & Languages Section */}
            <section id="education" className="scroll-mt-24" aria-labelledby="education-heading">
              <div className="space-y-2 mb-8">
                <h2
                  id="education-heading"
                  className="text-2xl font-bold tracking-tight text-foreground"
                >
                  Education & Languages
                </h2>
                <p className="text-sm text-muted-foreground">
                  Academic background and language proficiency.
                </p>
              </div>
              <EducationLanguages />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
