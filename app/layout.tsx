import Navigate from '@/components/common/Navigate';
import StyledAntdRegistry from '@/lib/registry';
import { Container } from '@/styles/DefaultStyled';
import GlobalStyles from '@/styles/GlobalStyle';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The moment',
  description: 'The moment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledAntdRegistry>
          <GlobalStyles />

          <Container>
            {children}

            <Navigate />
          </Container>
        </StyledAntdRegistry>
      </body>
    </html>
  );
}
