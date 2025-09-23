/**
 * Generate avatar image URL or initials-based avatar
 * @param name - The person's name
 * @param designation - Their job designation
 * @param imageUrl - Optional existing image URL
 * @returns Avatar URL or initials-based avatar
 */
export function getAvatarUrl(
  name: string,
  designation: string,
  imageUrl?: string
): string {
  // If we have a real image URL, use it
  if (imageUrl && imageUrl.trim() !== "") {
    return imageUrl;
  }

  // Extract initials from designation (preferred) or name
  const sourceText = name || designation;
  const initials = extractInitials(sourceText);

  // Generate initials-based avatar using a service like UI Avatars
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    initials
  )}&background=random&color=fff&size=200&bold=true&format=png`;
}

/**
 * Extract initials from a text string
 * @param text - The text to extract initials from
 * @returns 1-2 character initials
 */
function extractInitials(text: string): string {
  if (!text || text.trim() === "") {
    return "A";
  }

  // Split by common separators and filter out empty strings
  const words = text
    .split(/[\s\-_&]+/)
    .filter((word) => word.length > 0)
    .map((word) => word.trim());

  if (words.length === 0) {
    return "A";
  }

  // Take first letter of first word
  let initials = words[0].charAt(0).toUpperCase();

  // If there's a second word, take its first letter too
  if (words.length > 1) {
    initials += words[1].charAt(0).toUpperCase();
  }

  return initials;
}

/**
 * Generate a consistent color for a given text
 * @param text - The text to generate color for
 * @returns A hex color code
 */
export function getConsistentColor(text: string): string {
  const colors = [
    "#3B82F6", // Blue
    "#10B981", // Green
    "#F59E0B", // Yellow
    "#EF4444", // Red
    "#8B5CF6", // Purple
    "#06B6D4", // Cyan
    "#F97316", // Orange
    "#84CC16", // Lime
    "#EC4899", // Pink
    "#6B7280", // Gray
  ];

  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
}
