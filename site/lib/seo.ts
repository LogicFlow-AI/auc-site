export const SITE_NAME = 'Seventh-day Adventist Church Australia';
export const ORGANIZATION_NAME = 'Australian Union Conference of the Seventh-day Adventist Church';
export const DEFAULT_DESCRIPTION =
  'Discover the Seventh-day Adventist Church in Australia, including beliefs, ministries, news, Bible studies, and local churches.';

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adventist.org.au';

export const SITE_URL = configuredSiteUrl.replace(/\/$/, '');

export function absoluteUrl(pathname = '/'): string {
  return new URL(canonicalPath(pathname), `${SITE_URL}/`).toString();
}

export function normalizePath(pathname: string): string {
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const withoutTrailingSlash = withLeadingSlash.replace(/\/+$/, '');

  return withoutTrailingSlash || '/';
}

export function canonicalPath(pathname: string): string {
  const normalized = normalizePath(pathname);
  const isFile = /\/[^/]+\.[a-z0-9]+$/i.test(normalized);

  return normalized === '/' || isFile ? normalized : `${normalized}/`;
}

export function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function contentPath(link: string, title: string, section: 'pages' | 'posts'): string {
  try {
    const url = new URL(link, `${SITE_URL}/`);
    const siteOrigin = new URL(SITE_URL).origin;

    if (url.origin === siteOrigin && url.pathname !== '/') {
      return canonicalPath(decodeURIComponent(url.pathname));
    }
  } catch {
    // Fall through to a stable local URL when imported content has an invalid URL.
  }

  return canonicalPath(`/${section}/${slugify(title)}`);
}

export function toDescription(value: string, maxLength = 160): string {
  const text = value
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/[#*_>`~]/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;|&#34;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLength) {
    return text;
  }

  const shortened = text.slice(0, maxLength + 1).replace(/\s+\S*$/, '').trim();
  return `${shortened || text.slice(0, maxLength).trim()}...`;
}

export function toIsoDate(value: string): string | undefined {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
}

export function isIndexableContent(title: string, content: string): boolean {
  const excludedTitles = /^(sample page|style guide|custom styles|template(?: for)?\b)/i;
  return !excludedTitles.test(title.trim()) && toDescription(content, 500).length >= 40;
}

export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
