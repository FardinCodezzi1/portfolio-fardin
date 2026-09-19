"use client";

import { useState, type FormEvent, type MouseEvent } from "react";
import { Code2, Link2, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fadeIn, sectionViewport } from "@/lib/animations";
import { profile } from "@/lib/data";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [coverPos, setCoverPos] = useState({ x: 50, y: 40 });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  function onCoverMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoverPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          onMouseMove={onCoverMove}
          className="group relative mb-12 overflow-hidden rounded-md border border-muted/25 bg-surface px-6 py-14 text-center sm:px-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
            style={{
              background: `radial-gradient(600px circle at ${coverPos.x}% ${coverPos.y}%, color-mix(in srgb, var(--main-color) 22%, transparent), transparent 50%)`,
            }}
          />
          <p className="relative font-mono text-xs tracking-[0.18em] text-accent uppercase">
            Hire
          </p>
          <h2 className="relative mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="relative mx-auto mt-3 max-w-lg text-sm text-muted">
            {profile.remoteAvailable
              ? "Open for global remote roles — Full-Stack System Engineer & Software Architect."
              : "Available for selected engagements."}
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Direct links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4" />
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <Link2 className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                >
                  <Code2 className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 rounded-md border border-muted/25 bg-surface p-5 sm:p-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you building?"
                required
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Send message
            </Button>
            <p className="text-xs text-muted">
              Opens your email client with a prefilled message — no account required.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
