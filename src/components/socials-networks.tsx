import { portfolioData } from "@/lib/data";
import { ComponentPropsWithoutRef, FC } from "react";

export const SocialsNetworks: FC<ComponentPropsWithoutRef<"div">> = (props) => {
  return (
    <div {...props}>
      {portfolioData.links.map((link) => (
        <a
          className="inline-flex items-center gap-2"
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
};
