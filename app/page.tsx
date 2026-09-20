import { IntroOverlay } from "@/components/loader/IntroOverlay";
import { FloatingNavbar } from "@/components/nav/FloatingNavbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Hero } from "@/components/hero/Hero";
import { ImpactStrip } from "@/components/impact-strip/ImpactStrip";
import { ProjectGrid } from "@/components/architecture-showcase/ProjectGrid";
import { Competencies } from "@/components/competencies/Competencies";
import { Workflow } from "@/components/workflow/Workflow";
import { Research } from "@/components/research/Research";
import { Education } from "@/components/education/Education";
import { ExperienceTimeline } from "@/components/experience-timeline/ExperienceTimeline";
import { TechStack } from "@/components/tech-stack/TechStack";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <IntroOverlay />
      <FloatingNavbar />
      <main className="flex-1">
        <Hero />
        <ImpactStrip />
        <TracingBeam>
          <ProjectGrid />
          <Competencies />
          <Workflow />
          <Research />
          <Education />
          <ExperienceTimeline />
        </TracingBeam>
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
