import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BRF Hasselbacken i Mellösa',
  description: 'Officiell webbplats för BRF Hasselbacken i Mellösa – information för boende, mäklare och dig som är nyfiken på föreningen.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sv"><body className={geist.variable}>{children}</body></html>;
}
