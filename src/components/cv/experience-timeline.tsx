"use client";

import { cvData } from "@/lib/data";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ExperienceEntry {
  company: string;
  startDate: string;
  endDate: string;
  position: string;
  project?: string;
  activities: string[];
  technologies: string[];
  workflow?: string[];
}

function ExperienceCard({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isOngoing = entry.endDate === "Present";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex gap-6"
    >
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center">
        <div
          className={cn(
            "h-3 w-3 rounded-full border-2 mt-1.5 flex-shrink-0 z-10",
            isOngoing
              ? "border-primary bg-primary"
              : "border-muted-foreground/40 bg-background"
          )}
          aria-hidden="true"
        />
        <div className="w-px flex-1 bg-border" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left group/btn"
          aria-expanded={isExpanded}
          aria-label={`${entry.position} at ${entry.company}. Click to ${isExpanded ? "collapse" : "expand"} details.`}
        >
          <div className="flex items-start justify-between gap-4 rounded-lg border border-transparent p-4 -ml-4 transition-colors hover:border-border hover:bg-card">
            <div className="space-y-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {entry.startDate} &mdash; {entry.endDate}
              </p>
              <h4 className="text-base font-semibold text-foreground leading-snug">
                {entry.position}
                <span className="text-muted-foreground font-normal">
                  {" "}
                  &middot; {entry.company}
                </span>
              </h4>
              {entry.project && (
                <p className="text-sm text-muted-foreground">{entry.project}</p>
              )}
            </div>
            <ChevronDownIcon
              className={cn(
                "h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground transition-transform",
                isExpanded && "rotate-180"
              )}
              aria-hidden="true"
            />
          </div>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="space-y-4 px-4 pt-2 pb-1 -ml-4">
            <ul className="space-y-1.5" role="list">
              {entry.activities.map((activity, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                >
                  <span
                    className="mt-2 h-1 w-1 rounded-full bg-muted-foreground/50 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {activity}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {entry.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground"
                >
                  {tech}
                </span>
              ))}
              {entry.workflow?.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-md border border-border px-2 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <section className="space-y-12" aria-labelledby="experience-heading">
      {/* VASS Experience */}
      <div className="space-y-6">
        <div>
          <h3
            id="vass-experience-heading"
            className="text-xl font-semibold text-foreground"
          >
            VASS
          </h3>
          <p className="text-sm text-muted-foreground">
            Current company &mdash; Since December 2024
          </p>
        </div>
        <div role="list" aria-label="VASS experience timeline">
          {cvData.vassExperience.map((entry, i) => (
            <ExperienceCard key={`vass-${i}`} entry={entry} index={i} />
          ))}
        </div>
      </div>

      {/* Previous Experience */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Previous Experience
          </h3>
          <p className="text-sm text-muted-foreground">
            December 2021 &mdash; November 2024
          </p>
        </div>
        <div role="list" aria-label="Previous experience timeline">
          {cvData.previousExperience.map((entry, i) => (
            <ExperienceCard key={`prev-${i}`} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
