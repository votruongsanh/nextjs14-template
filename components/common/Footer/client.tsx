'use client';

import { useTranslationClient } from '@/app/i18n/client';
import { FooterBase } from './FooterBase';

interface FooterClientProps {
  lng: string;
}

export const FooterClient = ({ lng }: FooterClientProps) => {
  const { t } = useTranslationClient(lng, 'footer');
  return <FooterBase t={t} lng={lng} />;
};
