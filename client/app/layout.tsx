import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
// import { Link } from '@heroui/link';
import { ThemeSwitch } from "@/components/theme-switch";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-[100dvh] bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-full">
            <nav className="pt-4 flex justify-end px-4 gap-6">
              {/* <Link href="/premium" className="text-yellow-500">
								Premium
							</Link> */}
              <ThemeSwitch />
            </nav>

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
