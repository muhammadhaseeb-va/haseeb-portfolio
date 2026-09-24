import { Unbounded, Manrope } from 'next/font/google';
import './globals.css';
import { profile } from '@/data/portfolio';

const display = Unbounded({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: `Portfolio | ${profile.name}`,
  description: `${profile.name} — ${profile.role}. ${profile.tagline}, specializing in Python, Linux, and digital technologies.`,
  keywords: [profile.name, 'portfolio', 'IT student', 'Python developer', 'Linux', 'SEO'],
  openGraph: {
    title: `Portfolio | ${profile.name}`,
    description: profile.tagline,
    type: 'website',
  },
  icons: {
    icon: '/images/favicon.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#050818',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Icon font only — kept off the render-blocking path via next/font's
            usual preconnect behaviour is unnecessary here since this is the
            only external stylesheet in the whole app. */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
