export type AcademyCourse = {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: string;
  price: string;
  originalPrice: string;
  category: "Learning paths" | "Product" | "Instructors";
  instructor: string;
  image: string;
};

export type AcademyCoursePageData = {
  breadcrumb: {
    section: string;
    track: string;
  };
  hero: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    rating: string;
    learners: string;
    image: string;
    imageAlt: string;
  };
  nextStepCta: {
    title: string;
    description: string;
    primaryActionLabel: string;
    primaryActionHref: string;
    secondaryActionLabel: string;
    secondaryActionHref: string;
  };
};
