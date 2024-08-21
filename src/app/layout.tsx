import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

// CSS
import "./globals.css";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
};

export default Layout;
