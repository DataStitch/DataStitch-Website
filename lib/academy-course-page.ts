import { simulateFetch } from "@/lib/simulate-fetch";
import type { AcademyCoursePageData } from "@/components/academy/types";

export async function getAcademyCoursePageData(): Promise<AcademyCoursePageData> {
  // Mirrors an API call shape while keeping this route statically exportable.
  return simulateFetch<AcademyCoursePageData>("academy-course-page.json", 320);
}
