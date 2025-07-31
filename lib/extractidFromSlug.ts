export function extractIdFromSlug(slug: string): string {
  return slug.split("-").pop()!;
}