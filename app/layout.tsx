import Navigate from '@/components/common/Navigate';
import { StyledAntdRegistry, ThemeClient } from '@/lib/registry';
import { Container } from '@/styles/DefaultStyled';
import GlobalStyles from '@/styles/GlobalStyle';
import { Metadata } from 'next';

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
      <body>
        <StyledAntdRegistry>
          <ThemeClient>
            <GlobalStyles />

            <Container>
              {children}

              <Navigate />
            </Container>
          </ThemeClient>
        </StyledAntdRegistry>
      </body>
    </html>
  );
}
