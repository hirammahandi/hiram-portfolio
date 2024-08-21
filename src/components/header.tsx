import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-animation">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="text-xl font-bold" prefetch={false}>
          HHP
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
            href="/#work"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Work
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
        {/* TODO: Build a sidebar menu for responsive view */}
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
  );
};
