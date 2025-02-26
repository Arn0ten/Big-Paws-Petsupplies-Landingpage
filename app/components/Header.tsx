"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#about", label: "About us" },
    { href: "#services", label: "Services" },
    { href: "#rates", label: "Rates" },
    { href: "#contact", label: "Contact" },
    { href: "#location", label: "Visit us" },
  ];

  const logoSrc =
    theme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-logo-dark-kytTGWlLTF0sp9UhYxhJmTAZ3prDO8.png"
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-logo-light-6OFylQsMc1kyo3k8BvpElizUQOLktK.png";

  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsSheetOpen(false);
      }
    },
    [],
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="Big Paws Pet Hotel"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) =>
                  item.href.startsWith("#")
                    ? scrollToSection(e, item.href)
                    : undefined
                }
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden sm:flex space-x-4">
              <Button variant="outline" asChild>
                <Link
                  href="https://big-paws-petsupplies-webapp.vercel.app/"
                  target="_blank"
                >
                  Log in
                </Link>
              </Button>
              <Button asChild>
                <Link
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                >
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("#")) {
                          scrollToSection(e, item.href);
                        }
                      }}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 relative after:absolute after:left-2 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all hover:after:w-[calc(100%-16px)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-4 mt-4 px-2">
                    <Button variant="outline" asChild className="w-full">
                      <Link
                        href="https://big-paws-petsupplies-webapp.vercel.app/"
                        target="_blank"
                      >
                        Log in
                      </Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link
                        href="#contact"
                        onClick={(e) => scrollToSection(e, "#contact")}
                      >
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
