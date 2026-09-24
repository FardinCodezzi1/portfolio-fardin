import { IntroOverlay } from "@/components/loader/IntroOverlay";
import { FloatingNavbar } from "@/components/nav/FloatingNavbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Hero } from "@/components/hero/Hero";
import { ImpactStrip } from "@/components/impact-strip/ImpactStrip";
import { ExperienceTimeline } from "@/components/experience-timeline/ExperienceTimeline";
import { TechStack } from "@/components/tech-stack/TechStack";
import { ProjectGrid } from "@/components/architecture-showcase/ProjectGrid";
import { Competencies } from "@/components/competencies/Competencies";
import { Workflow } from "@/components/workflow/Workflow";
import { Research } from "@/components/research/Research";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/layout/Footer";

export default function Home() {
  return (
    <>
      <IntroOverlay />
      <FloatingNavbar />
      <main className="flex-1">
        {/* 1. First Impression & High-Level Proof Points */}
        <Hero />
        <ImpactStrip />

        {/* 2. Professional Credentials & Core Arsenal */}
        <ExperienceTimeline />
        <TechStack />

        {/* 3. Deep Dive into Work & Engineering Methodology */}
        <TracingBeam>
          <ProjectGrid />
          <Competencies />
          <Workflow />
          <Research />
          <Education />
        </TracingBeam>

        {/* 4. Conversion / Closing */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}