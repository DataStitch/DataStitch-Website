import { readFile } from "node:fs/promises";
import path from "node:path";

export async function simulateFetch<T>(jsonFileName: string, delay = 220): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, delay));

  const filePath = path.join(process.cwd(), "data", jsonFileName);
  const fileContent = await readFile(filePath, "utf-8");

  return JSON.parse(fileContent) as T;
}
