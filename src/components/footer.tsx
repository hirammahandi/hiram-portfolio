import Link from "next/link";
import { SocialsNetworks } from "./socials-networks";
import { portfolioData } from "@/lib/data";
import { MailIcon, PinIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-2"
            >
              <MailIcon className="h-6 w-6" />
              {portfolioData.email}
            </a>
          </div>
          <SocialsNetworks className="flex gap-4" />
        </div>
      </div>
    </footer>
  );
};
