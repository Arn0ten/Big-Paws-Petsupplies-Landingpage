import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BigPawsLogo-tgQYrArFSfOX9irwlrG1D93gEjB9yr.png"
              alt="Big Paws Pet Hotel"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Providing luxury pet care services with love and dedication.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Pet Hotel
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Grooming
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Day Care
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Pet Supplies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
          <p className="mt-8 text-base text-muted-foreground md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Big Paws Pet Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

