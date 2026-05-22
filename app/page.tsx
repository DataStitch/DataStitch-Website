import { BootcampSection } from "@/components/landing/bootcamps";
import { ConsultancySection } from "@/components/landing/consultancy";
import { CoursesSection } from "@/components/landing/courses";
import { AcademyEcosystemSection } from "@/components/landing/ecosystem";
import { FaqSection } from "@/components/landing/faq";
import { FooterSection } from "@/components/footer";
import { HeroSection } from "@/components/landing/hero";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { InstructorsSection } from "@/components/landing/instructors";
import { TopNav } from "@/components/top-nav";
import { TrustStrip } from "@/components/landing/trust-strip";
import { TwoPathsSection } from "@/components/landing/two-paths";
import { simulateFetch } from "@/lib/simulate-fetch";

type Course = {
  id: string;
  title: string;
  level: string;
  duration: string;
  rating: string;
  price: string;
  originalPrice: string;
  description: string;
};

type Instructor = {
  id: string;
  name: string;
  role: string;
  rating: string;
  quote: string;
};

type Bootcamp = {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: string;
  date: string;
  price: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export default async function Home() {
  const [entities, courses, instructors, bootcamps, faqItems] = await Promise.all([
    simulateFetch<string[]>("trusted-entities.json"),
    simulateFetch<Course[]>("courses.json"),
    simulateFetch<Instructor[]>("instructors.json"),
    simulateFetch<Bootcamp[]>("bootcamps.json"),
    simulateFetch<FaqItem[]>("faq.json"),
  ]);

  return (
    <div className="bg-[var(--datatriad-bg)] text-[var(--datatriad-ink)]">
      <TopNav />
      <div id="home" className="scroll-mt-24">
        <HeroSection />
      </div>
      <TrustStrip entities={entities} />
      <div id="academy" className="scroll-mt-24">
        <TwoPathsSection />
      </div>
      <AcademyEcosystemSection />
      <div id="consultancy" className="scroll-mt-24">
        <ConsultancySection />
      </div>
      <HowItWorksSection />
      <CoursesSection courses={courses} />
      <InstructorsSection instructors={instructors} />
      <div id="bootcamps" className="scroll-mt-24">
        <BootcampSection bootcamps={bootcamps} />
      </div>
      <div id="faqs" className="scroll-mt-24">
        <FaqSection items={faqItems} />
      </div>
      <FooterSection />
    </div>
  );
}
