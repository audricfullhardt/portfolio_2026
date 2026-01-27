import './globals.css';
import CustomCursor from '@/components/cursor/CustomCursor';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <title>Audric FULLHARDT</title>
      <body className="bg-black text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
