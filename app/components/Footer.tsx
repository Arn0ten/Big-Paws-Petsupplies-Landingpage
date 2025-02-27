import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
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
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="#services"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pet Hotel
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  Grooming
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  Day Care
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-sm text-muted-foreground">
                  Bonifacio St., Tagum City, Philippines
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a
                  href="tel:+639501890933"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +63 950 189 0933
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:galojanlloyn18@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  galojanlloyn18@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://www.facebook.com/share/15jqk6ZeSE/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Big Paws Pet Hotel. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              href="/terms-privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms & Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
