import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledAntdRegistry from '../lib/registry';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Time auction',
  description: 'Time auction',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledAntdRegistry>{children}</StyledAntdRegistry>
      </body>
    </html>
  );
}
