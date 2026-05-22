import { AcademyCourseCatalog } from "@/components/academy/academy-course-catalog";
import { AcademyCta } from "@/components/academy/academy-cta";
import { AcademyHero } from "@/components/academy/academy-hero";
import { AcademySocialProof } from "@/components/academy/academy-social-proof";
import { FooterSection } from "@/components/footer";
import { TopNav } from "@/components/top-nav";
import { getAcademyCourses } from "@/lib/academy-courses";
import { AcademyInstructors } from "../../components/academy/academy-instructors";
import { NextStepCta } from "@/components/academy/academy-next-step-cta";

export default async function AcademyPage() {
  const courses = await getAcademyCourses();

  return (
    <div className="bg-[var(--datatriad-bg)] text-[var(--datatriad-ink)]">
      <TopNav />
      <AcademyHero />
      <AcademyCourseCatalog courses={courses} />
      <AcademyInstructors />
      <AcademySocialProof />
      <AcademyCta />
      <NextStepCta />
      <FooterSection />
    </div>
  );
}
