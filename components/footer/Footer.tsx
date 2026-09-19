import { Code2, Link2, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-muted/20 bg-surface/50 pt-14 pb-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-mono text-[18vw] leading-none font-bold tracking-tighter text-foreground/[0.04]"
      >
        FARDIN
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <p className="font-mono text-sm font-semibold text-accent">
            {profile.firstName.toUpperCase()}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {profile.headline}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-foreground uppercase">
            Navigation
          </h3>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-foreground uppercase">
            Socials
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <Link2 className="h-3.5 w-3.5" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <Code2 className="h-3.5 w-3.5" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-foreground uppercase">
            Resume & contact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a
                href={profile.resumePath}
                download
                className="transition-colors hover:text-accent"
              >
                Download resume
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-accent">
                Contact form
              </a>
            </li>
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-6xl border-t border-muted/20 px-4 pt-6 md:px-6">
        <p className="text-xs text-muted">
          © {year} {profile.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
