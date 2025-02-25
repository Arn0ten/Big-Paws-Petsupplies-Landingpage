"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#facilities", label: "Facilities" },
    { href: "#rates", label: "Rates" },
    { href: "#contact", label: "Contact" },
  ]

  const logoSrc =
    theme === "dark"
      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-logo-dark-kytTGWlLTF0sp9UhYxhJmTAZ3prDO8.png"
      : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main-logo-light-6OFylQsMc1kyo3k8BvpElizUQOLktK.png"

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-background"}`}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
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
                <Link href="https://big-paws-petsupplies-webapp2.vercel.app/" target="_blank">
                  Log in
                </Link>
              </Button>
              <Button asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
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
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 relative after:absolute after:left-2 after:bottom-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all hover:after:w-[calc(100%-16px)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-4 mt-4 px-2">
                    <Button variant="outline" asChild className="w-full">
                      <Link href="https://big-paws-petsupplies-gsmazf86p-arn0tens-projects.vercel.app/" target="_blank">
                        Log in
                      </Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link href="#contact">Contact Us</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

