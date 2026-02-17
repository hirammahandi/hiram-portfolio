"use client";

import { portfolioData, cvData } from "@/lib/data";
import { SocialsNetworks } from "@/components/socials-networks";
import { MailIcon, MapPinIcon, BriefcaseIcon, BuildingIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function CvHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--accent))_0%,transparent_60%)]" />
      <div className="container relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Curriculum Vitae
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                {portfolioData.name}
              </h1>
              <p className="text-lg font-medium text-primary">
                {cvData.professionalInfo.position}
              </p>
            </div>

            <p className="max-w-2xl text-muted-foreground leading-relaxed">
              {cvData.summary}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <BuildingIcon className="h-4 w-4" aria-hidden="true" />
                {cvData.professionalInfo.office}
              </span>
              <span className="inline-flex items-center gap-2">
                <BriefcaseIcon className="h-4 w-4" aria-hidden="true" />
                {cvData.professionalInfo.clan}
              </span>
              <a
                href={`mailto:${portfolioData.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <MailIcon className="h-4 w-4" aria-hidden="true" />
                {portfolioData.email}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <SocialsNetworks className="flex gap-3" />
              <span className="h-4 w-px bg-border" aria-hidden="true" />
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Back to Portfolio
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/profile.webp"
              width="160"
              height="160"
              alt={`${portfolioData.name} profile photo`}
              className="rounded-2xl border border-border"
              style={{ aspectRatio: "1/1", objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
