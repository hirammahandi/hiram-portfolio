import { portfolioData } from "@/lib/data";
import { CodeIcon } from "lucide-react";
import Marquee from "./magicui/marquee";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 scroll-mt-8"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground">
            Learn more about my background and skills.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">My Background</h3>
            <p className="text-muted-foreground">{portfolioData.description}</p>
          </div>
          <SkillsMarquee />
        </div>
      </div>
    </section>
  );
};

const SkillsMarquee = () => {
  const firstRow = portfolioData.skills.slice(
    0,
    portfolioData.skills.length / 2
  );
  const secondRow = portfolioData.skills.slice(portfolioData.skills.length / 2);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">My Skills</h3>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover className="[--duration:70s]">
          {firstRow.map((skill) => (
            <div
              className="rounded-md bg-muted p-4 text-center w-60"
              key={skill}
            >
              <CodeIcon className="mx-auto h-8 w-8" />
              <p className="mt-2 text-sm font-medium">{skill}</p>
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:70s]">
          {secondRow.map((skill) => (
            <div
              className="rounded-md bg-muted p-4 text-center w-60"
              key={skill}
            >
              <CodeIcon className="mx-auto h-8 w-8" />
              <p className="mt-2 text-sm font-medium">{skill}</p>
            </div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-[5rem] bg-gradient-to-r from-background dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[5rem] bg-gradient-to-l from-background dark:from-background"></div>
      </div>
    </div>
  );
};
