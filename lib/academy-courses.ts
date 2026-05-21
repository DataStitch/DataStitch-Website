import { simulateFetch } from "@/lib/simulate-fetch";
import type { AcademyCourse } from "@/components/academy/types";

export async function getAcademyCourses(): Promise<AcademyCourse[]> {
  // Keep data loading behind a service so we can swap this to fetch()/DB later.
  return simulateFetch<AcademyCourse[]>("academy-courses.json", 280);
}
