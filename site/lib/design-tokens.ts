/**
 * WordPress Design Tokens
 * Extracted from adventist.org.au WordPress site
 */

export const designTokens = {
  colors: {
    // Extracted from WordPress site analysis
    primary: '#0066cc', // Blue accent color (links, buttons)
    secondary: '#333333', // Dark gray (text, headers)
    accent: '#fc842b', // Orange accent (rgb(252, 132, 43)) - actual link color
    text: {
      primary: '#666666', // rgb(102, 102, 102) - actual body text color
      secondary: '#333333', // Dark gray for headings
      light: '#999999',
      white: '#ffffff',
    },
    background: {
      white: '#ffffff',
      light: '#f5f5f5',
      dark: '#1a1a1a',
    },
    border: '#e0e0e0',
  },
  typography: {
    fontFamily: {
      sans: ['Montserrat', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Monaco', 'Courier New', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',  // 2px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
};

// Navigation structure from WordPress
export const navigation = {
  main: [
    { label: 'Our Team', href: '/auc/our-team/' },
    { label: 'News', href: '/news/' },
    { label: 'Events', href: '/events/' },
    { label: 'Careers', href: '/auc/careers/' },
    { label: 'Ministries', href: '/ministries/' },
    { label: 'Education', href: '/education/' },
    { label: 'Health', href: '/health-and-wellbeing/' },
    { label: 'Media', href: '/media/' },
    { label: 'Statements of Belief', href: '/statements-of-belief/' },
  ],
  footer: {
    quickLinks: [
      'Our Team',
      'News',
      'Events',
      'Careers',
      'Ministries',
      'Education',
      'Health',
      'Media',
      'Statements of Belief',
    ],
    conferences: [
      'Northern Australia',
      'South Queensland',
      'North New South Wales',
      'Greater Sydney',
      'South New South Wales',
      'Victoria',
      'Western Australia',
      'South Australia',
      'Tasmania',
    ],
    resources: [
      'Adventurers',
      'Pathfinders',
      'Adventist Schools',
      'Avondale University',
      'Mamarapha',
      'Catalyst',
      'Sydney Adventist Hospital',
      'Adventist Aged Care',
      'Adventist Heritage',
    ],
    media: [
      'Faith FM',
      'Hope Channel',
      'Bible Study Online',
      'Waymaker TV',
      'Elia Wellness',
      'ADRA',
      'Disciple.org.au',
    ],
  },
};

