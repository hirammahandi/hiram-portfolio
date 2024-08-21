import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SVGProps } from "react";

const PortfolioPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-animation">
        <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="text-xl font-bold" prefetch={false}>
            John Doe
          </Link>
          <nav className="hidden space-x-4 sm:flex">
            <Link
              href="/#about"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                Hi, I'm John Doe
              </h1>
              <p className="text-lg text-muted-foreground">
                I'm a software developer and designer with a passion for
                creating beautiful and functional digital experiences.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  View Projects
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                width="400"
                height="400"
                alt="Hero"
                className="rounded-full"
                style={{ aspectRatio: "400/400", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">My Background</h3>
                <p className="text-muted-foreground">
                  I'm a software developer and designer with over 5 years of
                  experience in the industry. I've worked on a variety of
                  projects, from web applications to mobile apps, and I'm always
                  eager to learn new technologies and techniques.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">My Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-md bg-muted p-4 text-center">
                    <CodeIcon className="mx-auto h-8 w-8" />
                    <p className="mt-2 text-sm font-medium">JavaScript</p>
                  </div>
                  <div className="rounded-md bg-muted p-4 text-center">
                    <CodeIcon className="mx-auto h-8 w-8" />
                    <p className="mt-2 text-sm font-medium">React</p>
                  </div>
                  <div className="rounded-md bg-muted p-4 text-center">
                    <CodeIcon className="mx-auto h-8 w-8" />
                    <p className="mt-2 text-sm font-medium">Node.js</p>
                  </div>
                  <div className="rounded-md bg-muted p-4 text-center">
                    <CodeIcon className="mx-auto h-8 w-8" />
                    <p className="mt-2 text-sm font-medium">Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Project 1"
                    className="rounded-t-md"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-semibold">Project 1</h3>
                  <p className="text-muted-foreground">
                    A brief description of the first project.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Project 2"
                    className="rounded-t-md"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-semibold">Project 2</h3>
                  <p className="text-muted-foreground">
                    A brief description of the second project.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="225"
                    alt="Project 3"
                    className="rounded-t-md"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-semibold">Project 3</h3>
                  <p className="text-muted-foreground">
                    A brief description of the third project.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 scroll-mt-8"
        >
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
              <p className="text-muted-foreground">
                Get in touch with me for any inquiries or opportunities.
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Your message"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <Button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 John Doe. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;

function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
