export const metadata = {
  metadataBase: new URL('https://agentic-f2fd6faf.vercel.app'),
  title: {
    default: 'Viajes tripulados a Marte ? ?Ficci?n o realidad?',
    template: '%s ? Marte'
  },
  description:
    'Panorama claro y actualizado sobre los viajes tripulados a Marte: tecnolog?a, riesgos, cronolog?a y diferencias entre la ciencia y la ficci?n.',
  openGraph: {
    title: 'Viajes tripulados a Marte',
    description:
      'Tecnolog?a, riesgos, cronograma y la frontera entre ficci?n y realidad.',
    url: 'https://agentic-f2fd6faf.vercel.app',
    siteName: 'Marte ? Ficci?n o realidad',
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viajes tripulados a Marte',
    description:
      'Tecnolog?a, riesgos, cronograma y la frontera entre ficci?n y realidad.'
  },
  alternates: {
    canonical: '/'
  }
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}

