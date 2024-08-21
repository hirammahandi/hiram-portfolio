import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { portfolioData } from "@/lib/data";
import { buttonVariants } from "./ui/button";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 scroll-mt-8"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Check out some of my recent work.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project) => (
            <Card
              key={project.title}
              className="group/card hover:bg-muted transition-all"
            >
              <CardHeader>
                <Image
                  src={project.image}
                  width="400"
                  height="225"
                  alt={project.title}
                  className="rounded-t-md group-hover/card:scale-105 transition-all"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex items-center gap-4">
                  <Link
                    href={project.url}
                    className={buttonVariants({ variant: "default" })}
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  <Link
                    href={project.githubLink}
                    className={buttonVariants({ variant: "outline" })}
                    prefetch={false}
                  >
                    View Code
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
