const PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  if (!path) {
    return path;
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${PUBLIC_BASE_PATH}${normalized}`;
}
