import { navLinks, profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "Pages",
      links: [
        ...navLinks.map((l) => ({ href: l.href, label: l.label })),
        { href: "#top", label: "Home" },
      ],
    },
    {
      title: "Socials",
      links: [
        { href: profile.linkedin, label: "LinkedIn", external: true },
        { href: profile.github, label: "GitHub", external: true },
        { href: `mailto:${profile.email}`, label: "Email" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: profile.resumePath, label: "Resume", download: true },
        { href: "#research", label: "Publication" },
        { href: "#architecture", label: "Projects" },
      ],
    },
    {
      title: "Connect",
      links: [
        { href: "#contact", label: "Contact Me" },
        { href: `mailto:${profile.email}`, label: "Hire Me" },
        { href: profile.linkedin, label: "LinkedIn", external: true },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-muted/20 bg-background pt-14 pb-0">
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="text-center lg:max-w-xs lg:text-left">
            <div className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-accent/40 bg-accent/15 font-mono text-sm font-bold text-accent">
                F
              </span>
              <span className="text-base font-semibold tracking-tight text-foreground">
                {profile.firstName}
              </span>
            </div>
            <p className="mt-4 text-sm text-muted">
              © copyright {profile.name} {year}. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 lg:flex-1">
            {columns.map((col) => (
              <div key={col.title} className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={`${col.title}-${link.label}`}>
                      <a
                        href={link.href}
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        {...("download" in link && link.download ? { download: true } : {})}
                        className="text-sm text-muted transition-colors hover:text-accent"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none relative mt-10 select-none overflow-hidden pb-2 text-center leading-none"
      >
        <span className="inline-block font-mono text-[clamp(3.5rem,18vw,12rem)] font-bold tracking-tighter text-foreground/[0.06] max-[380px]:hidden">
          FARDIN
        </span>
      </div>
    </footer>
  );
}
