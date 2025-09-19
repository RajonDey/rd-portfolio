import { projects as legacy } from '@/lib/data';
import { projects as structured } from '@/lib/content/projects';
import { Project } from '@/types';

// Merge legacy and structured project lists (simple de-dup by slug or name)
const map = new Map<string, Project>();

[...structured, ...legacy].forEach(p => {
  const key = p.slug || p.name.toLowerCase().replace(/\s+/g,'-');
  if (!p.slug) {
    // Ensure legacy entries have slug for routing if needed
    (p as Project).slug = key;
  }
  if (!map.has(key)) map.set(key, p);
});

export const allProjects: Project[] = Array.from(map.values());

export function getAllProjectSlugs() { return allProjects.map(p => p.slug); }
export function getProjectBySlugUnified(slug: string) { return allProjects.find(p => p.slug === slug); }
