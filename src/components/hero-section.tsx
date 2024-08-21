import { portfolioData } from "@/lib/data";
import { MailIcon, PinIcon } from "lucide-react";
import Link from "next/link";
import { SocialsNetworks } from "./socials-networks";

export const HeroSection = () => {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight md:whitespace-nowrap">
            Hi, I'm {portfolioData.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            {portfolioData.summary}
          </p>
          <a
            href={`mailto:${portfolioData.email}`}
            className="flex items-center gap-2"
          >
            <MailIcon className="h-6 w-6" />
            {portfolioData.email}
          </a>
          <p className="flex items-center gap-2">
            <PinIcon className="h-6 w-6" />
            {portfolioData.address}
          </p>
          <SocialsNetworks className="flex gap-4" />

          <div className="flex gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              prefetch={false}
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/profile.webp"
            width="400"
            height="400"
            alt="Hero"
            className="rounded-full"
            style={{ aspectRatio: "400/400", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
