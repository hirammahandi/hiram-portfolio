"use client";

import { cvData } from "@/lib/data";
import { motion } from "framer-motion";
import { GraduationCapIcon, GlobeIcon, BadgeCheckIcon } from "lucide-react";

export function EducationLanguages() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="rounded-lg border border-border bg-card p-6 space-y-4"
        aria-labelledby="education-title"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
            <GraduationCapIcon
              className="h-4 w-4 text-foreground"
              aria-hidden="true"
            />
          </div>
          <h3 id="education-title" className="text-lg font-semibold text-foreground">
            Education
          </h3>
        </div>
        <div className="space-y-1.5">
          <p className="font-medium text-foreground">
            {cvData.education.degree}
          </p>
          <p className="text-sm text-muted-foreground">
            {cvData.education.institution}
          </p>
          <p className="text-sm text-muted-foreground">
            {cvData.education.location} &middot; {cvData.education.years}
          </p>
        </div>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="rounded-lg border border-border bg-card p-6 space-y-4"
        aria-labelledby="languages-title"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
            <GlobeIcon
              className="h-4 w-4 text-foreground"
              aria-hidden="true"
            />
          </div>
          <h3 id="languages-title" className="text-lg font-semibold text-foreground">
            Languages
          </h3>
        </div>
        <div className="space-y-3">
          {cvData.languages.map((lang) => (
            <div key={lang.language} className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-foreground">
                  {lang.language}
                </p>
                <p className="text-xs text-muted-foreground">
                  Speaking: {lang.speaking} &middot; Writing: {lang.writing}
                </p>
              </div>
              {lang.certified && (
                <span className="inline-flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                  <BadgeCheckIcon className="h-3 w-3" aria-hidden="true" />
                  Certified
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
