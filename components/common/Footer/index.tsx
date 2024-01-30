import { useTranslation } from '@/app/i18n';
import { FooterBase } from './FooterBase';

interface FooterProps {
  lng: string;
  path: string;
}

export const Footer = async ({ lng, path = '' }: FooterProps) => {
  const { t, i18n } = await useTranslation(lng, 'footer');
  return <FooterBase i18n={i18n} lng={lng} path={path} />;
};
