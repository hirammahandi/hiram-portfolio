"use client";

import { cvData } from "@/lib/data";
import { motion } from "framer-motion";
import {
  MonitorIcon,
  PaletteIcon,
  ServerIcon,
  CloudIcon,
  FlaskConicalIcon,
  DatabaseIcon,
  LayersIcon,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: MonitorIcon,
    skills: cvData.technicalSkills.frontend,
  },
  {
    title: "UI Frameworks",
    icon: PaletteIcon,
    skills: cvData.technicalSkills.uiFrameworks,
  },
  {
    title: "Backend",
    icon: ServerIcon,
    skills: cvData.technicalSkills.backend,
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    skills: cvData.technicalSkills.cloudDevops,
  },
  {
    title: "Testing",
    icon: FlaskConicalIcon,
    skills: cvData.technicalSkills.testing,
  },
  {
    title: "API & Data",
    icon: DatabaseIcon,
    skills: cvData.technicalSkills.apiData,
  },
  {
    title: "Architecture",
    icon: LayersIcon,
    skills: cvData.technicalSkills.architecture,
  },
];

export function SkillsGrid() {
  return (
    <section aria-labelledby="skills-heading">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            viewport={{ once: true, margin: "-40px" }}
            className="rounded-lg border border-border bg-card p-5 space-y-3 transition-colors hover:border-muted-foreground/30"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
                <category.icon
                  className="h-4 w-4 text-foreground"
                  aria-hidden="true"
                />
              </div>
              <h4 className="text-sm font-semibold text-foreground">
                {category.title}
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
