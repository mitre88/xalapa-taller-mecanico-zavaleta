import './globals.css';

export const metadata = {
  title: 'Taller mecánico Zavaleta',
  description: 'Sitio informativo de Taller mecánico Zavaleta en Xalapa.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
