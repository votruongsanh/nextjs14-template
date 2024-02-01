import Navigate from '@/components/common/Navigate';
import { StyledAntdRegistry, ThemeClient } from '@/lib/registry';
import { Container } from '@/styles/DefaultStyled';
import GlobalStyles from '@/styles/GlobalStyle';
import { dir } from 'i18next';
import { Metadata } from 'next';
import { ReactElement } from 'react';
import { languages } from '../i18n/settings';
import './globals.css';

interface RootLayoutProps {
  children: ReactElement;
  params: {
    lng: string;
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: 'The moment',
  description: 'The moment',
};

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { lng },
}) => {
  return (
    <html lang={lng} dir={dir(lng)}>
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
};

export default RootLayout;
