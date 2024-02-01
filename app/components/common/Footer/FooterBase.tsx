import { languages } from '@/i18n/settings';
import { i18n } from 'i18next';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';

interface FooterBaseProps {
  i18n: i18n;
  lng: string;
  path: string;
}

export const FooterBase = ({ i18n, lng, path = '' }: FooterBaseProps) => {
  const t = i18n.getFixedT(lng, 'footer');

  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        {/* @ts-expect-error Trans interpolation */}
        Switch from <strong>{{ lng }}</strong> to:{' '}
      </Trans>

      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={`/${l}${path}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};
