/**
 * Date formatting utilities
 * Centralizes all date formatting to ensure consistency
 */

export type DateFormat = 'short' | 'long' | 'numeric' | 'iso';

export function formatDate(date: Date, format: DateFormat = 'short', locale: string = 'es-MX'): string {
  const formats: Record<DateFormat, Intl.DateTimeFormatOptions | 'iso'> = {
    short: { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/Monterrey' },
    long: { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Monterrey' },
    numeric: { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'America/Monterrey' },
    iso: 'iso'
  };

  if (format === 'iso') {
    return date.toISOString();
  }

  return date.toLocaleDateString(locale, formats[format]);
}

/**
 * Get relative time (e.g., "2 days ago", "1 month ago")
 */
export function getRelativeTime(date: Date, locale: string = 'es-ES'): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Hoy';
  if (diffDays === 1) return 'Ayer';
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
  if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} meses`;

  return `Hace ${Math.floor(diffDays / 365)} años`;
}
