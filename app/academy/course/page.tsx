import { AcademyCourseDetailHero } from "@/components/academy/academy-course-detail-hero";
import { NextStepCta } from "@/components/academy/academy-next-step-cta";
import { FooterSection } from "@/components/footer";
import { TopNav } from "@/components/top-nav";
import { getAcademyCoursePageData } from "@/lib/academy-course-page";

export default async function AcademyCoursePage() {
  const coursePageData = await getAcademyCoursePageData();

  return (
    <div className="bg-[var(--datatriad-bg)] text-[var(--datatriad-ink)]">
      <TopNav />
      <AcademyCourseDetailHero
        breadcrumb={coursePageData.breadcrumb}
        hero={coursePageData.hero}
      />
      <NextStepCta
        title={coursePageData.nextStepCta.title}
        description={coursePageData.nextStepCta.description}
        primaryActionLabel={coursePageData.nextStepCta.primaryActionLabel}
        primaryActionHref={coursePageData.nextStepCta.primaryActionHref}
        secondaryActionLabel={coursePageData.nextStepCta.secondaryActionLabel}
        secondaryActionHref={coursePageData.nextStepCta.secondaryActionHref}
      />
      <FooterSection />
    </div>
  );
}
