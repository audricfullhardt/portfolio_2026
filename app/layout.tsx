import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <title>Audric FULLHARDT</title>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
